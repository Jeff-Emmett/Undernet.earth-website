import { Network, Sprout, GitMerge, Sun, Moon } from "lucide-react"

export function PunkUnionSection() {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Philosophy <span className="text-primary">& Practice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Grounded, underground, networked. Building infrastructure from the soil up, following patterns from nature's
            most resilient systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Mycopunk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mesh networks and distributed intelligence. Building connections underground, sharing resources
                  through encrypted channels, growing where no one's watching.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Sprout className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Soilpunk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Start where you are, build from the ground up. Transform old systems by composting them into fertile
                  substrate for new community-owned infrastructure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <GitMerge className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Lichenpunk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Symbiotic cooperation between different organisms. Networks that share resources, technologies that
                  work together, communities that grow stronger through collaboration.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card/50 border border-border space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-sm text-primary">{"> influenced_by"}</h4>
                <pre className="font-mono text-[10px] text-primary/30 leading-none hidden sm:block">
{`·─┬─·
  │
·─┴─·`}
                </pre>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Solarpunk:</strong>
                    <span className="text-muted-foreground text-sm block mt-1">
                      Renewable energy optimism and open hardware for sustainable tech
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Moon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Lunarpunk:</strong>
                    <span className="text-muted-foreground text-sm block mt-1">
                      Privacy tools and encrypted systems that resist surveillance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card/50 border border-border space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-sm text-primary">{"> layer∅_principles"}</h4>
                <pre className="font-mono text-[10px] text-primary/30 leading-none hidden sm:block">
{`  │
──┼──
  │`}
                </pre>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span>
                  <span>Build foundational infrastructure communities depend on</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span>
                  <span>Run by the people who use them, not corporations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span>
                  <span>Essential yet invisible to extractive systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "We grow the <span className="font-mono text-primary">layer∅</span> infrastructure from the ground
            up—mycelial networks, soil-based resilience, and symbiotic cooperation."
          </p>
        </div>
      </div>
    </section>
  )
}
