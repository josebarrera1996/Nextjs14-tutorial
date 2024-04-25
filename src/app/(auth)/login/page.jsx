import { auth } from "@/lib/auth";
import { handleLoginGithub, handleLoginWithCredentials } from "@/lib/actions";

const LoginPage = async () => {
    // Obteniendo los datos del usuario logeado
    const session = await auth();
    console.log(session);

    return (
        <div>
            <form action={handleLoginGithub}>
                <button>Login (GitHub)</button>
            </form>
            <form action={handleLoginWithCredentials}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button>Login with Credentials</button>
            </form>
        </div>
    );
}

export default LoginPage;