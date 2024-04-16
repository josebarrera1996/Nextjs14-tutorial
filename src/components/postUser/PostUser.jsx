
import Image from "next/image";
import { getFakeUser } from "@/lib/data";
import styles from "./postUser.module.css";

// Método para traer los datos de un usuario en específico (por su ID)
const getUser = async (userId) => {
    // Obteniendo los datos del usuario
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
        // No se lo almacenará en el caché
        { cache: "no-store" }); // Por lo tanto se refrescarán los datos al accederlo

    // Si no se logró encontrar los datos del usuario...
    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    return response.json();
};

// Componente que representará los datos de un Post pero enfocado a el usuario que lo realizó
const PostUser = async ({ userId }) => {
    // Obteniendo los datos del usuario
    // const user = await getUser(userId);

    // Obteniendo los datos del usuario (sin API)
    const user = await getFakeUser(userId);

    return (
        <div className={styles.container}>
            <Image
                className={styles.avatar}
                src={user.img ? user.img : "/noavatar.png"}
                alt=""
                width={50}
                height={50}
            />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user?.username}</span>
            </div>
        </div>
    )
}

export default PostUser;