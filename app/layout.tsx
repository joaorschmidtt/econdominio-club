"use client" // Essencial para componentes que usam useEffect e bibliotecas de animação

import { useEffect } from 'react'
// Importamos o CSS aqui em cima normalmente
import 'aos/dist/aos.css' 
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  useEffect(() => {
    // IMPORTANTE: Fazemos o import dinâmico do AOS dentro do useEffect
    // para garantir que ele só carregue no navegador do usuário (Client Side)
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
        offset: 100,
      });
      
      // Dá um refresh para o AOS "escanear" o site após o carregamento das fontes
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    };

    initAOS();
  }, []);

  return (
    <html lang="pt-BR" className={`${geist.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#004AAD] overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}