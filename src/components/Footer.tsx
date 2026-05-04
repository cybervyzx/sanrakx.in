"use client";

import Link from 'next/link';
import { MessageCircle, Globe, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-20 lg:py-24 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 flex items-center justify-center">
                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
              </div>
              SanrakX
            </Link>
            <p className="text-slate-400 font-light leading-relaxed mb-8 max-w-sm">
              The unified digital architecture. Build your career, hire elite talent, or deploy enterprise systems from a single platform.
            </p>
            
            <div className="space-y-4 max-w-sm">
              <p className="text-sm font-semibold text-white">Subscribe to platform updates</p>
              <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="bg-transparent border-none outline-none text-sm text-white px-4 w-full"
                />
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="https://academy.sanrakx.in" className="text-sm text-slate-400 hover:text-white transition-colors">Academy</Link></li>
              <li><Link href="https://freelance.sanrakx.in" className="text-sm text-slate-400 hover:text-white transition-colors">Freelance</Link></li>
              <li><Link href="https://dev.sanrakx.in" className="text-sm text-slate-400 hover:text-white transition-colors">Devs</Link></li>
              <li><Link href="/pricing" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-sm text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/team" className="text-sm text-slate-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">API Reference</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">All systems operational</span>
             </div>
          </div>
          <p className="text-sm text-slate-500 font-light">
            &copy; 2026 SanrakX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
