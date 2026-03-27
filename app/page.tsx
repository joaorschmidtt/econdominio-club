import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { BrandSection } from "@/components/landing/brand-section"
import { StatsSection } from "@/components/landing/stats-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { SignupSection } from "@/components/landing/signup-section"
import { AboutSection } from "@/components/landing/about-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BrandSection />
      <StatsSection />
      <BenefitsSection />
      <AboutSection /> {/* <--- ADICIONE ESTA LINHA AQUI */}
      <SignupSection />
      <Footer />
    </main>
  )
}