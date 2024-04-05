import Link from 'next/link';
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";

// Array de objetos que representa los enlaces y sus rutas
const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

// Componente que representará los enlaces de la barra de navegación
const Links = () => {
    // Variables temporales de sesión y de administrador
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.links}>
            {links.map((link) => (
                // Envolviendo los enlaces en este componente
                <NavLink item={link} key={link.title} />
            ))} {
                // Si el usuario esta logeado...
                session ? (
                    <>
                        {/* Si es admin... */}
                        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    // Si no esta logeado, mostrar...
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )
            }
        </div>
    );
}

export default Links;