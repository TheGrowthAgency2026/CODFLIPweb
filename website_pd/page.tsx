import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'

export default function GrowthAgencyPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
