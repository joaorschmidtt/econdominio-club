"use client"

import { Leaf, Users, Globe, Lightbulb } from "lucide-react"

export function AboutSection() {
  const pillars = [
    { icon: <Leaf className="w-6 h-6" />, title: "ESG & Sustentabilidade", text: "Compromisso com a economia verde e governança digital transparente." },
    { icon: <Users className="w-6 h-6" />, title: "Comunidade Ativa", text: "Transformamos condomínios em microecossistemas de bem-estar e inclusão." },
    { icon: <Globe className="w-6 h-6" />, title: "Cidades Inteligentes", text: "Induzindo a participação social e a valorização do patrimônio cultural urbano." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Inovação Social", text: "Saberes lúdicos, cultura e lazer para fortalecer o sentimento de pertencimento." },
  ]

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto Manifesto (Entra deslizando da esquerda) */}
          <div className="space-y-8" data-aos="fade-right" data-aos-duration="1000">
            <div>
              <h3 className="text-[#00A8E8] font-black text-xs uppercase tracking-[0.3em] mb-4">Nossa Essência</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#004AAD] leading-tight">
                Mais que um portal, uma ferramenta de <span className="text-[#116644]">mobilização social</span>.
              </h2>
            </div>
            
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Nossa missão é otimizar a conexão entre usuários em prol de preceitos eco-culturais e lazer. No <strong>Econdomínio Club</strong>, buscamos ir além do mural de avisos, criando comunidades com mais qualidade de vida, saúde mental e autonomia através da governança digital.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              {pillars.map((pillar, i) => (
                /* Pilares entram um a um de baixo para cima */
                <div 
                  key={i} 
                  className="space-y-3"
                  data-aos="fade-up"
                  data-aos-delay={200 + (i * 100)}
                >
                  <div className="text-[#116644]">{pillar.icon}</div>
                  <h4 className="text-[#004AAD] font-bold text-base">{pillar.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Card Institucional (Entra deslizando da direita) */}
          <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="absolute -inset-4 bg-[#00A8E8]/5 rounded-[40px] blur-3xl" />
            <div className="relative bg-[#004AAD] p-10 md:p-14 rounded-[40px] text-white shadow-2xl">
              <div className="space-y-10">
                <div data-aos="fade-up" data-aos-delay="400">
                  <h4 className="text-[#FFD700] font-black text-xs uppercase tracking-widest mb-4">Missão</h4>
                  <p className="text-white/90 font-medium italic">"Otimizar a conexão de usuários em prol de preceitos eco culturais, lazer e bem estar, criando comunidades com autonomia digital."</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <h4 className="text-[#FFD700] font-black text-xs uppercase tracking-widest mb-4">Visão</h4>
                  <p className="text-white/90 font-medium">Ser a referência sócio-cultural integrativa para o engajamento sustentável em ecossistemas antrópicos urbanos.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <h4 className="text-[#FFD700] font-black text-xs uppercase tracking-widest mb-4">Valores</h4>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Inovação', 'Transparência', 'Economia Verde', 'Empatia', 'ESG'].map((v) => (
                      <span key={v} className="bg-white/10 px-4 py-2 rounded-full text-[10px] font-bold border border-white/20">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}