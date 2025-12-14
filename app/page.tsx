import { Hero } from "@/components/hero"
import { MetaceliumSection } from "@/components/metacelium-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { GovernanceSection } from "@/components/governance-section"
import { RiparianSection } from "@/components/riparian-section"
import { PunkUnionSection } from "@/components/punk-union-section"
import { NetworkSection } from "@/components/network-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MetaceliumSection />
      <InfrastructureSection />
      <GovernanceSection />
      <RiparianSection />
      <PunkUnionSection />
      <NetworkSection />
      <Footer />
    </main>
  )
}
