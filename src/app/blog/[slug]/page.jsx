import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = ({ params }) => {

    // Accediendo a el objeto 'params'
    console.log(params); // { slug: 'post' }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/15949261/pexels-photo-15949261/free-photo-of-edificios-cielo-azul-sombras-pueblo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src={'/noavatar.png'} alt="" width={50} height={50} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo optio nisi quo, velit eaque provident earum distinctio repellendus facere? Necessitatibus aliquid dicta suscipit quos minima explicabo facilis aperiam odio!
                </div>
            </div>
        </div>
    );
}

export default SinglePostPage;