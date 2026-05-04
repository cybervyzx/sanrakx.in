import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const tiers = [
    { name: "Starter", price: "0", features: ["Access to Freelance Marketplace", "Join Learning Community", "Basic Project Management", "Standard Support"] },
    { name: "Pro", price: "29", features: ["All Starter Features", "Verified Badge", "Priority Bidding", "Access to Pro Courses", "Advanced Analytics", "Priority Support"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["Custom Ecosystem Setup", "Dedicated Project Manager", "Private Talent Pool", "Whitelabel Academy", "SLA Guarantee", "24/7 Dedicated Support"] }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-500 mb-16">Choose the plan that fits your ambition.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border transition-all duration-300 flex flex-col ${tier.popular ? 'bg-blue-600 text-white border-blue-500 shadow-2xl scale-105 z-10' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'}`}>
                {tier.popular && <span className="bg-white text-blue-600 text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full mb-6 inline-block self-center">Most Popular</span>}
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black">{tier.price === "Custom" ? "" : "$"}{tier.price}</span>
                  {tier.price !== "Custom" && <span className={tier.popular ? 'text-blue-100' : 'text-slate-400'}>/month</span>}
                </div>
                <ul className="text-left space-y-4 mb-10 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex gap-3 text-sm font-medium">
                      <Check className={tier.popular ? 'text-blue-200' : 'text-blue-600'} size={18} />
                      <span className={tier.popular ? 'text-blue-50' : 'text-slate-600 dark:text-slate-400'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="https://dashboard.sanrakx.com" 
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${tier.popular ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
