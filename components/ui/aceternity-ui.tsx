"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Animated Background Component with premium effects
export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background overflow-hidden">
      {/* Premium grid pattern */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Multiple gradient orbs for premium feel */}
      <div className="absolute left-0 right-0 top-0 m-auto h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-30 blur-[120px] animate-pulse"></div>
      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-20 blur-[100px] animate-pulse delay-1000"></div>
      <div className="absolute left-0 bottom-1/4 h-[250px] w-[250px] rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-25 blur-[80px] animate-pulse delay-2000"></div>
      
      {/* Premium animated streaks - now visible */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[4px] h-[500px] bg-gradient-to-b from-transparent via-purple-500/60 to-transparent animate-pulse"
            style={{
              left: `${(i * 18)}%`,
              top: '-250px',
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.5}s`,
              zIndex: 1,
            }}
          />
        ))}
        
        {/* Additional diagonal streaks for more visibility */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`diagonal-${i}`}
            className="absolute w-[3px] h-[600px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-pulse"
            style={{
              left: `${(i * 25) + 10}%`,
              top: '-300px',
              transform: `rotate(${45 + (i * 15)}deg)`,
              animationDelay: `${i * 0.8}s`,
              zIndex: 1,
            }}
          />
        ))}
      </div>

      {/* Floating premium elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full border border-purple-500/20 backdrop-blur-sm"
            animate={{
              x: [0, 150, 0],
              y: [0, -150, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 20 + (i * 2),
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Premium glow lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute right-1/4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent"></div>
      </div>
    </div>
  );
};

// Floating Card Component with purposeful animations and glassmorphism
export const FloatingCard = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`${className} bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
    >
      {children}
    </motion.div>
  );
};

// Gradient Text Component
export const GradientText = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <span className={`bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

// Animated Button Component with glassmorphism
export const AnimatedButton = ({ children, className = "", ...props }: { children: ReactNode; className?: string; [key: string]: any }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${className}`}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0deg,#393BB2_180deg,#E2CBFF_360deg)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 px-8 py-1 text-sm font-medium text-foreground shadow-lg">
        {children}
      </span>
    </motion.button>
  );
};

// Animated Grid Component with glassmorphism
export const AnimatedGrid = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Animated Icon Component with glassmorphism
export const AnimatedIcon = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className={`${className} bg-white/20 dark:bg-slate-800/30 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-2xl p-4 shadow-lg`}
    >
      {children}
    </motion.div>
  );
};

// Glowing Border Component with enhanced glassmorphism
export const GlowingBorder = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-background/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-lg shadow-xl">
        {children}
      </div>
    </div>
  );
};

// Floating Elements Background with glassmorphism
export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15 + (i * 1.5),
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            left: `${(i * 5) % 100}%`,
            top: `${(i * 7) % 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// New Glassmorphism Card Component
export const GlassCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

// New Glassmorphism Button Component
export const GlassButton = ({ children, className = "", ...props }: { children: ReactNode; className?: string; [key: string]: any }) => {
  return (
    <button
      className={`bg-white/20 dark:bg-slate-800/30 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 text-foreground rounded-xl px-6 py-3 hover:bg-white/30 dark:hover:bg-slate-700/40 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
