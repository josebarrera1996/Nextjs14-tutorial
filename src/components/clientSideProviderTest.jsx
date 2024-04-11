"use client";

// Provider
// Componente de tipo cliente que servirá de envoltorio para, en este caso, componentes de servidores.
const ClientSideProviderTest = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ClientSideProviderTest;