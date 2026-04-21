import { motion } from 'motion/react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="work" className="py-32 px-6 lg:px-20 bg-background relative overflow-hidden">
      <div className="absolute left-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block"
          >
            Trayectoria
          </motion.span>
          <h2 className="font-headline text-5xl font-bold text-white mb-6 leading-tight">Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Profesional</span></h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full opacity-50"></div>
        </div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Timeline Connector */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 to-transparent"></div>
              
              {/* Animated Timeline Point */}
              <div className="absolute -left-[5px] top-0 w-[11px] h-[11px] rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-500 shadow-[0_0_10px_rgba(0,242,255,0.5)]"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-6 font-mono uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    {exp.period}
                  </span>
                  
                  <h3 className="text-3xl font-bold text-white mb-2 tracking-tight font-headline group-hover:text-primary transition-colors">{exp.title}</h3>
                  <div className="text-lg font-medium text-on-surface-variant/80 mb-6 font-sans italic">{exp.company}</div>
                  
                  <p className="text-on-surface-variant font-light leading-relaxed max-w-3xl text-lg">
                    {exp.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 md:justify-end md:max-w-[240px]">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-surface-high/50 backdrop-blur-sm text-[11px] font-bold rounded-lg border border-outline-variant/50 text-on-surface/70 font-mono group-hover:border-primary/30 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
