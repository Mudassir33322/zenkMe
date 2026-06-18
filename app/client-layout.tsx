'use client';

import { useEffect, useState } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function ClientLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-charcoal flex items-center justify-center">
          <div className="relative w-16 h-16">
            <span className="absolute inset-0 rounded-full border border-teal/30 animate-ping" style={{ animationDuration: '1.8s' }} />
            <span className="absolute inset-2 rounded-full border border-cyan/40 animate-ping" style={{ animationDuration: '1.4s' }} />
            <span className="absolute inset-4 rounded-full bg-gradient-to-br from-teal to-cyan" />
          </div>
        </div>
      )}
      <ParticlesBackground />
    </>
  );
}
