import { Server, Database, Cloud, Lock } from 'lucide-react'

export function InfrastructureSection() {
  return (
    <section className="py-24 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Self-Provisioned <span className="text-primary">Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Data sovereignty begins with infrastructure sovereignty. Bring the cloud back down to earth 
            through local fog computing and community-owned networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Local Fog Computing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The cloud was always someone else's computer. Fog computing brings computation 
                  back to the edge, to the local, to the community. Process data where it's generated, 
                  keep it close to home.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Data Sovereignty</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your data, your rules. Community data, community governance. No extraction, 
                  no surveillance capitalism, no selling your digital exhaust to the highest bidder.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Server className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Community Infrastructure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mesh networks, community servers, cooperative hosting. Infrastructure as commons, 
                  maintained by those who use it, governed by those who depend on it.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Local Empowerment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technical literacy as liberation. Communities that can provision their own 
                  infrastructure are communities that can't be controlled by tech monopolies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-lg bg-card/50 border border-primary/30 space-y-4">
          <h3 className="text-2xl font-bold font-mono text-primary">{'> infrastructure_stack'}</h3>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="text-accent">$</span>
              <span className="text-muted-foreground">mesh_networks --enable --community-owned</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">$</span>
              <span className="text-muted-foreground">fog_compute --local --edge-processing</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">$</span>
              <span className="text-muted-foreground">data_sovereignty --enforce --no-extraction</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">$</span>
              <span className="text-muted-foreground">cooperative_hosting --deploy --commons-based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
