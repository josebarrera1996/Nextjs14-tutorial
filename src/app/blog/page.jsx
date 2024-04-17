import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";

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
