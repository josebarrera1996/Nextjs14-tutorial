import { auth } from "@/lib/auth";
import { handleLoginGithub } from "@/lib/actions";

const LoginPage = async () => {
    // Obteniendo los datos del usuario logeado
    const session = await auth();
    console.log(session);

    return (
        <div>
            <form action={handleLoginGithub}>
                <button>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;