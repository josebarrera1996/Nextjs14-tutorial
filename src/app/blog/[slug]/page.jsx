import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser/PostUser";
import { getFakePost } from "@/lib/data";
import styles from "./singlePost.module.css";

// Método para obtener un post en específico (por su 'id')
const getPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    // Si no se pudo obtener los datos
    if (!response.ok) throw new Error('Something went wrong');

    const data = response.json();
    return data;
}

const SinglePostPage = async ({ params }) => {

    // Accediendo a la propiedad 'slug' del objeto 'params'
    const { slug } = params;

    // Obteniendo los datos del objeto del post
    // const post = await getPost(slug);

    // Obteniendo los datos del objeto del post (sin API)
    const post = await getFakePost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/15949261/pexels-photo-15949261/free-photo-of-edificios-cielo-azul-sombras-pueblo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    {/* Implementando 'Suspense' para cargar 'PostUser' cuando ya esté cargado el 'Post' */}
                    {/* Para el proceso de carga de 'PostUser' se mostrará un 'Loading' */}
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post?.body}
                </div>
            </div>
        </div>
    );
}

export default SinglePostPage;