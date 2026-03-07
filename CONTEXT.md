# AvonS — Project Context & Continuation Guide
> Generated: March 2026  
> For use in a new Claude Code / CLI session to continue this project

---

## Session Start Checklist

**Always confirm current branch is `draft` before making any changes:**

```bash
git branch --show-current
```

If not on `draft`, switch with:
```bash
git checkout draft
```

---

## Who You Are

- **GitHub username:** AvonS  
- **Site:** avons.github.io  
- **Email:** avonslabs@gmail.com  
- **Purpose:** Personal blog/publishing space for articles on agentic engineering and related frameworks  
- **Style:** Black and white editorial — clean, casual, not formal

---

## What Has Been Built

### 1. Landing Page — `index.html`
- Editorial blog index, black & white theme
- Uses web components for header/footer
- Links to first article at `agentic-engineering/`
- Font stack: Lora (body) + DM Serif Display (headings) + JetBrains Mono (UI)

### 2. First Article — `agentic-engineering/index.html`
- Title: **The Agentic Engineering Journey**
- Subtitle: From Solo Craftsperson to the Dark Factory
- Version: v1.1
- Inspired by Dan Shapiro's Five Levels framework (January 2026)
- Covers: Five Levels + DDD + BMAD + Attractor
- Dan Shapiro is fully credited — document is framed as an interpretation/extension
- PDF version: `agentic-engineering/agentic-engineering-journey.pdf`

### 3. Shared Assets — `assets/`
```
assets/
├── logo.png          ← AvonS concentric circles logo (to be improved)
├── style.css         ← shared base: variables, reset, masthead, footer
├── article.css       ← article-specific: level cards, callouts, tables, etc.
├── landing.css       ← landing page: hero, article cards, sidebar
└── components.js     ← web components: <site-footer>, <site-header-home>, <site-header-article>
```

---

## Repo Structure

```
avons.github.io/          ← GitHub repo: avons.github.io
├── index.html
├── assets/
│   ├── logo.png
│   ├── style.css
│   ├── article.css
│   ├── landing.css
│   └── components.js
└── agentic-engineering/
    ├── index.html        ← the guide
    └── agentic-engineering-journey.pdf
```

**GitHub Pages:** Enabled on `main` branch, root `/`  
**Working branch:** `draft` — merge to `main` to publish  
**Latest tag:** `v1.0` on draft branch

---

## How to Add a New Article

### Step 1: Create Article Folder & HTML File
1. Create a new folder in the repo root: `mkdir new-article-name`
2. Inside it, create `index.html` with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/style.css">
<link rel="stylesheet" href="../assets/article.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Article Title</title>
<script src="../assets/components.js" defer></script>
</head>
<body>
<site-header-article></site-header-article>
<div class="article-wrap">

<!-- ══ TITLE BLOCK ══════════════════════════════════════════════════════ -->
<div class="doc-title-block">
  <p class="doc-eyebrow">Category Label</p>
  <h1 class="doc-main-title">Your Article Title</h1>
  <p class="doc-subtitle">Subtitle or tagline</p>
  <p class="doc-tagline">One-line description</p>
  <div class="doc-meta">
    <span>v1.0</span>
    <span>·</span>
    <span>Month Year</span>
    <span>·</span>
    <a href="https://avons.github.io" target="_blank">avons.github.io</a>
  </div>
</div>

<!-- ══ YOUR CONTENT HERE ═══════════════════════════════════════════════ -->
<h1>Introduction</h1>
<p>Your article content...</p>

<!-- Section banner example -->
<div class="section-banner banner-navy">PART TWO: Your Section Title</div>
<h1>Section Title</h1>

<!-- Callout examples -->
<div class="callout callout-insight"><strong>Insight:</strong> Important insight here.</div>
<div class="callout callout-warn"><strong>Watch out:</strong> Warning about something.</div>
<div class="callout callout-quote">Quoted text or bullet list</div>

