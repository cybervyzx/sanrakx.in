"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { 
  Terminal, Code, Layers, Zap, BookMarked, MonitorPlay, ArrowRight, CheckCircle2, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// Refined, ultra-premium background with scroll-based parallax
const NextGenBackground = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      
      {/* Subtle Mesh Gradients with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-400/20 blur-[120px] rounded-full"
      />
      <motion.div 
        style={{ y: y2 }}
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-indigo-400/20 blur-[100px] rounded-full"
      />

      {/* Premium Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      ></div>
      
      {/* Ambient floating particles */}
      {mounted && (
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/40 rounded-full"
              initial={{ 
                x: Math.random() * 100 + "vw", 
                y: Math.random() * 100 + "vh",
                opacity: Math.random() * 0.5
              }}
              animate={{ 
                y: [null, Math.random() * -100 + "vh"],
                opacity: [null, 0.5, 0]
              }}
              transition={{ 
                duration: Math.random() * 20 + 20, 
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

export default function AcademyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] relative font-sans overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      <NextGenBackground />
      <Navbar />

      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 z-10 flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold tracking-wide text-slate-600 mb-8 shadow-sm backdrop-blur-md hover:border-slate-300 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Introducing SanrakX Academy 2.0
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl lg:text-[5.5rem] font-semibold text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              Master the art of <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block pb-2">
                Software Engineering.
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light mb-12">
              Learn full-stack development, cloud architecture, and system design from top 1% industry experts. No fluff, just pure engineering excellence.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="https://dashboard.sanrakx.com" 
                  className="group relative inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl text-sm font-medium shadow-xl shadow-slate-900/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <MonitorPlay size={18} /> 
                  <span>Explore Curriculum</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="#features" 
                  className="inline-flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-sm font-medium shadow-sm hover:bg-slate-50 hover:text-slate-900"
                >
                  View Syllabus <ChevronRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-20 flex flex-col items-center justify-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <p className="text-sm font-medium text-slate-500 tracking-wider uppercase">Trusted by Engineers at</p>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12 items-center font-bold text-slate-800 text-xl tracking-tight">
                <motion.span whileHover={{ scale: 1.1, color: "#3b82f6" }} className="flex items-center gap-2 transition-colors cursor-pointer"><Layers size={24} className="text-blue-500" /> Vertex</motion.span>
                <motion.span whileHover={{ scale: 1.1, color: "#eab308" }} className="flex items-center gap-2 transition-colors cursor-pointer"><Zap size={24} className="text-yellow-500" /> NovaCloud</motion.span>
                <motion.span whileHover={{ scale: 1.1, color: "#6366f1" }} className="flex items-center gap-2 transition-colors cursor-pointer"><Code size={24} className="text-indigo-500" /> Synthetics</motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Feature Section */}
      <section id="features" className="py-24 relative z-20 bg-white/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Engineered for your success.</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">Everything you need to become a top-tier software engineer, meticulously crafted into a single platform.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Card spanning 2 columns */}
            <ScrollReveal className="md:col-span-2 group">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 h-full relative overflow-hidden flex flex-col justify-between"
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent opacity-80 rounded-bl-full pointer-events-none"
                />
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 ring-4 ring-blue-50/50"
                  >
                    <Terminal size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Production-Grade Projects</h3>
                  <p className="text-slate-500 leading-relaxed max-w-md">
                    Don't just watch videos. Build highly scalable microservices, implement complex CI/CD pipelines, and deploy real-world architectures to production.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4 relative z-10">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-sm text-slate-600 font-medium cursor-default"><CheckCircle2 size={16} className="text-blue-500" /> Distributed Systems</motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-sm text-slate-600 font-medium cursor-default"><CheckCircle2 size={16} className="text-blue-500" /> Cloud Native</motion.div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Dark Card */}
            <ScrollReveal delay={0.1} className="group">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-slate-900 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 ring-4 ring-white/5 backdrop-blur-md"
                  >
                    <BookMarked size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Industry-Vetted Curriculum</h3>
                  <p className="text-slate-400 leading-relaxed font-light">
                    Our syllabus is strictly aligned with the exact tech stacks and architectural patterns used at top product-based companies.
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Standard Card */}
            <ScrollReveal delay={0.2} className="group">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 h-full relative overflow-hidden"
              >
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100/50 rounded-full blur-2xl pointer-events-none"
                 />
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 ring-4 ring-purple-50/50"
                  >
                    <Code size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Live Code Reviews</h3>
                  <p className="text-slate-500 leading-relaxed font-light">
                    Get your pull requests reviewed by Senior Engineers who will mercilessly perfect your code and system design approaches.
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
            
            {/* Large Card spanning 2 columns */}
            <ScrollReveal delay={0.3} className="md:col-span-2 group">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full flex flex-col sm:flex-row items-center gap-8 overflow-hidden"
              >
                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Elevate Your Engineering Career</h3>
                  <p className="text-slate-500 leading-relaxed mb-6 font-light">
                    Join a community of elite developers. Access high-quality resources, private technical workshops, and direct mentorship from industry leaders.
                  </p>
                  <Link href="https://dashboard.sanrakx.com" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link">
                    Get Started Now 
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                      <ArrowRight size={18} />
                    </motion.span>
                  </Link>
                </div>
                <div className="w-full sm:w-1/3 aspect-square rounded-2xl bg-gradient-to-tr from-blue-50 to-indigo-50 border border-slate-100 flex items-center justify-center shadow-inner relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
                   <motion.div 
                     animate={{ rotate: [0, 10, -10, 0] }} 
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   >
                     <Zap size={48} className="text-blue-500 relative z-10 drop-shadow-md" />
                   </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
