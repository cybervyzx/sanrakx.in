"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldAlert, Activity, ArrowLeft, Clock, Zap } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// The Ultimate Grid and Orb Background
const QuantumBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
      {/* Dynamic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Massive Glowing Cores */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[150px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-indigo-600/20 rounded-full blur-[150px]"
      />
    </div>
  );
};

export default function MaintenancePage() {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [eta, setEta] = useState("02:14:45");

  const buildLogs = [
    "[SYSTEM] Initiating SanrakX Core Upgrade Protocol...",
    "[INFO] Allocating new edge computing clusters...",
    "[WARN] Traffic redirected to failover nodes.",
    "[INFO] Recompiling V8 Engine Neural Routines...",
    "[SUCCESS] Turbopack caching modules cleared.",
    "[INFO] Applying glassmorphism design tokens...",
    "[WARN] Integrating high-performance database schema...",
    "[INFO] Awaiting final manual build confirmation..."
  ];

  // Dynamic Terminal Typing Effect & Progress Bar
  useEffect(() => {
    let currentLogIndex = 0;
    
    // Progress Bar Animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 87) return 87; // Stuck at 87%
        return prev + 1;
      });
    }, 70);

    // Terminal Logging Animation
    const logInterval = setInterval(() => {
      if (currentLogIndex < buildLogs.length) {
        setLogs(prev => [...prev, buildLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <main className="min-h-screen relative flex items-center justify-center font-sans overflow-hidden bg-[#020617] py-20">
      <QuantumBackground />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Animated Core Icon */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative mb-12 group"
        >
          {/* Radar Ping Effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-2xl animate-pulse"></div>
          
          <div className="w-28 h-28 bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-[2rem] shadow-[0_0_80px_rgba(37,99,235,0.4)] flex items-center justify-center relative z-10 overflow-hidden group-hover:border-blue-400 transition-colors">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[shimmer_2s_infinite]"></div>
            <Zap size={48} className="text-blue-400 animate-pulse drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-950/40 backdrop-blur-md border border-blue-900/50 shadow-[0_0_20px_rgba(30,58,138,0.3)] text-xs font-mono text-blue-300 tracking-widest uppercase mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Architecture Upgrade in Progress
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            We are upgrading <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">The Ecosystem.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            SanrakX is currently undergoing a massive scheduled infrastructure upgrade. We are deploying next-generation features for the Academy, Freelance, and Devs platforms.
          </p>
        </motion.div>

        {/* Massive Deployment Terminal */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-3xl bg-[#0a0f1c]/90 backdrop-blur-2xl border border-slate-800 rounded-3xl overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] text-left relative"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          {/* Terminal Header */}
          <div className="px-6 py-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/50">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/90 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/90 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/90 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <Clock size={14} className="text-blue-400"/> ETA: {eta}
              </div>
              <div className="text-xs font-mono text-slate-500 flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                <Terminal size={12} className="text-indigo-400"/> root@sanrakx-core:~
              </div>
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-8 font-mono text-sm space-y-4 min-h-[300px]">
            <div className="text-slate-400"><span className="text-blue-500 font-bold">root@sanrakx ➜</span> <span className="text-white">./deploy --env=production --force</span></div>
            
            <AnimatePresence>
              {logs.map((log, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`
                    ${log.includes('[SUCCESS]') ? 'text-green-400' : ''}
                    ${log.includes('[WARN]') ? 'text-yellow-400' : ''}
                    ${log.includes('[INFO]') ? 'text-blue-300' : ''}
                    ${log.includes('[SYSTEM]') ? 'text-purple-400 font-bold' : ''}
                  `}
                >
                  {log}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Live Progress Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-8 pt-6 border-t border-slate-800/50"
            >
              <div className="flex justify-between text-xs mb-3 text-slate-400">
                <span>Overall Build Progress</span>
                <span className="text-blue-400 font-bold">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden shadow-inner border border-slate-800">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-300 relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress-bar-stripes_1s_linear_infinite]"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Return Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <div className="text-slate-500 font-light text-sm">
            Need urgent access? <a href="mailto:support@sanrakx.in" className="text-blue-400 hover:text-blue-300 hover:underline">Contact Support</a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