</div>
<site-footer></site-footer>
</body>
</html>
```

### Step 2: Use Global Theme & Styles
- **Theme:** Black & white editorial design (see Colour Scheme above)
- **Fonts:** Lora (body), DM Serif Display (headings), JetBrains Mono (UI)
- **Components:** Use `<site-header-article>` and `<site-footer>` for consistent header/footer
- **Stylesheets:** Always include `../assets/style.css` (global) and `../assets/article.css` (article-specific)
- **Classes:** Use the provided article structure classes (doc-title-block, section-banner, callout types, etc.)

### Step 3: Add to Home Page
1. Open `index.html` (root)
2. Find the "Published" section
3. Add a new `<a class="article-card">` block (copy from existing one)
4. Update href to your new folder: `href="new-article-name/"`
5. Fill in title, subtitle, description, date, etc.

### Step 4: Test & Publish
1. Run local server: `python3 -m http.server 8000` (from repo root)
2. Open `http://localhost:8000/new-article-name/` to test
3. Commit changes: `git add . && git commit -m "Add new article: Title"`
4. Push to draft branch: `git push origin draft`
5. When ready, merge to main for live publish

### Tips
- Article paths are relative to the article folder (e.g., `../assets/` for styles)
- Use the callout classes: `callout-insight`, `callout-warn`, `callout-quote`
- For section breaks, use `<div class="section-banner banner-navy">PART TWO: Title</div>`
- Keep content in `<div class="article-wrap">` for proper spacing

---

## Colour Scheme

```css
--black:            #0a0a0a;
--off-black:        #1a1a1a;
--dark-grey:        #333333;
--mid-grey:         #555555;
--light-grey:       #999999;
--rule:             #e0e0e0;
--soft-bg:          #f8f8f8;
--bg:               #fafaf8;
--white:            #ffffff;
--accent-red:       #8b1a1a;      /* Watch Out callout border */
--accent-red-light: #fdf0f0;     /* Watch Out callout background */
```

---

## Typography

```
Font import URL:
https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap

Body text:    Lora (warm readable serif — similar feel to Claude.ai)
Headings:     DM Serif Display
UI / labels:  JetBrains Mono
```

---

## Web Components (`assets/components.js`)

Three custom elements defined:

| Tag | Used on | Description |
|-----|---------|-------------|
| `<site-header-home>` | index.html | Full nav, logo |
| `<site-header-article>` | article pages | Logo + ← Home back link |
| `<site-footer>` | all pages | CC BY 4.0 · avons.github.io · 2026 |

### To use on a new article page:
```html
<head>
  <link rel="stylesheet" href="../assets/style.css">
  <link rel="stylesheet" href="../assets/article.css">
  <script src="../assets/components.js" defer></script>
</head>
<body>
  <site-header-article></site-header-article>
  <div class="article-wrap">
    <!-- content here -->
  </div>
  <site-footer></site-footer>
</body>
```

---

## Article HTML Structure

```html
<!-- Top rule -->
<div class="flag-stripe"></div>

<!-- Title block -->
<div class="doc-title-block">
  <p class="doc-eyebrow">Category Label</p>
  <h1 class="doc-main-title">Article Title</h1>
  <p class="doc-subtitle">Subtitle or tagline</p>
  <p class="doc-tagline">One line description</p>
  <div class="doc-meta">
    <span>v1.0</span> <span>·</span> <span>Month Year</span>
  </div>
</div>

<!-- Section banner -->
<div class="section-banner">PART ONE: Title</div>

<!-- Callout types -->
<div class="callout callout-insight"><strong>Insight:</strong> ...</div>
<div class="callout callout-warn"><strong>Watch out:</strong> ...</div>
<div class="callout callout-quote">Quoted text or bullet list</div>
```

---

## Five Levels — Our Version (not Dan's exact names)

| Level | Our Name | Icon | One-liner |
|-------|----------|------|-----------|
| 0 | Solo Craftsperson | ✍️ | Every line, every decision — just us |
| 1 | AI as Assistant | 🤝 | One task at a time, on request |
| 2 | ADAS Level 2 — Partial Automation | 🔄 | Hands on wheel, AI handles the lane |
| 3 | ADAS Level 3 — Conditional Automation | 👁️ | Eyes off — but ready to take over |
| 4 | ADAS Level 4 — High Automation | 📋 | Write the destination, not the route |
| 5 | The Dark Factory — Full Automation | ⚙️ | Specs in, software out |

**Attribution:** Dan Shapiro's Five Levels framework (January 2026) is credited in the introduction. Our document is explicitly framed as an interpretation inspired by his work.

---

## Frameworks Covered

### DDD (Domain-Driven Design)
- Eric Evans, 2003
- Concepts: Ubiquitous Language, Bounded Context, Entities, Value Objects, Aggregates, Domain Events, Repositories
- Role in journey: Levels 0–5 (foundational language layer)

