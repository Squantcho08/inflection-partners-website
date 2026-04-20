import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Tie to email via mailto
    const subject = encodeURIComponent("Strategic Transformation Inquiry");
    const body = encodeURIComponent(`Hello Inflection Partners,\n\nI am interested in starting a transformation audit for my organization. My work email is: ${email}\n\nPlease reach out to me with next steps.`);
    window.location.href = `mailto:hello@inflectionpartners.io?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-paper min-h-screen pt-20 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-10 md:p-20 rounded-[2.5rem] bg-brand-primary border border-white/10 flex flex-col items-center relative overflow-hidden group shadow-2xl"
          >
            {/* Ambient background glow for card */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-accent/20 blur-[100px] rounded-full group-hover:bg-brand-accent/30 transition-all duration-1000" />
            
            <span className="font-mono text-brand-accent text-[10px] font-extrabold tracking-[0.3em] uppercase mb-8 block underline underline-offset-8">Contact</span>
            
            {!submitted ? (
              <>
                <h2 className="text-5xl md:text-7xl font-sans font-extrabold mb-10 tracking-tighter leading-tight text-white">
                  Transform your <span className="text-brand-accent italic">execution.</span>
                </h2>
                
                <p className="text-xl mb-12 text-white/70 max-w-xl mx-auto font-light leading-relaxed">
                  Schedule a strategic audit and discover how to rebuild your organization around <span className="text-white font-medium border-b border-brand-accent/30">Autonomous Intelligence</span>.
                </p>
                
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 relative z-10">
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Work Email" 
                      className="w-full px-8 py-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent focus:bg-white/[0.08] transition-all"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full px-12 py-5 bg-brand-accent text-white rounded-xl font-bold text-[13px] uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-brand-accent/20">
                    Start Transformation
                  </button>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12"
              >
                <CheckCircle2 className="w-20 h-20 text-brand-accent mb-8" />
                <h3 className="text-3xl md:text-5xl font-sans font-extrabold text-white mb-6">Inquiry Initiated.</h3>
                <p className="text-white/70 max-w-sm mb-10 font-light">
                  Your mail client has been opened. If it didn't trigger, click below to send manually.
                </p>
                <a 
                  href={`mailto:hello@inflectionpartners.io?subject=Strategic Transformation Inquiry&body=Work Email: ${email}`}
                  className="px-8 py-4 border border-brand-accent/30 text-brand-accent rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-accent/5 transition-all"
                >
                  Send Manually
                </a>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-white/30 text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                >
                  Go Back
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5 bg-brand-primary/50 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border-l border-brand-accent/20"
          >
            <h4 className="font-mono text-brand-accent text-[10px] font-extrabold uppercase tracking-widest mb-4">Base Operations</h4>
            <p className="text-2xl text-white font-extrabold tracking-tight">Austin, TX</p>
            <p className="text-sm text-white/40 mt-2 font-light">Supporting global transformation from the heart of Texas.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 border-l border-brand-accent/20"
          >
            <h4 className="font-mono text-brand-accent text-[10px] font-extrabold uppercase tracking-widest mb-4">Intelligence Inquiries</h4>
            <a href="mailto:hello@inflectionpartners.io" className="text-2xl text-white font-extrabold tracking-tight hover:text-brand-accent transition-colors block">
              hello@inflectionpartners.io
            </a>
            <p className="text-sm text-white/40 mt-2 font-light">Direct line for strategic partnership and system audits.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 border-l border-brand-accent/20"
          >
            <h4 className="font-mono text-brand-accent text-[10px] font-extrabold uppercase tracking-widest mb-4">Neural Network</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.linkedin.com/company/inflection-partners-ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-white font-extrabold tracking-tight hover:text-brand-accent transition-colors"
              >
                LinkedIn
              </a>
              <p className="text-sm text-white/40 font-light italic">Connect with our operator ecosystem.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
