"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { 
  ArrowRight, Terminal, Database, ShieldCheck, 
  GitBranch, Server, Cpu, Command
} from 'lucide-react';
import Link from 'next/link';
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
        className="absolute top-[10%] left-[20%] w-96 h-96 bg-slate-400/10 blur-[100px] rounded-full"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-slate-600/10 blur-[120px] rounded-full"
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-multiply"></div>
      
      {mounted && (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-slate-800 rounded-full shadow-[0_0_8px_rgba(15,23,42,0.8)]"
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

export default function DevsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] relative font-sans overflow-hidden">
      <NextGenBackground />
      <Navbar />

      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold uppercase tracking-widest text-slate-200 mb-8">
              SanrakX Devs
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium text-slate-900 leading-[0.95] mb-8 tracking-tight">
              Elite Engineering. <br />
              <span className="text-slate-600">On Demand.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Hire our internal swat team of senior engineers to architect, build, and scale your enterprise infrastructure.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl text-sm font-semibold hover:bg-slate-800 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <Terminal size={18} /> Schedule a Technical Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Cloud Native Architecture", desc: "We design resilient microservices using Docker, Kubernetes, and highly available edge deployments.", icon: <Server /> },
              { title: "Performance Optimization", desc: "Database indexing, query caching, and Rust/Go rewrites to achieve sub-millisecond P99 latency.", icon: <Cpu /> },
              { title: "Enterprise Security", desc: "Rigorous penetration testing, strict RBAC, and AES-256 encrypted data pipelines.", icon: <ShieldCheck /> },
              { title: "Full CI/CD Automation", desc: "Zero-downtime deployments with automated testing and rollback capabilities.", icon: <GitBranch /> }
            ].map((feat, i) => (
              <ScrollReveal key={i} delay={0.1 * i} className="perspective-1000 group">
                <div className="bg-slate-900 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-slate-800 hover:border-slate-600 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 transform hover:-translate-y-2 hover:rotate-x-2 hover:-rotate-y-1 h-full">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feat.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