### BMAD (Breakthrough Method for Agile AI-Driven Development)
- Brian Grew (bmadcode), 2024
- Install: `npx bmad-method install` (stable) / `npx bmad-method@alpha install` (v6 alpha)
- Personas use Indian names (Arjun, Priya, Vikram, Raj, Arnav, Saumya, Kiran, Meera, Dev)
- Party Mode: single LLM session, not real team collab — runs in IDE (Cursor / Claude Code)
- Role in journey: Levels 1–4
- 39,000+ GitHub stars

### Attractor
- StrongDM, 2025
- Three layers: unified-llm-spec, coding-agent-loop-spec, attractor-spec
- Uses Graphviz DOT pipeline files
- Role in journey: Levels 4–5

---

## Content Decisions Made

- **"Spicy Autocomplete"** removed from subtitle — replaced with "Solo Craftsperson to the Dark Factory" (our original framing)
- **Roles table** removed — replaced with prose (too speculative for a table)
- **Party Mode** rewritten to clarify: it is one person + one LLM in one IDE session, not real team collaboration
- **BMAD trigger codes** (BP, RS, CP etc.) removed — replaced with actual slash commands
- **you/your** replaced with **we/our** throughout the document
- **Final Thoughts** toned down — no definitive predictions, wondering tone, natural language as emerging interface
- **Watch Out boxes** use muted red accent (#8b1a1a) — only coloured element in otherwise B&W scheme
- **Cover image** kept in PDF only — HTML uses typographic title block

---

## To Add a New Article

1. Create folder: `agentic-engineering-2/` (or topic name)
2. Copy article HTML shell:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Article Title — AvonS</title>
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
     <link rel="stylesheet" href="../assets/style.css">
     <link rel="stylesheet" href="../assets/article.css">
     <script src="../assets/components.js" defer></script>
   </head>
   <body>
     <site-header-article></site-header-article>
     <div class="article-wrap">
       <div class="flag-stripe"></div>
       <div class="doc-title-block">
         <p class="doc-eyebrow">Category</p>
         <h1 class="doc-main-title">Title</h1>
         <p class="doc-subtitle">Subtitle</p>
         <div class="doc-meta"><span>v1.0</span><span>·</span><span>Month Year</span></div>
       </div>
       <!-- content -->
     </div>
     <site-footer></site-footer>
   </body>
   </html>
   ```
3. Add card to `index.html` main column (copy the commented template block)
4. Bump topic counts in sidebar

---

## To Update index.html for New Article

Find the comment block in `index.html` and uncomment/copy:
```html
<a class="article-card" href="your-folder-name/">
  <div>
    <div class="article-meta">
      <span class="article-tag">Topic</span>
      <span>Month Year</span>
    </div>
    <div class="article-title">Title</div>
    <div class="article-subtitle">Subtitle</div>
    <p class="article-desc">Brief description.</p>
  </div>
  <div class="article-arrow">&#8594;</div>
</a>
```

---

## Git Workflow

```bash
# Work on draft
git checkout draft

# Commit
git add .
git commit -m "feat: description"

# Tag a release
git tag v1.1
git push origin draft --tags

# Publish to live site
git checkout main
git merge draft
git push origin main
```

---

## Known Issues / Next Steps

- [ ] Logo needs replacing with a higher quality version — currently `assets/logo.png`
- [ ] Article footer in `agentic-engineering-journey-v1_1.html` had inline styles — verify clean after refactor
- [ ] PDF not yet regenerated after B&W colour scheme change and font update
- [ ] Landing page evolve toward karpathy.ai style once 4–5 articles exist
- [ ] SEO meta tags not yet added to either page
- [ ] `avons.github.io` GitHub Pages is live on `main` branch

---

## Files Delivered (this session)

| File | Purpose |
|------|---------|
| `index.html` | Landing page |
| `agentic-engineering-journey-v1_1.html` | Guide article (rename to `agentic-engineering/index.html`) |
| `agentic-engineering-journey-v1_1.pdf` | PDF version (keep in article folder) |
| `style.css` | Shared base styles → `assets/style.css` |
| `article.css` | Article styles → `assets/article.css` |
| `landing.css` | Landing styles → `assets/landing.css` |
| `components.js` | Web components → `assets/components.js` |
