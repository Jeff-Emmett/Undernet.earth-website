import { Sun, Moon, Leaf } from 'lucide-react'

export function PunkUnionSection() {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            The Union of <span className="text-primary">Punks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Solar meets lunar in the rich soil beneath our feet. The synthesis of high-tech optimism 
            and low-tech resilience births new forms of resistance.
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
                  Renewable energy, technological optimism, and the belief that we can build 
                  a sustainable future through innovation and cooperation.
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
                  Privacy, anonymity, and the shadows. Building systems that resist surveillance 
                  and control, staying incoherent to the panopticon.
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
                  Grounded in the earth, building from the bottom up. Composting the old to nourish 
                  the new, recognizing that all growth begins in the soil.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card/50 border border-border space-y-3">
              <h4 className="font-mono text-sm text-primary">{'> emerging_forms'}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span>
                  <span><strong className="text-foreground">Lichenpunk:</strong> Symbiotic relationships, mutual aid networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span>
                  <span><strong className="text-foreground">Mycopunk:</strong> Decomposition and regeneration, network intelligence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "We are the fungi breaking down the dead wood of capitalism, 
            the lichen colonizing the ruins, the mycelium connecting the forest floor."
          </p>
        </div>
      </div>
    </section>
  )
}
