import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import './globals.css';

// Configuración de la fuente Inter con el subconjunto "latin"
const inter = Inter({ subsets: ['latin'] });

// Metadatos
export const metadata = {
  title: {
    // Título por defecto
    default: "Next.js 14 Homepage",
    // Plantilla para el título con un marcador de posición (%s)
    // Tomará el 'title' de cada 'page.jsx' | Next.js 14"
    template: "%s | Next.js 14"
  },
  // Descripción por defecto
  description: "Next.js starter app description" 
};


// Componente de diseño raíz (layout principal)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}