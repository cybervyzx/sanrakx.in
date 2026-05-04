"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Academy', href: 'https://academy.sanrakx.in' },
    { name: 'Freelance', href: 'https://freelance.sanrakx.in' },
    { name: 'Devs', href: 'https://dev.sanrakx.in' },
    { name: 'Team', href: '/team' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      {/* Glass Container */}
      <div className={`mx-auto transition-all duration-500 ${scrolled ? 'max-w-5xl px-2' : 'max-w-7xl px-6 lg:px-8'}`}>
        <div className={`relative flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.06)]' : 'bg-transparent px-0 py-0'}`}>
          
          <div className="flex items-center gap-2 z-10">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-md shadow-md shadow-blue-600/20 flex items-center justify-center">
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </div>
              SanrakX
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 z-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 z-10">
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">System Live</span>
             </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-10">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 glass-panel rounded-3xl p-6 shadow-2xl border border-slate-200"
          >
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base font-semibold text-slate-700 py-2 border-b border-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                 {/* Authentication links removed as requested */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
