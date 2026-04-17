import { ReactNode, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { name: "Horizon", href: "/" },
  { name: "Approach", href: "/approach" },
  { name: "Execution", href: "/execution" },
  { name: "Economics", href: "/economics" },
  { name: "Contact", href: "/contact" }
];

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Always show at the top
        if (currentScrollY < 100) {
          setIsVisible(true);
        } else {
          // Hide if scrolling down, show if scrolling up
          if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="min-h-screen font-sans bg-brand-paper text-brand-text">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-xl px-8 py-4 shadow-sm">
          <Link to="/">
            <Logo className="h-10" />
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href} 
                className={({ isActive }) => 
                  `text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive ? 'text-brand-accent underline underline-offset-8' : 'text-brand-text/70 hover:text-brand-accent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/contact">
              <button className="bg-brand-accent text-white px-6 py-3 rounded-md text-[11px] font-bold uppercase tracking-[0.15em] hover:brightness-110 transition-all shadow-lg shadow-brand-accent/20">
                Get Started
              </button>
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-brand-primary pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href} 
                className={({ isActive }) => 
                  `text-2xl font-display font-light ${isActive ? 'text-brand-accent' : 'text-white'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
      )}

      <main className="pt-28">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-brand-primary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/">
            <Logo className="h-12" />
          </Link>
          
          <div className="flex gap-8 text-sm font-medium text-white/40">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
            <a href="#" className="hover:text-white transition-colors">Intelligence</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>

          <p className="text-[10px] text-white/20 font-mono tracking-widest uppercase">
            © 2026 INFLECTION PARTNERS. VALUE CREATION AT LIGHTSPEED.
          </p>
        </div>
      </footer>
    </div>
  );
}
