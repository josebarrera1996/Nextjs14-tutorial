"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { handleRegisterWithCredentials } from '@/lib/actions';
import styles from './registerForm.module.css';

// Componente de tipo 'client' para trabajar con los datos del formulario al registrar un usuario
const RegisterForm = () => {
    // Definiendo el hook para manejar los estados de éxito o de error con los datos del formulario
    // Y para indicar la 'action' que se ejecutará y cual será el estado inicial
    const [state, formAction] = useFormState(handleRegisterWithCredentials, undefined);

    // Hook para manejar la navegación
    const router = useRouter();

    // Hook para redireccionarnos a 'login' cuando el 'register' ha sido exitoso
    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="password again" name="passwordRepeat" />
            <button>Register</button>
            {/* En caso de error... */}
            {state?.error && <p className={styles.error_message}>{state.error}</p>}
            <Link href="/login">
                Have an account? <b>Login</b>
            </Link>
        </form>
    );
};

export default RegisterForm;