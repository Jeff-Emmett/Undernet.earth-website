import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function NetworkSection() {
  const networks = [
    {
      name: "MycoFi",
      url: "https://mycofi.earth",
      description:
        "Post-appitalist economic substrate. Build collaborative currencies and mutual credit systems outside traditional banking.",
      tags: ["mycoeconomics", "folkjs", "web3"],
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
      description:
        "Building digital tools beyond extractive platforms. FolkJS-powered collaborative substrates for economic and democratic experimentation.",
      tags: ["folkjs", "liberation", "commons"],
    },
    {
      name: "ZKNetwork",
      url: "https://zknet.io",
      description:
        "Privacy-native infrastructure for the Intelligence Era. Metadata-private communications and sovereign compute beyond surveillance capitalism.",
      tags: ["zero-knowledge", "mixnets", "infrastructure"],
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
            A constellation of projects building collaborative substrates for economic, democratic, and computational
            design—outside the domain of big tech. New tools for coordination beyond surveillance capitalism.
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
          <pre className="font-mono text-xs text-primary/30 leading-tight mx-auto">
{`         ·───────·───────·
        /|\\     /|\\     /|\\
   ────·─┼─────·─┼─────·─┼─────
        \\|/     \\|/     \\|/
         ·───────·───────·`}
          </pre>
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "Zero knowledge encryption. Mix networks. Local secure hardware. FolkJS coordination substrates. The tools
            for post-appitalist infrastructure exist today."
          </p>
          <pre className="font-mono text-xs text-primary/30 leading-tight mx-auto">
{`         ·───────·───────·
        \\|/     \\|/     \\|/
   ────·─┼─────·─┼─────·─┼─────
        /|\\     /|\\     /|\\
         ·───────·───────·`}
          </pre>
        </div>

        <div className="mt-16 text-center space-y-6 p-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
          <h3 className="text-4xl font-bold">Build Outside Big Tech</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building collaborative substrates for economic and democratic experimentation—powered by FolkJS,
            MycoFi currencies, and ZKN privacy infrastructure. New computational design patterns beyond extractive
            platforms.
          </p>
          <p className="text-2xl font-bold text-primary">Zero Knowledge + Local Hardware + FolkJS = Post-Appitalism</p>
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "Technology for communities, not corporations. Infrastructure you own, software you control, data that stays
            private. Join the undernet."
          </p>
        </div>
      </div>
    </section>
  )
}
