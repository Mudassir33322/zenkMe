export function initParticles() {
  if (!window.tsParticles) return;
  tsParticles.load("particles-js", {
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      color: { value: ["#00E5D4", "#00F5FF"] },
      links: { color: "#00E5D4", distance: 140, enable: true, opacity: 0.25, width: 1 },
      opacity: { value: { min: 0.2, max: 0.8 }, animation: { enable: true, speed: 0.6, minimumValue: 0.1 } },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, outModes: "bounce", speed: 1.2, direction: "none", random: true }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" }
      },
      modes: { grab: { distance: 160, links: { opacity: 0.6 } }, push: { quantity: 2 } }
    },
    detectRetina: true
  });
}

export function counters() {
  const els = document.querySelectorAll("[data-count]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.3 });
  els.forEach((el) => io.observe(el));
}

export function reveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

export function mobileMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!menu.classList.contains("hidden")));
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

export function activeNav() {
  const links = document.querySelectorAll(".nav-link[data-page]");
  if (!links.length) return;
  const path = location.pathname.split("/").pop() || "index.html";
  links.forEach((link) => {
    link.setAttribute("aria-current", link.dataset.page === path ? "page" : "false");
  });
}
