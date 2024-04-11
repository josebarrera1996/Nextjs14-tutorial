"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";

// export const metadata = {
//     title: "Contact Page",
//     description: "Contact description",
// };

const ContactPage = () => {
    // Solución 1 para evitar el 'Hydration Error'
    // Para asegurarse de que este componente corra del lado del cliente
    const [isClient, setIsClient] = useState(false);

    // Solución 1 para evitar el 'Hydration Error'
    // Para asegurarse de que este componente corra del lado del cliente
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Generando un número aleatorio
    const a = Math.random();
    console.log(a);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={'/contact.png'} alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                {/* Si se carga este componente desde el lado del cliente, mostrar el valor de 'a' */}
                {isClient && a}
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;