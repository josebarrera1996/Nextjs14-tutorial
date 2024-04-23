import PostCard from "@/components/postCard/PostCard";
// import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";

// Obteniendo los Post al acceder a la endpoint definida
const getPosts = async () => {
    const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

// Metadatos para esta vista
export const metadata = {
    title: "Blog Page",
    description: "Blog description",
};

const BlogPage = async () => {
    // Obteniendo los posts
    const posts = await getPosts();

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
