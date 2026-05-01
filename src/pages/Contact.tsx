import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!validateEmail(email)) {
      setError('Please enter a valid work email address.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) {
        let errorMsg = 'The inquiry service is currently unavailable.';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMsg = errorData.error || errorMsg;
          } else {
            const text = await response.text();
            console.error('[Contact API Error] Non-JSON response:', text);
            errorMsg = `Server Connection Issue (${response.status}). Please try again later.`;
          }
        } catch (e) {
          errorMsg = `Network Error (${response.status}).`;
        }
        throw new Error(errorMsg);
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
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
            
            <span className="font-mono text-brand-accent text-[10px] font-extrabold tracking-[0.3em] uppercase mb-8 block underline underline-offset-8">Deployment</span>
            
            {!submitted ? (
              <>
                <h2 className="text-5xl md:text-7xl font-sans font-extrabold mb-10 tracking-tighter leading-tight text-white">
                  Transform your <span className="text-brand-accent italic">execution.</span>
                </h2>
                
                <p className="text-xl mb-12 text-white/70 max-w-xl mx-auto font-light leading-relaxed">
                  Schedule a strategic audit and discover how to rebuild your organization around <span className="text-white font-medium border-b border-brand-accent/30">Autonomous Intelligence</span>.
                </p>
                
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 relative z-10">
                  <div className="space-y-4">
                    <div className="relative">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Work Email" 
                        className="w-full px-8 py-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent focus:bg-white/[0.08] transition-all disabled:opacity-50"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="relative">
                      <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly describe your inquiry..." 
                        rows={3}
                        className="w-full px-8 py-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent focus:bg-white/[0.08] transition-all disabled:opacity-50 resize-none"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  {error && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <p className="text-red-400 text-xs font-mono text-center leading-relaxed">
                        {error}
                        {error.includes('RESEND_API_KEY') && (
                          <span className="block mt-2 opacity-80 underline underline-offset-4">
                            Ensure the API key is set in your environment settings.
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full px-12 py-5 bg-brand-accent text-white rounded-xl font-bold text-[13px] uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-brand-accent/20 disabled:scale-100 disabled:brightness-75 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : 'Start Your Transformation'}
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
                <h3 className="text-3xl md:text-5xl font-sans font-extrabold text-white mb-6">Inquiry Received.</h3>
                <p className="text-white/70 max-w-sm mb-10 font-light text-center">
                  We've received your transformation request. Our team will review your profile and reach out via <span className="text-brand-accent font-medium">{email}</span> within 24 hours.
                </p>
                <div className="flex flex-col gap-4 w-full max-w-xs">
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-4 border border-brand-accent/30 text-brand-accent rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-accent/5 transition-all w-full"
                  >
                    Send Another message
                  </button>
                </div>
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
            <h4 className="font-mono text-brand-accent text-[10px] font-extrabold uppercase tracking-widest mb-4">Physical Base</h4>
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
            <h4 className="font-mono text-brand-accent text-[10px] font-extrabold uppercase tracking-widest mb-4">Strategic Intake</h4>
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
            <h4 className="font-mono text-brand-accent text-[10px] font-extrabold uppercase tracking-widest mb-4">Public Network</h4>
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
