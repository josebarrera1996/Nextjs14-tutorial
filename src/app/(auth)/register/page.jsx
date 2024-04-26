import styles from './register.module.css';
import RegisterForm from "@/components/registerForm/RegisterForm";

const RegisterPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* Renderizando este componente de tipo 'client' */}
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterPage;