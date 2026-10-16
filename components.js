// OPUS Website Demo - Reusable section components (C01–C08)
// Each component returns an HTML string for one section and tags it with data-component.
(function () {
  const AI_IMAGE_LABEL = "AI image — to be replaced with real photography";

  // Placeholder helpers for unconfirmed content.
  // In data strings, wrap unconfirmed words as {{tbc:[text]}} to get the inline style.
  const Tbc = {
    inline(text) {
      return `<span class="tbc-inline" tabindex="0" data-tip="To confirm">${text}<span class="sr-only"> (to confirm)</span></span>`;
    },
    parse(str) {
      return String(str == null ? "" : str).replace(/\{\{tbc:(.+?)\}\}/g, (_, t) => Tbc.inline(t));
    },
    cls(flag, { dark = false, chip = false } = {}) {
      if (!flag) return "";
      return " tbc" + (dark ? " tbc--on-dark" : "") + (chip ? " tbc--chip" : "");
    }
  };

  const t = Tbc.parse;

  function media(src, alt, imgClass = "") {
    return `
      <div class="ai-media">
        <img src="${src}" alt="${alt}"${imgClass ? ` class="${imgClass}"` : ""}>
        <span class="ai-label">${AI_IMAGE_LABEL}</span>
      </div>`;
  }

  function note(n) {
    if (!n) return "";
    return `
      <aside class="dev-note" aria-label="Presenter note">
        <strong>${n.label} — ${n.component}</strong>
        <span>Purpose: ${n.purpose}</span>
        <span>Source: ${n.source}</span>
      </aside>`;
  }

  function button(cta, style = "outline-dark", { arrow = true, stop = false } = {}) {
    if (!cta) return "";
    const onclick = stop
      ? `event.stopPropagation(); navigateTo('${cta.target}')`
      : `navigateTo('${cta.target}')`;
    return `<button type="button" class="btn btn--${style}" onclick="${onclick}">${cta.label}${arrow ? " →" : ""}</button>`;
  }

  function sectionHead(sec, { light = false } = {}) {
    return `
      ${sec.tag ? `<span class="section-tag">${sec.tag}</span>` : ""}
      ${sec.title ? `<h2 class="section-title"${light ? ' style="color:#fff;"' : ""}>${t(sec.title)}</h2>` : ""}
      ${sec.subtitle ? `<p class="section-subtitle">${t(sec.subtitle)}</p>` : ""}`;
  }

  // C01 — Hero (used by every page)
  function C01Hero(page) {
    const h = page.hero;
    const eyebrowClass = "hero-eyebrow" + (h.eyebrowCase === "sentence" ? " hero-eyebrow--sentence" : "");
    return `
      <section class="hero-section" data-component="C01-hero" data-theme="dark">
        ${note(h.note)}
        <div class="hero-inner">
          <div class="hero-copy">
            <span class="${eyebrowClass}">${t(h.eyebrow)}</span>
            <h1 class="hero-title">${t(h.title)}</h1>
            <p class="hero-subtitle">${t(h.subtitle)}</p>
            ${h.chips ? `
              <div class="hero-chips">
                ${h.chips.map(ch => `<span class="hero-chip">✓ ${t(ch)}</span>`).join("")}
              </div>` : ""}
            <div class="hero-actions">
              ${button(h.primaryCta, "primary")}
              ${h.secondaryCta ? button(h.secondaryCta, "secondary", { arrow: false }) : ""}
            </div>
          </div>
          <div class="hero-media">
            <img src="${h.image}" alt="${page.title}">
            <span class="ai-label">${AI_IMAGE_LABEL}</span>
            ${h.videoBadge ? `
              <div class="video-overlay-badge">
                <span class="play-dot">▶</span>
                <span>${t(h.videoBadge)}</span>
              </div>` : ""}
          </div>
        </div>
      </section>`;
  }

  // C02 — Problem statement
  function C02ProblemStatement(sec) {
    return `
      <section class="content-section" data-component="C02-problem-statement">
        ${note(sec.note)}
        <div class="section-inner">
          <div class="statement-box" data-theme="dark">
            <span class="section-tag">${sec.tag}</span>
            <h2>${t(sec.title)}</h2>
            <p>${t(sec.body)}</p>
            <div class="statement-highlight">${t(sec.highlight)}</div>
          </div>
        </div>
      </section>`;
  }

  // C03 — Pillar cards
  function C03PillarCards(sec) {
    return `
      <section class="content-section" data-component="C03-pillar-cards">
        ${note(sec.note)}
        <div class="section-inner">
          ${sectionHead(sec)}
          <div class="pillars-grid">
            ${sec.pillars.map(p => `
              <article class="pillar-card" style="cursor:pointer;" onclick="navigateTo('${p.target}')">
                ${media(p.image, p.name, "pillar-card__img")}
                <div class="pillar-card__body">
                  <span class="pillar-verb">${p.verb} · ${p.badge}</span>
                  <h3 class="pillar-name">${p.name}</h3>
                  <p class="pillar-desc">${t(p.desc)}</p>
                  <div style="margin-top:auto;">
                    ${button({ label: `Explore ${p.name}`, target: p.target }, "outline-dark", { stop: true })}
                  </div>
                </div>
              </article>`).join("")}
          </div>
        </div>
      </section>`;
  }

  // C04 — Pillar feature. Variants: "cards" (OPUSlab), "checklist" (OPUStudio), "subcards" (Manufacturing)
  function featureCard(c) {
    return `
      <article class="feature-card">
        ${c.image ? media(c.image, c.title) : ""}
        <div class="feature-card__content">
          ${c.eyebrow ? `<span class="section-tag">${c.eyebrow}</span>` : ""}
          <h3>${t(c.title)}</h3>
          <p>${t(c.body)}</p>
          <div>${button(c.cta)}</div>
        </div>
      </article>`;
  }

  function C04PillarFeature(sec) {
    let inner = "";

    if (sec.variant === "cards") {
      inner = `
        ${sectionHead(sec)}
        <div class="cards-grid-2">${sec.cards.map(featureCard).join("")}</div>`;
    }

    if (sec.variant === "checklist") {
      inner = `
        <div class="render-compare-box split" data-theme="dark">
          <div class="split__text">
            <span class="section-tag">${sec.tag}</span>
            <h2 class="section-title" style="color:#fff;">${t(sec.title)}</h2>
            <p style="color:#d6d3cb;font-size:16px;margin-bottom:16px;">${t(sec.subtitle)}</p>
            <p style="color:#b8b5ad;font-size:14.5px;margin-bottom:20px;">${t(sec.body)}</p>
            <div class="checklist-grid" style="margin-bottom:24px;">
              ${sec.bullets.map(b => `<div class="checklist-item" style="background:#1f1f1d;border-color:#333;color:#f3f1ec;">${t(b)}</div>`).join("")}
            </div>
            ${button(sec.cta, "primary")}
          </div>
          <div class="split__media">${media(sec.image, sec.title, "split__img split__img--dark")}</div>
        </div>`;
    }

    if (sec.variant === "subcards") {
      inner = `
        <div class="cards-grid-2 split" style="align-items:center;margin-bottom:36px;">
          <div class="split__text">
            <span class="section-tag">${sec.tag}</span>
            <h2 class="section-title">${t(sec.title)}</h2>
            <p style="font-weight:600;margin-bottom:12px;">${t(sec.subtitle)}</p>
            <p style="color:var(--text-muted);margin-bottom:24px;">${t(sec.body)}</p>
            ${button(sec.cta, "primary")}
          </div>
          <div class="split__media">${media(sec.image, sec.title, "split__img")}</div>
        </div>
        <div class="cards-grid-2">${sec.subFeatures.map(featureCard).join("")}</div>`;
    }

    return `
      <section class="content-section" data-component="C04-pillar-feature" data-variant="${sec.variant}">
        ${note(sec.note)}
        <div class="section-inner">${inner}</div>
      </section>`;
  }

  // C05 — Proof (quote + stats + project cards)
  function C05Proof(sec) {
    const q = sec.quote;
    return `
      <section class="content-section" data-component="C05-proof">
        ${note(sec.note)}
        <div class="section-inner">
          ${sectionHead(sec)}
          <blockquote class="proof-quote${Tbc.cls(q.tbc, { dark: true })}" data-theme="dark">
            <p>${t(q.text)}</p>
            <footer>${t(q.author)}</footer>
          </blockquote>
          <div class="fact-grid proof-stats">
            ${sec.stats.map(s => `
              <div class="fact-card${Tbc.cls(s.tbc, { dark: true })}" data-theme="dark">
                <div class="fact-value">${t(s.value)}</div>
                <div class="fact-label">${t(s.label)}</div>
              </div>`).join("")}
          </div>
          <div class="cards-grid-3 proof-projects">
            ${sec.projects.map(pr => `
              <article class="feature-card${Tbc.cls(pr.tbc)}">
                <div class="feature-card__content">
                  <span class="section-tag">${t(pr.label)}</span>
                  <h3 style="font-size:18px;">${t(pr.title)}</h3>
                  <p>${t(pr.text)}</p>
                </div>
              </article>`).join("")}
          </div>
          ${button(sec.cta)}
        </div>
      </section>`;
  }

  // C06 — Split media (image + text, optional chips). mediaSide: "left" | "right"
  function C06SplitMedia(sec) {
    const chips = sec.chips ? `
      <div class="split-chips">
        ${sec.chips.map(ch => `<button type="button" class="subpage-pill${Tbc.cls(ch.tbc, { chip: true })}" data-page="${sec.chipTarget}">${t(ch.label)}</button>`).join("")}
      </div>` : "";
    const text = `
      <div class="split__text">
        <span class="section-tag">${sec.tag}</span>
        <h2 class="section-title">${t(sec.title)}</h2>
        <p style="font-weight:600;margin-bottom:12px;">${t(sec.subtitle)}</p>
        <p style="color:var(--text-muted);margin-bottom:${chips ? "20px" : "24px"};">${t(sec.body)}</p>
        ${chips}
        ${button(sec.cta, sec.ctaStyle === "primary" ? "primary" : "outline-dark")}
      </div>`;
    const mediaCol = `<div class="split__media">${media(sec.image, sec.imageAlt || sec.title, "split__img")}</div>`;
    return `
      <section class="content-section" data-component="C06-split-media">
        ${note(sec.note)}
        <div class="section-inner">
          <div class="cards-grid-2 split" style="align-items:center;">
            ${sec.mediaSide === "left" ? mediaCol + text : text + mediaCol}
          </div>
        </div>
      </section>`;
  }

  // C07 — Insights teaser
  function C07InsightsTeaser(sec) {
    return `
      <section class="content-section" data-component="C07-insights-teaser">
        ${note(sec.note)}
        <div class="section-inner">
          ${sectionHead(sec)}
          <p style="margin-bottom:24px;max-width:760px;">${t(sec.body)}</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
            ${button(sec.primaryCta, "primary")}
            ${button(sec.secondaryCta, "outline-dark", { arrow: false })}
          </div>
        </div>
      </section>`;
  }

  // C08 — CTA band (closing CTA, used by every page)
  function C08CtaBand(c) {
    if (!c) return "";
    return `
      <section class="closing-cta" data-component="C08-cta-band" data-theme="dark">
        ${note(c.note)}
        <div class="closing-cta__inner">
          <span class="hero-eyebrow">${c.tag}</span>
          <h2 class="hero-title closing-cta__title">${t(c.title)}</h2>
          <p style="font-weight:600;color:#e5e3dc;margin-bottom:10px;">${t(c.subtitle)}</p>
          <p class="hero-subtitle" style="font-size:16px;">${t(c.body)}</p>
          <div class="hero-actions" style="justify-content:center;">
            ${button(c.primaryCta, "primary")}
            ${c.secondaryCta ? button(c.secondaryCta, "secondary", { arrow: false }) : ""}
          </div>
        </div>
      </section>`;
  }

  const REGISTRY = {
    "C02-problem-statement": C02ProblemStatement,
    "C03-pillar-cards": C03PillarCards,
    "C04-pillar-feature": C04PillarFeature,
    "C05-proof": C05Proof,
    "C06-split-media": C06SplitMedia,
    "C07-insights-teaser": C07InsightsTeaser
  };

  window.OpusComponents = {
    Tbc,
    media,
    note,
    C01Hero,
    C08CtaBand,
    // Returns null when the section type is not a registered component.
    render(sec) {
      const fn = REGISTRY[sec.type];
      return fn ? fn(sec) : null;
    }
  };
})();
