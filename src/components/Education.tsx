import { motion } from 'motion/react';
import { School } from 'lucide-react';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-20 bg-surface-low">
      <div className="max-w-4xl">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold text-white mb-4">Historial Académico</h2>
          <div className="h-1 w-20 bg-primary-container rounded-full glow-primary"></div>
        </div>

        <div className="space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 group"
            >
              <div className="flex-none flex flex-col items-center">
                <div className="w-12 h-12 rounded-sm bg-surface-high border border-outline-variant/30 flex items-center justify-center group-hover:border-primary-container/50 transition-colors">
                  <School className="w-6 h-6 text-primary-container" />
                </div>
                {index !== education.length - 1 && (
                  <div className="w-px h-full bg-outline-variant/30 mt-4"></div>
                )}
              </div>
              <div className="pb-8">
                <span className="text-[10px] font-mono font-bold text-primary-container tracking-widest uppercase">{item.period}</span>
                <h4 className="text-xl font-bold text-white mt-1 tracking-tight group-hover:text-primary-container transition-colors">{item.title}</h4>
                <p className="text-on-surface-variant text-sm mt-1 font-medium">{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
