"use client"

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer 
      id="footer" 
      /* ADICIONADO: fade-up para o footer subir suavemente no final */
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-[#00A8E8] pt-24 pb-12 border-t border-white/20 relative overflow-hidden"
    >
      
      {/* Background Glow sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-white/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Coluna 1 - Info da Marca */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <img 
              src="/images/LOGOofc.png" 
              alt="Econdomínio Club" 
              className="h-12 w-auto brightness-0 invert" 
            />
            <p className="text-white/80 text-sm leading-relaxed max-w-xs font-medium">
              A evolução digital do Guia do Síndico que você já confia. Tecnologia e economia para o seu condomínio em Campina Grande.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" className="p-3 bg-white/10 rounded-xl text-white hover:bg-[#116644] hover:shadow-lg transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-xl text-white hover:bg-[#116644] hover:shadow-lg transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-xl text-white hover:bg-[#116644] hover:shadow-lg transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Navegação */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-[#116644] font-black uppercase tracking-widest text-xs mb-8">Navegação</h4>
            <ul className="space-y-4">
              {[
                { name: 'Benefícios', href: '#beneficios' },
                { name: 'Recursos', href: '#recursos' },
                { name: 'Sobre Nós', href: '#footer' },
                { name: 'Acesso Antecipado', href: '#cadastro' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/70 hover:text-white transition-colors text-sm font-bold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-[#116644] font-black uppercase tracking-widest text-xs mb-8">Contato</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-[#FFD700]">
                    <Phone size={16} />
                </div>
                <span className="font-bold">(83) 8818-1032</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-[#FFD700]">
                    <Mail size={16} />
                </div>
                <span className="font-bold text-xs">contato@econdominio.club</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-[#FFD700]">
                    <MapPin size={16} />
                </div>
                <span className="font-bold">Campina Grande, PB</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Badge / Korven Lab */}
          <div 
            className="bg-white/10 p-8 rounded-[32px] border border-white/20 backdrop-blur-sm shadow-xl"
            data-aos="zoom-in" 
            data-aos-delay="500"
          >
            <h4 className="text-[#FFD700] font-black text-xs uppercase tracking-[0.2em] mb-4">Campina Grande</h4>
            <p className="text-white font-bold text-base mb-2">Lançamento 2026.</p>
            <p className="text-white/60 text-xs leading-tight font-medium">
              Prepare-se para a maior rede de vantagens condominiais do nordeste, com a assinatura Preminun club
            </p>
          </div>
        </div>

        {/* NOME GIGANTE NO FUNDO */}
        <div className="border-t border-white/20 pt-12 flex flex-col items-center" data-aos="fade-up">
          <div className="select-none pointer-events-none mb-8 opacity-[0.05]">
            <h1 className="text-[12vw] font-black text-white uppercase leading-none tracking-tighter">
              ECONOMIA
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 text-white/40 text-[10px] font-black uppercase tracking-widest">
            <p>© 2026 Econdomínio Club. Todos os direitos reservados.</p>
            <p>Desenvolvido por <span className="text-white/80">Korven Lab</span></p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}