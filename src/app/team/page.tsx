"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Globe, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Professional Animated Aurora Background (Matching Homepage)
const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-multiply"></div>
      
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

export default function TeamPage() {
  const team = [
    {
      name: "Alex Sterling",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      bio: "Former VP of Engineering at Nexus. Architect of the unified ecosystem vision.",
      large: true
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "PhD in Distributed Systems. Leads the core Turbopack and PostgreSQL scaling.",
      large: true
    },
    {
      name: "David Kim",
      role: "Head of AI Architecture",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      bio: "Pioneered our real-time matching algorithms for the freelance marketplace."
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Product",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      bio: "Obsessed with creating frictionless, pixel-perfect user experiences."
    },
    {
      name: "Marcus Thorne",
      role: "Director of Education",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      bio: "Curates the SanrakX Academy. Ex-university professor and senior engineer."
    },
    {
      name: "Jessica Wu",
      role: "Lead Infrastructure",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
      bio: "Maintains our 99.99% uptime and manages the global edge network deployments."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] relative font-sans overflow-hidden">
      <AuroraBackground />
      <Navbar />

      {/* Extreme Team Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 z-10 flex flex-col items-center justify-center">
        {/* Subtle Hero Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-[100%] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm text-xs font-semibold text-slate-700 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              The Core Architecture Team
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.05] mb-8 tracking-tight">
              Built by engineers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">For engineers.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              We are a collective of distributed systems experts, UI/UX perfectionists, and education pioneers dedicated to unifying the digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Core Team - Grid */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal 
                key={i} 
                delay={0.05 * i} 
                className={`${member.large ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
              >
                <div className="group relative block h-full bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-100 transition-colors duration-500 pointer-events-none"></div>

                  <div className={`flex flex-col ${member.large ? 'sm:flex-row' : ''} gap-8 items-center h-full relative z-10`}>
                    <div className={`relative ${member.large ? 'w-48 h-48 lg:w-56 lg:h-56' : 'w-40 h-40'} shrink-0 overflow-hidden rounded-[2rem] shadow-sm`}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <div className="inline-block px-3 py-1 bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full mb-4">
                        {member.role}
                      </div>
                      <h3 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">{member.name}</h3>
                      <p className="text-slate-500 font-light leading-relaxed mb-8">
                        {member.bio}
                      </p>
                      
                      <div className={`flex gap-3 justify-center ${member.large ? 'sm:justify-start' : ''}`}>
                        <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all hover:bg-blue-50">
                          <MessageCircle size={16} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all hover:bg-blue-50">
                          <Globe size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/30 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight relative z-10">
                Help us build the <br /> future of work.
              </h2>
              <p className="text-lg text-slate-400 mb-10 font-light relative z-10 max-w-lg mx-auto">
                We are always looking for exceptional engineers, designers, and educators to join our global remote team.
              </p>
              
              <a 
                href="/careers" 
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl text-sm font-semibold hover:bg-slate-50 transition-all shadow-xl hover:scale-105 duration-300 relative z-10"
              >
                View Open Positions <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
