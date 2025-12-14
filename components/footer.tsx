import { Terminal } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              {'>_> METACELIUM_v0.1.0'}
            </span>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-muted-foreground">
              Building underground. Staying incoherent. Adapting faster.
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              undernet.earth | {new Date().getFullYear()}
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
