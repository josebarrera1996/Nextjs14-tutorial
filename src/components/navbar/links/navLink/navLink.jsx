"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navLink.module.css";

// Componente que accede a un link en especial y le aplica estilos
const NavLink = ({ item }) => {
    // Obtener la ruta actual
    const pathName = usePathname();

    return (
        <Link
            href={item.path}
            // Resaltar el fondo del enlace seleccionado (a través de su ruta)
            className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.title}
        </Link>
    );
};

export default NavLink;