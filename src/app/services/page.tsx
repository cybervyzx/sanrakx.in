import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Globe, Cpu, Layout, Layers, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <Layout />, title: "Web Development", desc: "Enterprise-grade web applications built with modern frameworks like Next.js and React." },
    { icon: <Globe />, title: "Discord Bots", desc: "Custom automation and integration for your online communities." },
    { icon: <Cpu />, title: "UI/UX Design", desc: "User-centric design systems that convert and engage your audience." },
    { icon: <Code />, title: "Backend Systems", desc: "Scalable, secure, and performant APIs and database architectures." },
    { icon: <Layers />, title: "Automation", desc: "Streamline your business processes with custom AI and workflow automation." },
    { icon: <Zap />, title: "Premium Hosting", desc: "High-performance infrastructure managed by experts for maximum uptime." }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-4 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-6">Our Services</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Professional solutions tailored to your unique business needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
