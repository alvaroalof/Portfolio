import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import { heroContent, personalInfo } from '../data/portfolio';

export default function Hero() {
  const headlineParts = heroContent.headline.split(' y el ');
  
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-20 px-6 lg:px-20 overflow-hidden bg-mesh">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]"></div>
      
      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl relative z-10 mx-auto w-full grid lg:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="text-primary font-mono text-xs tracking-widest uppercase">
              Desarrollador Full-Stack
            </span>
          </motion.div>

          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-10 text-white">
            {headlineParts[0]} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {headlineParts[1]}
            </span>
          </h1>

          <div className="flex flex-col gap-10">
            <p className="max-w-xl text-on-surface-variant text-xl md:text-2xl leading-relaxed font-light">
              {heroContent.description}
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <motion.a
                href="/CV_Alvaro.pdf"
                download="CV_Alvaro.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-on-primary-container px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-primary/20 flex items-center gap-3 group"
              >
                <FileText className="w-5 h-5" />
                Descargar CV
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-surface-high/50 backdrop-blur-md text-white border border-outline-variant/30 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-surface-highest transition-all flex items-center gap-3"
              >
                Ver Proyectos
              </motion.a>
            </div>

          </div>
        </motion.div>

        {/* Simple elegant animation */}
        <div className="hidden lg:flex justify-center relative">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-80 h-80 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[40%_60%_70%_30%/40%_50%_60%_70%] blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 glass rounded-full border-white/10 flex items-center justify-center p-8">
              <div className="w-full h-full rounded-full border border-primary/20 border-dashed animate-spin-slow"></div>
              <div className="absolute text-7xl font-black text-primary/20 italic select-none">AA</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
