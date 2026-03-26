/* ============================================================
   avons.github.io — shared web components
   assets/components.js · v2.1
   ============================================================ */

/* ── Dark Mode — shared logic ── */
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('avons-theme', isDark ? 'dark' : 'light');
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    if (btn.classList.contains('guide-theme-toggle')) {
      btn.textContent = isDark ? '☀' : '☾';
    } else {
      btn.textContent = isDark ? '☀ Light' : '☾ Dark';
    }
  });
}

/* Apply saved theme before first paint — call immediately */
(function initTheme() {
  if (localStorage.getItem('avons-theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();

function themeToggleHTML() {
  const isDark = document.documentElement.classList.contains('dark');
  return `<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">${isDark ? '☀ Light' : '☾ Dark'}</button>`;
}

/* ── Site Footer ── */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="site-footer-meta">
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          &nbsp;&nbsp;
          <a href="https://avons.github.io">avons.github.io</a>
          &nbsp;&nbsp;2026
        </div>
      </footer>`;
  }
}

/* ── Site Footer (article pages) ── */
class SiteFooterArticle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer-article">
        <div class="article-attribution">
          Created with Level 2 collaboration &nbsp;·&nbsp; Cover: Gemini &nbsp;·&nbsp; Draft: Claude Web &nbsp;·&nbsp; Editing: OpenCode + big-pickle &nbsp;:&nbsp; BMAD, Attractor are open-source &nbsp;·&nbsp; Independent educational resource
        </div>
        <div class="site-footer-meta">
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          &nbsp;&nbsp;
          <a href="https://avons.github.io">avons.github.io</a>
          &nbsp;&nbsp;2026
        </div>
      </footer>`;
  }
}

/* ── Site Header (landing page) ── */
class SiteHeaderHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="site-header-main">
          <a class="site-name" href="/">
            <img src="assets/logo.png?v=1.1" alt="Avon Software Labs" class="logo-img">
            <span class="logo-text">Avon <strong>Software Labs</strong></span>
          </a>
          <nav class="site-header-nav">
            <a href="/">All</a>
            <a href="/#agentic">Agentic Engineering</a>
            <a href="/#frameworks">Frameworks</a>
            <a href="https://github.com/AvonS" target="_blank">GitHub</a>
            <span class="site-tagline">Exploring the journey to the software Dark Factory</span>
            ${themeToggleHTML()}
          </nav>
        </div>
      </header>`;
  }
}

/* ── Site Header (article pages) ── */
class SiteHeaderArticle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="site-header-main">
          <a class="site-name" href="/">
            <img src="../assets/logo.png?v=1.1" alt="Avon Software Labs" class="logo-img">
            <span class="logo-text">Avon <strong>Software Labs</strong></span>
          </a>
          <nav class="site-header-nav">
            <a class="back-link" href="/">Home</a>
            <div class="nav-divider"></div>
            <a href="/#agentic">Agentic Engineering</a>
            <a href="https://github.com/AvonS" target="_blank">GitHub</a>
            <span class="site-tagline">Exploring the journey to the software Dark Factory</span>
            ${themeToggleHTML()}
          </nav>
        </div>
      </header>`;
  }
}

/* ── Guide Header (guide pages — 2 levels deep: guides/topic/) ── */
class GuideHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Guide';
    const isDark = document.documentElement.classList.contains('dark');
    this.innerHTML = `
      <nav class="guide-nav" id="guide-nav">
        <div class="guide-nav-left">
          <a class="guide-logo-link" href="/" title="Back to Home">
            <img src="../../assets/logo.png?v=1.1" alt="Avon Software Labs" class="guide-logo-img">
          </a>
        </div>

        <div class="guide-nav-center">
          <span class="guide-nav-title" id="nav-title">${title}</span>
        </div>

        <div class="guide-nav-right">
          <div class="guide-nav-cluster">
            <button class="guide-icon-btn" id="nav-prev" onclick="navPrev(); return false;" title="Previous Chapter">←</button>
            <button class="guide-icon-btn" onclick="showPage(0); return false;" title="Table of Contents">☰</button>
            <button class="guide-icon-btn" id="nav-next" onclick="navNext(); return false;" title="Next Chapter">→</button>
          </div>
          <div class="guide-nav-divider"></div>
          <button class="theme-toggle guide-theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">
            ${isDark ? '☀' : '☾'}
          </button>
        </div>
      </nav>`;
  }
}

customElements.define('site-footer', SiteFooter);
customElements.define('site-footer-article', SiteFooterArticle);
customElements.define('site-header-home', SiteHeaderHome);
customElements.define('site-header-article', SiteHeaderArticle);
customElements.define('guide-header', GuideHeader);
