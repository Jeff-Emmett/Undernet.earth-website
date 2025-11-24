import { Lock, Eye, Shield, Check } from "lucide-react"
import { Card } from "@/components/ui/card"

export function PrivacySection() {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Privacy is <span className="text-primary">Sovereignty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We reject the false binary between convenience and control. With Zero Knowledge Network, we gain both.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 space-y-6 bg-card/50 backdrop-blur-sm border-primary/30">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Not Secrecy, but Sovereignty</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This is sovereignty—for people, communities, and protocols alike. Privacy enables choice, security, and
                the freedom to coordinate without coercion.
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                "To govern without being governed. To verify without revealing. To coordinate without coercion."
              </p>
            </div>
          </Card>

          <div className="space-y-4">
            {[
              { icon: Shield, text: "Privacy is Security", desc: "The foundation of digital sovereignty" },
              { icon: Eye, text: "Metadata Privacy is Non-Negotiable", desc: "No IPs, no timing, no trails" },
              { icon: Check, text: "Proof is Proof (without exposure)", desc: "Verifiable without revealing" },
              { icon: Lock, text: "Trustlessness over trust", desc: "Cryptography, not promises" },
              { icon: Shield, text: "Censorship Resistance, by design", desc: "Unstoppable communication" },
              { icon: Check, text: "Resilience through modularity", desc: "Decentralized and adaptive" },
            ].map((principle, i) => {
              const Icon = principle.icon
              return (
                <Card key={i} className="p-4 bg-card/30 backdrop-blur-sm flex items-start gap-4 border-border/50">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{principle.text}</p>
                    <p className="text-sm text-muted-foreground">{principle.desc}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
