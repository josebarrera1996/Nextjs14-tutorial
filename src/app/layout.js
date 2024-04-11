import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import './globals.css';
import ClientSideProviderTest from '@/components/clientSideProviderTest';

// Configuración de la fuente Inter con el subconjunto "latin"
const inter = Inter({ subsets: ['latin'] });

// Metadatos de la aplicación
export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
};

// Componente de diseño raíz (layout principal)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Provider (de tipo cliente) */}
        <ClientSideProviderTest>
          {/* Los componentes hijos seguirán siendo de tipo 'server' */}
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClientSideProviderTest>
      </body>
    </html>
  );
}