import { Network, Zap, Sprout } from "lucide-react"
import { Card } from "@/components/ui/card"

export function MetaceliumSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            The <span className="text-primary">METACELIUM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Applying mycological principles to build resilient systems. Fungi decompose old systems, form new
            connections, and redistribute resources for regeneration.
          </p>
          <p className="text-lg text-primary font-mono">
            Powered by{" "}
            <a
              href="https://zknet.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary/80"
            >
              Zero Knowledge Network (ZKN)
            </a>
            : Mix-net routing, verifiable credentials, and metadata-encrypted communication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Network className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Resilient Infrastructure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fungi thrive where systems break down, turning decomposition into growth. The METACELIUM builds resilient
              infrastructure from composted remains—community hardware with zero-knowledge encrypted connections.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Privacy by Default</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mycelial networks constantly reorganize, finding new pathways around obstacles. ZKN's verifiable
              credentials and mixnets create infrastructure that stays private by design, protecting your data from the
              ground up.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Sprout className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Rooted Locally</h3>
            <p className="text-muted-foreground leading-relaxed">
              Run zk-edge hardware in homes, community centers, and local cooperatives. Real devices in real places,
              owned by the people who use them.
            </p>
          </Card>
        </div>

        <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
          <h3 className="text-3xl font-bold mb-4 text-center">
            Bringing it down to <span className="text-primary font-mono">Layer∅</span>
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Fungi are layer∅ organisms—the foundation of forest ecosystems that everyone depends on but few notice. They
            turn death into life, connecting roots, breaking down toxins, and redistributing nutrients. The METACELIUM
            does the same for digital infrastructure: privacy as the foundational layer, not a luxury feature.
          </p>
        </div>
      </div>
    </section>
  )
}
