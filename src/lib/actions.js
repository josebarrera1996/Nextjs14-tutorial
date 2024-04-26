'use server';

import { revalidatePath } from "next/cache";
import bcrypt from 'bcryptjs';
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

/* Definiendo las 'Server Actions' */

// Lógica para añadir un nuevo Post
export const addPost = async (formData) => {
    // Obteniendo los valores de las siguientes propiedades
    const { title, desc, slug, userId } = Object.fromEntries(formData);
    console.log(title, desc, slug, userId);

    try {
        // Conexión a la B.D
        connectToDb();

        // Preparandao el objeto a insertar para el Post
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });

        // Guardandolo en la B.D
        await newPost.save();
        console.log('Saved to db');

        // Revalidando la siguiente ruta. Es decir, refrescará la data de esta
        revalidatePath('/blog');
    } catch (error) {
        console.log(error);
        return {
            error: 'Something went wrong'
        }
    }
}

// Lógica para eliminar un Post (por su ID)
export const deletePost = async (formData) => {
    // Obteniendo el valor del campo 'id'
    const { id } = Object.fromEntries(formData);

    try {
        // Conexión a la B.D
        connectToDb();

        // Eliminando el Post (por su ID)
        await Post.findByIdAndDelete(id);
        console.log("deleted from db");

        // Revalidando la siguiente ruta. Es decir, refrescará la data de esta
        revalidatePath("/blog");
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" };
    }
}

// Lógica para logearnos como usuario
export const handleLoginGithub = async (e) => {
    "use server";
    await signIn('github');
}

// Lógica para deslogearnos
export const handleLogoutGithub = async (e) => {
    "use server";
    await signOut();
}

// Lógica para registrarse
export const handleRegisterWithCredentials = async (previousState, formData) => {
    // Obteniendo los valores de los siguientes campos
    const { username, email, password, passwordRepeat } =
        Object.fromEntries(formData);

    // Si las passwords no coinciden...
    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" };
    }

    try {
        // Conexión con la B.D
        connectToDb();

        // Verificar que el usuario a registrar no exista ya previamente
        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username already exists" };
        }

        /* Si no existe... */

        // Realizar el hashing a la password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Preparar el User a crear
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Guardar el usuario en la B.D
        await newUser.save();
        console.log("saved to db");

        return { success: true };
    } catch (error) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

// Lógica para logearse con las credenciales (username & email)
export const handleLoginWithCredentials = async (previousState, formData) => {
    // Obteniendo los valores de las siguientes propiedades del formulario
    const { username, password } = Object.fromEntries(formData);

    try {
        // Logearse con las siguientes credenciales
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);

        // En caso de error
        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
}