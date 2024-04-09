import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

// Componente que representará la estructura básica de un Post
const PostCard = () => {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/15949261/pexels-photo-15949261/free-photo-of-edificios-cielo-azul-sombras-pueblo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eligendi fugit, nesciunt deleniti soluta sequi cupiditate, consequatur cum blanditiis voluptatibus nam nihil optio odit corrupti repellendus architecto tenetur maxime omnis.</p>
                <Link className={styles.link} href='/blog/post'>READ MORE</Link>
            </div>
        </div>
    );
}

export default PostCard;