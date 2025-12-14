import { Terminal } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Mycelial background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mycelium" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M50 0 L50 100 M0 50 L100 50 M20 20 L80 80 M80 20 L20 80"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mycelium)" />
        </svg>
      </div>

      {/* Bioluminescent glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl bio-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl bio-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mb-4">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm text-primary">{"> initializing mesh network..."}</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance">
          <span className="text-foreground">undernet</span>
          <span className="text-primary">.earth</span>
        </h1>

        <p className="text-2xl md:text-3xl font-serif italic text-primary/80 text-balance">
          Community-Owned Infrastructure for Local Resilience
        </p>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
          Build your own internet infrastructure with privacy-first hardware and open-source software.
          <span className="block mt-2 text-lg">
            Run local servers. Own your data.{" "}
            <span className="text-primary">Connect communities without corporate control.</span>
          </span>
        </p>

        <div className="pt-8">
          <div className="mycelial-line w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  )
}
