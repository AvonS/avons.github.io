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
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="https://github.com/AvonS/avons.github.io" target="_blank" title="Star on GitHub">⭐ Star on GitHub</a>
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
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="https://github.com/AvonS/avons.github.io" target="_blank" title="Star on GitHub">⭐ Star on GitHub</a>
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

/* ── Utterances Comments ── */
class UtterancesComments extends HTMLElement {
  connectedCallback() {
    const repo = this.getAttribute('repo');
    if (!repo) {
      console.error('UtterancesComments: "repo" attribute is required.');
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', repo);
    script.setAttribute('issue-term', 'pathname'); // Map comments to pages based on URL pathname
    script.setAttribute('label', 'comment :speech_balloon:'); // GitHub issue label
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Set theme based on current site theme
    const setTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      script.setAttribute('theme', isDark ? 'github-dark' : 'github-light');
    };

    setTheme(); // Set initial theme

    // Observe changes to the 'dark' class on <html>
    const observer = new MutationObserver(() => {
      setTheme();
      // Workaround: Utterances doesn't re-render theme dynamically.
      // Easiest way to force update is to remove and re-add.
      // This might cause a flicker.
      if (this.firstChild) {
        this.removeChild(this.firstChild);
      }
      this.appendChild(script.cloneNode());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    this.appendChild(script);
  }
}

function decodeEmail(encoded) {
    let email = '';
    for (let i = 0; i < encoded.length; i++) {
        email += String.fromCharCode(encoded.charCodeAt(i) - 1); // Shift char code back by 1
    }
    return email;
}

document.addEventListener('DOMContentLoaded', function() {
    const emailSpans = document.querySelectorAll('span.protected-email');
    emailSpans.forEach(span => {
        const encoded = span.getAttribute('data-encoded-email');
        const decoded = decodeEmail(encoded);
        span.innerHTML = `<a href="mailto:${decoded}">${decoded}</a>`;
        span.style.unicodeBidi = 'normal'; // Reset for decoded text
        span.style.direction = 'ltr';      // Reset for decoded text
    });
});

customElements.define('site-footer', SiteFooter);
customElements.define('site-footer-article', SiteFooterArticle);
customElements.define('site-header-home', SiteHeaderHome);
customElements.define('site-header-article', SiteHeaderArticle);
customElements.define('guide-header', GuideHeader);
customElements.define('utterances-comments', UtterancesComments);
