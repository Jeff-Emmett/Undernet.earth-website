import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function NetworkSection() {
  const networks = [
    {
      name: "MycoFi",
      url: "https://mycofi.earth",
      description:
        "Fungal finance and decentralized cooperation currencies. Economic systems inspired by mycelial networks.",
      tags: ["mycoeconomics", "regenerative", "web3"],
    },
    {
      name: "Compost Capitalism",
      url: "https://compostcapitalism.xyz",
      description:
        "Breaking down old systems to grow new ones. Decomposing extractive institutions into nutrients for regeneration.",
      tags: ["decomposition", "transformation", "regeneration"],
    },
    {
      name: "Post-Appitalism",
      url: "https://post-appitalism.app",
      description: "Building digital tools beyond extractive platforms. De-siloification and collective ownership.",
      tags: ["de-siloification", "liberation", "commons"],
    },
    {
      name: "ZKNetwork",
      url: "https://zknet.io",
      description:
        "Privacy-native infrastructure for the Intelligence Era. Metadata-private communications and sovereign compute.",
      tags: ["zero-knowledge", "privacy", "infrastructure"],
    },
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            The Network of <span className="text-primary">Networks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The METACELIUM includes ZKN-powered regenerative nodes. Like mycelium connecting trees in a forest, these
            projects form an underground network of regenerative resistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {networks.map((network) => (
            <Card
              key={network.name}
              className="p-6 space-y-4 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all group"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{network.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{network.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {network.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded text-xs font-mono bg-muted/50 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                asChild
              >
                <a
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Explore
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="mycelial-line w-full max-w-2xl mx-auto" />
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "The network is the organism. The organism is the network. We are all nodes in the METACELIUM."
          </p>
          <div className="mycelial-line w-full max-w-2xl mx-auto" />
        </div>

        <div className="mt-16 text-center space-y-6 p-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
          <h3 className="text-4xl font-bold">Be the Network</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are building the <span className="text-primary font-mono">layer∅ internet</span>: Invisible to systems of
            control. Incoherent to extraction. Adaptive to complexity. Aligned with life.
          </p>
          <p className="text-2xl font-bold text-primary">ZKN + Undernet = METACELIUM</p>
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "This network grows in the spaces between systems, in the margins where control is weak. Like mycelium, we
            connect, decompose, and regenerate. Join us underground."
          </p>
        </div>
      </div>
    </section>
  )
}
