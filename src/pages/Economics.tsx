import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import StatCounter from '../components/StatCounter';

const COST_STRUCTURE = [
  { function: "Engineering & Product", shift: "25–40% Potential Saving", target: "More with same team", driver: "AI-assisted coding, automated testing, and faster releases." },
  { function: "Sales & Marketing", shift: "20–35% Resource Shift", target: "Get more leads", driver: "Automated outbound, content creation, and better targeting." },
  { function: "PS, CS & Support", shift: "50–80% More volume", target: "Automated Support", driver: "AI handling most requests without needing a person involved." },
  { function: "G&A & Operations", shift: "30–50% Faster Workflows", target: "Leaner Team", driver: "Automating routine finance, HR, and legal tasks." },
  { function: "AI Systems", shift: "2–3x Planned Investment", target: "Modern Tech Stack", driver: "Spending on LLMs, agent platforms, and better data." }
];

const ROI_INSIGHTS = [
  {
    domain: "Support & CS",
    stat: "60–80%",
    sub: "Tier 1/2 automation today",
    points: ["AI agents handle rules-based tickets", "Shift effort to relationship management"]
  },
  {
    domain: "RevOps & Forecast",
    stat: "90-day",
    sub: "Reliable revenue view",
    points: ["Predictable pipelines = higher multiple", "Actionable activity signals"]
  },
  {
    domain: "Engineering",
    stat: "20–30%",
    sub: "Lift in team productivity",
    points: ["Eliminate QA/release overhead", "AI-native habit compounding"]
  }
];

export default function Economics() {
  return (
    <div className="bg-brand-paper pt-20">
      <section className="py-24 px-6 bg-brand-primary text-white overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <span className="font-mono text-brand-accent text-[10px] font-extrabold tracking-[0.2em] uppercase mb-4 block underline underline-offset-8">Capital Efficiency</span>
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight">The move pays for itself.</h2>
            <p className="text-xl text-white/60 max-w-2xl mt-6">
              Moving to an AI-based model fixes your bottom line. The savings from being more efficient pay for the new technology you need to stay ahead.
            </p>
          </motion.div>

          {/* Cost Structure Table/Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            {/* Desktop Grid View */}
            <div className="hidden lg:block overflow-x-auto pb-6 scrollbar-hide">
              <div className="min-w-[1000px]">
                <div className="grid grid-cols-[1fr_1.5fr_1.2fr_2fr] border-b border-white/10 pb-4 px-4 text-white">
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Department</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 text-brand-accent">Potential Savings</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">The Result</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">Operational Driver</div>
                </div>
                
                {COST_STRUCTURE.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_1.5fr_1.2fr_2fr] items-center border-b border-white/5 py-10 px-4 group hover:bg-white/[0.02] transition-colors rounded-lg">
                    <div className="font-bold text-lg text-white pr-6">{row.function}</div>
                    <div className="text-brand-accent font-extrabold text-2xl tracking-tighter pr-6">
                      <StatCounter value={row.shift} />
                    </div>
                    <div className="text-white/80 pr-6 text-sm italic font-medium">{row.target}</div>
                    <div className="text-xs text-white/40 leading-relaxed font-light max-w-sm">{row.driver}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet Stacked View */}
            <div className="lg:hidden space-y-6">
              {COST_STRUCTURE.map((row, i) => (
                <div key={i} className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest px-2 py-1 bg-brand-accent/10 rounded">Department</span>
                    <h3 className="font-bold text-white text-xl text-right">{row.function}</h3>
                  </div>
                  
                  <div className="py-6 border-y border-white/5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">Potential Savings</p>
                    <div className="text-3xl font-extrabold text-brand-accent tracking-tighter">
                      <StatCounter value={row.shift} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">The Result</p>
                      <p className="text-sm text-white italic">{row.target}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">How it's achieved</p>
                      <p className="text-sm text-white/60 leading-relaxed font-light">{row.driver}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Horizontal Scroll Indicator for Desktop if needed (only visible when hovering or if too wide) */}
            <div className="hidden lg:group-hover:flex absolute left-0 right-0 -bottom-4 justify-center pointer-events-none opacity-50">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/20">
                <ChevronRight className="w-3 h-3 rotate-180" />
                <span>Scroll horizontally to explore impact areas</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10"
            >
              <h4 className="text-lg font-bold mb-4">Reinvesting for growth</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                An AI-based model lets you run a different kind of company. The money you save by cleaning up old workflows pays for the change, letting you grow from a position of strength.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-xl bg-brand-accent/10 border border-brand-accent/20"
            >
              <h4 className="text-lg font-bold mb-4 text-brand-accent">Sustainable Lead</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                Companies that move first can use their savings to build better products and pay their best people more. If you wait, you're stuck with old costs while your competitors move ahead.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Results Section */}
      <section id="insights" className="py-24 px-6 bg-brand-paper">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="font-mono text-brand-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block underline underline-offset-8">ROI Analysis</span>
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight text-white">Where AI is working right now.</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ROI_INSIGHTS.map((insight, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="p-10 bg-white/[0.02] border border-white/5 rounded-xl shadow-sm hover:border-brand-accent/40 hover:bg-white/[0.04] transition-all cursor-default group"
              >
                <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6 group-hover:text-white transition-colors">{insight.domain}</h4>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-white block mb-2 group-hover:text-brand-accent transition-colors">
                    <StatCounter value={insight.stat} />
                  </span>
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">{insight.sub}</span>
                </div>
                <ul className="space-y-4">
                  {insight.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-text/70 font-medium group-hover:text-brand-text transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
