"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Recursos", href: "#recursos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Sobre Nós", href: "#sobre" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header 
      /* ADICIONADO: data-aos para o Header descer suavemente ao carregar */
      data-aos="fade-down"
      data-aos-duration="1000"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md h-16 shadow-lg border-b border-gray-100" 
          : "bg-transparent h-24"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/images/LOGOofc.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              /* ADICIONADO: delay individual para os itens do menu entrarem em sequência */
              data-aos="fade-down"
              data-aos-delay={400 + (index * 100)}
              className="text-[#004AAD] font-black text-xs uppercase tracking-widest hover:text-[#116644] transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Botão de Ação */}
        <div data-aos="fade-left" data-aos-delay="800">
          <a 
            href="#cadastro"
            onClick={(e) => scrollToSection(e, "#cadastro")}
            className="bg-[#116644] text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-tighter hover:bg-[#0d4d33] transition-all shadow-lg shadow-[#116644]/20 hover:-translate-y-0.5 active:scale-95"
          >
            Acesso VIP gratuito 
          </a>
        </div>
      </div>
    </header>
  )
}