/* ============================================================
   avons.github.io — shared web components
   assets/components.js · v1.0
   ============================================================ */

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
            <img src="assets/logo.png" alt="AvonS" class="logo-img">
            <span class="logo-text">Avon<strong>S</strong></span>
          </a>
          <nav class="site-header-nav">
            <a href="/">All</a>
            <a href="/#agentic">Agentic Engineering</a>
            <a href="/#frameworks">Frameworks</a>
            <a href="https://github.com/AvonS" target="_blank">GitHub</a>
            <span class="site-tagline">Exploring the journey to the software Dark Factory</span>
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
            <img src="../assets/logo.png" alt="AvonS" class="logo-img">
            <span class="logo-text">Avon<strong>S</strong></span>
          </a>
          <nav class="site-header-nav">
            <a class="back-link" href="/">Home</a>
            <div class="nav-divider"></div>
            <a href="/#agentic">Agentic Engineering</a>
            <a href="https://github.com/AvonS" target="_blank">GitHub</a>
            <span class="site-tagline">Exploring the journey to the software Dark Factory</span>
          </nav>
        </div>
      </header>`;
  }
}

customElements.define('site-footer', SiteFooter);
customElements.define('site-footer-article', SiteFooterArticle);
customElements.define('site-header-home', SiteHeaderHome);
customElements.define('site-header-article', SiteHeaderArticle);
