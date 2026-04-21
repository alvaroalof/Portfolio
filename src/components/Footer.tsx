import React from 'react';
import { socialLinks, personalInfo } from '../data/portfolio';
import * as LucideIcons from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 lg:px-20 bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
              <span className="text-primary font-black italic">A</span>
            </div>
            <div className="text-2xl font-headline font-bold text-white tracking-tighter">
              {personalInfo.firstName} <span className="text-primary italic">{personalInfo.lastName.split(' ')[0]}</span>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant font-mono uppercase tracking-[0.3em] font-medium opacity-60">
            © {new Date().getFullYear()} • Diseñado con pasión por la excelencia digital
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {socialLinks.map((social) => {
            const Icon = LucideIcons[social.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-all"
              >
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border-white/5 group-hover:border-primary/30 group-hover:-translate-y-1 transition-all duration-500">
                  {Icon && <Icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />}
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant group-hover:text-white uppercase tracking-[0.2em] transition-colors">{social.label}</span>
              </a>
            );
          })}
        </div>
      </div>
      
      {/* Subtle background text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/5 whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
        Portfolio {new Date().getFullYear()}
      </div>
    </footer>
  );
}
