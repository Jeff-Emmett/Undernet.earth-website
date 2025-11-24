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
            A living substrate of resistance and regeneration, an underground network of sovereign technologies and
            resilient communities. Like mycelium beneath the forest floor, METACELIUM connects disparate nodes—humans,
            machines, ideas—into a dynamic, decentralized mesh.
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
            : A modular privacy infrastructure for the Intelligence Era.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Network className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Distributed Intelligence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mycelial networks don't have CEOs. Intelligence emerges from decentralized, resilient, and encrypted
              nodes—both biological and computational.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Transmorph & Adapt</h3>
            <p className="text-muted-foreground leading-relaxed">
              Like fungi decomposing toxic waste, we compost dead institutions. ZKN's mixnets and verifiable credentials
              ensure secure transformation—proof without exposure.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Sprout className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Grounded Emergence</h3>
            <p className="text-muted-foreground leading-relaxed">
              ZKN bridges the ethereal and the physical through fog computing, zkEdge hardware, and modular
              mix-net-based communication channels—each rooted in real soil, real communities, and real intent.
            </p>
          </Card>
        </div>

        <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
          <h3 className="text-3xl font-bold mb-4 text-center">
            The <span className="text-primary font-mono">layer∅</span> Foundation
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Mushrooms are the <span className="text-primary font-mono">layer∅</span> organisms—the foundational stratum
            of trophic energy flows in ecological systems. In digital systems, ZKN forms the{" "}
            <span className="text-primary font-mono">layer∅ protocol</span>—enabling secure, verifiable, and
            privacy-preserving interactions at every level. Just as mycelium channels nutrients in the forest, ZKN
            routes zero-knowledge encrypted data, with intention as its guiding force.
          </p>
        </div>
      </div>
    </section>
  )
}
