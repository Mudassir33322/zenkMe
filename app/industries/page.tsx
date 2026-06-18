'use client';

import Link from 'next/link';
import { useReveal } from '@/components/ScrollObserver';

export default function Industries() {
  useReveal();

  const industries = [
    { num: '01', title: 'Healthcare', desc: 'Digitize patient management and healthcare operations.' },
    { num: '02', title: 'Education', desc: 'Smart learning management and institutional systems.' },
    { num: '03', title: 'Retail & E-commerce', desc: 'Inventory, CRM, and sales optimization.' },
    { num: '04', title: 'Manufacturing', desc: 'Production planning, supply chain, and efficiency.' },
    { num: '05', title: 'Real Estate', desc: 'Property management and customer engagement.' },
    { num: '06', title: 'Logistics & Transportation', desc: 'Fleet management and logistics automation.' },
    { num: '07', title: 'Finance & Accounting', desc: 'Financial operations and reporting solutions.' },
    { num: '08', title: 'Startups', desc: 'Scalable technology foundations for rapid growth.' },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden hero-mesh grid-lines reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Industries We Serve</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">Industry-Focused Digital Transformation</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">Nexala Tech builds intelligent software for organizations that need secure systems, automation, analytics, and scalable growth.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get Started</Link>
                <Link href="/contact" className="btn-secondary">Schedule a Free Consultation</Link>
              </div>
            </div>
            <div className="relative" />
          </div>
        </div>
      </section>

      <section className="py-20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Sectors</p>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="text-gray-400 max-w-3xl mb-10 leading-relaxed">From regulated enterprises to fast-moving startups, our solutions adapt to each industry&apos;s workflows, compliance needs, and growth goals.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <article key={ind.num} className="glass-card p-6 text-center hover:-translate-y-1 transition duration-300 reveal">
                <div className="service-icon text-teal mx-auto mb-4">{ind.num}</div>
                <h3 className="text-white font-semibold mb-2">{ind.title}</h3>
                <p className="text-sm text-gray-400">{ind.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12">
            <h2 className="section-title">Why We Serve These Industries</h2>
            <p className="text-gray-400 leading-relaxed mb-6">Every sector has unique operational challenges. Nexala Tech combines domain-aware planning with flexible technology so each solution supports the way your organization actually works.</p>
            <div className="grid md:grid-cols-3 gap-5">
              {industries.map((ind) => (
                <article key={ind.num} className="glass-card p-6 reveal">
                  <h3 className="text-white font-semibold mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-cyan/5" />
            <div className="relative">
              <h2 className="section-title">Let's Build Something Amazing Together</h2>
              <p className="text-gray-400 max-w-3xl mx-auto mb-8">Share your challenge and we will help you define the fastest path to a smarter, more automated, and scalable business.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">Request a Consultation</Link>
                <Link href="/contact" className="btn-secondary">Start Your Project</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
