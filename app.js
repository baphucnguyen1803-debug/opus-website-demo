// OPUS Website Demo - Clean Main Page Controller
(function () {
  const PAGES = window.OPUS_PAGES || {};

  const PILLAR_CHILDREN = {
    "opus-lab": [
      "product-creation",
      "design-3d-development",
      "virtual-development",
      "development-center",
      "outsole-mould-tooling-engineering"
    ],
    "footwear-3d-studio": [
      "footwear-rendering",
      "footwear-animation-video",
      "digital-product-assets",
      "interactive-ecommerce-footwear-visuals"
    ],
    "manufacturing": [
      "manufacturing-units-in-vietnam",
      "footwear-categories",
      "innovation-technology",
      "double-guard-qms",
      "supply-chain-certifications"
    ]
  };

  let currentPageId = "home";
  let currentInsightFilter = "All Topics";
  let currentReadingPath = "all"; // "all" | "founders" | "product" | "sourcing" | "marketing"
  let insightRoleMode = "curated"; // "curated" (only path items in step order) | "prioritized" (all items, path sorted first)
  let insightSearchQuery = "";
  let activeArticleModalId = null;
  let renderMode = "3d-olive";

  let notesOn = false;

  // Hash format: "#<page>" plus optional "&notes". Home with notes is simply "#notes".
  function parseHash() {
    const tokens = window.location.hash.replace(/^#/, "").split("&").filter(Boolean);
    return {
      page: tokens.find(tk => PAGES[tk]) || "home",
      notes: tokens.includes("notes")
    };
  }

  function buildHash(pageId, notes) {
    if (pageId === "home") return notes ? "#notes" : "#home";
    return "#" + pageId + (notes ? "&notes" : "");
  }

  function navigateTo(pageId) {
    if (!PAGES[pageId]) pageId = "home";
    currentPageId = pageId;
    const nextHash = buildHash(pageId, notesOn);
    if (window.location.hash !== nextHash) history.pushState(null, "", nextHash);
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.navigateTo = navigateTo;

  function setNotes(on, { updateHash = true } = {}) {
    notesOn = on;
    document.body.classList.toggle("notes-on", on);
    const toggle = document.getElementById("notes-toggle");
    if (toggle) {
      toggle.textContent = on ? "Hide notes" : "Show notes";
      toggle.setAttribute("aria-pressed", String(on));
    }
    if (updateHash) history.replaceState(null, "", buildHash(currentPageId, on));
  }

  function syncFromHash() {
    const { page, notes } = parseHash();
    setNotes(notes, { updateHash: false });
    if (page !== currentPageId) {
      currentPageId = page;
      renderApp();
      window.scrollTo(0, 0);
    }
  }

  // Sticky mobile CTA: hidden while the hero CTA or the closing CTA band is on screen.
  let ctaObserver = null;

  function observeCtaBar() {
    const bar = document.getElementById("mobile-cta-bar");
    if (!bar) return;
    if (ctaObserver) ctaObserver.disconnect();
    const targets = document.querySelectorAll(".hero-section .hero-actions, .closing-cta");
    const setHidden = hidden => bar.classList.toggle("is-hidden", hidden);
    if (!targets.length || !("IntersectionObserver" in window)) {
      setHidden(false);
      return;
    }
    const visible = new Set();
    ctaObserver = new IntersectionObserver(entries => {
      entries.forEach(en => (en.isIntersecting ? visible.add(en.target) : visible.delete(en.target)));
      setHidden(visible.size > 0);
    });
    targets.forEach(el => ctaObserver.observe(el));
  }

  function renderSection(sec) {
    const component = window.OpusComponents.render(sec);
    if (component !== null) return component;

    switch (sec.type) {
      case "statement-banner":
        return `
          <section class="content-section">
            <div class="section-inner">
              <div class="statement-box">
                <span class="section-tag">${sec.tag}</span>
                <h2>${sec.title}</h2>
                <p>${sec.body}</p>
                <div class="statement-highlight">${sec.highlight}</div>
              </div>
            </div>
          </section>
        `;

      case "proof-block":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <blockquote style="background:var(--surface-dark);color:#fff;padding:32px;border-radius:12px;margin-bottom:28px;border-left:4px solid var(--accent);">
                <p style="font-size:19px;font-style:italic;margin-bottom:10px;">${sec.quote}</p>
                <footer style="font-size:13.5px;color:#c8c5bc;">— ${sec.author}</footer>
              </blockquote>
              ${sec.stats ? `
                <div class="fact-grid" style="margin-bottom:28px;">
                  ${sec.stats.map(s => `
                    <div class="fact-card">
                      <div class="fact-value">${s.value}</div>
                      <div class="fact-label">${s.label}</div>
                    </div>
                  `).join("")}
                </div>
              ` : ""}
              <div class="cards-grid-3" style="margin-bottom:24px;">
                ${sec.projects.map(pr => `
                  <div class="feature-card">
                    <div class="feature-card__content">
                      <span class="section-tag">${pr.brand} · ${pr.country} (${pr.year})</span>
                      <h3 style="font-size:18px;">${pr.product}</h3>
                      <p>${pr.summary}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
              <button class="btn btn--outline-dark" onclick="navigateTo('${sec.cta.target}')">${sec.cta.label} →</button>
            </div>
          </section>
        `;

      case "benefits-list":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              ${sec.benefits.map(b => `
                <div class="benefit-row">
                  <div>
                    <span class="section-tag">Benefit ${b.num}</span>
                    <h3 style="font-family:var(--font-display);font-size:24px;margin-bottom:10px;">${b.title}</h3>
                    <p style="color:var(--text-muted);margin-bottom:16px;">${b.subtitle}</p>
                    ${b.cta ? `<button class="btn btn--outline-dark" onclick="navigateTo('${b.cta.target}')">${b.cta.label} →</button>` : ""}
                  </div>
                  <div>
                    <div class="benefit-problem"><strong>The Problem:</strong> ${b.problem}</div>
                    <div class="benefit-solution"><strong>How Opus Solves It:</strong> ${b.solution}</div>
                    ${b.extra ? `<div style="margin-top:12px;font-size:14px;color:var(--text-muted);">${b.extra}</div>` : ""}
                  </div>
                </div>
              `).join("")}
            </div>
          </section>
        `;

      case "comparison-table":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="comparison-table-wrap">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Program Dimension</th>
                      <th>Separate Suppliers</th>
                      <th>With OPUS (Connected Platform)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${sec.rows.map(r => `
                      <tr>
                        <td><strong>${r.dimension}</strong></td>
                        <td style="color:var(--text-muted);">${r.separate}</td>
                        <td class="opus-col">✓ ${r.opus}</td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        `;

      case "fact-strip":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <div class="fact-grid" style="margin-top:14px;">
                ${sec.stats.map(s => `
                  <div class="fact-card">
                    <div class="fact-value">${s.value}</div>
                    <div class="fact-label">${s.label}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "story-timeline":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <div style="max-width:860px;margin-bottom:32px;display:flex;flex-direction:column;gap:14px;">
                ${sec.paragraphs.map(p => `<p style="font-size:16px;color:var(--text-muted);">${p}</p>`).join("")}
              </div>
              <div class="fact-grid">
                ${sec.milestones.map(m => `
                  <div class="stage-card">
                    <div class="stage-code">MILESTONE · ${m.year}</div>
                    <p style="color:var(--text);font-weight:500;">${m.text}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "people-grid":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="cards-grid-3">
                ${sec.people.map(p => `
                  <div class="feature-card">
                    <div class="feature-card__content">
                      <span class="section-tag">${p.role} · ${p.exp}</span>
                      <h3>${p.name}</h3>
                      <p style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px;">📍 ${p.location}</p>
                      <p style="font-style:italic;">“A shoe I am proud of: ${p.proud}”</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "locations-grid":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="cards-grid-3">
                ${sec.locations.map(loc => `
                  <div class="feature-card">
                    <div class="feature-card__content">
                      <span class="section-tag">${loc.place}</span>
                      <h3>${loc.headline}</h3>
                      <p>${loc.body}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "compact-pillars-strip":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="cards-grid-3">
                ${sec.items.map(it => `
                  <div class="fact-card">
                    <div style="font-size:12px;text-transform:uppercase;color:#f59e0b;font-weight:700;">${it.verb}</div>
                    <h3 style="font-family:var(--font-display);font-size:24px;margin:6px 0 10px;">${it.name}</h3>
                    <p style="font-size:14px;color:#d6d3cb;margin-bottom:18px;">${it.desc}</p>
                    <button class="btn btn--primary" onclick="navigateTo('${it.cta.target}')">${it.cta.label} →</button>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "steps-grid":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="fact-grid">
                ${sec.steps.map(st => `
                  <div class="stage-card">
                    <h4>${st.step}</h4>
                    <p>${st.desc}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "verifiable-work":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <div class="checklist-grid">
                ${sec.items.map(it => `<div class="checklist-item">${it}</div>`).join("")}
              </div>
            </div>
          </section>
        `;

      case "narrative-grid":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.lead}</p>
              <div class="cards-grid-${sec.cards.length === 2 ? '2' : '3'}">
                ${sec.cards.map(c => `
                  <div class="feature-card">
                    <div class="feature-card__content">
                      <h3>${c.title}</h3>
                      <p>${c.body}</p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "subpillar-cards":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="cards-grid-3">
                ${sec.cards.map(c => `
                  <div class="feature-card">
                    <div class="feature-card__content">
                      <span class="section-tag">${c.eyebrow || "Capability"}</span>
                      <h3>${c.title}</h3>
                      <p>${c.desc}</p>
                      <button class="btn btn--outline-dark" onclick="navigateTo('${c.cta.target}')">${c.cta.label} →</button>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "highlight-split":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <div class="cards-grid-2">
                <div class="stage-card" style="padding:28px;">
                  <h3 style="margin-bottom:10px;">${sec.leftTitle}</h3>
                  <p style="font-size:15px;">${sec.leftBody}</p>
                </div>
                <div class="stage-card" style="padding:28px;background:var(--surface-dark);color:#fff;">
                  <h3 style="margin-bottom:10px;color:#f59e0b;">${sec.rightTitle}</h3>
                  <p style="font-size:15px;color:#d6d3cb;">${sec.rightBody}</p>
                </div>
              </div>
            </div>
          </section>
        `;

      case "what-carries-forward":
        return `
          <section class="content-section">
            <div class="section-inner">
              <div class="statement-box">
                <span class="section-tag">${sec.tag}</span>
                <h2>${sec.title}</h2>
                <p>${sec.body}</p>
                <div style="display:flex;justify-content:center;gap:12px;margin-top:20px;flex-wrap:wrap;">
                  <button class="btn btn--primary" onclick="navigateTo('footwear-3d-studio')">Explore OPUStudio →</button>
                  <button class="btn btn--secondary" onclick="navigateTo('manufacturing')">Explore OPUS Manufacturing →</button>
                </div>
              </div>
            </div>
          </section>
        `;

      case "checklist-feature":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="checklist-grid">
                ${sec.items.map(it => `<div class="checklist-item">${it}</div>`).join("")}
              </div>
            </div>
          </section>
        `;

      case "connected-links":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <div class="fact-grid">
                ${sec.links.map(l => `
                  <div class="stage-card" style="cursor:pointer;" onclick="navigateTo('${l.target}')">
                    <h4>${l.title} →</h4>
                    <p>${l.desc}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "sample-stages":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="stages-grid">
                ${sec.stages.map(st => `
                  <div class="stage-card">
                    <div class="stage-code">${st.code}</div>
                    <h4>${st.name}</h4>
                    <p>${st.desc}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "render-comparison":
        const filterMap = {
          "3d-olive": "none",
          "photo-studio": "contrast(1.08) brightness(1.05)",
          "colorway-cobalt": "hue-rotate(190deg) saturate(1.4)",
          "colorway-terracotta": "hue-rotate(325deg) saturate(1.5)"
        };
        return `
          <section class="content-section">
            <div class="section-inner">
              <div class="render-compare-box">
                <div>
                  <span class="section-tag">${sec.tag}</span>
                  <h2 class="section-title" style="color:#fff;">${sec.title}</h2>
                  <p style="color:#c8c5bc;margin-bottom:20px;">${sec.subtitle}</p>
                  <p style="font-size:13px;color:#f59e0b;margin-bottom:12px;">Compare OPUStudio 3D Render vs. Studio Photo & instant Colorway swaps from the same 3D file:</p>
                  <div style="display:flex;flex-wrap:wrap;gap:8px;">
                    <button class="colorway-swatch ${renderMode === '3d-olive' ? 'active' : ''}" onclick="window.setRenderMode('3d-olive')">OPUStudio 3D Render (Original)</button>
                    <button class="colorway-swatch ${renderMode === 'photo-studio' ? 'active' : ''}" onclick="window.setRenderMode('photo-studio')">Physical Studio Photo</button>
                    <button class="colorway-swatch ${renderMode === 'colorway-cobalt' ? 'active' : ''}" onclick="window.setRenderMode('colorway-cobalt')">3D Colorway: Alpine Cobalt</button>
                    <button class="colorway-swatch ${renderMode === 'colorway-terracotta' ? 'active' : ''}" onclick="window.setRenderMode('colorway-terracotta')">3D Colorway: Clay Terracotta</button>
                  </div>
                </div>
                <div class="compare-viewport">
                  <img src="assets/opus-studio-render.jpg" alt="Render vs Photo Comparison" style="filter:${filterMap[renderMode] || 'none'};">
                  <div class="video-overlay-badge">
                    <span>Active View: <strong>${renderMode.toUpperCase()}</strong> — Same OPUSlab 3D Geometry</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;

      case "hub-diagram":
        return `
          <section class="content-section">
            <div class="section-inner">
              <div class="statement-box">
                <span class="section-tag">${sec.tag}</span>
                <h2>${sec.title}</h2>
                <p>${sec.subtitle}</p>
                <div style="background:#232320;border:2px solid #f59e0b;padding:20px;border-radius:12px;max-width:620px;margin:20px auto;font-weight:700;color:#fff;">
                  ${sec.centerLabel}
                </div>
                <div class="cards-grid-3" style="text-align:left;margin-top:20px;">
                  ${sec.nodes.map(n => `
                    <div class="fact-card">
                      <div style="color:#f59e0b;font-weight:700;margin-bottom:6px;">↔ ${n.pillar}</div>
                      <p style="font-size:13.5px;color:#d6d3cb;margin:0;">${n.action}</p>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>
          </section>
        `;

      case "category-matrix":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="stages-grid">
                ${sec.items.map(it => `
                  <div class="stage-card">
                    <div class="stage-code">CATEGORY FOCUS</div>
                    <h4>${it.name}</h4>
                    <p>${it.focus}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </section>
        `;

      case "insights-hub": {
        const activePersonaObj = sec.readingPaths.find(rp => rp.id === currentReadingPath) || null;

        // 1. Filter by Topic & Search Query first
        const q = insightSearchQuery.trim().toLowerCase();
        let matchingArticles = sec.articles.filter(a => {
          const topicMatch = currentInsightFilter === "All Topics" || a.topic === currentInsightFilter;
          const queryMatch = !q ||
            a.title.toLowerCase().includes(q) ||
            a.excerpt.toLowerCase().includes(q) ||
            a.topic.toLowerCase().includes(q) ||
            a.author.toLowerCase().includes(q) ||
            (a.takeaways && a.takeaways.some(t => t.toLowerCase().includes(q)));
          return topicMatch && queryMatch;
        });

        // 2. Apply Reading Path (Customer Persona) filter & ordering
        if (currentReadingPath !== "all") {
          if (insightRoleMode === "curated") {
            matchingArticles = matchingArticles.filter(a => a.personaOrder && a.personaOrder[currentReadingPath]);
          }
          matchingArticles = [...matchingArticles].sort((a, b) => {
            const orderA = (a.personaOrder && a.personaOrder[currentReadingPath]) ? a.personaOrder[currentReadingPath] : 999;
            const orderB = (b.personaOrder && b.personaOrder[currentReadingPath]) ? b.personaOrder[currentReadingPath] : 999;
            return orderA - orderB;
          });
        }

        // Featured spotlight article is the #1 article when viewing All Topics & no search query
        const showSpotlight = matchingArticles.length > 0 && !q && currentInsightFilter === "All Topics";
        const spotlightArt = showSpotlight ? matchingArticles[0] : null;
        const gridArticles = showSpotlight ? matchingArticles.slice(1) : matchingArticles;

        // Full sequence for active persona (for the roadmap bar)
        const personaSequence = currentReadingPath !== "all"
          ? [...sec.articles]
              .filter(a => a.personaOrder && a.personaOrder[currentReadingPath])
              .sort((a, b) => a.personaOrder[currentReadingPath] - b.personaOrder[currentReadingPath])
          : [];

        // Modal article if open
        const modalArt = activeArticleModalId
          ? sec.articles.find(a => a.id === activeArticleModalId)
          : null;

        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>

              <!-- STEP 1: INTERACTIVE READING PATHS (CUSTOMER PERSONA SELECTOR) -->
              <div class="persona-header-bar">
                <span class="persona-header-label">1. Select Your Team Role (Reading Path):</span>
                ${currentReadingPath !== "all" ? `
                  <div class="persona-mode-toggle">
                    <button type="button" class="mode-chip ${insightRoleMode === 'curated' ? 'active' : ''}" onclick="window.setInsightRoleMode('curated')">
                      Show curated path only (${personaSequence.length})
                    </button>
                    <button type="button" class="mode-chip ${insightRoleMode === 'prioritized' ? 'active' : ''}" onclick="window.setInsightRoleMode('prioritized')">
                      Show all articles (prioritize path on top)
                    </button>
                    <button type="button" class="mode-reset" onclick="window.setReadingPath('all')">✕ Reset Role</button>
                  </div>
                ` : `<span class="persona-header-hint">Click any role below to sort articles into a recommended step-by-step sequence</span>`}
              </div>

              <div class="persona-grid">
                ${sec.readingPaths.map(rp => {
                  const isActive = currentReadingPath === rp.id;
                  const count = sec.articles.filter(a => a.personaOrder && a.personaOrder[rp.id]).length;
                  return `
                    <button type="button" class="persona-card ${isActive ? 'active' : ''}" onclick="window.setReadingPath('${rp.id}')">
                      <div class="persona-card__top">
                        <span class="persona-badge">${rp.badge}</span>
                        <span class="persona-count">${count} Guides</span>
                      </div>
                      <h4 class="persona-role">${rp.role}</h4>
                      <p class="persona-focus">${rp.focus}</p>
                      <div class="persona-cta">
                        <span>${isActive ? '✓ Active Reading Path' : 'Select Reading Path →'}</span>
                      </div>
                    </button>
                  `;
                }).join("")}
              </div>

              <!-- ACTIVE PERSONA ROADMAP SEQUENCE BANNER -->
              ${activePersonaObj ? `
                <div class="persona-roadmap-banner">
                  <div class="persona-roadmap-header">
                    <div>
                      <span class="persona-roadmap-eyebrow">RECOMMENDED READING SEQUENCE FOR ${activePersonaObj.role.toUpperCase()}</span>
                      <p class="persona-roadmap-summary">${activePersonaObj.roadmapSummary}</p>
                    </div>
                  </div>
                  <div class="persona-steps-row">
                    ${personaSequence.map(pa => {
                      const stepNum = pa.personaOrder[currentReadingPath];
                      return `
                        <div class="persona-step-item" onclick="window.openInsightArticle('${pa.id}')">
                          <span class="persona-step-num">STEP ${stepNum}</span>
                          <span class="persona-step-title">${pa.title}</span>
                          <span class="persona-step-meta">${pa.readTime} · Read →</span>
                        </div>
                      `;
                    }).join("")}
                  </div>
                </div>
              ` : ""}

              <!-- STEP 2: TOPIC PILLS + KEYWORD SEARCH BAR -->
              <div class="insights-toolbar">
                <div class="insights-topics-wrap">
                  <span class="persona-header-label" style="margin-bottom:8px;display:block;">2. Filter by Footwear Topic:</span>
                  <div class="insights-topic-pills">
                    ${sec.topics.map(t => {
                      const count = t === "All Topics"
                        ? sec.articles.length
                        : sec.articles.filter(a => a.topic === t).length;
                      return `
                        <button type="button" class="subpage-pill ${currentInsightFilter === t ? 'active' : ''}" onclick="window.setInsightFilter('${t}')">
                          ${t} <span class="pill-count">(${count})</span>
                        </button>
                      `;
                    }).join("")}
                  </div>
                </div>
                <div class="insights-search-wrap">
                  <label class="persona-header-label" for="insight-search-input">Search Questions & Keywords:</label>
                  <div class="insights-search-box">
                    <input
                      id="insight-search-input"
                      type="search"
                      placeholder="e.g. MOQ, outsole mould, 3D, REACH..."
                      value="${insightSearchQuery.replace(/"/g, '&quot;')}"
                      oninput="window.setInsightSearch(this.value)"
                    >
                    ${insightSearchQuery ? `<button type="button" class="search-clear-btn" onclick="window.setInsightSearch('')">✕</button>` : ""}
                  </div>
                </div>
              </div>

              <!-- FEATURED #1 SPOTLIGHT ARTICLE -->
              ${spotlightArt ? `
                <article class="insight-spotlight-card">
                  <div class="insight-spotlight-media" onclick="window.openInsightArticle('${spotlightArt.id}')">
                    <img src="${spotlightArt.image}" alt="${spotlightArt.title}">
                    <span class="spotlight-floating-badge">
                      ${currentReadingPath !== "all" && spotlightArt.personaOrder && spotlightArt.personaOrder[currentReadingPath]
                        ? `★ STEP ${spotlightArt.personaOrder[currentReadingPath]} RECOMMENDED FOR ${activePersonaObj.role.toUpperCase()}`
                        : `★ FEATURED ESSENTIAL GUIDE`}
                    </span>
                  </div>
                  <div class="insight-spotlight-body">
                    <div class="insight-meta-row">
                      <span class="section-tag" style="margin:0;">${spotlightArt.topic}</span>
                      <span class="insight-readtime">⏱ ${spotlightArt.readTime}</span>
                    </div>
                    ${currentReadingPath !== "all" && spotlightArt.personaNote && spotlightArt.personaNote[currentReadingPath] ? `
                      <div class="persona-step-callout">${spotlightArt.personaNote[currentReadingPath]}</div>
                    ` : ""}
                    <h3 class="insight-spotlight-title" onclick="window.openInsightArticle('${spotlightArt.id}')">${spotlightArt.title}</h3>
                    <p class="insight-spotlight-excerpt">${spotlightArt.excerpt}</p>
                    ${spotlightArt.takeaways ? `
                      <div class="insight-takeaways-box">
                        <div class="takeaways-label">Key Takeaways Inside This Guide:</div>
                        <ul>
                          ${spotlightArt.takeaways.map(tk => `<li>${tk}</li>`).join("")}
                        </ul>
                      </div>
                    ` : ""}
                    <div class="insight-card-footer">
                      <div class="insight-author">By <strong>${spotlightArt.author}</strong></div>
                      <div class="insight-actions">
                        <button type="button" class="btn btn--primary" onclick="window.openInsightArticle('${spotlightArt.id}')">Read Key Takeaways →</button>
                        <button type="button" class="btn btn--outline-dark" onclick="navigateTo('${spotlightArt.relatedPillar.target}')">${spotlightArt.relatedPillar.label}</button>
                      </div>
                    </div>
                  </div>
                </article>
              ` : ""}

              <!-- REMAINING ARTICLES GRID -->
              ${gridArticles.length > 0 ? `
                <div class="cards-grid-3">
                  ${gridArticles.map(art => {
                    const stepRank = currentReadingPath !== "all" && art.personaOrder ? art.personaOrder[currentReadingPath] : null;
                    const stepNote = currentReadingPath !== "all" && art.personaNote ? art.personaNote[currentReadingPath] : null;
                    return `
                      <article class="feature-card insight-article-card">
                        <div class="insight-card-img-wrap" onclick="window.openInsightArticle('${art.id}')">
                          <img src="${art.image}" alt="${art.title}">
                          ${stepRank ? `<span class="insight-step-badge">STEP ${stepRank} · ${activePersonaObj.badge.toUpperCase()}</span>` : ""}
                        </div>
                        <div class="feature-card__content">
                          <div class="insight-meta-row">
                            <span class="section-tag" style="margin:0;">${art.topic}</span>
                            <span class="insight-readtime">${art.readTime}</span>
                          </div>
                          ${stepNote ? `<div class="persona-step-callout">${stepNote}</div>` : ""}
                          <h3 style="font-size:19px;cursor:pointer;" onclick="window.openInsightArticle('${art.id}')">${art.title}</h3>
                          <p>${art.excerpt}</p>
                          <div style="font-size:12.5px;color:var(--text-muted);border-top:1px solid var(--border);padding-top:12px;margin-bottom:14px;">
                            By <strong>${art.author}</strong>
                          </div>
                          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:auto;">
                            <button type="button" class="btn btn--primary" style="padding:9px 14px;font-size:13px;" onclick="window.openInsightArticle('${art.id}')">Read Guide →</button>
                            <button type="button" class="btn btn--outline-dark" style="padding:9px 14px;font-size:13px;" onclick="navigateTo('${art.relatedPillar.target}')">${art.relatedPillar.label}</button>
                          </div>
                        </div>
                      </article>
                    `;
                  }).join("")}
                </div>
              ` : (!spotlightArt ? `
                <div class="stage-card" style="text-align:center;padding:48px 24px;">
                  <h4>No articles match your current filter</h4>
                  <p style="margin-bottom:16px;">Try clearing your search keyword or switching to "All Topics".</p>
                  <button type="button" class="btn btn--outline-dark" onclick="window.resetInsightFilters()">Reset All Filters</button>
                </div>
              ` : "")}

              <!-- INLINE MONTHLY BRIEFING SUBSCRIPTION BAR -->
              <div class="insights-newsletter-strip">
                <div>
                  <span class="section-tag" style="color:#f59e0b;">MONTHLY FOOTWEAR BRIEFING</span>
                  <h3 style="font-family:var(--font-display);font-size:24px;color:#fff;margin-bottom:6px;">One practical footwear guide a month—written by shoemakers</h3>
                  <p style="color:#c8c5bc;font-size:14.5px;margin:0;">No generic marketing fluff. Get deep dives on Vietnam MOQ economics, 3D sampling, outsole tooling, and EU compliance directly from our teams in Treviso and Ho Chi Minh City.</p>
                </div>
                <form class="insights-newsletter-form" onsubmit="event.preventDefault(); this.querySelector('.nl-confirm').style.display='block';">
                  <div style="display:flex;gap:10px;flex-wrap:wrap;">
                    <input type="email" required placeholder="Enter your work email (e.g. name@brand.com)" class="nl-input">
                    <button type="submit" class="btn btn--primary">Subscribe →</button>
                  </div>
                  <div class="nl-confirm" style="display:none;color:#4ade80;font-size:13px;font-weight:600;margin-top:8px;">
                    ✓ Subscribed! You'll receive the next Opus Insights briefing in your inbox.
                  </div>
                </form>
              </div>
            </div>

            <!-- ARTICLE READER MODAL -->
            ${modalArt ? `
              <div class="insight-modal-backdrop" onclick="window.closeInsightArticle()">
                <div class="insight-modal" onclick="event.stopPropagation()">
                  <div class="insight-modal-header">
                    <span class="section-tag" style="margin:0;">${modalArt.topic} · ${modalArt.readTime}</span>
                    <button type="button" class="insight-modal-close" onclick="window.closeInsightArticle()">✕ Close</button>
                  </div>
                  <img src="${modalArt.image}" alt="${modalArt.title}" class="insight-modal-img">
                  <div class="insight-modal-body">
                    <h2 style="font-family:var(--font-display);font-size:28px;line-height:1.2;margin-bottom:10px;">${modalArt.title}</h2>
                    <div style="font-size:13.5px;color:var(--text-muted);margin-bottom:20px;">
                      Written by <strong>${modalArt.author}</strong> · OPUS Technical & Product Team
                    </div>
                    <p style="font-size:16px;line-height:1.7;margin-bottom:22px;">${modalArt.excerpt}</p>
                    ${modalArt.takeaways ? `
                      <div class="insight-takeaways-box" style="margin-bottom:24px;">
                        <div class="takeaways-label">Executive Summary & Key Decision Points:</div>
                        <ul>
                          ${modalArt.takeaways.map(tk => `<li>${tk}</li>`).join("")}
                        </ul>
                      </div>
                    ` : ""}
                    <div class="insight-modal-cta-box">
                      <div>
                        <strong style="display:block;font-size:15px;margin-bottom:4px;">Working on a shoe where this question matters right now?</strong>
                        <span style="font-size:13.5px;color:var(--text-muted);">Discuss your spec, timeline, or target costing directly with our team.</span>
                      </div>
                      <div style="display:flex;gap:10px;flex-wrap:wrap;">
                        <button type="button" class="btn btn--primary" onclick="window.closeInsightArticle(); navigateTo('${modalArt.relatedPillar.target}')">${modalArt.relatedPillar.label} →</button>
                        <button type="button" class="btn btn--outline-dark" onclick="window.closeInsightArticle(); navigateTo('contact')">Schedule a Call</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ` : ""}
          </section>
        `;
      }

      case "contact-inquiry-section":
        return `
          <section class="content-section">
            <div class="section-inner">
              <span class="section-tag">${sec.tag}</span>
              <h2 class="section-title">${sec.title}</h2>
              <p class="section-subtitle">${sec.subtitle}</p>
              <div class="contact-grid">
                <form class="inquiry-form" onsubmit="event.preventDefault(); document.getElementById('inquiry-success').style.display='block';">
                  <h3 style="font-family:var(--font-display);font-size:22px;margin-bottom:20px;">Start a Qualified Footwear Project Inquiry</h3>
                  <div class="form-grid">
                    <div class="form-group">
                      <label>Brand or Company Name *</label>
                      <input type="text" required placeholder="e.g. Nordic Trail Footwear Co.">
                    </div>
                    <div class="form-group">
                      <label>Your Name & Role *</label>
                      <input type="text" required placeholder="e.g. Head of Product / Founder">
                    </div>
                    <div class="form-group">
                      <label>Work Email *</label>
                      <input type="email" required placeholder="name@brand.com">
                    </div>
                    <div class="form-group">
                      <label>Footwear Category *</label>
                      <select required>
                        <option value="">Select category...</option>
                        <option>Outleisure</option>
                        <option>Athleisure</option>
                        <option>Outdoor / Waterproof</option>
                        <option>Sneakers (Cupsole / Vulcanized)</option>
                        <option>Performance</option>
                        <option>Casual</option>
                        <option>Children's Footwear</option>
                        <option>Comfort & Barefoot</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Current Development Stage *</label>
                      <select required>
                        <option value="">Select current stage...</option>
                        <option>Early Concept / Mood Direction</option>
                        <option>2D Sketch / Tech Pack Ready</option>
                        <option>3D Model / CAD File Ready</option>
                        <option>Physical Sample / Carryover Style</option>
                        <option>Ready for Bulk Production in Vietnam</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Primary OPUS Pillar Needed *</label>
                      <select required>
                        <option value="">Select support needed...</option>
                        <option>OPUSlab (Product Creation, 3D, Sampling, Outsole)</option>
                        <option>OPUStudio (3D Renders, Animation, E-commerce Assets)</option>
                        <option>OPUS Manufacturing (Vietnam Bulk Production & QMS)</option>
                        <option>Full Connected Platform (Concept to Bulk)</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Target Timeline / Launch Season</label>
                      <input type="text" placeholder="e.g. SS27 / Q1 2027">
                    </div>
                    <div class="form-group">
                      <label>Expected Volume Range (Pairs)</label>
                      <input type="text" placeholder="e.g. 3,000 – 15,000 pairs / season">
                    </div>
                    <div class="form-group full">
                      <label>Material, Outsole, Digital Asset, Sustainability or Compliance Details</label>
                      <textarea rows="4" placeholder="Share construction direction, outsole mould needs, EU REACH compliance requirements, or target FOB..."></textarea>
                    </div>
                    <div class="form-group full">
                      <button type="submit" class="btn btn--primary" style="width:100%;">Submit Footwear Project Inquiry →</button>
                    </div>
                  </div>
                  <div id="inquiry-success" style="display:none;margin-top:16px;padding:14px;background:#eef7f2;border:1px solid #1f6f50;color:#134e3a;border-radius:8px;font-weight:600;">
                    ✓ Thank you! Your project brief has been routed to the OPUS team in Treviso & Ho Chi Minh City.
                  </div>
                </form>
                <div style="display:flex;flex-direction:column;gap:20px;">
                  <div class="stage-card">
                    <div class="stage-code">WHO THIS IS FOR</div>
                    <h4>Built for brands with real product ambition</h4>
                    <p>Designed for footwear brands, product teams, founders, apparel brands entering footwear, sourcing teams, and commercial teams looking for practical support across OPUSlab, OPUStudio, and OPUS Manufacturing.</p>
                  </div>
                  <div class="stage-card">
                    <div class="stage-code">WHAT HAPPENS NEXT</div>
                    <h4>Direct review by shoemakers</h4>
                    <p>Opus reviews your category, construction, volume, and stage to connect you directly with the right product lead—whether for Round 1 prototyping, 3D sell-in renders, or Vietnam line allocation.</p>
                  </div>
                  <div class="stage-card" style="background:var(--surface-dark);color:#fff;">
                    <div class="stage-code" style="color:#f59e0b;">GLOBAL OPERATIONS</div>
                    <h4 style="color:#fff;">Italy · Vietnam · International</h4>
                    <p style="color:#d6d3cb;">• <strong>Design Studio:</strong> Treviso, Italy<br>• <strong>HQ, 3D Studio & 8 Units:</strong> Ho Chi Minh City, Binh Duong, Dong Nai, Long An (Vietnam)<br>• <strong>Commercial Offices:</strong> Netherlands, Singapore, China</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `;

      default:
        return "";
    }
  }

  window.setRenderMode = function (mode) {
    renderMode = mode;
    renderApp();
  };

  window.setInsightFilter = function (topic) {
    currentInsightFilter = topic;
    renderApp();
  };

  window.setReadingPath = function (pathId) {
    if (currentReadingPath === pathId) {
      currentReadingPath = "all";
    } else {
      currentReadingPath = pathId;
      currentInsightFilter = "All Topics";
    }
    renderApp();
  };

  window.setInsightRoleMode = function (mode) {
    insightRoleMode = mode;
    renderApp();
  };

  window.setInsightSearch = function (query) {
    insightSearchQuery = query;
    renderApp();
    const input = document.getElementById("insight-search-input");
    if (input) {
      input.focus();
      const len = input.value.length;
      input.setSelectionRange(len, len);
    }
  };

  window.openInsightArticle = function (articleId) {
    activeArticleModalId = articleId;
    renderApp();
  };

  window.closeInsightArticle = function () {
    activeArticleModalId = null;
    renderApp();
  };

  window.resetInsightFilters = function () {
    currentReadingPath = "all";
    currentInsightFilter = "All Topics";
    insightSearchQuery = "";
    renderApp();
  };

  function renderSubpageSiblingBar(page) {
    const parentId = page.parent || (PILLAR_CHILDREN[page.id] ? page.id : null);
    if (!parentId || !PILLAR_CHILDREN[parentId]) return "";
    const parentPage = PAGES[parentId];
    const children = PILLAR_CHILDREN[parentId];
    return `
      <div class="subpage-bar">
        <div class="subpage-bar__inner">
          <span style="font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;">${parentPage.title}:</span>
          <button class="subpage-pill ${currentPageId === parentId ? 'active' : ''}" onclick="navigateTo('${parentId}')">Overview</button>
          ${children.map(cid => {
            const cp = PAGES[cid];
            return `<button class="subpage-pill ${currentPageId === cid ? 'active' : ''}" onclick="navigateTo('${cid}')">${cp.title}</button>`;
          }).join("")}
        </div>
      </div>
    `;
  }

  function renderApp() {
    const page = PAGES[currentPageId] || PAGES["home"];
    document.title = page.metaTitle || page.title;

    // Highlight active nav links
    document.querySelectorAll("[data-page-link]").forEach(el => {
      const target = el.getAttribute("data-page-link");
      el.classList.toggle("active", target === currentPageId || target === page.parent);
    });

    // Modular Service Pillars strip if applicable
    const journeyHtml = page.journeyActive ? `
      <div class="journey-strip">
        <div class="journey-strip__inner">
          <div class="service-bar-info">
            <span class="service-bar-badge">FLEXIBLE SERVICES</span>
            <span>Work with a single service pillar or combine them around your project needs</span>
          </div>
          <div class="journey-steps" role="tablist" aria-label="OPUS Service Pillars">
            <button type="button" class="journey-step ${page.journeyActive === 'Develop' ? 'active' : ''}" onclick="navigateTo('opus-lab')">
              <span class="journey-step__title">OPUSlab</span>
              <span class="journey-step__sub">Design, 3D & Development</span>
            </button>
            <button type="button" class="journey-step ${page.journeyActive === 'Present' ? 'active' : ''}" onclick="navigateTo('footwear-3d-studio')">
              <span class="journey-step__title">OPUStudio</span>
              <span class="journey-step__sub">3D Renders & Digital Assets</span>
            </button>
            <button type="button" class="journey-step ${page.journeyActive === 'Produce' ? 'active' : ''}" onclick="navigateTo('manufacturing')">
              <span class="journey-step__title">OPUS Manufacturing</span>
              <span class="journey-step__sub">Vietnam Production & QMS</span>
            </button>
          </div>
        </div>
      </div>
    ` : "";

    const heroHtml = window.OpusComponents.C01Hero(page);
    const siblingBarHtml = renderSubpageSiblingBar(page);
    const sectionsHtml = (page.sections || []).map(renderSection).join("");
    const closingHtml = window.OpusComponents.C08CtaBand(page.closingCta);

    const container = document.getElementById("app-main");
    if (container) {
      container.innerHTML = journeyHtml + siblingBarHtml + heroHtml + sectionsHtml + closingHtml;
    }
    observeCtaBar();
  }

  window.addEventListener("DOMContentLoaded", function () {
    window.OpusNav.init();

    const { page, notes } = parseHash();
    currentPageId = page;
    setNotes(notes, { updateHash: false });
    renderApp();

    document.getElementById("notes-toggle").addEventListener("click", () => setNotes(!notesOn));

    document.addEventListener("click", function (e) {
      const link = e.target.closest("[data-page]");
      if (!link || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      window.OpusNav.closeAll();
      navigateTo(link.getAttribute("data-page"));
    });

    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);
  });
})();
