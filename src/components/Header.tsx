import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, FileText, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/portfolio';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'h-16 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
            : 'h-24 bg-transparent border-b border-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group" aria-label="Ir al inicio del portfolio">
            <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-[10deg] transition-all duration-500 shadow-[0_0_20px_rgba(0,242,255,0.3)]">
              <span className="text-on-primary-container font-black text-xl italic">A</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-2xl font-headline font-bold tracking-tight text-white hidden sm:block">
              {personalInfo.firstName}<span className="text-primary italic">{personalInfo.lastName.split(' ')[0]}</span>
            </span>
          </a>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              {['Proyectos', 'Habilidades', 'Trayectoria'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item === 'Proyectos' ? 'projects' : item === 'Habilidades' ? 'skills' : 'work'}`}
                  className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-white/5"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              Hablemos
            </motion.a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-3 glass rounded-xl hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-3xl pt-32 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-4 text-center" role="navigation">
              {['Hero', 'Habilidades', 'Trayectoria', 'Proyectos', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="glass p-8 rounded-2xl text-2xl font-headline font-bold text-white hover:text-primary transition-all border-white/5"
                >
                  {item}
                </a>
              ))}
              <a
                href="#cv"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-on-primary-container p-8 rounded-2xl text-2xl font-headline font-bold"
              >
                Currículum
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
