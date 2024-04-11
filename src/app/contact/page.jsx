"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./contact.module.css";

// export const metadata = {
//     title: "Contact Page",
//     description: "Contact description",
// };

const ContactPage = () => {
    // Generando un número aleatorio
    const a = Math.random();
    console.log(a);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={'/contact.png'} alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                {/* Solución 3 para deshabilitar el SSR */}
                <div suppressHydrationWarning>Valor: {a}</div>
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