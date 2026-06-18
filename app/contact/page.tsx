'use client';

import Link from 'next/link';
import { useReveal } from '@/components/ScrollObserver';

export default function Contact() {
  useReveal();

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden hero-mesh grid-lines reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal font-semibold tracking-wider uppercase text-sm mb-4">Get In Touch</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">Contact Nexala Tech</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">Start your transformation journey with a consultation about ERP, AI automation, cloud solutions, or custom software.</p>
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
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 glass-card p-6 md:p-8">
              <h2 className="section-title">Send Us a Message</h2>
              <form className="grid md:grid-cols-2 gap-5">
                <input className="contact-input" name="name" placeholder="Name" required />
                <input className="contact-input" name="email" type="email" placeholder="Email" required />
                <input className="contact-input" name="phone" placeholder="Phone" />
                <input className="contact-input" name="company" placeholder="Company" />
                <textarea className="contact-input md:col-span-2 min-h-40" name="message" placeholder="Message" required />
                <button className="btn-primary md:col-span-2" type="submit">Send Message</button>
              </form>
            </div>
            <div className="lg:col-span-2 space-y-5">
              <div className="glass-card p-6">
                <h3 className="text-white text-xl font-semibold mb-4">Contact Info</h3>
                <div className="space-y-3 text-gray-400">
                  <p>Email: <a className="text-teal hover:text-cyan" href="mailto:hello@nexalatech.com">hello@nexalatech.com</a></p>
                  <p>Phone: <a className="text-teal hover:text-cyan" href="tel:+920000000000">+92 XXX XXXXXXX</a></p>
                  <p>Location: Karachi, Pakistan</p>
                  <p>Website: <a className="text-teal hover:text-cyan" href="https://www.nexalatech.com">www.nexalatech.com</a></p>
                </div>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-white text-xl font-semibold mb-4">Social Links</h3>
                <div className="flex gap-3">
                  <a href="#" className="btn-primary">LinkedIn</a>
                  <a href="#" className="btn-secondary">X</a>
                  <a href="#" className="btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="section-title">Map Placeholder</h2>
              <p className="text-gray-400 leading-relaxed">A visual map area for the Nexala Tech office location in Karachi, Pakistan.</p>
            </div>
            <div className="grid-lines rounded-2xl border border-white/10 bg-white/5 min-h-64 relative overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-teal animate-ping" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan border-4 border-white" />
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
