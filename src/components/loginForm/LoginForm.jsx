"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { handleLoginWithCredentials } from "@/lib/actions";
import styles from "./loginForm.module.css";

// Componente de tipo 'client' para trabajar con los datos del formulario al logear un usuario
const LoginForm = () => {
    // Definiendo el hook para manejar los estados de éxito o de error con los datos del formulario
    // Y para indicar la 'action' que se ejecutará y cual será el estado inicial
    const [state, formAction] = useFormState(handleLoginWithCredentials, undefined);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            {/* En caso de error */}
            {state?.error && <p className={styles.error_message}>{state.error}</p>}
            <Link href="/register">
                {"Don't have an account?"} <b>Register</b>
            </Link>
        </form>
    );
};

export default LoginForm;