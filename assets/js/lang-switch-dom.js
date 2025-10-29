(function () {
  function getBasePath(path) {
    // Jeżeli w URL jest "/en/", baza to wszystko PRZED "/en/"
    const idx = path.indexOf('/en/');
    if (idx !== -1) return path.slice(0, idx);
    if (path.endsWith('/en')) return path.slice(0, path.length - 3);

    // W innym wypadku: jeśli mamy ścieżkę projektu (np. /repo/...), weź pierwszy segment
    const segs = path.split('/').filter(Boolean);
    // jeśli pierwszy segment to nie "en", potraktuj go jako bazę (np. "/ds_ai_portfolio")
    if (segs.length && segs[0] !== 'en') return '/' + segs[0];
    return ''; // user/organization pages na root'cie
  }

  function buildLangLinks(pathname) {
    const path = pathname.startsWith('/') ? pathname : '/' + pathname;
    const base = getBasePath(path);

    const isEN = path.startsWith(base + '/en/');
    const cut = isEN ? (base + '/en') : base;
    let tail = path.slice(cut.length);
    if (!tail.startsWith('/')) tail = '/' + tail; // normalizuj

    return {
      base, isEN,
      plUrl: base + tail,         // np. /ds_ai_portfolio/analizy/irysy/
      enUrl: base + '/en' + tail  // np. /ds_ai_portfolio/en/analizy/irysy/
    };
  }

  function insertSwitch() {
    // usuń wcześniejsze kopie
    document.querySelectorAll('.lang-switch, .header-lang-switch').forEach(n => n.remove());

    const { plUrl, enUrl, isEN } = buildLangLinks(window.location.pathname);

    const wrap = document.createElement('div');
    wrap.className = 'lang-switch';
    wrap.innerHTML = isEN
      ? `<a href="${plUrl}" title="Polski">PL</a> <span class="sep">|</span> <a href="${enUrl}" title="English"><strong>EN</strong></a>`
      : `<a href="${plUrl}" title="Polski"><strong>PL</strong></a> <span class="sep">|</span> <a href="${enUrl}" title="English">EN</a>`;

    // wstaw TUŻ ZA przełącznikiem motywu
    const palette = document.querySelector('form[data-md-component="palette"]');
    const headerInner = document.querySelector('.md-header__inner');
    if (palette && palette.parentNode) palette.parentNode.insertBefore(wrap, palette.nextSibling);
    else if (headerInner) headerInner.appendChild(wrap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertSwitch);
  } else {
    insertSwitch();
  }
})();






