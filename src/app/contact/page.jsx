import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
    title: "Contact Page",
    description: "Contact description",
};

const ContactPage = () => {
    // Testeando que este componente sigue siendo de tipo servidor (por más que este en vuelto en uno de tipo cliente)
    console.log('SSR: ContactPage')

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={'/contact.png'} alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
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