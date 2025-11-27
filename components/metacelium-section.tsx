import { Network, Zap, Sprout } from "lucide-react"
import { Card } from "@/components/ui/card"

export function MetaceliumSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            The <span className="text-primary">Undernet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A decentralized mesh network for communities, powered by open hardware and privacy-preserving software. Like
            fungal networks in nature, the undernet connects people and devices into a resilient, community-controlled
            infrastructure.
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
            : Privacy infrastructure for secure communication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Network className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Decentralized by Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              No single point of control. The network runs on community hardware with encrypted connections between
              nodes—your devices, your neighbors, your data.
            </p>
          </Card>

          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Adapt & Evolve</h3>
            <p className="text-muted-foreground leading-relaxed">
              Start with one home router, grow to neighborhood mesh networks. ZKN's verifiable credentials and mixnets
              ensure privacy scales with your community.
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
            The <span className="text-primary font-mono">layer∅</span> Protocol
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Fungi are the foundation layer of forest ecosystems—breaking down, connecting, redistributing nutrients. ZKN
            is the <span className="text-primary font-mono">layer∅ protocol</span> for digital infrastructure: enabling
            secure, private communication at every level. Privacy as infrastructure, not as an afterthought.
          </p>
        </div>
      </div>
    </section>
  )
}
