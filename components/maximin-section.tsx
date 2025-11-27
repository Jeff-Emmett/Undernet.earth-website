import { Scale, TrendingUp, CircleDollarSign, Heart } from "lucide-react"

export function MaximinSection() {
  return (
    <section className="py-24 px-4 relative bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Incentivizing the <span className="text-accent">Worst-Off</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Following Rawls' <span className="font-mono text-primary">maximin principle</span>, systemic policy should
            maximize the welfare of the least advantaged. Not trickle-down, but{" "}
            <span className="italic">bubble-up</span> regeneration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Difference Principle</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  From Rawls' <span className="italic">A Theory of Justice</span> (1971): inequalities are only
                  justifiable if they improve the position of the worst-off members of society.
                </p>
                <div className="font-mono text-sm bg-card/80 p-4 rounded border border-muted">
                  <code className="text-primary">max(min(welfare[i])) ∀ i ∈ society</code>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Leximin Algorithm</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The recursive maximin (leximin) criterion applies Rawlsian fairness from least to most advantaged,
                  satisfying strong Pareto optimality while prioritizing the worst-off.
                </p>
                <p className="text-xs text-muted-foreground">
                  See:{" "}
                  <a
                    href="https://hal.science/hal-03637875/document"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fleurbaey & Maniquet (2022)
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CircleDollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Quadratic Funding</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Buterin, Hitzig & Weyl's 2018 mechanism amplifies small contributions to public goods, ensuring
                  minority voices and "losers" receive disproportionate support.
                </p>
                <div className="font-mono text-sm bg-card/80 p-4 rounded border border-muted mb-2">
                  <code className="text-primary">
                    amount = (Σ √c<sub>i</sub>)²
                  </code>
                </div>
                <p className="text-xs text-muted-foreground">
                  See:{" "}
                  <a
                    href="https://arxiv.org/abs/1809.06421"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Liberal Radicalism: A Flexible Design for Philanthropic Matching Funds (2018)
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">MinMax Fairness</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Algorithmic fairness implementations using Rawls' "veil of ignorance" to operationalize bias reduction
                  and ensure worst-case welfare optimization in AI systems.
                </p>
                <p className="text-xs text-muted-foreground">
                  See:{" "}
                  <a
                    href="https://link.springer.com/article/10.1007/s00146-022-01577-x"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kizilcec & Lee (2022) - AI & Society
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-lg bg-card/50 border border-primary/30">
            <h4 className="text-2xl font-bold mb-4 font-mono text-primary">Algorithmic Implementation</h4>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Recent work operationalizes Rawlsian fairness through objective functions that interpolate between
                utilitarian and maximin goals, allowing systems to be tuned for varying degrees of egalitarianism:
              </p>
              <div className="font-mono text-sm bg-background/80 p-4 rounded border border-muted">
                <code className="text-primary">
                  objective(α) = α · total_welfare + (1-α) · min_welfare
                  <br />
                  where α ∈ [0,1] balances utilitarian vs Rawlsian aims
                </code>
              </div>
              <p className="text-xs">
                See:{" "}
                <a
                  href="https://arxiv.org/abs/2302.03567"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chzhen et al. (2023) - From Utilitarian to Rawlsian Designs for Algorithmic Fairness
                </a>
              </p>
            </div>
          </div>

          <div className="p-8 rounded-lg bg-muted/20 text-center space-y-4">
            <p className="text-xl italic text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              "Systems that incentivize losers become anti-fragile.
              <br />
              When the worst-off thrive, the whole network becomes resilient.
              <br />
              This is not charity—it's intelligent design."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
