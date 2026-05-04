"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Next-Gen Pulsing Background Component
const NextGenBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-multiply"></div>
      
      {mounted && (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              initial={{ 
                x: Math.random() * 100 + "vw", 
                y: Math.random() * 100 + "vh",
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{ 
                y: [null, Math.random() * -200 + "vh"],
                opacity: [null, 0.8, 0]
              }}
              transition={{ 
                duration: Math.random() * 20 + 10, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] relative font-sans overflow-hidden">
      <NextGenBackground />
      <Navbar />

      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-widest text-blue-600 mb-8">
              Contact Us
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium text-slate-900 leading-[0.95] mb-8 tracking-tight">
              Let’s Work <span className="text-blue-600">Together.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light mb-12">
              Have a project in mind or need help? We’re here to build something amazing with you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 relative z-20 pb-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={0.2} className="perspective-1000 group">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 transform hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-1">
              
              <form className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="w-full mt-4 bg-blue-600 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
