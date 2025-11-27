import { Sprout, Zap, Network, CircuitBoard } from "lucide-react"
import { Card } from "@/components/ui/card"

export function UnderthrowSection() {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            The <span className="text-primary">Underthrow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Not an overthrow from above, but an <span className="text-primary font-semibold">underthrow</span> from
            below. We don't topple zombified legacy institutions—we compost them by growing resilient alternatives
            beneath their foundations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 space-y-4 bg-card/50 backdrop-blur-sm border-primary/30">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sprout className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">From Decay, New Life</h3>
            <p className="text-muted-foreground leading-relaxed">
              Zombified institutions are rigid, extractive, and unable to adapt. Like dead wood in a forest, they become
              substrate for mycelial networks. We don't fight them—we metabolize them, transforming their inertia into
              compost for regenerative systems.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-card/50 backdrop-blur-sm border-secondary/30">
            <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Zap className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold">Radical Adaptivity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Organizations become alive again when they embrace metabolic flows: rapid iteration, distributed
              intelligence, permeable boundaries. The underthrow replaces brittle hierarchies with adaptive, networked
              organisms.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-card/50 backdrop-blur-sm border-accent/30">
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
              <Network className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">Growing Alternatives Underground</h3>
            <p className="text-muted-foreground leading-relaxed">
              Build parallel systems that function better, adapt faster, and nourish communities. When people choose the
              alternative because it works, legacy systems wither naturally. Underthrow through creation, not
              destruction.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-card/50 backdrop-blur-sm border-primary/30">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
              <CircuitBoard className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Breathing Life Into Structure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Organizational adaptivity means embracing change as metabolism. Zero-knowledge coordination, riparian data
              flows, and fractal governance allow collectives to sense, respond, and evolve—transforming stasis into
              living process.
            </p>
          </Card>
        </div>

        <div className="p-8 rounded-lg bg-card/50 border border-primary/30 space-y-6">
          <h3 className="text-2xl font-bold font-mono text-primary text-center">{"> underthrow_by_example"}</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-accent text-2xl font-mono mt-1">✱</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Build better tools</span> for coordination,
                communication, and resource sharing—tools that respect sovereignty and regenerate value.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-accent text-2xl font-mono mt-1">✱</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Compost old structures</span> by extracting their
                nutrients (knowledge, networks, resources) while leaving behind the toxins (hierarchy, extraction,
                coercion).
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-accent text-2xl font-mono mt-1">✱</span>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Grow adaptive networks</span> that sense and respond in
                real-time, learning from every interaction, evolving with every challenge.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xl italic text-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              The underthrow is already happening. Every resilient community, every sovereign network, every adaptive
              organization is a node in the METACELIUM—decomposing extraction, nourishing regeneration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
