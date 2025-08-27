"use client";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";

export const CollapsibleNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "mx-auto max-w-[calc(42rem+3px)] rounded-full shadow-2xl backdrop-blur-2xl border border-white/20 dark:border-slate-700/40 mt-4" 
          : "mx-auto max-w-7xl backdrop-blur-xl border border-white/20 dark:border-slate-700/40"
      }`}
      style={{
        background: isScrolled 
          ? 'var(--navbar-bg-default)'
          : 'rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className={`transition-all duration-500 ${
        isScrolled ? "px-8 py-3" : "px-6 py-4"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center space-x-3 font-bold transition-all duration-500 ${
            isScrolled ? "text-base" : "text-xl"
          } text-foreground`}>
            {/* Logo Icon Placeholder */}
            <div className={`flex items-center justify-center font-bold backdrop-blur-xl border border-foreground/20 shadow-lg transition-all duration-300 ${
              isScrolled ? "w-6 h-6 rounded-lg" : "w-8 h-8 rounded-xl"
            } bg-gradient-to-br from-foreground/10 to-foreground/5`}>
              <span className="text-foreground text-xs">K</span>
            </div>
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Startup</span>
          </div>
          
          {/* Center Navigation */}
          <nav className={`hidden md:flex items-center space-x-10 transition-all duration-500 ${
            isScrolled ? "opacity-100 scale-100" : "opacity-100 scale-100"
          }`}>
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-all duration-300 text-sm font-medium hover:scale-105">
              Features
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-all duration-300 text-sm font-medium hover:scale-105">
              Pricing
            </a>
            <a href="/contact" className="text-foreground/80 hover:text-foreground transition-all duration-300 text-sm font-medium hover:scale-105">
              Contact
            </a>
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className={`text-foreground/80 hover:text-foreground transition-all duration-300 font-medium hover:scale-105 ${
              isScrolled ? "px-3 py-1 text-xs" : "px-4 py-1 text-sm"
            }`}>
              Login
            </button>
            <button className={`bg-foreground/10 backdrop-blur-xl border border-foreground/20 text-foreground rounded-xl hover:bg-foreground/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium ${
              isScrolled ? "px-3 py-1 text-xs" : "px-5 py-1 text-sm"
            }`}>
              Book a call
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
