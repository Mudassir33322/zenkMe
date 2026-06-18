'use client';

import Link from 'next/link';
import { useReveal, useCounters } from '@/components/ScrollObserver';

export default function About() {
  useReveal();
  useCounters();

  const values = ['Innovation', 'Reliability', 'Security', 'Collaboration', 'Ownership', 'Transparency'];
  const expertise = [
    { title: 'ERP Architects', desc: 'Design unified systems for finance, HR, inventory, CRM, and operations.' },
    { title: 'AI Engineers', desc: 'Build automation, chatbots, knowledge systems, and workflow intelligence.' },
    { title: 'Cloud Specialists', desc: 'Deploy secure, scalable, and observable cloud-native infrastructure.' },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden hero-mesh grid-lines reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Empowering Business Through Intelligent Technology</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">About Nexala Tech</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">Nexala Tech is a technology-driven company focused on helping businesses embrace digital transformation through innovative software solutions, AI automation, and enterprise systems.</p>
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
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Who We Are</p>
              <h2 className="section-title">Driving Innovation Through Technology</h2>
              <p className="text-gray-400 leading-relaxed mb-4">Nexala Tech is a forward-thinking technology company specializing in enterprise software solutions, AI automation, ERP systems, and digital transformation services.</p>
              <p className="text-gray-400 leading-relaxed">We partner with organizations to build scalable, secure, and intelligent systems that simplify complex business processes and create measurable results.</p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-white text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">To help businesses work smarter, grow faster, and compete confidently in the digital era.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-teal font-semibold tracking-wider uppercase text-sm">Trusted Technology Partner</p>
            <h2 className="section-title">Trusted Technology Partner for Modern Businesses</h2>
            <p className="text-gray-400">Helping startups, SMEs, and enterprises leverage technology to scale operations, automate workflows, and achieve sustainable growth.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { count: 500, label: 'Projects' },
              { count: 200, label: 'Clients' },
              { count: 50, label: 'Team' },
              { count: 99, label: 'Satisfaction' },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 text-center reveal">
                <div className="counter-value text-4xl md:text-5xl font-bold gradient-text" data-count={item.count}>0</div>
                <div className="mt-2 text-lg font-semibold text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Core Values</p>
          <h2 className="section-title">Principles That Guide Our Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <article key={v} className="glass-card p-6 reveal">
                <h3 className="text-white font-semibold mb-3">{v}</h3>
                <p className="text-sm text-gray-400">We apply this value to every client engagement, product roadmap, and technical decision.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Expertise Highlights</p>
          <h2 className="section-title">Enterprise Talent, Product Mindset</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((e) => (
              <article key={e.title} className="glass-card p-6 reveal">
                <h3 className="text-white font-semibold mb-3">{e.title}</h3>
                <p className="text-sm text-gray-400">{e.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-cyan/5" />
            <div className="relative">
              <h2 className="section-title">Let's Build the Future Together</h2>
              <p className="text-gray-400 max-w-3xl mx-auto mb-8">Whether you are launching a startup, modernizing an enterprise, or automating operations, Nexala Tech can help turn your vision into a reliable digital product.</p>
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
