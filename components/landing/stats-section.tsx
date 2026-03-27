"use client"

import { Users, Handshake, Percent, MapPin } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Lista de espera",
  },
  {
    icon: Handshake,
    value: "50+",
    label: "Parcerias ativas",
  },
  {
    icon: Percent,
    value: "até 40%",
    label: "Desconto médio",
  },
  {
    icon: MapPin,
    value: "Todos",
    label: "os bairros cobertos",
  },
]

export function StatsSection() {
  return (
    /* FUNDO: Branco para separar as seções coloridas com respiro */
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Decoração lateral sutil no Azul Claro da logo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-64 bg-[#00A8E8]/5 rounded-r-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-64 bg-[#116644]/5 rounded-l-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group animate-in fade-in slide-in-from-bottom-8 duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              {/* Ícone: Agora no Verde Floresta (#116644) com fundo suave */}
              <div className="w-16 h-16 mb-6 bg-[#116644]/5 rounded-2xl flex items-center justify-center text-[#116644] group-hover:bg-[#116644] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                <stat.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>

              {/* Valor: Azul Real para autoridade, sem serifas */}
              <span className="text-4xl md:text-6xl font-black text-[#004AAD] mb-2 tracking-tighter transition-transform group-hover:scale-105 duration-500">
                {stat.value}
              </span>

              {/* Label: Cinza médio com tracking espaçado */}
              <span className="text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] max-w-[120px]">
                {stat.label}
              </span>

              {/* Linha decorativa no Amarelo Ouro (#FFD700) para unidade visual */}
              <div className="h-1 w-0 bg-[#FFD700] mt-6 rounded-full transition-all duration-700 group-hover:w-12 shadow-lg shadow-[#FFD700]/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}