"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { Target, Lightbulb, Users, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Professional Animated Aurora Background (Matching Homepage)
const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-multiply"></div>
      
      {/* Smooth, slow-moving pastel gradients */}
      <motion.div 
        animate={{ 
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "-5%", "5%", "0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: ["0%", "-5%", "5%", "0%"],
          y: ["0%", "5%", "-5%", "0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-400/15 rounded-full blur-[150px]"
      />
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] relative font-sans overflow-hidden">
      <AuroraBackground />
      <Navbar />

      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 z-10 flex flex-col items-center justify-center text-center">
        {/* Subtle Hero Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-[100%] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm text-xs font-semibold text-slate-700 mb-8">
              About SanrakX
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.05] mb-8 tracking-tight">
              Build. Learn. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">Grow.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              SanrakX is a next-generation digital ecosystem designed to simplify how people learn, build, and collaborate.
            </p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              We bring together freelance services, education, and development under one unified platform — empowering individuals and businesses to grow faster and smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is SanrakX */}
      <section className="py-24 bg-white/40 backdrop-blur-md relative z-10 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">What is SanrakX?</h2>
              <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
                SanrakX isn't just a platform; it's a unified digital architecture. We realized that learning, hiring, and building were fragmented across dozens of disconnected tools. SanrakX brings them together into a single, seamless ecosystem.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1} className="lg:col-span-1">
              <div className="bg-blue-600 rounded-[2rem] p-10 h-full text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] relative overflow-hidden transition-transform hover:-translate-y-1 duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3"></div>
                <h3 className="text-2xl font-semibold mb-4 relative z-10">The Problem</h3>
                <p className="text-blue-100 font-light leading-relaxed relative z-10">
                  Historically, developers had to learn on one platform, build portfolios on another, and hunt for freelance work on a third. Businesses struggled to vet talent and manage disjointed teams.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <div className="bg-slate-900 rounded-[2rem] p-10 h-full text-white shadow-xl relative overflow-hidden transition-transform hover:-translate-y-1 duration-500">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px] translate-y-1/2 translate-x-1/3"></div>
                <h3 className="text-2xl font-semibold mb-4 relative z-10">The Unified Solution</h3>
                <p className="text-slate-300 font-light leading-relaxed mb-8 relative z-10">
                  SanrakX eliminates friction by creating a continuous, closed-loop pipeline. You learn high-income skills in the Academy, immediately apply them through Freelance contracts, or leverage our internal Devs agency to build enterprise-scale products without ever leaving the ecosystem.
                </p>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {['Education Core', 'Global Marketplace', 'Enterprise Devs', 'Community'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm font-medium backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1} className="group">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 lg:p-14 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-1 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-100 transition-colors duration-500 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 group-hover:scale-110 transition-transform duration-500">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">Our Mission</h3>
                  <p className="text-lg text-slate-600 font-light leading-relaxed">
                    To create a powerful ecosystem where anyone can build, learn, and grow without limitations.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="group">
              <div className="bg-slate-900 rounded-3xl p-10 lg:p-14 border border-slate-800 shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-1 h-full relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 border border-white/10 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                    <Globe2 size={32} />
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">Our Vision</h3>
                  <p className="text-lg text-slate-400 font-light leading-relaxed">
                    To become a global platform that connects talent, knowledge, and technology seamlessly.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
