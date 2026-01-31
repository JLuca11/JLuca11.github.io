import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { DigitLock } from './DigitLock';
export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-8 pt-20 relative">

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="text-center max-w-4xl relative z-10">

        <div className="inline-block px-4 py-1.5 mb-8 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs font-mono font-medium tracking-wider uppercase text-emerald-400">
          Available for Hire
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight tracking-tight">
          <span className="text-white">John Lucaccioni</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Developer Portfolio
          </span>
        </h1>

        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
        Turning raw data into clear, usable insights through data science and analytics.
        </p>

        <DigitLock />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2,
          duration: 1
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-600">

        <ChevronDown size={32} className="animate-bounce" />
      </motion.div>
    </section>);

}