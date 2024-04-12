"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
    // Navegación del lado del cliente con los siguientes hooks
    const router = useRouter(); // Redireccionamientos y más
    const pathname = usePathname(); // Obtención de la ruta actual. Empieza con '/'
    const searchParams = useSearchParams(); // Obtención de los parámetros de búsquedas en las rutas

    console.log('Ruta actual: ', pathname);

    const q = searchParams.get("q")
    console.log('Parámetro de búsqueda pasado: ', q);

    // Manejando las funcionalidades de 'useRouter' 
    const handleClick = () => {
        console.log('clicked');
        router.push('/'); // Nos direcciona a 'HomePage'
        router.refresh(); // Nos refresca el componente. Es decir, lo vuelve a renderizar.
        router.back(); // Nos direcciona a la página anterior. 'foward' nos permitirá ir a la página siguiente
    }

    return (
        <div>
            {/* Se evita realizar el pre-fetching cuando se quiera acceder a la siguiente ruta (Hompe) */}
            <Link href='/' prefetch={false}>Click here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
};

export default NavigationTestPage;