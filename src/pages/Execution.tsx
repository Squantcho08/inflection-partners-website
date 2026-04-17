import { motion } from 'motion/react';

export default function Execution() {
  return (
    <div className="bg-brand-paper pt-20">
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <span className="font-mono text-brand-accent text-[10px] font-extrabold tracking-[0.2em] uppercase mb-6 block underline underline-offset-8 decoration-2 text-brand-accent">Why Inflection Partners</span>
              <h2 className="text-5xl font-sans font-extrabold tracking-tighter mb-8 leading-[1.1] text-white">
                Former Operators,<br />not just advisors.
              </h2>
              <p className="text-xl text-brand-text opacity-70 mb-10 leading-relaxed font-light">
                We have experience scaling global functions across organizations of all sizes—from venture-backed startups to global enterprises. We bring a perspective formed by real-world execution, ensuring every strategy we build is grounded in operational reality.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  title: "01. Identify", 
                  desc: "We look at how your company currently works to find the real bottlenecks. We identify exactly where AI can improve your bottom line.",
                  action: "Defining Goals • Data Review",
                  phases: ["Define target results", "Review current data", "Map out every step"]
                },
                { 
                  title: "02. Plan", 
                  desc: "We build a new model for your operations. This includes planning your data, rethinking roles, and combining AI with your team's knowledge.",
                  action: "System Planning",
                  phases: ["Redesign roles for AI", "AI rollout plan", "90-day execution goals"]
                },
                { 
                  title: "03. Implement", 
                  desc: "We don't just hand over a plan. We work with your team to build and launch the new system until we see the results we planned for.",
                  action: "Direct Implementation",
                  phases: ["Rolling out updates", "Hands-on management", "Measuring success"]
                }
              ].map((step, i) => (
                <div key={i} className="p-8 border border-white/5 rounded-xl bg-white/[0.02] hover:shadow-2xl hover:shadow-brand-accent/5 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-extrabold text-2xl text-white tracking-tighter">{step.title}</h3>
                    <span className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.2em] font-bold">{step.action}</span>
                  </div>
                  <p className="text-brand-text opacity-60 leading-relaxed font-light mb-6">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.phases.map((phase, j) => (
                      <span key={j} className="px-3 py-1 bg-brand-primary rounded-full text-[10px] font-bold text-white/60 border border-white/10 group-hover:border-brand-accent/30 transition-colors">
                        {phase}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-20 border-b border-white/5 overflow-hidden bg-brand-primary/50">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-4xl md:text-6xl font-display font-black uppercase opacity-10 text-white">INFLECTION</span>
              <div className="w-3 h-3 bg-brand-accent rounded-full opacity-20" />
              <span className="text-4xl md:text-6xl font-display font-black uppercase opacity-10 text-white">PARTNERS</span>
              <div className="w-3 h-3 bg-brand-accent rounded-full opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
