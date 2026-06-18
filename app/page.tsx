'use client';

import Link from 'next/link';
import { useReveal } from '@/components/ScrollObserver';

export default function Home() {
  useReveal();

  const processSteps = [
    { num: '01', title: 'Discovery & Strategy', desc: 'Understanding your business goals, challenges, and technical landscape to define a clear roadmap.' },
    { num: '02', title: 'Architecture & Planning', desc: 'Designing scalable, secure, and intelligent system architectures tailored to your needs.' },
    { num: '03', title: 'Agile Development', desc: 'Building your solution iteratively with transparent progress, regular demos, and feedback loops.' },
    { num: '04', title: 'Integration & Deployment', desc: 'Seamlessly integrating with your existing systems and deploying to production with zero downtime.' },
    { num: '05', title: 'Testing & QA', desc: 'Ensuring reliability, security, and performance through rigorous quality assurance testing.' },
    { num: '06', title: 'Deployment & Support', desc: 'Launching solutions and providing ongoing maintenance and support for success.' },
  ];

  const techStack = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'], color: 'teal' },
    { category: 'Backend', items: ['Node.js', 'Express.js'], color: 'cyan' },
    { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'], color: 'teal' },
    { category: 'AI & Automation', items: ['OpenAI', 'Groq', 'LangChain', 'Vector DB'], color: 'cyan' },
    { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Vercel', 'Docker'], color: 'teal' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden hero-mesh grid-lines reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Empowering Business Through Intelligent Technology</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">We Build <span className="gradient-text">Intelligent</span> Software for Modern Businesses</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">From ERP and AI automation to cloud infrastructure and custom development, Nexala Tech delivers enterprise-grade solutions that drive real results.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get Started</Link>
                <Link href="/contact" className="btn-secondary">Schedule a Free Consultation</Link>
              </div>
            </div>
            <div className="relative" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 lg:py-32 reveal">
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

      {/* SERVICES PREVIEW */}
      <section className="py-20 lg:py-32 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">What We Deliver</p>
            <h2 className="section-title">Services Built for Intelligent Growth</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'E', title: 'ERP Solutions', desc: 'Centralize finance, HR, inventory, CRM, and reporting in one intelligent platform.' },
              { icon: 'A', title: 'AI Automation', desc: 'Automate repetitive tasks, customer interactions, and data processing with AI.' },
              { icon: 'C', title: 'Cloud Solutions', desc: 'Deploy secure, scalable, and observable cloud-native infrastructure.' },
              { icon: 'S', title: 'Custom Software', desc: 'Build tailored applications that fit your unique business processes.' },
              { icon: 'B', title: 'Business Intelligence', desc: 'Transform raw data into actionable insights with powerful analytics.' },
              { icon: 'I', title: 'API Integration', desc: 'Connect your tools and systems with seamless API integration services.' },
            ].map((s) => (
              <div key={s.icon} className="glass-card p-6 reveal hover:-translate-y-1 transition duration-300">
                <div className="service-icon text-teal mb-5">{s.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-32 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Our Process</p>
            <h2 className="section-title">How We Bring Ideas to Life</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="glass-card p-6 reveal hover:-translate-y-1 transition duration-300">
                <div className="text-3xl font-black gradient-text mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 lg:py-32 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(0,229,212,0.08)', border: '1px solid rgba(0,229,212,0.2)' }}>
              <span className="text-xs font-bold text-teal uppercase tracking-widest">Technology Stack</span>
            </div>
            <h2 className="section-title">Modern Stack for <span className="gradient-text">Future-Ready</span> Products</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {techStack.map((t) => (
              <div key={t.category} className="glass-card p-6 reveal">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                        t.color === 'teal' ? 'text-teal' : 'text-cyan'
                      }`}
                      style={{
                        background: t.color === 'teal' ? 'rgba(0,229,212,0.1)' : 'rgba(0,245,255,0.1)',
                        border: t.color === 'teal' ? '1px solid rgba(0,229,212,0.2)' : '1px solid rgba(0,245,255,0.2)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(0,229,212,0.1), transparent 70%)' }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">Ready to Transform<br />Your Business?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Partner with Nexala Tech and unlock the power of intelligent software, AI automation, and enterprise technology solutions.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#00E5D4,#00F5FF)', color: '#0a0a0f', boxShadow: '0 0 40px rgba(0,229,212,0.35)' }}
            >
              Request a Consultation
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white transition-all duration-300 hover:bg-white/5"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
