import { motion } from 'motion/react';
import { Activity, Database, Layers, Network } from 'lucide-react';

export default function Approach() {
  return (
    <div className="bg-brand-primary text-white pt-20">
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-mono text-brand-accent text-[10px] font-extrabold tracking-[0.2em] uppercase mb-6 block underline underline-offset-8">The Starting Point</span>
              <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-tighter mb-8 leading-[1.05]">
                Digital-age consulting requires <span className="text-brand-accent italic">precision.</span>
              </h1>
              <p className="text-xl text-white opacity-70 mb-10 leading-relaxed font-light">
                Most companies are organized around manual coordination. We rebuild your process from the ground up, moving from human-heavy handoffs to <span className="text-white border-b border-brand-accent">Autonomous Orchestration</span>.
              </p>
              
              <div className="space-y-0 border-t border-white/10">
                <div className="grid grid-cols-2 py-8 border-b border-white/10 italic text-base">
                  <span className="opacity-40 uppercase tracking-widest text-xs font-bold">Traditional (Before)</span>
                  <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Zero-Based (After)</span>
                </div>
                <div className="grid grid-cols-2 py-8 border-b border-white/5 text-lg">
                  <span className="opacity-60 font-light">Linear Scaling</span>
                  <span className="font-bold flex items-center gap-2">Exponential Speed <Activity className="w-4 h-4 text-brand-accent" /></span>
                </div>
                <div className="grid grid-cols-2 py-8 border-b border-white/5 text-lg">
                  <span className="opacity-60 font-light">Manual Data Silos</span>
                  <span className="font-bold flex items-center gap-2">Unified Intelligence <Database className="w-4 h-4 text-brand-accent" /></span>
                </div>
                <div className="grid grid-cols-2 py-8 border-b border-white/5 text-lg">
                  <span className="opacity-60 font-light">Structural Friction</span>
                  <span className="font-bold flex items-center gap-2">Zero-Base Design <Layers className="w-4 h-4 text-brand-accent" /></span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative group bg-black/40">
                {/* Abstract Data Visualization Background */}
                <div className="absolute inset-0 opacity-20 overflow-hidden">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.3, 0.1] 
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.2)_0%,transparent_70%)]"
                  />
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200&h=1600" 
                  alt="Abstract AI Nodes" 
                  className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* SVG Overlay for "Modern Consulting" Data Viz feel */}
                <svg className="absolute inset-0 w-full h-full p-12 pointer-events-none opacity-40" viewBox="0 0 400 500">
                  <motion.circle cx="100" cy="100" r="4" fill="currentColor" className="text-brand-accent" />
                  <motion.circle cx="300" cy="150" r="3" fill="currentColor" className="text-white" />
                  <motion.circle cx="150" cy="350" r="5" fill="currentColor" className="text-brand-accent" />
                  <motion.circle cx="350" cy="400" r="3" fill="currentColor" className="text-white" />
                  
                  <motion.path 
                    d="M 100 100 Q 200 120 300 150" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    className="text-white/20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.path 
                    d="M 150 350 Q 250 370 350 400" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    className="text-white/20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.path 
                    d="M 100 100 L 150 350" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    className="text-brand-accent/30"
                  />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -right-6 p-8 glass rounded-xl text-white max-w-[320px] border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Network className="w-5 h-5 text-brand-accent" />
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-60 underline underline-offset-4 decoration-brand-accent">System Intelligence</p>
                </div>
                <p className="text-base font-bold leading-snug">Companies that rebuild around AI generate structural moats that traditional competitors cannot buy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5 bg-brand-primary/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="font-mono text-brand-accent text-[10px] font-extrabold tracking-[0.2em] uppercase mb-4 block underline underline-offset-8">The bifurcation of advantage</span>
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight">The implementation gap.</h2>
            <p className="text-xl text-white/60 max-w-3xl mt-6 font-light leading-relaxed">
              We are seeing a major split in how companies grow. The digital age reward speed and accuracy, leaving legacy coordination models behind. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl bg-white/5 border border-white/10 group hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="w-6 h-6 border-2 border-dashed border-white/40 rounded-full animate-spin-slow" />
                </div>
                <h3 className="text-2xl font-bold text-white/40">Manual Legacy</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-white/20 font-mono text-xs mt-1">01</span>
                  <span className="text-white/50 text-base font-light">Linear headcount growth required for scale.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white/20 font-mono text-xs mt-1">02</span>
                  <span className="text-white/50 text-base font-light">Decision loops constrained by human approval speed.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white/20 font-mono text-xs mt-1">03</span>
                  <span className="text-white/50 text-base font-light">Fragmented data preventing real-time steering.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 group hover:border-brand-accent/40 transition-all relative overflow-hidden"
            >
              {/* Decorative data lines */}
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-4 bg-brand-accent rounded-full" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-accent/20 rounded-lg">
                  <Layers className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-brand-accent">AI-Native Velocity</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent/40 font-mono text-xs mt-1">01</span>
                  <span className="text-white text-base font-medium">Infinite operational scale with zero marginal cost.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent/40 font-mono text-xs mt-1">02</span>
                  <span className="text-white text-base font-medium">Autonomous agents processing 24/7 at compute speed.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent/40 font-mono text-xs mt-1">03</span>
                  <span className="text-white text-base font-medium">Synthesized intelligence for instant, strategic pivots.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-20 p-12 border border-white/10 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent text-center group hover:bg-white/[0.04] transition-all">
            <h4 className="text-3xl font-bold mb-6">The Road Ahead</h4>
            <p className="max-w-2xl mx-auto text-white/70 leading-relaxed font-light">
              We specialize in closing this implementation gap. By fixing the structural bottlenecks in your current model, we unlock the velocity required to win in the next decade.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-brand-primary text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold mb-12 tracking-tight">Modernizing the core.</h2>
            <div className="grid md:grid-cols-3 gap-12 text-left">
              <div className="p-6 border-l border-brand-accent/30">
                <h5 className="font-bold mb-3 uppercase tracking-widest text-[10px] text-brand-accent">Synthesis</h5>
                <p className="text-sm opacity-60 font-light">Turning raw operational data into actionable competitive insights.</p>
              </div>
              <div className="p-6 border-l border-brand-accent/30">
                <h5 className="font-bold mb-3 uppercase tracking-widest text-[10px] text-brand-accent">Orchestration</h5>
                <p className="text-sm opacity-60 font-light">Aligning agentic AI and human expertise into a single execution layer.</p>
              </div>
              <div className="p-6 border-l border-brand-accent/30">
                <h5 className="font-bold mb-3 uppercase tracking-widest text-[10px] text-brand-accent">Velocity</h5>
                <p className="text-sm opacity-60 font-light">Reducing decision-to-delivery time from weeks down to minutes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
