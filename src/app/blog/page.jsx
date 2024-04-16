import PostCard from "@/components/postCard/PostCard";
import { getFakePosts } from "@/lib/data";
import styles from "./blog.module.css";

// Método para obtener los datos de la API de Posts de jsonplaceholder
const getPosts = async () => {
    // Obteniendo los datos
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // Especificando la forma de almacenamiento en el caché
        // cache: 'no-store' // No se lo almacena
        // Especificando la revalidación de los datos
        next: { revalidate: 3600 } // Se recargarán estos datos cada 1 hora
    });

    // Si no se pudo obtener los datos
    if (!response.ok) throw new Error('Something went wrong');

    const data = response.json();
    return data;
}

const BlogPage = async () => {
    // Obteniendo los posts
    // const posts = await getPosts();

    // Obteniendo los datos (sin utilizar API)
    const posts = await getFakePosts();

    return (
        <div className={styles.container}>
            {/* Renderizando los posts */}
            {posts.map((post, i) => (
                <div className={styles.post} key={i}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
}

export default BlogPage;
