"use client";

import Image from "next/image";
import styles from "./contact.module.css";

// export const metadata = {
//     title: "Contact Page",
//     description: "Contact description",
// };

const ContactPage = () => {
    // Esto hará que en el navegador se muestre un valor y en el servidor otro. Es decir, no coincidirán.
    // Este es un ejemplo sencillo de 'Hydration Error'.
    const a = Math.random();
    console.log(a);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={'/contact.png'} alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                {/* Al mostrar este valor aleatorio generará errores */}
                Valor: {a}
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