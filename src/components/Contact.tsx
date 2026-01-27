import React from 'react';
import { MetalPanel } from './ui/MetalPanel';
export function Contact() {
  return (
    <section id="contact" className="py-24 px-8 border-t border-gray-800">
      <div className="max-w-3xl mx-auto">
        <MetalPanel className="p-12 text-center rounded-sm">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            OPEN TO OPPORTUNITIES
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Actively Seeking full-time roles in Data Science, Analytics, and Data Engineering.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:jluca98@hotmail.com"
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded border border-gray-600 font-medium hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg">

              Say Hello
            </a>
            <a
              href="/John Lucaccioni Resume.pdf"
              download="John Lucaccioni Resume.pdf"
              className="px-8 py-4 bg-black/20 border border-white/20 text-gray-300 rounded hover:border-white/40 transition-colors">

              Download Resume
            </a>
          </div>
        </MetalPanel>
        <footer className="mt-12 text-center text-sm text-gray-600">
          © 2026 John Lucaccioni. Built with React & Tailwind.
        </footer>
      </div>
    </section>);

}