// ════════════════════════════════════
// SECTION SWITCHER
// ════════════════════════════════════
function showSection(sectionId) {

  let sections = document.querySelectorAll(".section");

  sections.forEach(function(section) {
    section.style.display = "none";
  });

  const target = document.getElementById(sectionId);

  if (target) {
    target.style.display = "block";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ════════════════════════════════════
// MOBILE MENU
// ════════════════════════════════════
const hbg = document.getElementById("hbg");
const navLinks = document.getElementById("navLinks");

if (hbg && navLinks) {
  hbg.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}


// ════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ════════════════════════════════════
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {

  if (!nav) return;

  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// ════════════════════════════════════
// REVEAL ANIMATION
// ════════════════════════════════════
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("in");
    }

  });

}, {
  threshold: 0.15
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});


// ════════════════════════════════════
// COUNTER ANIMATION
// ════════════════════════════════════
const counters = document.querySelectorAll(".cu");

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    const el = entry.target;

    const target = parseInt(el.dataset.t);
    const suffix = el.dataset.s || "";

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 60));

    const updateCounter = () => {

      current += increment;

      if (current >= target) {
        current = target;
      }

      el.textContent = current + suffix;

      if (current < target) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();

    counterObserver.unobserve(el);

  });

}, {
  threshold: 0.5
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});


// ════════════════════════════════════
// AI PROGRESS BARS
// ════════════════════════════════════
const progressBars = document.querySelectorAll(".ai-progress-fill");

const progressObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const bar = entry.target;
      const width = bar.dataset.width;

      setTimeout(() => {
        bar.style.width = width;
      }, 300);

      progressObserver.unobserve(bar);
    }

  });

}, {
  threshold: 0.4
});

progressBars.forEach(bar => {
  progressObserver.observe(bar);
});


// ════════════════════════════════════
// BACKGROUND PARTICLES CANVAS
// ════════════════════════════════════
const canvas = document.getElementById("bg-canvas");

if (canvas) {

  const ctx = canvas.getContext("2d");

  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);

  for (let i = 0; i < 60; i++) {

    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4
    });
  }

  function animateParticles() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(200,168,75,0.25)";
      ctx.fill();
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}


// ════════════════════════════════════
// ZOHO FORMS TAB SWITCHER
// ════════════════════════════════════
const ZOHO_FORMS = {

  enquiry:
    "https://forms.zohopublic.in/vinothkpasquareenterprisezoho1/form/PASquareEnterprisesEnquiry/formperma/h82qMJ47mbPIibCaL0uUGVH6BJoJFC4lqGvhamVc_IU/js",

  "gst-en":
    "https://forms.zohopublic.in/pasquareenterprisezoho1/form/GSTRegistrationForm/formperma/_eAZeZpZ6CFdg3vdcRmnte9iYOFcfHCiMEFH--YK3nA/js",

  "gst-ta":
    "https://forms.zohopublic.in/pasquareenterprisezoho1/form/GSTRegistrationFormTamil/formperma/ieJIkA9Kbz6v1vvpjXgmQYULmIip13igYZiSbWUOAvA/js",

  itr:
    "https://forms.zohopublic.in/pasquareenterprisezoho1/form/ITRChecklist/formperma/nYrSHXH4u-wXmslsBDKprV-nIbIkd4pU0N_hy0xECgg/js"
};

const loadedForms = {};

function loadZohoForm(key) {

  if (loadedForms[key]) return;

  const container = document.getElementById("zf-" + key);
  const loader = document.getElementById("load-" + key);

  if (!container) {
    console.error("Missing container:", "zf-" + key);
    return;
  }

  loadedForms[key] = true;

  const script = document.createElement("script");

  script.src = ZOHO_FORMS[key];
  script.type = "text/javascript";
  script.async = true;

  script.onload = () => {

    console.log("Zoho form loaded:", key);

    if (loader) {
      loader.style.display = "none";
    }
  };

  script.onerror = () => {

    console.error("Failed to load form:", key);

    if (loader) {

      loader.innerHTML = `
        <p style="
          color:#c0392b;
          font-size:14px;
          text-align:center;
          padding:20px;
        ">
          ⚠ Could not load form.
          <br><br>
          <a href="https://wa.me/919751962727"
             target="_blank"
             style="
               color:#C8A84B;
               text-decoration:none;
               font-weight:600;
             ">
             Contact us on WhatsApp
          </a>
        </p>
      `;
    }
  };

  container.appendChild(script);
}

function switchTab(key, btn) {

  document.querySelectorAll(".ftab").forEach(tab => {
    tab.classList.remove("active");
  });

  btn.classList.add("active");

  document.querySelectorAll(".fpanel").forEach(panel => {
    panel.classList.remove("active");
  });

  const targetPanel = document.getElementById("panel-" + key);

  if (targetPanel) {
    targetPanel.classList.add("active");
  }

  loadZohoForm(key);
}


// ════════════════════════════════════
// INITIAL LOAD
// ════════════════════════════════════
window.addEventListener("DOMContentLoaded", () => {

  loadZohoForm("enquiry");

});
