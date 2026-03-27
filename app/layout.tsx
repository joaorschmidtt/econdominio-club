"use client"

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
   <head>
  <title>Econdomínio Club</title>
  {/* O ?v=3 força o localhost e a Vercel a lerem o arquivo novo na hora */}
  <link rel="icon" href="/favicon2.png?v=3" type="image/png" />
  <link rel="apple-touch-icon" href="/logo_nav.png?v=3" />
  
  {/* Essa tag abaixo mata o ícone padrão do Next.js que apareceu no seu print */}
  <meta name="next-head-count" content="0" /> 
</head>
      <body className="font-sans antialiased bg-white text-[#004AAD] overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}