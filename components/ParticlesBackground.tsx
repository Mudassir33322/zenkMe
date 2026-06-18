'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    tsParticles: any;
  }
}

export default function ParticlesBackground() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js';
    script.onload = () => {
      if (window.tsParticles) {
        window.tsParticles.load('particles-js', {
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            color: { value: ['#00E5D4', '#00F5FF'] },
            links: { color: '#00E5D4', distance: 140, enable: true, opacity: 0.25, width: 1 },
            opacity: { value: { min: 0.2, max: 0.8 }, animation: { enable: true, speed: 0.6, minimumValue: 0.1 } },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, outModes: 'bounce', speed: 1.2, direction: 'none', random: true },
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: { enable: true, mode: 'grab' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: { grab: { distance: 160, links: { opacity: 0.6 } }, push: { quantity: 2 } },
          },
          detectRetina: true,
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return <div id="particles-js" aria-hidden="true" />;
}
