/* =========================
   HAMBURGER MENU CONTROL
========================= */
const hamburger = document.getElementById("hamburger");
const fullNav = document.getElementById("fullNav");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  fullNav.classList.add("show");
  overlay.classList.add("show");
  hamburger.style.display = "none"; // Hide hamburger when menu opens
});

function closeNav() {
  fullNav.classList.remove("show");
  overlay.classList.remove("show");
  hamburger.style.display = "flex"; // Show hamburger when menu closes
}

if (closeMenu) {
  closeMenu.addEventListener("click", closeNav);
}

if (overlay) {
  overlay.addEventListener("click", closeNav);
}

/* Close menu when clicking any nav link */
document.querySelectorAll("#fullNav a").forEach(link => {
  link.addEventListener("click", closeNav);
});

/* =========================
   SERVICE → WHATSAPP
========================= */
function openWhatsapp(serviceName) {
  const phone = "919556553566"; // replace with your number
  const message = `Hello, I want to use the service: ${serviceName}`;
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
/* =========================
   Service Request – WhatsApp
   Safe Add (No Conflict)
========================= */

function sendWhatsApp(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const village = document.getElementById("village").value;
    const service = document.getElementById("service").value;

    const msg =
        `New Service Request:%0A` +
        `Name: ${name}%0A` +
        `Mobile: ${mobile}%0A` +
        `Village: ${village}%0A` +
        `Service: ${service}`;

    window.open(`https://wa.me/919556553566?text=${msg}`, "_blank");
}
/* =========================
   Dummy Request Tracking
   Safe & Conflict-Free
========================= */

function trackRequest() {
    const id = document.getElementById("requestId").value;
    const result = document.getElementById("statusResult");

    if (id === "") {
        result.innerText = "Please enter Request ID";
        return;
    }

    // Dummy logic for demo
    result.innerText = "Status: In Progress ✅ (Our team is working on it)";
}
/* =========================
   Farmer Popup Control
========================= */

function openFarmerPopup() {
    document.getElementById("farmerPopup").style.display = "flex";
}

function closeFarmerPopup() {
    document.getElementById("farmerPopup").style.display = "none";
}


/* =========================
   HERO IMAGE SLIDER (FUTURE-PROOF)
========================= */
let currentHero = 0;
const heroSlider = document.querySelector(".hero-slider");
const heroImages = heroSlider.querySelectorAll(".hero-img"); // Grab all images from HTML

function slideHero() {
  heroImages.forEach(img => img.classList.remove("active"));
  currentHero = (currentHero + 1) % heroImages.length;
  heroImages[currentHero].classList.add("active");
}

/* Change image every 4 seconds */
setInterval(slideHero, 4000); // 4s delay (can adjust)


// /* =========================
//    HERO IMAGE SLIDER
// ========================= */
// const heroImages = [
//   "assets/IMG-20251201-WA0005.jpg",
//   "assets/banner1.jpg",
//   "assets/banner2.jpg",
//   "assets/banner3.jpg",
//   "assets/bb3.jpeg"
// ];

// let currentHero = 0;
// const heroSlider = document.querySelector(".hero-slider");

// /* Create hero images only once */
// heroImages.forEach((src, index) => {
//   const img = document.createElement("img");
//   img.src = src;
//   img.classList.add("hero-img");
//   if (index === 0) img.classList.add("active");
//   heroSlider.appendChild(img);
// });

// function slideHero() {
//   const imgs = heroSlider.querySelectorAll(".hero-img");
//   imgs.forEach(img => img.classList.remove("active"));
//   currentHero = (currentHero + 1) % imgs.length;
//   imgs[currentHero].classList.add("active");
// }

/* =========================
   Payment Popup Logic
========================= */

function openPaymentPopup(){
    document.getElementById("paymentPopup").style.display="flex";
}

function closePaymentPopup(){
    document.getElementById("paymentPopup").style.display="none";
}

function showReceipt(){
    document.getElementById("paymentPopup").style.display="none";
    document.getElementById("receiptPopup").style.display="flex";
}

function closeReceiptPopup(){
    document.getElementById("receiptPopup").style.display="none";
}

/* Change image every 4 seconds */
setInterval(slideHero, 2000);

/* =====================
   DARK MODE TOGGLE
===================== */

/* =====================
   DARK MODE SYSTEM
===================== */

const toggleBtn = document.getElementById("darkModeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initial load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
} else if (savedTheme === "light") {
  document.body.classList.remove("dark-mode");
} else if (prefersDark) {
  document.body.classList.add("dark-mode");
}

// Toggle manually
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});





// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});
// Simple impact number increase animation
const counts = document.querySelectorAll(".count");

counts.forEach(count => {
  const target = +count.getAttribute("data-target");
  let current = 0;

  const speed = target / 100; // smoothness control

  const updateCount = () => {
    current += speed;
    if (current < target) {
      count.innerText = Math.ceil(current);
      setTimeout(updateCount, 20);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
});

// Load preference from localStorage
if(localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
} else if(localStorage.getItem("darkMode") === "disabled") {
  document.body.classList.remove("dark-mode");
}


/* =========================
   SCROLL TO TOP
========================= */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================
   VISITOR COUNTER (GitHub Safe)
========================= */
const counterEl = document.getElementById("visitorCounter");

if (counterEl) {
  let visits = localStorage.getItem("ospVisits");

  if (!visits) {
    visits = Math.floor(300000 + Math.random() * 600000);
  }

  visits++;
  localStorage.setItem("ospVisits", visits);

  counterEl.innerText = Number(visits).toLocaleString();
}


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value;
  const phone = this.phone.value;
  const service = this.service.value;
  const message = this.message.value;

  const text = `Hello OSP,%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;

  window.open(`https://wa.me/919556553566?text=${text}`, "_blank");
});






