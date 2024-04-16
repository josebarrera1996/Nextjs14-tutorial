// Datos temporales
const users = [
    { id: 1, username: "John" },
    { id: 2, username: "Jane" },
];

const posts = [
    { id: 1, title: "Post 1", body: "......", userId: 1 },
    { id: 2, title: "Post 2", body: "......", userId: 1 },
    { id: 3, title: "Post 3", body: "......", userId: 2 },
    { id: 4, title: "Post 4", body: "......", userId: 2 },
];

/* Métodos que trabajan sobre datos sin la necesidad de utilizar una API */

// Método que nos retornará los posts
export const getFakePosts = async () => {
    return posts;
}

// Método que nos retornará un post en específico
export const getFakePost = async (id) => {
    return posts.find((post) => post.id === parseInt(id));
}

// Método que nos retornará un usuario en específico
export const getFakeUser = async (id) => {
    return users.find((user) => user.id === parseInt(id));
}