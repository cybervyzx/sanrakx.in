import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, GraduationCap, Code } from 'lucide-react';
import Link from 'next/link';

export default function Ecosystem() {
  const platforms = [
    { 
      id: "freelance",
      title: "SanrakX Freelance", 
      desc: "A premium marketplace connecting businesses with verified digital talent. Secure contracts, real-time collaboration, and global payments.",
      icon: <Users />,
      color: "blue",
      href: "https://freelance.sanrakx.com"
    },
    { 
      id: "academy",
      title: "SanrakX Academy", 
      desc: "The world's most advanced learning platform for developers and designers. Master skills through hands-on projects and expert mentorship.",
      icon: <GraduationCap />,
      color: "indigo",
      href: "https://academy.sanrakx.com"
    },
    { 
      id: "devs",
      title: "SanrakX Devs", 
      desc: "Our elite development team at your service. From MVP development to enterprise system migrations, we build for the future.",
      icon: <Code />,
      color: "teal",
      href: "/contact"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black mb-6">The Unified Ecosystem</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Everything you need to succeed in the digital economy, all under one roof.</p>
          </div>
          
          <div className="space-y-12">
            {platforms.map((p, i) => (
              <div key={p.id} className={`p-12 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className={`w-16 h-16 bg-${p.color}-50 dark:bg-${p.color}-900/30 text-${p.color}-600 dark:text-${p.color}-400 rounded-2xl flex items-center justify-center mb-6`}>
                    {p.icon}
                  </div>
                  <h2 className="text-4xl font-bold mb-6">{p.title}</h2>
                  <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">{p.desc}</p>
                  <Link 
                    href={p.href} 
                    className={`inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95`}
                  >
                    Explore Platform <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-[2.5rem] aspect-video shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-300">
                     [ Platform Preview Mockup ]
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
