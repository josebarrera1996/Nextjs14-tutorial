import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
import styles from "./singlePost.module.css";

const SinglePostPage = async ({ params }) => {

    // Accediendo a la propiedad 'slug' del objeto 'params'
    const { slug } = params;

    // Obteniendo los datos del objeto del post
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            {post.img && (
                <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill className={styles.img} />
                </div>
            )}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
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
                        <span className={styles.detailValue}>
                            {post.createdAt.toString().slice(4, 16)}
                        </span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.desc}
                </div>
            </div>
        </div>
    );
}

export default SinglePostPage;