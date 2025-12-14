"use client"

import { motion } from "framer-motion"
import { Waves, Sprout, Lock, Share2, RefreshCw } from "lucide-react"

export function RiparianSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Ambient background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.15),transparent_50%)]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-100 mb-6">
            Building <span className="text-cyan-400">Riparian Data</span> Ecosystems
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-mono leading-relaxed">
            Just as the most fertile ecosystems emerge where land meets water, the most powerful digital resilience
            grows at the interface of sovereign privacy and collective intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative p-6 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-zinc-200 mb-3 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-amber-500" />
                Bio-Mimetic Design
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                In nature, riparian buffers filter nutrients and regulate flows between terrestrial and aquatic systems.
                In the undernet, we design data architectures that mirror this—filtering signal from noise, protecting
                the "soil" of individual privacy while nourishing the "stream" of collective knowledge.
              </p>
            </div>

            <div className="relative p-6 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-zinc-200 mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-emerald-500" />
                Trophic Data Flows
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Data shouldn't be extracted; it should cycle. We build closed regenerative loops where information
                shared by the community returns value to the individual. Our protocols weave between local-first
                storage and distributed consensus without data leaks.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-square md:aspect-video flex items-center justify-center"
          >
            {/* Abstract visual representation of riparian mixing */}
            <div className="absolute inset-0 bg-zinc-900 rounded-full blur-3xl opacity-30" />

            <div className="relative w-full h-full max-w-sm">
              {/* Land / Private Data */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-900/40 to-zinc-800/40 rounded-full border border-amber-900/30 backdrop-blur-md flex items-center justify-center z-10"
              >
                <div className="text-center p-4">
                  <Lock className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <div className="font-mono text-xs text-amber-200 uppercase tracking-widest">
                    Sovereign
                    <br />
                    Zero-Knowledge
                  </div>
                </div>
              </motion.div>

              {/* Water / Public Data */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-900/40 to-blue-800/40 rounded-full border border-cyan-900/30 backdrop-blur-md flex items-center justify-center z-10"
              >
                <div className="text-center p-4">
                  <Waves className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                  <div className="font-mono text-xs text-cyan-200 uppercase tracking-widest">
                    Collective
                    <br />
                    Emergence
                  </div>
                </div>
              </motion.div>

              {/* The Riparian Zone / Interface */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl z-0" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-emerald-500/30 rounded-full z-0"
              />

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                <motion.path
                  d="M 100 250 Q 175 175 250 100"
                  fill="none"
                  stroke="url(#gradient-flow)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -8] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="gradient-flow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d97706" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto bg-zinc-900/80 border border-zinc-800 p-8 rounded-xl"
        >
          <h4 className="text-lg font-mono text-cyan-400 mb-4 flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            // ZERO_KNOWLEDGE_ECOSYSTEM_BENEFITS
          </h4>
          <ul className="space-y-4 text-zinc-300 font-sans">
            <li className="flex gap-3">
              <span className="text-emerald-500 font-mono">01.</span>
              <span>
                <strong className="text-zinc-100">Inter-species Signaling:</strong> Allowing disparate data sets to
                communicate and create value without exposing underlying raw data, akin to how mycorrhizal networks
                transfer signals between different plant species.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-mono">02.</span>
              <span>
                <strong className="text-zinc-100">Edge Diversity:</strong> Fostering "edges" where different systems
                meet, maximizing interaction surfaces for innovation while maintaining structural integrity.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-mono">03.</span>
              <span>
                <strong className="text-zinc-100">Generative Privacy:</strong> Privacy not as a wall, but as a
                semi-permeable membrane that allows life-sustaining exchanges while blocking toxins (surveillance,
                extraction).
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
