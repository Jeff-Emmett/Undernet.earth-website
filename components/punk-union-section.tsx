import { Sun, Moon, Leaf } from "lucide-react"

export function PunkUnionSection() {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Philosophy <span className="text-primary">& Practice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining renewable energy optimism with privacy tools and grounded, community-based action. Building
            infrastructure that resists capture and serves communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Solarpunk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Renewable energy, open hardware, and the tools to build sustainable tech. Optimism grounded in
                  building what we need ourselves.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Moon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Lunarpunk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Privacy tools, encrypted communication, and resistance to surveillance. Building systems that stay
                  invisible to extractive platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Soilpunk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Start where you are, build from the ground up. Transform old institutions by growing resilient
                  alternatives that work for communities, not corporations.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card/50 border border-border space-y-3">
              <h4 className="font-mono text-sm text-primary">{"> in_practice"}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span>
                  <span>
                    <strong className="text-foreground">Lichenpunk:</strong> Cooperative networks, shared resources
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span>
                  <span>
                    <strong className="text-foreground">Mycopunk:</strong> Mesh networking, distributed intelligence
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span>
                  <span>
                    <strong className="text-foreground font-mono">layer∅:</strong> Foundational infrastructure everyone
                    relies on
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "We build the <span className="font-mono text-primary">layer∅</span> infrastructure—the foundational systems
            that communities depend on, run by the people who use them."
          </p>
        </div>
      </div>
    </section>
  )
}
