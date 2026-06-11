import AgencyBanner from '@/components/AgencyBanner'
import Navbar from '@/components/Navbar'
import TGAHeroSection from '@/components/TGAHeroSection'
import TGAServicesSection from '@/components/TGAServicesSection'
import TGAProductsSection from '@/components/TGAProductsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The Growth Agency — D2C Growth Studio for Indian Brands',
  description: 'Shopify development, WhatsApp retention, and CRO for India\'s top D2C brands.',
}

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <AgencyBanner />
      <Navbar />
      <TGAHeroSection />
      <TGAServicesSection />
      <TGAProductsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
