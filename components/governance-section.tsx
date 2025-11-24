import { GitBranch, Users, Lock, Leaf } from "lucide-react"

export function GovernanceSection() {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            <span className="text-primary">Mycelial</span> Governance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Like a forest's root network, our governance is distributed yet coherent, regenerative yet efficient,
            resilient yet sovereign, encrypted yet transparent (by consent).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GitBranch className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">DAØ Stack</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ZKN's fully-private, modular DAØ model—powered by MycoFi principles—supports regenerative incentive
                  flows and non-coercive decision-making.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Fractal Coordination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Adaptable, fractal, and resistant to centralization. Governance patterns that scale from individuals
                  to communities to networks.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Opt-In Participation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All participation is opt-in, verifiable, and privacy-preserving. No coercion, no extraction, no
                  compulsion.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Regenerative Flows</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Incentive structures that nourish the commons. Value flows that regenerate rather than extract, grow
                  rather than deplete.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-lg bg-card/50 border border-primary/30 text-center space-y-4">
          <p className="text-xl italic text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            "To govern without being governed.
            <br />
            To verify without revealing.
            <br />
            To coordinate without coercion."
          </p>
        </div>
      </div>
    </section>
  )
}
