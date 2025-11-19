import { Shield, Shuffle, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function UndergroundSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Building <span className="text-primary">Underground</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The most resilient networks grow beneath the surface, invisible to extractive systems, 
            adapting faster than they can be captured or commodified.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Staying Incoherent</h3>
            <p className="text-muted-foreground leading-relaxed">
              Resist legibility. When systems can't read you, they can't capture you. 
              Embrace the glitch, the noise, the spaces between categories.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Shuffle className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Rapid Adaptation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Like mycelium responding to environmental changes, we evolve faster than 
              extractive systems can adapt. Fluidity is resistance.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Emergent Resilience</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strength through diversity and connection. No single point of failure, 
              no central authority to corrupt or capture.
            </p>
          </Card>
        </div>

        <div className="p-8 rounded-lg bg-muted/30 border border-border space-y-4">
          <h3 className="text-2xl font-bold font-mono text-primary">{'> underground_principles'}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-foreground font-semibold">→ Build in the margins</p>
              <p className="text-muted-foreground text-sm">Where surveillance is weak and control is loose</p>
            </div>
            <div className="space-y-2">
              <p className="text-foreground font-semibold">→ Connect underground</p>
              <p className="text-muted-foreground text-sm">Invisible networks that nourish resistance</p>
            </div>
            <div className="space-y-2">
              <p className="text-foreground font-semibold">→ Embrace illegibility</p>
              <p className="text-muted-foreground text-sm">What can't be measured can't be managed</p>
            </div>
            <div className="space-y-2">
              <p className="text-foreground font-semibold">→ Adapt continuously</p>
              <p className="text-muted-foreground text-sm">Evolution as strategy, mutation as tactic</p>
            </div>
            <div className="space-y-2 md:col-span-2">
              <p className="text-foreground font-semibold font-mono">→ Operate at layer∅</p>
              <p className="text-muted-foreground text-sm">
                Like mushrooms in trophic flows, be the foundational infrastructure that transforms energy 
                and nourishes the ecosystem—ever-present, essential, yet invisible to extractive eyes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
