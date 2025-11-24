import { Hero } from "@/components/hero"
import { MetaceliumSection } from "@/components/metacelium-section"
import { PunkUnionSection } from "@/components/punk-union-section"
import { UndergroundSection } from "@/components/underground-section"
import { PrivacySection } from "@/components/privacy-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { IntelligenceSection } from "@/components/intelligence-section"
import { GovernanceSection } from "@/components/governance-section"
import { RiparianSection } from "@/components/riparian-section"
import { NetworkSection } from "@/components/network-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MetaceliumSection />
      <PunkUnionSection />
      <UndergroundSection />
      <PrivacySection />
      <InfrastructureSection />
      <IntelligenceSection />
      <GovernanceSection />
      <RiparianSection />
      <NetworkSection />
      <Footer />
    </main>
  )
}
