import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils"
import { Post } from "@/lib/models";

// Endpoint para obtener todos los Post
export const GET = async (request) => {
    try {
        // Conexión a la B.D
        connectToDb();

        // Obteniendo los Post
        const posts = await Post.find();

        // Retornándolos en JSON
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts!");
    }
}