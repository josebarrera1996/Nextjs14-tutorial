import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";

// Endpoint para poder acceder a los datos de un Post
export const GET = async (request, { params }) => {
    // Obteniendo 'slug' del objeto 'params'
    const { slug } = params;

    try {
        // Conexión a la B.D
        connectToDb();

        // Obteniendo el Post y retornándolo en JSON
        const post = await Post.findOne({ slug });
        return NextResponse.json(post);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};

// Endpoint para poder eliminar un Post
export const DELETE = async (request, { params }) => {
    // Obteniendo 'slug' del objeto 'params'
    const { slug } = params;

    try {
        // Conexión a la B.D
        connectToDb();

        // Eliminando el Post
        await Post.deleteOne({ slug });
        return NextResponse.json("Post deleted");
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete post!");
    }
};