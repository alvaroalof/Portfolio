import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Brain, Rocket } from 'lucide-react';
import { learningTopics } from '../data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Brain,
  Sparkles
};

export default function Learning() {
  return (
    <section id="learning" className="py-24 px-6 lg:px-20 bg-surface-low">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold text-white mb-4">Aprendiendo</h2>
          <p className="text-on-surface-variant max-w-lg text-lg leading-relaxed">
            La tecnología no se detiene, y yo tampoco. Estas son las áreas en las que estoy profundizando mis conocimientos actualmente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningTopics.map((topic, index) => {
            const IconComponent = iconMap[topic.icon] || Sparkles;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-surface-high border border-outline-variant/30 rounded-sm hover:border-primary-container/40 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent className="w-24 h-24 -mr-8 -mt-8" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-sm bg-background flex items-center justify-center mb-6 group-hover:bg-primary-container/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-container" />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-primary-container/60 uppercase tracking-widest mb-2 block">
                    {topic.status}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-primary-container transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
