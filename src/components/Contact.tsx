import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import { personalInfo, contactContent } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-20 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/3 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden text-center"
        >
          {/* Decorative floating shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-6 block"
            >
              Conectemos
            </motion.span>
            
            <h2 className="font-headline text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
              ¿Tienes un proyecto <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">interesante?</span>
            </h2>
            
            <p className="text-on-surface-variant max-w-2xl text-xl leading-relaxed mb-16 font-light">
              Estamos a un clic de distancia de crear algo increíble juntos. ¡Hablemos de tus ideas!
            </p>

            <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex-1 flex flex-col gap-6 p-10 glass-card rounded-3xl group border-white/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 mx-auto border border-white/5">
                  <Mail className="w-7 h-7 text-primary group-hover:text-background" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] font-mono block mb-2">Enviar Email</span>
                  <span className="text-lg font-medium text-white break-all">{personalInfo.email}</span>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phoneRaw}`}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex-1 flex flex-col gap-6 p-10 glass-card rounded-3xl group border-white/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500 mx-auto border border-white/5">
                  <Phone className="w-7 h-7 text-accent group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-[0.2em] font-mono block mb-2">Llamar Ahora</span>
                  <span className="text-lg font-medium text-white">{personalInfo.phone}</span>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
