import { motion, useScroll, useTransform } from 'motion/react';
import { Activity, Database, Layers, Network, Zap, Target, BarChart3 } from 'lucide-react';

export default function Approach() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="bg-brand-primary text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-mono text-brand-accent text-[10px] font-extrabold tracking-[0.2em] uppercase mb-6 block underline underline-offset-8">Our Identity</span>
              <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-tighter mb-8 leading-[1.05]">
                Execution Partners,<br /><span className="text-brand-accent">not just advisors.</span>
              </h1>
              <p className="text-xl text-white opacity-70 mb-10 leading-relaxed font-light">
                We embed within your operations to take <span className="text-white font-medium border-b border-brand-accent/30">accountability for outcomes</span>. As former operators, we don't just deliver advice—we deliver the systems and workflows that drive real-world results.
              </p>
              
              <div className="space-y-0 border-t border-white/10">
                <div className="grid grid-cols-2 py-8 border-b border-white/10 italic text-base">
                  <span className="opacity-40 uppercase tracking-widest text-xs font-bold">Manual Model (Before)</span>
                  <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">AI-Augmented (After)</span>
                </div>
                <div className="grid grid-cols-2 py-8 border-b border-white/5 text-lg">
                  <span className="opacity-60 font-light">Linear Growth</span>
                  <span className="font-bold flex items-center gap-2">Exponential Speed <Activity className="w-4 h-4 text-brand-accent" /></span>
                </div>
                <div className="grid grid-cols-2 py-8 border-b border-white/5 text-lg">
                  <span className="opacity-60 font-light">Internal Friction</span>
                  <span className="font-bold flex items-center gap-2">Unified Workflows <Database className="w-4 h-4 text-brand-accent" /></span>
                </div>
                <div className="grid grid-cols-2 py-8 border-b border-white/5 text-lg">
                  <span className="opacity-60 font-light">Legacy Tech Debt</span>
                  <span className="font-bold flex items-center gap-2">Ground-Up Efficiency <Layers className="w-4 h-4 text-brand-accent" /></span>
                </div>
              </div>
            </div>

            <motion.div style={{ y: yParallax }} className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative group bg-black/40 cursor-pointer shadow-2xl">
                <div className="absolute inset-0 opacity-20 overflow-hidden">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.3, 0.1] 
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.2)_0%,transparent_70%)]"
                  />
                </div>
                
                <motion.img 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200&h=1600" 
                  alt="Abstract AI Nodes" 
                  className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay group-hover:opacity-100 transition-all duration-700"
                  whileHover={{ scale: 1.05, filter: "grayscale(0) brightness(1.1) contrast(1.1)" }}
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute -bottom-6 -right-6 p-8 glass rounded-xl text-white max-w-[320px] border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Network className="w-5 h-5 text-brand-accent" />
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-60 underline underline-offset-4 decoration-brand-accent">Operational Logic</p>
                  </div>
                  <p className="text-base font-bold leading-snug">Companies that rebuild around AI generate speed and efficiency that competitors can't easily replicate.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bifurcation / Advantage Section - Moved up to set context */}
      <section className="py-24 px-6 bg-brand-primary relative border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="font-mono text-brand-accent text-[10px] font-extrabold tracking-[0.2em] uppercase mb-4 block underline underline-offset-8">The Market Context</span>
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight">The divide in competitiveness.</h2>
            <p className="text-xl text-white/60 max-w-3xl mt-6 font-light leading-relaxed">
              We are seeing a clear split in how companies grow. Modern leaders win by moving faster, while those stuck with manual processes face higher costs and slower delivery times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-10 rounded-2xl bg-white/5 border border-white/10 opacity-60">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="w-6 h-6 border-2 border-dashed border-white rounded-full opacity-40 shrink-0" />
                </div>
                <h3 className="text-2xl font-bold text-white/40 uppercase tracking-tighter">Manual Processes</h3>
              </div>
              <ul className="space-y-4 text-white/40 font-light italic text-sm">
                <li>• Adding headcount is the only way to scale</li>
                <li>• Decisions get stuck in manual approval loops</li>
                <li>• Fragmented data slows down every workflow</li>
              </ul>
            </div>

            <div className="p-10 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 relative overflow-hidden ring-1 ring-brand-accent/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-accent/20 rounded-lg text-brand-accent">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-accent uppercase tracking-tighter">AI-Enabled Speed</h3>
              </div>
              <ul className="space-y-4 text-white font-medium text-sm">
                <li>• Scale operations without proportional hiring</li>
                <li>• Automated systems handle routine delivery</li>
                <li>• Clearer data visibility for faster decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Mission Section */}
      <section className="py-24 px-6 bg-brand-primary relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.03)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
              <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
              Our Mission
            </div>
            
            <div className="relative">
              <span className="absolute -top-10 -left-6 text-9xl font-serif text-white/5 select-none font-black italic">"</span>
              <h3 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tighter text-white leading-tight">
                We believe the implementation gap is where most value is lost. <span className="text-brand-accent">We take accountability</span> for our solutions until value is realized.
              </h3>
              <span className="absolute -bottom-20 -right-6 text-9xl font-serif text-white/5 select-none font-black italic">"</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Execution Roadmap Section */}
      <section className="py-24 px-6 border-y border-white/5 bg-brand-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-brand-accent text-[10px] font-extrabold tracking-[0.2em] uppercase mb-4 block underline underline-offset-8">Phase-by-Phase</span>
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight text-white">The Path to Delivery.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "01. Identify", 
                desc: "We analyze your current operations to find real bottlenecks where AI can improve your bottom line and scale impact.",
                action: "Defining Goals",
                icon: <Target className="w-5 h-5" />
              },
              { 
                title: "02. Plan", 
                desc: "We rethink roles and plan your architecture, combining intelligence with your team's existing knowledge domain.",
                action: "System Design",
                icon: <BarChart3 className="w-5 h-5" />
              },
              { 
                title: "03. Implement", 
                desc: "We act as your execution partners, embedding with your team to build, launch, and optimize until success is realized.",
                action: "Active Delivery",
                icon: <Zap className="w-5 h-5" />
              }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-accent/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-primary rounded-lg border border-white/5 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.2em] font-bold">{step.action}</span>
                </div>
                <h3 className="font-extrabold text-2xl text-white tracking-tighter mb-4 group-hover:text-brand-accent transition-colors">{step.title}</h3>
                <p className="text-brand-text opacity-60 leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary / Call to Action */}
      <section className="py-24 px-6 border-t border-white/5 bg-brand-primary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-sans font-extrabold mb-12 tracking-tight text-white">The outcome: A more efficient way to work.</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="p-6 border-l border-brand-accent/30">
              <h5 className="font-bold mb-3 uppercase tracking-widest text-[10px] text-brand-accent">Visibility</h5>
              <p className="text-sm opacity-60 font-light text-white/70">Turning operational data into clear insights that drive your strategy.</p>
            </div>
            <div className="p-6 border-l border-brand-accent/30">
              <h5 className="font-bold mb-3 uppercase tracking-widest text-[10px] text-brand-accent">Automation</h5>
              <p className="text-sm opacity-60 font-light text-white/70">Connecting automated workflows with high-level team expertise.</p>
            </div>
            <div className="p-6 border-l border-brand-accent/30">
              <h5 className="font-bold mb-3 uppercase tracking-widest text-[10px] text-brand-accent">Scalability</h5>
              <p className="text-sm opacity-60 font-light text-white/70">Building systems that handle the heavy lifting so you can grow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
