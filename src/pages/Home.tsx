import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/StatCounter';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-7xl md:text-8xl font-sans font-extrabold leading-[1.0] tracking-[-0.06em] mb-8 text-white">
                Value creation <br className="hidden lg:block" />
                at the <span className="text-brand-accent">speed</span> of AI.
              </h1>
              <p className="text-xl text-brand-text opacity-70 max-w-2xl mb-12 leading-relaxed font-light">
                Inflection Partners: <span className="text-white font-bold">Operators, not just advisors.</span> We bring the perspective formed by scaling global functions to help you rebuild your core around AI-native efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/contact">
                  <button className="w-full sm:w-auto px-10 py-5 bg-brand-accent text-white rounded-md font-bold text-[13px] uppercase tracking-[0.15em] hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/20">
                    Execute Now
                  </button>
                </Link>
                <Link to="/approach">
                  <button className="w-full sm:w-auto px-10 py-5 border border-white/10 bg-white/5 text-white rounded-md font-bold text-[13px] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors group">
                    How we operate <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative w-full aspect-square md:aspect-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              <motion.div 
                style={{ y: y1 }}
                className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer"
              >
                <motion.img 
                  src="https://picsum.photos/seed/architecture-minimal/800/1000" 
                  alt="AI-Native Architecture" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                  whileHover={{ scale: 1.1, filter: "grayscale(0) brightness(1.1) contrast(1.1)" }}
                  transition={{ duration: 0.4 }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">Architecture</span>
                  <p className="font-display font-bold text-lg leading-tight">First-Principles Rebuilding</p>
                </div>
              </motion.div>
              <motion.div 
                style={{ y: y2 }}
                className="pt-12"
              >
                <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer">
                  <motion.img 
                    src="https://picsum.photos/seed/execution-fast/800/1000" 
                    alt="Operational Delivery" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                    whileHover={{ scale: 1.1, filter: "grayscale(0) brightness(1.1) contrast(1.1)" }}
                    transition={{ duration: 0.4 }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">Delivery</span>
                    <p className="font-display font-bold text-lg leading-tight">Operational Execution</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className="py-24 px-6 bg-brand-primary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-brand-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block underline underline-offset-8">What comes next</span>
              <h2 className="text-5xl font-sans font-extrabold tracking-tighter mb-8 leading-[1.1] text-white">
                Modern operations require a new approach.
              </h2>
              <p className="text-xl text-brand-text opacity-70 mb-10 leading-relaxed font-light">
                The way companies are organized is changing. We help you move past manual coordination and rebuild your core workflows around results.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-extrabold text-brand-accent">
                    <StatCounter value="20-30%+" />
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">Directional reduction in OpEx</p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-brand-accent">
                    <StatCounter value="10-25%+" />
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-50">Potential Margin Expansion</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  title: "Real Efficiency", 
                  desc: "Stop scaling your team linearly. AI can handle the repetitive work so your people can focus on making big decisions.",
                  icon: <Zap className="w-5 h-5 text-brand-accent" />
                },
                { 
                  title: "A Better Way to Work", 
                  desc: "Develop ways of working that your competitors can't match. When AI is built into your workflows, it creates a lasting advantage.",
                  icon: <Target className="w-5 h-5 text-brand-accent" />
                },
                { 
                  title: "Move Faster", 
                  desc: "Get things done in minutes instead of days. When your team has better information, they can act more quickly.",
                  icon: <BarChart3 className="w-5 h-5 text-brand-accent" />
                }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/5 rounded-xl bg-white/[0.02] hover:border-brand-accent/30 group transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-brand-primary rounded-lg border border-white/5 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white text-xl leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-brand-text opacity-60 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
