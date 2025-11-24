import { Cpu, ShieldCheck, Network, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

export function IntelligenceSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Adaptive Intelligence with <span className="text-primary">Guardrails</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are entering the Intelligence Era. And not all intelligence serves life.
          </p>
        </div>

        <div className="mb-12 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
            ZKN provides the <span className="text-primary font-bold">secure scaffolding</span> to coordinate{" "}
            <span className="text-primary font-bold">human and AI systems</span> without compromise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Verifiable Authenticity</h3>
            <p className="text-muted-foreground leading-relaxed">
              In the era of synthetic media, proving authenticity without revealing identity. Distinguish human from
              machine, real from generated.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Network className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Secure Provenance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Track origins across decentralized supply chains. Verify without exposing, trace without surveillance.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Selective Disclosure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reveal only what's necessary. Identity, capability, and credentials shared by consent, never by default.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Intention-Based Coordination</h3>
            <p className="text-muted-foreground leading-relaxed">
              Protocols for agents, humans, and machines. Privacy. Verification. Consent. Alignment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
