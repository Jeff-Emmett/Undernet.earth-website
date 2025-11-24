import { Shield, Shuffle, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export function UndergroundSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Building <span className="text-primary">Underground</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Undernet is not a platform. It is a pattern. A tactical stack for regenerative technologists, soilpunks,
            lunarpunks, and off-grid dreamers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Staying Incoherent</h3>
            <p className="text-muted-foreground leading-relaxed">
              Resist legibility. When systems can't read you, they can't capture you. ZKN's mix-net-based routing
              shields all communication—no IPs, no timing attacks, no fingerprint trails.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Shuffle className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Rapid Adaptation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Like mycelium responding to environmental changes, we evolve faster than extractive systems can adapt.
              Fluidity is resistance.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Emergent Resilience</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strength through diversity and connection. No single point of failure, no central authority to corrupt or
              capture.
            </p>
          </Card>
        </div>

        <div className="p-8 rounded-lg bg-muted/30 border border-border space-y-4">
          <h3 className="text-2xl font-bold font-mono text-primary">{"> underground_principles"}</h3>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="text-accent">$</span>
              <span className="text-muted-foreground">stay_incoherent --against-surveillance</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">$</span>
              <span className="text-muted-foreground">mesh_connect --resilient-by-design</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">$</span>
              <span className="text-muted-foreground">adapt_fast --fail-safe-evolution</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">$</span>
              <span className="text-muted-foreground">decompose_extraction --regenerate</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">$</span>
              <span className="text-muted-foreground">zk_proof --without-exposure</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border space-y-2">
            <p className="text-foreground font-semibold font-mono">→ Operate at layer∅</p>
            <p className="text-muted-foreground text-sm">
              Like mushrooms in trophic flows, be the foundational infrastructure that transforms energy and nourishes
              the ecosystem—ever-present, essential, yet invisible to extractive eyes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
