import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, LockOpen } from 'lucide-react';
export function DigitLock() { 
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [digits, setDigits] = useState(['0', '0', '0', '0']);
  const [_, setLockedDigits] = useState([false, false, false, false]);
  useEffect(() => {
    const target = ['2', '0', '2', '6'];
    const locked = [false, false, false, false];
    
    // Spin all digits every 50ms (unless locked)
    const spinInterval = setInterval(() => {
      setDigits((prev) =>
        prev.map((_, i) =>
          locked[i] ? target[i] : Math.floor(Math.random() * 10).toString()
        )
      );
    }, 50);

    // Lock digits sequentially every 200ms
    let currentIndex = 0;
    const lockInterval = setInterval(() => {
      if (currentIndex < 4) {
        locked[currentIndex] = true;
        setLockedDigits([...locked]);
        setDigits((prev) => {
          const newDigits = [...prev];
          newDigits[currentIndex] = target[currentIndex];
          return newDigits;
        });
        currentIndex++;
      } else {
        clearInterval(lockInterval);
        clearInterval(spinInterval);
        setIsUnlocked(true);
      }
    }, 300);

    return () => {
      clearInterval(spinInterval);
      clearInterval(lockInterval);
    };
  }, []);
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Container with border around digits and lock */}
      <div className="inline-flex items-center gap-6 px-8 py-6 bg-black/20 border border-gray-700/50 rounded-lg">
        <div className="flex gap-3">
          {digits.map((digit, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: -10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: i * 0.1
            }}
            className="w-16 h-20 bg-[#1a1f2e] border border-gray-700 rounded-md flex items-center justify-center">

              <span className="text-4xl font-bold text-white font-mono">
                {digit}
              </span>
            </motion.div>
          )}
        </div>

        {/* Lock icon - red when locked, green when unlocked */}
        <div className="flex items-center justify-center w-14 h-14">
          {isUnlocked ?
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.3
            }}>

              <LockOpen size={32} className="text-emerald-400" />
            </motion.div> :

          <Lock size={32} className="text-red-500" />
          }
        </div>
      </div>

      {/* System unlocked text */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: isUnlocked ? 1 : 0
        }}
        transition={{
          delay: isUnlocked ? 0.3 : 0
        }}
        className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">

        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>System_Unlocked</span>
      </motion.div>
    </div>);

}