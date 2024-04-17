import { unstable_noStore as noStore } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

/* Definiendo los métodos para traer datos (usuario/s, post/s) */

// POSTS
// Método para traer a todos los Posts
export const getPosts = async () => {
    try {
        // Conexión a la B.D
        connectToDb();

        // Traer los Posts
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts!");
    }
}

// POST
// Método para traer un Post en específco
export const getPost = async (slug) => {
    try {
        // Conexión a la B.D
        connectToDb();

        // Traer el Post
        const post = await Post.findOne({ slug }); // slug -> slug: slug
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};

// USERS
// Método para traer a todos los Users
export const getUsers = async () => {
    try {
        // Conexión a la B.D
        connectToDb();

        // Traer los Users
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};

// USER
// Método para traer a un User en específico
export const getUser = async (id) => {
    // No almacenar el User en el caché
    noStore();
    try {
        // Conexión a la B.D
        connectToDb();

        // Traer el User
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

