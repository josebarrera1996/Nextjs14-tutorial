import { handleRegisterWithCredentials } from "@/lib/actions";
import styles from './register.module.css';

const RegisterPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form className={styles.form} action={handleRegisterWithCredentials}>
                    <input type="text" placeholder="username" name="username" />
                    <input type="email" placeholder="email" name="email" />
                    <input type="password" placeholder="password" name="password" />
                    <input type="password" placeholder="password again" name="passwordRepeat" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;