"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, Terminal, Database, ShieldCheck, Globe2, 
  Briefcase, BookOpen, Code, ChevronRight, Layers, Zap,
  Activity, Command, Cpu, GitBranch, Lock, BarChart3, Users,
  Star, PlayCircle, Trophy, Target, Award, MonitorPlay, Code2,
  CheckCircle2, Bot, Layout, Server, Sparkles, Network, TerminalSquare
} from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// Refined, ultra-premium Aurora Background
const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/60 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-multiply"></div>
      
      {/* Smooth, premium pastel gradients */}
      <motion.div 
        animate={{ 
          opacity: [0.15, 0.25, 0.15], 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-blue-400/20 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1], 
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-indigo-400/20 rounded-full blur-[150px]"
      />

      {/* Premium Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)'
        }}
      ></div>
    </div>
  );
};

const TerminalGame = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'SanrakX OS v2.0.4 initialized.' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'user', text: `root@sanrakx:~# ${input}` }];
      
      if (cmd === 'help') {
        newHistory.push({ type: 'system', text: 'Available commands: help, about, deploy, clear, status' });
      } else if (cmd === 'about') {
        newHistory.push({ type: 'system', text: 'SanrakX is the ultimate digital ecosystem. Build, Learn, Grow.' });
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (cmd === 'deploy') {
        newHistory.push({ type: 'system', text: 'Initiating global deployment sequence...' });
        setTimeout(() => setHistory(h => [...h, { type: 'success', text: '[OK] Edge network synchronized.' }]), 500);
        setTimeout(() => setHistory(h => [...h, { type: 'success', text: '[OK] Services routed and operational.' }]), 1000);
      } else if (cmd === 'status') {
        newHistory.push({ type: 'success', text: 'All systems operational. Ecosystem is LIVE.' });
      } else if (cmd !== '') {
        newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help" for a list of commands.` });
      }
      
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto mt-20 text-left rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-slate-800/80 bg-[#0A0A0A]/90 backdrop-blur-xl perspective-1000 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      
      {/* Window Controls */}
      <div className="bg-[#111111] px-4 py-3 flex items-center justify-between border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
        </div>
        <div className="text-xs font-mono text-slate-400 tracking-wider flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          <TerminalSquare size={14} className="text-slate-500" /> sanrakx-cli
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm sm:text-base h-[280px] overflow-y-auto cursor-text text-slate-300 scrollbar-thin scrollbar-thumb-slate-800" onClick={() => document.getElementById('terminal-input')?.focus()}>
        {history.map((line, i) => (
          <div key={i} className={`mb-2 leading-relaxed ${
            line.type === 'user' ? 'text-slate-300' :
            line.type === 'error' ? 'text-rose-400' :
            line.type === 'success' ? 'text-emerald-400' : 'text-blue-400'
          }`}>
            {line.text}
          </div>
        ))}
        <div className="flex items-center mt-2 group">
          <span className="text-emerald-400 mr-2 flex-shrink-0 font-semibold">root@sanrakx:~#</span>
          <input 
            id="terminal-input"
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none border-none text-slate-200 placeholder-slate-600 font-mono"
            placeholder=""
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen relative font-sans overflow-hidden bg-[#FAFAFA] selection:bg-blue-100 selection:text-blue-900">
      <AuroraBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold tracking-wide text-slate-600 mb-8 shadow-sm backdrop-blur-md hover:border-slate-300 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              SanrakX OS is now globally available
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-semibold text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              Build. Learn. <br />
              Grow with <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">SanrakX.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light mb-12">
              The unified digital ecosystem engineered for the modern web. Hire elite talent, master technical skills, and build robust architectures—all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/register" 
                className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#ecosystem" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-sm font-medium hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all duration-300 shadow-sm w-full sm:w-auto"
              >
                Explore Ecosystem
              </Link>
            </div>
            
            <TerminalGame />
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 bg-white/50 backdrop-blur-md border-y border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200/50">
            {[
              { value: "10,000+", label: "Active Users" },
              { value: "500+", label: "Projects Shipped" },
              { value: "100+", label: "Masterclasses" },
              { value: "99.9%", label: "System Uptime" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={0.1 * i} className="px-4">
                <div className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-2">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SANRAKX */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 ring-4 ring-blue-50/50">
              <Network size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-8">
              One Architecture. <br/><span className="text-slate-400">Infinite Scale.</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              SanrakX is a next-generation digital ecosystem designed to unify the way people learn, build, and collaborate. We merge premium freelance services, rigorous technical education, and enterprise-grade development into a single streamlined architecture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ECOSYSTEM SECTION - Bento Grid */}
      <section id="ecosystem" className="py-24 relative z-10 bg-white/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">The SanrakX Ecosystem</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">Seamlessly integrated tools to empower your digital journey.</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* SanrakX Freelance */}
            <ScrollReveal delay={0.1} className="lg:col-span-2 group">
              <div className="h-full bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-50 to-transparent opacity-80 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 ring-4 ring-indigo-50/50 group-hover:scale-110 transition-transform duration-500">
                    <Globe2 size={28} />
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">SanrakX Freelance</h3>
                  <p className="text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-md">Discover elite talent or get hired for high-impact projects. Collaborate with vetted professionals across development, design, and automation.</p>
                </div>
                <Link href="https://freelance.sanrakx.in" className="mt-auto inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all relative z-10">
                  Explore Freelance <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>

            {/* SanrakX Devs */}
            <ScrollReveal delay={0.2} className="lg:col-span-1 lg:row-span-2 group">
              <div className="h-full bg-slate-900 rounded-3xl p-10 border border-slate-800 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 ring-4 ring-white/5 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                    <Terminal size={28} />
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">SanrakX Devs</h3>
                  <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">Architecting custom-built solutions tailored to your enterprise. Fast, secure, scalable, and highly reliable.</p>
                </div>
                <Link href="https://dev.sanrakx.in" className="mt-auto inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all relative z-10">
                  View Engineering Services <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>

            {/* SanrakX Academy */}
            <ScrollReveal delay={0.3} className="lg:col-span-2 group">
              <div className="h-full bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-50 to-transparent opacity-80 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
                <div className="flex-1 relative z-10">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 ring-4 ring-blue-50/50 group-hover:scale-110 transition-transform duration-500">
                    <BookOpen size={28} />
                  </div>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">SanrakX Academy</h3>
                  <p className="text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-md">Master the art of software engineering. Learn production-grade systems and cloud architecture from industry veterans.</p>
                  <Link href="https://academy.sanrakx.in" className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Start Learning <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Engineered for Excellence</h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">The infrastructure that powers the modern web.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Layers />, title: "Unified Platform", desc: "Manage learning, projects, and enterprise services in one unified dashboard." },
              { icon: <Network />, title: "Scalable Architecture", desc: "Built with modern primitives to grow with your business needs effortlessly." },
              { icon: <ShieldCheck />, title: "Enterprise Security", desc: "Your data is protected with industry-standard encryption and security practices." },
              { icon: <Activity />, title: "Real-Time Telemetry", desc: "Monitor your deployments, projects, and learning metrics instantly." },
              { icon: <MonitorPlay />, title: "Omnichannel Access", desc: "A perfectly responsive experience spanning from high-end desktops to mobile." },
              { icon: <Zap />, title: "Global Edge Network", desc: "Lightning fast delivery powered by globally distributed edge computing." }
            ].map((feat, i) => (
              <ScrollReveal key={i} delay={0.05 * i}>
                <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-600 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                      {feat.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">{feat.title}</h4>
                    <p className="text-slate-500 font-light leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 relative z-10 overflow-hidden bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">The SanrakX Workflow</h2>
              <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">From idea to execution, streamlined in four precise steps.</p>
            </div>
          </ScrollReveal>
          
          <div className="relative">
            {/* Smooth animated progress line */}
            <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-[1px] bg-slate-200">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <div className="grid md:grid-cols-4 gap-12">
              {[
                { num: "01", title: "Initialize", desc: "Create your workspace and configure your environment." },
                { num: "02", title: "Select Target", desc: "Hire an engineer, enroll in a curriculum, or commission a build." },
                { num: "03", title: "Execute", desc: "Push code, complete assignments, or review architecture." },
                { num: "04", title: "Deploy", desc: "Ship your product, get certified, and scale your operations." }
              ].map((step, i) => (
                <ScrollReveal key={i} delay={0.2 * i} className="relative z-10 text-center group">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-20 h-20 mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm group-hover:border-blue-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 flex items-center justify-center text-2xl font-semibold text-slate-800 mb-6 transition-all duration-300 relative"
                  >
                    <span className="absolute inset-0 rounded-2xl bg-blue-50/50 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></span>
                    <span className="relative z-10 group-hover:text-blue-600 transition-colors bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600">{step.num}</span>
                  </motion.div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 font-light leading-relaxed">{step.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-[#0A0A0A] text-white relative z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">Trusted by the best.</h2>
            <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">Engineers and founders who have scaled with SanrakX.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "The quality of engineering talent available on SanrakX is unmatched. We scaled our core microservices in record time.", author: "Startup Founder", role: "NovaCloud" },
              { quote: "SanrakX Academy doesn't teach fluff. I learned distributed systems and landed a Senior Engineer role within 4 months.", author: "Senior Engineer", role: "Vertex AI" },
              { quote: "A beautifully unified platform. Having learning, hiring, and building under one ecosystem is a game-changer.", author: "Lead Architect", role: "Synthetics" }
            ].map((t, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="p-10 rounded-3xl bg-[#111111] border border-slate-800 hover:border-slate-700 transition-colors h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="flex gap-1 text-blue-500 mb-8">
                      <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-10 font-light text-lg flex-1">"{t.quote}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700"></div>
                      <div>
                        <h4 className="text-base font-semibold text-white">{t.author}</h4>
                        <p className="text-sm text-slate-500 font-light">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate CTA */}
      <section className="py-32 lg:py-48 relative z-10 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tighter mb-8">
              Ready to deploy?
            </h2>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join the ecosystem today. Build exceptional software, learn from the best, and scale your operations with SanrakX.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/register" 
                className="bg-slate-900 text-white px-10 py-4 rounded-xl text-sm font-semibold hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/20 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Sparkles size={16}/> Start Building Free
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-xl text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center w-full sm:w-auto shadow-sm"
              >
                Contact Sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
