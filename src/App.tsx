/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ErrorBoundary } from './components/ErrorBoundary';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Learning from './components/Learning';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-on-surface selection:bg-primary-container/30 selection:text-white">
        <Header />
        <Sidebar />

        <main className="lg:pl-72 min-h-screen">
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Learning />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </ErrorBoundary>
  );
}

