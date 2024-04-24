"use client";

import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";
import { handleLogoutGithub } from "@/lib/actions";

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
const Links = ({ session }) => {
    // Estado para indicar si el modal se abrirá o no
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    // Envolviendo los enlaces en este componente
                    <NavLink item={link} key={link.title} />
                ))} {
                    // Si el usuario esta logeado...
                    session?.user ? (
                        <>
                            {/* Si es admin... */}
                            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <form action={handleLogoutGithub}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        // Si no esta logeado, mostrar...
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>
            {/* Botón que se visualizará cuando el ancho de la pantalla sea menor a 768px (breakpoint)  */}
            <Image
                className={styles.menuButton}
                src={'/menu.png'}
                alt="Menu"
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
            />
            {/* Modal con los enlaces que se mostrará cuando se lo active */}
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Links;