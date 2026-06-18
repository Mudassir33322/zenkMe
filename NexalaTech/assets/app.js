import { initParticles, counters, reveal, mobileMenu, activeNav } from "./modules.js";

document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  activeNav();
  reveal();
  counters();
  mobileMenu();
});
