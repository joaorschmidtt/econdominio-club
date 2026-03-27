"use client"

import { LayoutDashboard, Smartphone, Users2, Leaf } from "lucide-react"

export function BrandSection() {
  const features = [
    {
      title: "Painel do Morador",
      description: "Uma interface intuitiva para você gerenciar seus benefícios e boletos sem sair de casa.",
      icon: <LayoutDashboard className="w-8 h-8" />, 
    },
    {
      title: "Mural Interativo",
      description: "Receba avisos importantes e participe de decisões do seu condomínio em tempo real pelo celular.",
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: "Rede de Vizinhos",
      description: "Conecte-se com pessoas do seu bairro, compartilhe recomendações e fortaleça a comunidade local.",
      icon: <Users2 className="w-8 h-8" />,
    },
    {
      title: "Consumo Consciente",
      description: "Dicas personalizadas e monitoramento para reduzir o desperdício de recursos e poupar o seu dinheiro.",
      icon: <Leaf className="w-8 h-8" />,
    },
  ]

  return (
    <section id="recursos" className="py-24 md:py-32 bg-[#F0F9FF] relative overflow-hidden">
      
      {/* Background Glow sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,168,232,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Section Header Animado */}
          <div 
            className="text-center mb-20"
            data-aos="fade-up"
          >
            <h3 className="text-[#00A8E8] text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4">
              Recursos Premium
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold text-[#004AAD] tracking-tight">
              Tudo em um <span className="text-[#116644]">só lugar</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#FFD700] mx-auto mt-6 rounded-full shadow-lg shadow-[#FFD700]/20" />
          </div>

          {/* Grid de Cards com Efeito Cascata Progressivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {features.map((feature, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150} // Atraso de 150ms entre cada card
                className="group relative p-8 rounded-[32px] bg-white border border-white transition-all duration-500 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-[#00A8E8]/10 hover:-translate-y-2"
              >
                {/* Ícone com tratamento de cor para hover */}
                <div className="mb-6 inline-block p-4 rounded-2xl bg-[#F0F9FF] group-hover:bg-[#116644] transition-all duration-500">
                  <div className="text-[#116644] group-hover:text-white transition-colors duration-500">
                    {feature.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[#004AAD] mb-3 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>

                <div className="absolute bottom-6 left-8 w-0 h-1 bg-[#116644] rounded-full transition-all duration-500 group-hover:w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}