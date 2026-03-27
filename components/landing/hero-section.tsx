"use client"

import { useState } from "react"
import { Sparkles, ChevronDown, ArrowRight, Zap, X, Send, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal" // Certifique-se de que o import está correto

export function HeroSection() {
  const [isEnergyModalOpen, setEnergyModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen bg-[#00A8E8] pt-40 md:pt-48 overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-transparent h-[85%] z-0 pointer-events-none" />
      <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white rounded-full blur-[120px] opacity-100 z-0 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.15] z-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,74,173,0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* 1. Animação da LOGO */}
          <Reveal delay={0.2}>
            <div className="mb-10 relative -mt-10 md:-mt-16">
               <div className="relative h-32 w-64 md:h-48 md:w-[550px] mx-auto transition-transform hover:scale-105 duration-700">
                  <img src="/images/LOGOofc.png" alt="Econdomínio Club Logo" className="h-full w-full object-contain drop-shadow-[0_10px_30px_rgba(0,74,173,0.1)]" />
               </div>
               <div className="h-1.5 w-24 bg-[#FFD700] mx-auto mt-6 rounded-full shadow-lg shadow-[#FFD700]/30" />
            </div>
          </Reveal>

          {/* 2. Animação do Badge "Vantagens Antecipadas" */}
          <Reveal delay={0.4}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#004AAD]/10 backdrop-blur-md border border-[#004AAD]/20 rounded-full px-6 py-3 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span className="text-[#004AAD] font-black text-[10px] md:text-xs tracking-[0.2em] uppercase">Vantagens antecipadas</span>
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
              </div>
            </div>
          </Reveal>

          {/* 3. Animação do Título H1 */}
          <Reveal delay={0.6}>
            <h1 className="text-4xl md:text-7xl font-bold text-[#004AAD] mb-6 max-w-5xl leading-[1.1] tracking-tight text-balance">
              Transforme seu <br className="hidden md:block" />
              <span className="text-[#116644]">condomínio</span> em um ecossistema de vantagens.
            </h1>
          </Reveal>

          {/* 4. Animação do Texto Descritivo */}
          <Reveal delay={0.8}>
            <p className="text-[#004AAD]/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-bold">
              Prepare-se para a maior rede de vantagens condominiais do nordeste.
            </p>
          </Reveal>

          {/* 5. Animação dos Botões de Ação */}
          <Reveal delay={1.0}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="#cadastro" className="group inline-flex items-center gap-3 bg-[#116644] text-white px-12 py-5 rounded-full font-black text-xl transition-all shadow-xl shadow-[#116644]/30 hover:bg-[#0d4d33] hover:-translate-y-1 active:scale-95">
                Garantir Vantagens <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a href="#beneficios" className="inline-flex items-center gap-2 border-2 border-[#004AAD]/20 text-[#004AAD] bg-white/40 backdrop-blur-sm px-12 py-5 rounded-full font-bold text-xl hover:bg-white/60 transition-all active:scale-95">
                VER BENEFÍCIOS
              </a>
            </div>
          </Reveal>

          {/* Seta de scroll com delay longo para não distrair */}
          <Reveal delay={1.5}>
            <div className="mt-20 text-[#004AAD]/30 flex flex-col items-center gap-4">
              <div className="w-px h-16 bg-gradient-to-b from-[#004AAD]/40 to-transparent" />
              <ChevronDown className="w-8 h-8 animate-bounce" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bolinha flutuante (não precisa de Reveal pois já tem animações próprias de flutuação) */}
      <div className="fixed bottom-10 right-10 z-50 animate-bounce-slow">
        {/* ... (seu código da bolinha flutuante permanece igual) ... */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-[#FFD700] rounded-full blur-xl opacity-50 group-hover:opacity-80 pointer-events-none transition-opacity animate-pulse"></div>
          <button 
            onClick={() => setEnergyModalOpen(true)}
            className="relative flex items-center justify-center gap-5 bg-white p-5 md:p-6 rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-2 border-white hover:scale-105 transition-all duration-500 active:scale-95"
          >
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center shadow-inner">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-600 animate-pulse" />
            </div>
            <div className="text-left hidden md:block pr-4">
              <p className="text-[#116644] font-black text-xs uppercase tracking-[0.2em] mb-1">Bônus Fundador ⚡</p>
              <h4 className="text-[#004AAD] text-lg lg:text-xl font-black leading-tight">Sua conta de energia <br/> <span className="text-[#116644]">mais barata!</span></h4>
            </div>
            <div className="absolute -top-3 -right-2 bg-[#116644] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase shadow-lg border border-white/20">Ativar Agora</div>
          </button>
        </div>
      </div>

      {/* --- MODAL DE INFORMAÇÃO MAX --- */}
      {/* (O Modal já tem "animate-in", então não precisa de Reveal) */}
      {isEnergyModalOpen && (
        // ... (seu código do modal permanece igual)
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
           {/* ... conteúdo do modal ... */}
           <div className="bg-white rounded-[50px] p-10 md:p-16 shadow-2xl border border-white max-w-2xl w-full relative animate-in zoom-in-95 duration-500 overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFD700] via-[#116644] to-[#00A8E8]" />

            <button onClick={() => setEnergyModalOpen(false)} className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
              <X size={24} />
            </button>

            <div className="text-center mb-10 space-y-6">
              <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center mx-auto shadow-inner ring-8 ring-yellow-50/50">
                <Zap className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="text-[#004AAD] font-black text-4xl md:text-5xl tracking-tighter text-center">Economia de Verdade ⚡</h3>
              <p className="text-[#004AAD]/60 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto text-center">
                Membros fundadores garantem um <span className="text-[#116644] font-bold underline decoration-[#FFD700] decoration-4">desconto exclusivo de até 10%</span> na conta de luz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F0F9FF] p-6 rounded-[30px] border border-blue-100">
                <ShieldCheck className="w-8 h-8 text-[#00A8E8] mb-4" />
                <p className="text-[#004AAD] font-bold text-lg mb-2">100% Digital</p>
                <p className="text-[#004AAD]/50 text-sm font-medium">Ativação simples via QR Code no lançamento oficial.</p>
              </div>
              <div className="bg-[#F0F9FF] p-6 rounded-[30px] border border-blue-100">
                <Zap className="w-8 h-8 text-[#FFD700] mb-4" />
                <p className="text-[#004AAD] font-bold text-lg mb-2">Sem Custo</p>
                <p className="text-[#004AAD]/50 text-sm font-medium">Benefício garantido apenas pelo cadastro antecipado.</p>
              </div>
            </div>

            <div className="w-full mb-10 px-4">
              <p className="text-[#004AAD]/40 text-[11px] md:text-sm leading-relaxed text-center font-medium italic">
                *O benefício está <span className="font-bold">sujeito a análise técnica</span> da unidade consumidora. O desconto é calculado com base no perfil de consumo e disponibilidade da rede parceira na sua região.
              </p>
            </div>

            <Button
              onClick={() => {
                setEnergyModalOpen(false);
                document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-[#116644] hover:bg-[#0d4d33] text-white font-black py-9 text-xl rounded-[25px] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-[#116644]/30 active:scale-95"
            >
              GARANTIR MEU DESCONTO AGORA
              <Send className="w-6 h-6" />
            </Button>

            <p className="text-center text-gray-400 text-xs font-black uppercase tracking-[0.3em] mt-8">
              Parceria Guia do Síndico & Korven Lab
            </p>
          </div>
        </div>
      )}
    </section>
  )
}