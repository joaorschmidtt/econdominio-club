"use client"

import { 
  Wallet, 
  Users, 
  Shield, 
  Zap,
  Handshake,
  ShoppingCart
} from "lucide-react"

const benefits = [
  {
    icon: Wallet,
    title: "Economia no Condomínio",
    description: "Reduza os custos fixos do seu prédio com nossas parcerias estratégicas e compras coletivas exclusivas.",
  },
  {
    icon: ShoppingCart,
    title: "Clube de Vantagens VIP",
    description: "Descontos reais em supermercados, farmácias e serviços em Campina Grande que pagam o valor da sua taxa mensal.",
  },
  {
    icon: Handshake,
    title: "Alavanque seu Negócio",
    description: "Seja um anunciante parceiro e conecte seus serviços diretamente aos moradores do seu bairro e região.",
  },
  {
    icon: Zap,
    title: "Conta de Luz Reduzida",
    description: "Tenha acesso a descontos exclusivos na sua conta de energia através de nossas parcerias de energia sustentável.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#00A8E8]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header da Seção Animado */}
        <div 
          className="text-center max-w-3xl mx-auto mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-[#00A8E8] font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-6">
            O Diferencial Club
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-[#004AAD] mb-8 tracking-tight">
            Mais que um portal, um <span className="text-[#116644]">ecossistema</span>.
          </h3>
          <p className="text-[#004AAD]/60 text-lg md:text-xl font-medium leading-relaxed">
            Não somos apenas um software de gestão. Somos a ponte entre a economia real para o morador e a eficiência moderna para o síndico.
          </p>
        </div>

        {/* Grid de Cards com Efeito Cascata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              /* data-aos-delay calcula o tempo baseado na posição do item:
                 Item 0: 0ms | Item 1: 100ms | Item 2: 200ms | Item 3: 300ms
              */
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-[32px] p-8 border border-gray-100 shadow-xl shadow-gray-200/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#00A8E8]/10"
            >
              <div className="w-16 h-16 bg-[#116644]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#116644] transition-all duration-500 shadow-inner">
                <benefit.icon 
                  className="w-8 h-8 text-[#116644] group-hover:text-white transition-colors duration-500" 
                  strokeWidth={1.5} 
                />
              </div>
              
              <h4 className="text-[#004AAD] font-bold text-xl mb-4 tracking-tight">
                {benefit.title}
              </h4>
              
              <p className="text-gray-500 text-base leading-relaxed font-medium">
                {benefit.description}
              </p>

              <div className="h-1 w-0 bg-[#FFD700] mt-8 rounded-full transition-all duration-700 group-hover:w-16 shadow-lg shadow-[#FFD700]/40" />
              
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#00A8E8]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}