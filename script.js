const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Meniu mobil
const nav = document.querySelector(".nav");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Închide meniul mobil când dai click pe un link
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

// Filtrare meniu (taburi)
const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll(".menu-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    items.forEach(item => {
      const cat = item.dataset.cat;
      const show = (filter === "toate") || (cat === filter);
      item.style.display = show ? "grid" : "none";
    });
  });
});

// Formular demo
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent = "Mulțumim! Mesajul a fost trimis (demo).";
  form.reset();
});
