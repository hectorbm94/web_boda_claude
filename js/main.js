/* ═══════════════════════════════════════════════════
   APERTURA DEL SOBRE
════════════════════════════════════════════════════ */

/* COPILOT CORREGIDO */

const envelopeWrapper = document.getElementById("envelope-wrapper");
const envelopeScreen = document.getElementById("envelope-screen");
const mainContent = document.getElementById("main-content");




function openEnvelope() {

  envelopeWrapper.classList.add("open");

  setTimeout(() => {
    mainContent.classList.remove("hidden");
    mainContent.classList.add("visible");

    envelopeScreen.classList.add("fade-out");

  }, 500);
}


envelopeWrapper.addEventListener("click", openEnvelope);
envelopeWrapper.addEventListener('touchstart', openEnvelope, { passive: true });


/* ═══════════════════════════════════════════════════
   CUENTA ATRÁS
════════════════════════════════════════════════════ */
const WEDDING_DATE = new Date('2026-12-12T12:00:00');

function updateCountdown() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<p class="section-title">¡Hoy es el gran día! 🎊</p>';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60))      / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60))            / 1000);

  document.getElementById('cd-days').textContent  = String(days).padStart(3, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-min').textContent   = String(mins).padStart(2, '0');
  document.getElementById('cd-sec').textContent   = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ═══════════════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// Añadir la clase .reveal a los elementos que quieras animar al hacer scroll
document.querySelectorAll(
  '.section-title, .section-body, .venue-card, .countdown-grid, .couple-photo, .bank-info, .btn--primary'
).forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});
