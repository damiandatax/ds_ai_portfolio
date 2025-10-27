// docs/assets/js/hide-language.js
(function () {
  function nuke() {
    document.querySelectorAll('.header-lang-switch').forEach(el => el.remove());
    const builtin = document.querySelector('.md-header__option .md-select');
    if (builtin) builtin.remove();
  }

  // 1) natychmiast i po DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', nuke);
  } else {
    nuke();
  }

  // 2) retry co 100 ms przez 5 s (na wypadek opóźnionego wstrzyknięcia)
  let tries = 0;
  const t = setInterval(() => {
    nuke();
    if (++tries > 50) clearInterval(t);
  }, 100);

  // 3) obserwuj zmiany w DOM (hot-reload/przełączanie motywów)
  const mo = new MutationObserver(nuke);
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
