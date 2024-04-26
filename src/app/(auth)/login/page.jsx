import { auth } from "@/lib/auth";
import { handleLoginGithub } from "@/lib/actions";
import LoginForm from "@/components/loginForm/LoginForm";
import styles from './login.module.css';

const LoginPage = async () => {
    // Obteniendo los datos del usuario logeado
    const session = await auth();
    console.log(session);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleLoginGithub}>
                    <button className={styles.github}>Login with Github</button>
                </form>
                {/* Renderizando el siguiente componente de tipo 'client' */}
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;