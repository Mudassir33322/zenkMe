'use client';

import Link from 'next/link';
import { useReveal } from '@/components/ScrollObserver';

export default function Services() {
  useReveal();

  const services = [
    {
      icon: 'E', title: 'ERP Solutions',
      desc: 'Centralize finance, HR, inventory, CRM, procurement, projects, sales, and reporting in one intelligent platform.',
      features: ['Human Resource Management', 'Payroll Processing', 'Inventory Management', 'Procurement Management', 'CRM Integration', 'Accounting & Finance', 'Project Management', 'Sales & Marketing', 'Reporting Dashboards'],
      benefits: ['Increased operational efficiency', 'Reduced manual work', 'Better decision-making', 'Real-time business visibility'],
    },
    {
      icon: 'A', title: 'AI Automation',
      desc: 'Automate repetitive tasks, customer interactions, lead generation, content workflows, and data processing with AI.',
      features: ['AI Chatbots', 'Customer Support Automation', 'Lead Generation', 'Content Automation', 'Workflow Automation', 'Data Processing'],
      benefits: ['Reduced operational costs', 'Faster response times', 'Scalable automation', '24/7 availability'],
    },
    {
      icon: 'C', title: 'Cloud Solutions',
      desc: 'Design, deploy, and manage secure, scalable cloud infrastructure tailored to your business needs.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto Scaling', 'Monitoring & Observability', 'Disaster Recovery', 'Cost Optimization'],
      benefits: ['High availability', 'Elastic scalability', 'Reduced infrastructure cost', 'Enhanced security'],
    },
    {
      icon: 'S', title: 'Custom Software',
      desc: 'Build tailored web and mobile applications that fit your unique business processes and workflows.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design', 'UI/UX Design', 'Legacy Modernization'],
      benefits: ['Tailored to your needs', 'Competitive advantage', 'Seamless integration', 'Full ownership'],
    },
    {
      icon: 'B', title: 'Business Intelligence',
      desc: 'Transform raw data into actionable insights with powerful analytics, dashboards, and reporting tools.',
      features: ['Data Warehousing', 'Interactive Dashboards', 'Predictive Analytics', 'Report Automation', 'Data Visualization', 'KPI Tracking'],
      benefits: ['Data-driven decisions', 'Real-time insights', 'Improved efficiency', 'Competitive intelligence'],
    },
    {
      icon: 'I', title: 'API Integration',
      desc: 'Connect your tools, platforms, and systems with seamless API integration and middleware solutions.',
      features: ['RESTful APIs', 'GraphQL APIs', 'Third-party Integration', 'Middleware Solutions', 'Webhook Setup', 'API Security'],
      benefits: ['Streamlined workflows', 'Reduced manual data entry', 'Improved data accuracy', 'Faster processes'],
    },
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
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden hero-mesh grid-lines reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Our Services</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">Services Built for Intelligent Growth</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">Explore ERP, AI automation, custom software, cloud, business intelligence, and API integration services designed for modern businesses.</p>
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
          <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">What We Deliver</p>
          <h2 className="section-title">Complete Technology Services</h2>
          <p className="text-gray-400 max-w-3xl mb-10 leading-relaxed">Each engagement combines strategy, engineering, security, and ongoing support to deliver solutions that perform in the real world.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="glass-card p-6 reveal">
                <div className="service-icon text-teal mb-5">{s.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-5">{s.desc}</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <h4 className="text-white font-medium mb-2">Features</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {s.features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Benefits</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {s.benefits.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Technology Stack</p>
          <h2 className="section-title">Modern Tools for Scalable Delivery</h2>
          <div className="grid md:grid-cols-5 gap-5">
            {techStack.map((t) => (
              <div key={t.category} className="glass-card p-5 reveal">
                <h3 className="text-white font-semibold mb-4">{t.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1 rounded-full text-xs ${
                        t.color === 'teal' ? 'text-teal bg-teal/10 border border-teal/20' : 'text-cyan bg-cyan/10 border border-cyan/20'
                      }`}
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
