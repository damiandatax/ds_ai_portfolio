// docs/assets/js/lang-switch.js
(function () {
  // globalny bezpiecznik
  if (window.__LANG_SWITCH_DONE__) return;
  window.__LANG_SWITCH_DONE__ = true;

  function buildLangUrls(pathname) {
    const path = pathname.startsWith("/") ? pathname : "/" + pathname;
    const tail = path.replace(/^\/(en|pl)(\/|$)/, "/"); // obetnij prefiks języka
    return { plUrl: tail, enUrl: "/en" + tail, isEN: /^\/en(\/|$)/.test(path) };
  }

  function insertSwitch() {
    const header = document.querySelector(".md-header__inner");
    if (!header) return;

    // USUŃ wszelkie istniejące przełączniki zanim dodasz nowy
    document.querySelectorAll(".lang-switch, .header-lang-switch").forEach(el => el.remove());

    const { plUrl, enUrl, isEN } = buildLangUrls(location.pathname);

    const node = document.createElement("div");
    node.className = "lang-switch";
    node.innerHTML = isEN
      ? `<span data-lang="pl"><a href="${plUrl}" title="Polski">PL</a></span> <span class="sep">|</span> <span data-lang="en" class="active">EN</span>`
      : `<span data-lang="pl" class="active">PL</span> <span class="sep">|</span> <span data-lang="en"><a href="${enUrl}" title="English">EN</a></span>`;

    // wstaw PRZED lupką (obok wyszukiwarki)
    const searchBtn = header.querySelector('label[for="__search"]');
    if (searchBtn) {
      searchBtn.parentNode.insertBefore(node, searchBtn);
    } else {
      header.appendChild(node);
    }
  }

  // uruchom raz po załadowaniu
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertSwitch, { once: true });
  } else {
    insertSwitch();
  }

  // na wszelki wypadek — po zmianach DOM (np. live-reload) wyczyść i wstaw JEDEN
  const mo = new MutationObserver(() => {
    document.querySelectorAll(".lang-switch").forEach((el, i) => { if (i) el.remove(); });
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();

