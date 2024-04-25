import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import bcrypt from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from './utils';
import { User } from './models';

// Lógica para logearnos con las credenciales
const login = async (credentials) => {
    try {
        // Conexión a la B.D
        connectToDb();

        // Intentar encontrar el usuario a través de la credencial 'username'
        const user = await User.findOne({ username: credentials.username });

        if (!user) throw new Error("Wrong credentials!");

        /* Si se lo encontró */

        // Comparar las passwords (encriptada vs texto plano)
        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
        );

        if (!isPasswordCorrect) throw new Error("Wrong credentials!");

        // Retornar el usuario si no hubo problemas
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
};

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (err) {
                    return null;
                }
            },
        })
    ],
    callbacks: {
        // Controlando si el usuario ha logrado logearse y por lo tanto está autenticado...
        async signIn({ user, account, profile }) {
            console.log(user, account, profile);

            // Si el usuario está autenticado con GitHub
            if (account.provider === 'github') {
                // Conectarnos con la B.D
                connectToDb();

                try {
                    // Intentar encontrar el usuario por el email
                    const user = await User.findOne({ email: profile.email });

                    // Si no se encuentra al usuario
                    if (!user) {
                        // Preparar el nuevo objeto
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        });

                        // Insertarlo en la B.D
                        await newUser.save();
                    }
                } catch (error) {
                    console.log(err);
                    return false;
                }
            }
            return true;
        }
    }
});