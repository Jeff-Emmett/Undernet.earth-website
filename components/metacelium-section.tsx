import { Network, Zap, Sprout } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function MetaceliumSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            The <span className="text-primary">METACELIUM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A living network that transmorphs the ethereal noosphere into grounded, emergent movements. 
            Like mycelium beneath the forest floor, METACELIUM connects disparate nodes of resistance 
            and resilience into a coherent—yet incoherent to the system—web of mutual aid.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Network className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Distributed Intelligence</h3>
            <p className="text-muted-foreground leading-relaxed">
              No central authority, no single point of failure. Intelligence emerges from the connections 
              between nodes, adapting faster than any system can capture.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Transmorph & Adapt</h3>
            <p className="text-muted-foreground leading-relaxed">
              Like fungi breaking down dead matter, we compost capitalism's zombie institutions, 
              transforming extractive systems into nutrients for regenerative futures.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Sprout className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Grounded Emergence</h3>
            <p className="text-muted-foreground leading-relaxed">
              From the ethereal to the earthly. Ideas become actions, networks become communities, 
              and the noosphere roots itself in soil, lichen, and mycelium.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
