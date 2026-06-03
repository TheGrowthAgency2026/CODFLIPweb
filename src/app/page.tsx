import AgencyBanner from '@/components/AgencyBanner'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import SocialProofBar from '@/components/SocialProofBar'
import ProblemSection from '@/components/ProblemSection'
import HowItWorks from '@/components/HowItWorks'
import FeaturesSection from '@/components/FeaturesSection'
import AgencySection from '@/components/AgencySection'
import PricingSection from '@/components/PricingSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ background: '#0a0a0a', position: 'relative', zIndex: 1 }}>
      <AgencyBanner />
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <AgencySection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}