import AgencyBanner from '@/components/AgencyBanner'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import SocialProofBar from '@/components/SocialProofBar'
import ProblemSection from '@/components/ProblemSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorks from '@/components/HowItWorks'
import OutcomesSection from '@/components/OutcomesSection'
import PricingSection from '@/components/PricingSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'CODFLIP — COD to Prepaid Conversion for Indian D2C Brands',
  description: 'Reduce RTO by 35%. CODFLIP converts COD orders to prepaid via WhatsApp. Free plan available.',
}

export default function CodflipPage() {
  return (
    <main data-theme="light" style={{ background: '#fff', position: 'relative', zIndex: 1 }}>
      <AgencyBanner />
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <OutcomesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
