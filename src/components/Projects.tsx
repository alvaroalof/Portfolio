import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, Book, Star, GitFork, ChevronLeft, ChevronRight, AlertCircle, RefreshCw } from 'lucide-react';
import { projectsContent, personalInfo } from '../data/portfolio';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  // Responsive items per view
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=10`);
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
      const data = await response.json();
      const filteredRepos = data.filter((repo: any) => !repo.fork && repo.name && repo.description).slice(0, 9);
      setRepos(filteredRepos);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [retryCount]);

  const maxIndex = Math.max(0, repos.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleRetry = () => setRetryCount(prev => prev + 1);

  return (
    <section id="projects" className="py-32 px-6 lg:px-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mesh opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block"
            >
              Portafolio Seleccionado
            </motion.span>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic pr-4">Destacados</span>
            </h2>
            <p className="text-on-surface-variant font-light text-xl max-w-2xl leading-relaxed">
              Una selección de mis repositorios más recientes, sincronizados directamente desde GitHub.
            </p>
          </div>

          <motion.a
            href={(personalInfo.github || 'https://github.com/alvaroalof') + '?tab=repositories'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-4 w-fit shadow-2xl"
          >
            EXPLORAR TODO
            <ExternalLink className="w-5 h-5 group-hover:text-primary transition-colors duration-500" />
          </motion.a>
        </div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-40 flex justify-center"><RefreshCw className="w-12 h-12 text-primary animate-spin" /></motion.div>
          ) : error ? (
            <motion.div key="error" className="py-24 text-center">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <p className="text-white text-xl mb-8">{error}</p>
              <button onClick={handleRetry} className="bg-primary text-background px-8 py-4 rounded-xl font-bold uppercase tracking-widest">Reintentar</button>
            </motion.div>
          ) : (
            <div className="relative px-4 md:px-16 lg:px-24">
              {/* Central Carousel logic */}
              <div className="overflow-hidden py-10">
                <motion.div 
                  className="flex gap-8"
                  animate={{ x: `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (32 / itemsPerView) * (itemsPerView - 1)}px)` }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  {repos.map((repo) => (
                    <motion.div
                      key={repo.id}
                      className="min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] glass-card rounded-[2.5rem] p-8 md:p-12 flex flex-col group relative preserve-3d"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]"></div>
                      
                      <div className="flex justify-between items-start mb-10 md:mb-12" style={{ transform: 'translateZ(40px)' }}>
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-background rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-all duration-700 shadow-2xl">
                          <Book className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                        </div>
                        <a 
                          href={repo.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all duration-500"
                        >
                          <ArrowRight className="w-6 h-6 md:w-7 md:h-7 -rotate-45 group-hover:rotate-0 transition-transform" />
                        </a>
                      </div>

                      <h4 className="font-headline font-bold text-2xl md:text-3xl text-white mb-4 md:mb-6 group-hover:text-primary transition-colors line-clamp-1" style={{ transform: 'translateZ(60px)' }}>
                        {repo.name.replace(/-/g, ' ')}
                      </h4>

                      <p className="text-on-surface-variant mb-10 md:mb-12 text-base md:text-lg font-light leading-relaxed line-clamp-3 h-[72px] md:h-[84px]" style={{ transform: 'translateZ(30px)' }}>
                        {repo.description}
                      </p>

                      <div className="mt-auto pt-8 md:pt-10 border-t border-white/5 flex items-center justify-between" style={{ transform: 'translateZ(20px)' }}>
                        <span className="px-4 py-1.5 md:px-5 md:py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest">
                          {repo.language || 'Code'}
                        </span>
                        <div className="flex items-center gap-4 md:gap-6 opacity-60 text-xs md:text-sm">
                           <div className="flex items-center gap-2"><Star className="w-3 h-3 md:w-4 md:h-4" /> {repo.stargazers_count}</div>
                           <div className="flex items-center gap-2"><GitFork className="w-3 h-3 md:w-4 md:h-4" /> {repo.forks_count}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              {repos.length > itemsPerView && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 glass rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all z-20 shadow-2xl border border-white/10 group/btn"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 glass rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all z-20 shadow-2xl border border-white/10 group/btn"
                  >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

