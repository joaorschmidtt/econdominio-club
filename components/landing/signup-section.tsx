"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"
import { 
  User, 
  Mail, 
  Phone, 
  Users,
  Check,
  Send,
  ShieldCheck,
  MapPin,
  Briefcase
} from "lucide-react"

const benefits = [
  "Acesso exclusivo antes do lançamento oficial",
  "Descontos especiais para membros fundadores",
  "Notificações personalizadas de novas parcerias",
]

export function SignupSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    profile: "",
    condominium: "",
    company: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const { error } = await supabase
      .from('leads')
      .insert([
        { 
          name: formData.name, 
          email: formData.email, 
          whatsapp: formData.whatsapp,
          profile: formData.profile,
          condominium: formData.condominium,
          company: formData.company
        }
      ])

    if (error) {
      console.error("Erro Supabase:", error.message)
      alert("Erro ao cadastrar. Verifique se o e-mail já existe ou tente novamente.")
    } else {
      setIsSubmitted(true)
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'profile' ? { condominium: "", company: "" } : {})
    }))
  }

  // Função para resetar o formulário e voltar ao início
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      profile: "",
      condominium: "",
      company: "",
    })
    setIsSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isSubmitted) {
const whatsappLink = `https://wa.me/558388181032?text=Olá%20José,%20acabei%20de%20me%20cadastrar%20no%20Econdomínio%20Club%20e%20quero%20garantir%20meu%20desconto%20de%20até%2010%25%20na%20conta%20de%20luz!`

    return (
      <section className="py-20 md:py-32 bg-[#F0F9FF] relative min-h-[600px] flex items-center">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-2xl mx-auto text-center bg-white p-12 rounded-[40px] shadow-2xl border border-[#00A8E8]/20"
            data-aos="zoom-in"
          >
            <div className="w-24 h-24 bg-[#116644] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#116644]/20">
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-[#004AAD] mb-6">
              Bem-vindo ao Clube!
            </h2>
            
            <p className="text-[#004AAD]/60 text-xl font-medium leading-relaxed mb-10">
              Seu cadastro foi realizado com sucesso. Você acaba de garantir seu lugar na lista prioritária do <span className="text-[#116644] font-bold">Econdomínio Club</span>.
            </p>

            <div className="space-y-6 pt-6 border-t border-gray-100 flex flex-col items-center">
              <p className="text-[#004AAD] font-bold text-lg">
                Para garantir seu desconto de até 10% na conta de luz, fale agora com <span className="text-[#116644]">José Charlton</span>:
              </p>
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#116644] hover:bg-[#0d4d33] text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl hover:-translate-y-1 active:scale-95 inline-flex"
              >
                GARANTIR MEU DESCONTO AGORA
                <Send className="w-5 h-5" />
              </a>

              <button 
                onClick={handleReset}
                className="text-gray-400 hover:text-[#004AAD] font-bold text-sm transition-colors uppercase tracking-widest py-2"
              >
                Agora não, obrigado. Voltar ao início.
              </button>

              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest pt-4">
                Parceria Guia do Síndico & Korven Lab
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const inputStyle = "pl-14 h-16 bg-gray-50 border-gray-200 text-[#004AAD] placeholder:text-gray-400 focus:border-[#00A8E8] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[20px] text-lg font-medium transition-all"

  return (
    <section id="cadastro" className="py-24 md:py-40 bg-[#F0F9FF] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00A8E8]/5 -skew-x-12 translate-x-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#116644]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-3 bg-[#00A8E8]/10 px-4 py-2 rounded-full mb-8">
              <ShieldCheck className="w-4 h-4 text-[#00A8E8]" />
              <span className="text-[#00A8E8] font-black text-xs uppercase tracking-widest">
                Cadastro Seguro e Gratuito
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-[#004AAD] mb-8 leading-[1.1] tracking-tight">
              Faça Parte da <br />
              <span className="text-[#116644]">Nossa Comunidade</span>
            </h2>
            
            <p className="text-[#004AAD]/60 text-lg md:text-xl mb-12 leading-relaxed max-w-lg font-medium">
              Os primeiros cadastrados terão benefícios exclusivos de lançamento, incluindo parcerias que não estarão disponíveis futuramente.
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-6 h-6 bg-[#116644] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#116644]/20 transition-transform group-hover:scale-110">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                  </div>
                  <span className="text-[#004AAD] font-bold text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00A8E8] to-[#116644] rounded-[50px] opacity-10 blur-2xl pointer-events-none" />
            
            <div className="relative bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-blue-900/10 border border-white">
              <div className="text-center mb-10">
                <h3 className="text-[#004AAD] font-bold text-3xl mb-3">
                  Acesso Antecipado
                </h3>
                <p className="text-gray-400 font-medium">
                  Garanta sua vaga na lista prioritária hoje.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                  <div className="relative" data-aos="fade-up" data-aos-delay="200">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A8E8] z-10" />
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome Completo"
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5" data-aos="fade-up" data-aos-delay="300">
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A8E8] z-10" />
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        required
                        className={inputStyle}
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A8E8] z-10" />
                      <Input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="WhatsApp"
                        required
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="relative" data-aos="fade-up" data-aos-delay="400">
                    <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A8E8] z-10" />
                    <select
                      name="profile"
                      value={formData.profile}
                      onChange={handleChange}
                      required
                      className="w-full pl-14 h-16 bg-gray-50 border border-gray-200 text-[#004AAD] focus:border-[#00A8E8] focus:ring-0 focus-visible:ring-0 rounded-[20px] font-medium appearance-none outline-none transition-all cursor-pointer"
                    >
                      <option value="">Você é...</option>
                      <option value="morador">Morador(a)</option>
                      <option value="trabalhador">Trabalhador(a)</option>
                    </select>
                  </div>

                  {formData.profile === "morador" && (
                    <div className="relative animate-in slide-in-from-top-2 duration-300">
                      <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A8E8] z-10" />
                      <Input
                        name="condominium"
                        value={formData.condominium}
                        onChange={handleChange}
                        placeholder="Em qual condomínio você mora?"
                        required
                        className={inputStyle}
                      />
                    </div>
                  )}

                  {formData.profile === "trabalhador" && (
                    <div className="relative animate-in slide-in-from-top-2 duration-300">
                      <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A8E8] z-10" />
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Em qual empresa você trabalha?"
                        required
                        className={inputStyle}
                      />
                    </div>
                  )}
                </div>

                <div data-aos="fade-up" data-aos-delay="500">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#116644] hover:bg-[#0d4d33] text-white font-black py-8 text-xl rounded-[20px] shadow-xl shadow-[#116644]/30 transition-all active:scale-95 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        GARANTIR MEU ACESSO
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest" data-aos="fade-in" data-aos-delay="700">
                  Tecnologia Korven Lab • Proteção de Dados LGPD
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}