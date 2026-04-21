import React from 'react';
import { motion } from 'motion/react';
import { Code2, Layout, Palette, Database } from 'lucide-react';
import { mainSkills, otherSkills, personalInfo } from '../data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Palette,
  Database
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-20 bg-background relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block"
            >
              Expertis
            </motion.span>
            <h2 className="font-headline text-5xl font-bold text-white mb-4">Habilidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Técnicas</span></h2>
            <p className="text-on-surface-variant text-lg font-light max-w-xl leading-relaxed">Combinación de diseño creativo y lenguajes de programación modernos.</p>
          </div>
          <div className="font-mono text-[11px] text-white font-bold uppercase tracking-[0.2em] px-6 py-3 glass-card rounded-xl border-primary/20">
            <span className="text-primary">ESPAÑOL</span> ({personalInfo.languages.spanish.toUpperCase()}) <span className="text-outline-variant mx-3">|</span> <span className="text-primary">INGLÉS</span> ({personalInfo.languages.english.toUpperCase()})
          </div>
        </div>

        {/* Main Skills Progress */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {mainSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 glass-card rounded-2xl group hover:shadow-[0_0_20px_rgba(0,242,255,0.1)]"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-sm text-white group-hover:text-primary transition-colors tracking-tight">{skill.name}</span>
                <span className="text-[10px] font-mono text-primary/50 group-hover:text-primary transition-colors">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 bg-background border border-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(0,242,255,0.3)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {otherSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.name] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <div className="relative glass-card p-10 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 border-white/5 group-hover:border-primary/20">
                  <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest text-on-surface-variant group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
