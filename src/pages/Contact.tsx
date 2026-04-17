import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-brand-paper pt-20">
      <section className="py-24 px-6 min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-16 rounded-[3rem] bg-brand-accent text-white flex flex-col items-center shadow-2xl shadow-brand-accent/40"
          >
            <h2 className="text-5xl md:text-6xl font-sans font-extrabold mb-8 tracking-tighter">
              Future-proof your organization.
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-xl mx-auto font-light">
              Schedule a strategic audit and discover how to transition your enterprise to the AI-first world of execution.
            </p>
            <form className="w-full max-w-md space-y-4">
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button className="w-full px-10 py-5 bg-white text-brand-primary rounded-xl font-bold text-[13px] uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-xl">
                Start Your Transformation
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-primary">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h4 className="font-mono text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-4">Location</h4>
            <p className="text-white font-bold">New York, NY / Remote</p>
          </div>
          <div>
            <h4 className="font-mono text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-4">Inquiries</h4>
            <p className="text-white font-bold">hello@inflectionpartners.ai</p>
          </div>
          <div>
            <h4 className="font-mono text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-4">Social</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-white font-bold hover:text-brand-accent transition-colors">LinkedIn</a>
              <a href="#" className="text-white font-bold hover:text-brand-accent transition-colors">Twitter / X</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
