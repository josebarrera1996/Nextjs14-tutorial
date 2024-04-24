'use server';

import { revalidatePath } from "next/cache";
import { Post } from "./models";
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