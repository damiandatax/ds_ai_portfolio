// Dodaj klasę .js do <html> – pozwala CSS-owi wiedzieć, że JS działa
document.documentElement.classList.add('js');

// Dodaje klasę .visible elementom .reveal, gdy wejdą w viewport
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => io.observe(el));
})();

document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(
    'label.md-header__button[for*="lang"], ' +
    'label.md-header__button[for*="i18n"], ' +
    'label.md-header__button[for="__language"], ' +
    '.md-header__button.md-language, ' +
    '.md-header__button[aria-label*="Language"], ' +
    '.md-header__button[title*="Language"]'
  );

  langButtons.forEach(btn => {
    btn.style.display = "none";
    btn.style.visibility = "hidden";
  });
});

// --- Dodaj własny przełącznik języka PL | EN obok wyszukiwarki ---
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".md-header__title"); // szukamy miejsca na wstawienie
  if (!header) return;

  // Tworzymy kontener z językami
  const langSwitch = document.createElement("div");
  langSwitch.className = "lang-switch";
  langSwitch.innerHTML = `<span data-lang="pl" class="active">PL</span> | <span data-lang="en">EN</span>`;
  header.parentNode.insertBefore(langSwitch, header.nextSibling);

  // Obsługa kliknięcia — przekierowanie na odpowiednią wersję językową
  langSwitch.addEventListener("click", (e) => {
    if (e.target.dataset.lang === "pl") window.location.href = "/";
    if (e.target.dataset.lang === "en") window.location.href = "/en/";
  });
});
