"use client";

// Componente para evitar los errores de hydration
const HydrationTest = () => {

    const a = Math.random();

    console.log(a);

    return (
        <div>{a}</div>
    )
};

export default HydrationTest;