import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
export function Portfolio() {
  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <div className="min-h-screen bg-[#0f1419] text-gray-200">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />


      <Navigation onNavigate={handleNavigate} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>);

}