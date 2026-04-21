import React from 'react';
import { navItems } from '../data/portfolio';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-72 z-40 flex-col bg-surface border-r border-outline-variant/30 pt-16">
      <div className="p-8 flex flex-col gap-1 h-full">
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = LucideIcons[item.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 px-4 py-3 text-on-surface/60 hover:text-on-surface hover:bg-surface-highest transition-all rounded-sm group"
              >
                {Icon && <Icon className="w-5 h-5 group-hover:text-primary-container transition-colors" />}
                <span className="font-medium text-sm">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-outline-variant/20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">Disponible para trabajar</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
