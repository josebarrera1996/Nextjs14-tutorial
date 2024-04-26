// FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks

export const authConfig = {
    // Si no estamos autenticados, se nos redireccionará a...
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        // Crear el token Jwt al logearse
        async jwt({ token, user }) {
            // Actualizar el token con las siguientes propiedades
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        // Lógica para saber los datos del usuario logeado
        async session({ session, token }) {
            if (token) {
                // Si estamos logeados y existe el token, actualizar 'session' con los siguientes valores
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        // Lógica para verificar si estamos autenticados, y de estarlos que permisos tenemos
        authorized({ auth, request }) {
            // Accediendo a la info del usuario logeado
            const user = auth?.user;

            // Chequeando donde se encuentra el usuario
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            // Si intentamos ingresar a '/admin'
            // Solo usuarios de tipo 'admin' pueden acceder al dashboard
            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            // Si intentamos ingresar a '/blog'
            // Solo usuarios autenticados pueden acceder a los post del blog
            if (isOnBlogPage && !user) {
                return false;
            }

            // Si intentamos ingresar a '/login'
            // Solo usuarios no-autenticados pueden acceder a la sección del login
            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true;
        },
    },
};