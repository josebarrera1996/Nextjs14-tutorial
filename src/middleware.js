import NextAuth from "next-auth";;
import { authConfig } from "./lib/auth.config";

// Exportanado la configuración de 'authConfig' con su lógica para el middleware
export default NextAuth(authConfig).auth;

// Configuración de los Middleware
export const config = {
    // Esto nos filtrará las rutas específicas en las que queremos aplicar el middleware. 
    // Asi evitar implementarlo de forma global
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

// FOR MORE INFORMATION CHECK: https://nextjs.org/docs/app/building-your-application/routing/middleware