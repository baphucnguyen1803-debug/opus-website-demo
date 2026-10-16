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

  function lead(text, extra = "") {
    return text ? `<p class="section-lead${extra}">${t(text)}</p>` : "";
  }

  function paras(list, cls = "section-body") {
    return (list || []).map(p => `<p class="${cls}">${t(p)}</p>`).join("");
  }

  // Tag + H2 + accent lead line + body paragraphs (partner wireframe hierarchy)
  function textBlock(sec) {
    return `
      ${sec.tag ? `<span class="section-tag">${sec.tag}</span>` : ""}
      ${sec.title ? `<h2 class="section-title">${t(sec.title)}</h2>` : ""}
      ${lead(sec.lead)}
      ${paras(sec.paragraphs)}`;
  }

  function art(key, pillar) {
    const p = pillar || (window.ShoeArt && window.ShoeArt.pillarFor(key)) || "lab";
    return window.ShoeArt
      ? `<div class="feature-card__art feature-card__art--${p}" aria-hidden="true">${window.ShoeArt.render(key)}</div>`
      : "";
  }

  function flowArrow() {
    return `<div class="flow-arrow" aria-hidden="true"><span>→</span></div>`;
  }

  function flowColumns(n) {
    return Array.from({ length: n }, () => "minmax(0,1fr)").join(" 32px ");
  }

  // Banner hero: full-width media on top, copy stacked below
  function C01HeroBanner(page) {
    const h = page.hero;
    const eyebrowClass = "hero-eyebrow" + (h.eyebrowCase === "sentence" ? " hero-eyebrow--sentence" : "");
    const actions = h.primaryCta || h.secondaryCta ? `
      <div class="hero-actions">
        ${button(h.primaryCta, "primary")}
        ${h.secondaryCta ? button(h.secondaryCta, "secondary", { arrow: false }) : ""}
      </div>` : "";
    return `
      <section class="hero-section hero-section--banner" data-component="C01-hero" data-variant="banner" data-theme="dark">
        ${note(h.note)}
        <div class="hero-banner">
          <div class="hero-banner__media">
            <img src="${h.image}" alt="${page.title}">
            <span class="ai-label">${AI_IMAGE_LABEL}</span>
            ${h.videoBadge ? `
              <div class="video-overlay-badge">
                <span class="play-dot">▶</span>
                <span>${t(h.videoBadge)}</span>
              </div>` : ""}
          </div>
          <div class="hero-banner__copy">
            ${h.eyebrow ? `<span class="${eyebrowClass}">${t(h.eyebrow)}</span>` : ""}
            <h1 class="hero-title">${t(h.title)}</h1>
            ${h.lead ? `<p class="hero-lead">${t(h.lead)}</p>` : ""}
            ${h.subtitle ? `<p class="hero-subtitle">${t(h.subtitle)}</p>` : ""}
            ${paras(h.paragraphs, "hero-subtitle")}
            ${actions}
          </div>
        </div>
      </section>`;
  }

  // C01 — Hero (used by every page)
  function C01Hero(page) {
    const h = page.hero;
    if (h.layout === "banner") return C01HeroBanner(page);
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
    const textOnly = sec.variant === "text";
    const cards = sec.pillars.map(p => `
      <article class="pillar-card${textOnly ? ` pillar-card--text pillar-card--${p.pillar}` : ""}" style="cursor:pointer;" onclick="navigateTo('${p.target}')">
        ${textOnly ? "" : media(p.image, p.name, "pillar-card__img")}
        <div class="pillar-card__body">
          ${p.verb ? `<span class="pillar-verb">${p.verb}${p.badge ? ` · ${p.badge}` : ""}</span>` : ""}
          <h3 class="pillar-name">${p.name}</h3>
          <p class="pillar-desc">${t(p.desc)}</p>
          <div style="margin-top:auto;">
            ${button({ label: `Explore ${p.name}`, target: p.target }, "outline-dark", { stop: true })}
          </div>
        </div>
      </article>`);
    const grid = sec.flow
      ? `<div class="pillars-grid pillars-grid--flow">${cards.join(flowArrow())}</div>`
      : `<div class="pillars-grid">${cards.join("")}</div>`;
    const flowLine = sec.flow
      ? `<div class="flow-line" aria-label="${sec.pillars.map(p => p.verb.replace(/\.$/, "")).join(", then ")}">
          ${sec.pillars.map(p => `<span>${p.verb.replace(/\.$/, "")}</span>`).join('<span class="flow-line__arrow" aria-hidden="true">→</span>')}
        </div>`
      : "";
    return `
      <section class="content-section" data-component="C03-pillar-cards"${sec.variant ? ` data-variant="${sec.variant}"` : ""}>
        ${note(sec.note)}
        <div class="section-inner">
          ${sec.lead || sec.paragraphs ? `<div class="text-block">${textBlock(sec)}</div>` : sectionHead(sec)}
          ${flowLine}
          ${grid}
          ${sec.caption ? `<p class="flow-caption">${t(sec.caption)}</p>` : ""}
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

  function nestedCard(c, pillar) {
    const visual = c.image ? media(c.image, c.name) : c.art ? art(c.art, pillar) : "";
    return `
      <article class="feature-card nested-card${visual && !c.image ? " feature-card--art" : ""}">
        ${visual}
        <div class="feature-card__content">
          <h3>${t(c.name)}</h3>
          <p class="nested-card__sub">${t(c.title)}</p>
          <p class="nested-card__body">${t(c.body)}</p>
          ${c.bullets ? `
            <span class="nested-card__list-title">${c.bulletsTitle || "Key supporting points"}</span>
            <ul class="nested-card__list">${c.bullets.map(b => `<li>${t(b)}</li>`).join("")}</ul>` : ""}
          <div class="nested-card__cta">${button(c.cta)}</div>
        </div>
      </article>`;
  }

  function C04PillarFeature(sec) {
    let inner = "";

    if (sec.variant === "nested") {
      const text = `
        <div class="split__text">
          <span class="section-tag">${sec.tag}</span>
          <h2 class="section-title">${t(sec.title)}</h2>
          ${lead(sec.subtitle)}
          ${sec.body ? `<p class="section-body">${t(sec.body)}</p>` : ""}
          ${button(sec.cta, "primary")}
        </div>`;
      const head = sec.image
        ? `<div class="cards-grid-2 split" style="align-items:center;">${text}<div class="split__media">${media(sec.image, sec.title, "split__img")}</div></div>`
        : `<div class="text-block">${text}</div>`;
      inner = `
        ${head}
        <div class="nested-panel nested-panel--${sec.pillar || "lab"}">
          <span class="nested-panel__label">${sec.nestedLabel}</span>
          <div class="cards-grid-2">${sec.nested.map(c => nestedCard(c, sec.pillar)).join("")}</div>
        </div>`;
    }

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
            ${lead(sec.subtitle, " section-lead--dark")}
            <p style="color:#b8b5ad;font-size:14.5px;margin-bottom:20px;">${t(sec.body)}</p>
            ${sec.bulletsTitle ? `<span class="checklist-title">${sec.bulletsTitle}</span>` : ""}
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

  function insightArticles(ids) {
    const page = (window.OPUS_PAGES || {})["opus-insights"];
    const hub = page && page.sections.find(s => s.type === "insights-hub");
    const all = hub ? hub.articles : [];
    return ids.map(id => all.find(a => a.id === id)).filter(Boolean);
  }

  // C07 — Insights teaser. Variant "editorial": three article cards pulled from Opus Insights
  function C07InsightsTeaser(sec) {
    if (sec.variant === "editorial") {
      const open = id => `navigateTo('opus-insights'); window.openInsightArticle && window.openInsightArticle('${id}')`;
      return `
        <section class="content-section" data-component="C07-insights-teaser" data-variant="editorial">
          ${note(sec.note)}
          <div class="section-inner">
            <div class="editorial-head">
              <div>
                ${sectionHead(sec)}
              </div>
              <div class="editorial-head__actions">
                ${button(sec.primaryCta, "primary")}
                ${button(sec.secondaryCta, "outline-dark", { arrow: false })}
              </div>
            </div>
            <div class="cards-grid-3 editorial-grid">
              ${insightArticles(sec.articleIds).map(a => `
                <article class="feature-card editorial-card" onclick="${open(a.id)}">
                  ${media(a.image, a.title)}
                  <div class="feature-card__content">
                    <span class="editorial-card__topic">${a.topic}</span>
                    <h3>${a.title}</h3>
                    <p>${a.excerpt}</p>
                    <button type="button" class="editorial-card__link" onclick="event.stopPropagation(); ${open(a.id)}">Read article →</button>
                  </div>
                </article>`).join("")}
            </div>
          </div>
        </section>`;
    }
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
          ${c.subtitle ? `<p style="font-weight:600;color:#e5e3dc;margin-bottom:10px;">${t(c.subtitle)}</p>` : ""}
          <p class="hero-subtitle" style="font-size:16px;">${t(c.body)}</p>
          <div class="hero-actions" style="justify-content:center;">
            ${button(c.primaryCta, "primary")}
            ${c.secondaryCta ? button(c.secondaryCta, "secondary", { arrow: false }) : ""}
          </div>
        </div>
      </section>`;
  }

  // C09 — Category grid (compact tiles with shoe silhouettes)
  function C09CategoryGrid(sec) {
    return `
      <section class="content-section" data-component="C09-category-grid">
        ${note(sec.note)}
        <div class="section-inner">
          <div class="category-head">
            <div class="text-block">
              ${sec.tag ? `<span class="section-tag">${sec.tag}</span>` : ""}
              <h2 class="section-title">${t(sec.title)}</h2>
              ${lead(sec.subtitle)}
              ${sec.body ? `<p class="section-body">${t(sec.body)}</p>` : ""}
            </div>
            ${button(sec.cta, "primary")}
          </div>
          <div class="category-grid">
            ${sec.categories.map(c => `
              <button type="button" class="category-tile${Tbc.cls(c.tbc)}" data-page="${sec.chipTarget}">
                <span class="category-tile__icon" aria-hidden="true">${window.ShoeArt ? window.ShoeArt.icon(c.icon) : ""}</span>
                <span class="category-tile__label">${t(c.label)}</span>
              </button>`).join("")}
          </div>
        </div>
      </section>`;
  }

  // C10 — Capability split (alternating text and media; media is a photo or an animated shoe scene)
  function C10CapabilitySplit(sec) {
    const visual = sec.art
      ? `<div class="capability-art">${art(sec.art, sec.pillar)}</div>`
      : media(sec.image, sec.imageAlt || sec.title, "split__img");
    const text = `
      <div class="split__text">
        ${textBlock(sec)}
        ${sec.callout ? `
          <div class="callout">
            <strong class="callout__title">${t(sec.callout.title)}</strong>
            ${paras(sec.callout.paragraphs, "callout__p")}
          </div>` : ""}
        ${button(sec.cta)}
      </div>`;
    const mediaCol = `<div class="split__media">${visual}</div>`;
    return `
      <section class="content-section" data-component="C10-capability-split"${sec.anchor ? ` id="${sec.anchor}"` : ""}>
        ${note(sec.note)}
        <div class="section-inner">
          <div class="cards-grid-2 split capability-split" style="align-items:center;">
            ${sec.mediaSide === "left" ? mediaCol + text : text + mediaCol}
          </div>
        </div>
      </section>`;
  }

  // C11 — Statement band (dark, centered transition)
  function C11StatementBand(sec) {
    return `
      <section class="content-section" data-component="C11-statement-band">
        ${note(sec.note)}
        <div class="section-inner">
          <div class="statement-box statement-box--band" data-theme="dark">
            ${sec.tag ? `<span class="section-tag">${sec.tag}</span>` : ""}
            <h2>${t(sec.title)}</h2>
            ${lead(sec.lead, " section-lead--dark section-lead--center")}
            ${paras(sec.paragraphs, "statement-box__p")}
          </div>
        </div>
      </section>`;
  }

  // C12 — Ecosystem cards (links to the other pillars)
  function C12EcosystemCards(sec) {
    return `
      <section class="content-section" data-component="C12-ecosystem-cards">
        ${note(sec.note)}
        <div class="section-inner">
          <div class="text-block">${textBlock(sec)}</div>
          <div class="cards-grid-2 ecosystem-grid">${sec.cards.map(featureCard).join("")}</div>
          ${sec.caption ? `<p class="flow-caption">${t(sec.caption)}</p>` : ""}
        </div>
      </section>`;
  }

  // C13 — Text with a process flow (stages or numbered steps joined by arrows)
  function C13TextProcess(sec) {
    const steps = sec.steps.map(s => `
      <div class="process-step">
        <span class="process-step__num">${s.label}</span>
        <p class="process-step__text">${t(s.text)}</p>
      </div>`);
    return `
      <section class="content-section" data-component="C13-text-process">
        ${note(sec.note)}
        <div class="section-inner">
          <div class="text-block">${textBlock(sec)}</div>
          <div class="process-flow" style="--flow-cols:${flowColumns(steps.length)};">${steps.join(flowArrow())}</div>
        </div>
      </section>`;
  }

  // C14 — Footprint: stylized map plus a country selector
  const MAP = { w: 600, h: 360, lon0: -14, lon1: 124, lat0: -4, lat1: 64 };
  const LAND = [
    [[-10, 36], [-9, 43], [-2, 47], [-5, 49], [2, 51], [4, 53], [8, 54], [7, 57], [5, 60], [10, 63], [26, 63], [30, 60], [40, 63], [40, 46], [29, 41], [26, 37], [22, 37], [16, 38], [13, 42], [9, 44], [3, 42], [-5, 36]],
    [[-13, 28], [-6, 35], [10, 37], [20, 32], [32, 31], [35, 28], [43, 12], [51, 11], [42, -2], [10, -2], [9, 4], [-8, 4], [-17, 14], [-17, 21]],
    [[35, 31], [36, 37], [42, 42], [50, 45], [60, 55], [80, 63], [124, 63], [124, 41], [121, 31], [110, 21], [109, 14], [106, 9], [101, 13], [99, 7], [101, 2], [104, 1], [103, 6], [98, 16], [92, 22], [88, 22], [80, 11], [77, 8], [73, 19], [67, 24], [57, 25], [52, 25], [56, 18], [45, 13], [40, 20]]
  ];

  const WATER = [
    [[-6, 35.8], [-1, 37.5], [3, 41.5], [9, 44], [12.5, 44.5], [14, 42], [16, 40.5], [18.5, 40.2], [20, 39], [23, 37.8], [27, 37.5], [36, 36.6], [35.5, 32], [30, 31], [20, 31.5], [11, 33.5], [10, 37], [1, 36.5], [-5, 35.2]],
    [[12.5, 45.5], [13.5, 44], [16, 42.5], [19, 41.5], [19.5, 42.5], [15, 44.5]],
    [[27.5, 41.5], [28, 46], [33, 46.5], [41.5, 42], [36, 41]],
    [[32.5, 30], [35, 28], [43, 13], [44, 12], [42, 15], [34, 28]],
    [[48, 30], [50.5, 29.5], [57, 26], [56, 24], [51, 24], [48.5, 28]]
  ];

  function project(lon, lat) {
    return [
      ((lon - MAP.lon0) / (MAP.lon1 - MAP.lon0)) * MAP.w,
      ((MAP.lat1 - lat) / (MAP.lat1 - MAP.lat0)) * MAP.h
    ];
  }

  function inside(lon, lat, poly) {
    let hit = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if ((yi > lat) !== (yj > lat) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) hit = !hit;
    }
    return hit;
  }

  function footprintMap(locations, active) {
    const step = 9;
    let dots = "";
    for (let y = step / 2; y < MAP.h; y += step) {
      for (let x = step / 2; x < MAP.w; x += step) {
        const lon = MAP.lon0 + (x / MAP.w) * (MAP.lon1 - MAP.lon0);
        const lat = MAP.lat1 - (y / MAP.h) * (MAP.lat1 - MAP.lat0);
        if (LAND.some(p => inside(lon, lat, p)) && !WATER.some(p => inside(lon, lat, p))) dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.7"/>`;
      }
    }
    const hubLoc = locations.find(l => l.hub) || locations[0];
    const [hx, hy] = project(hubLoc.pins[0].lon, hubLoc.pins[0].lat);
    const arcs = locations.filter(l => l !== hubLoc).map(l => {
      const [x, y] = project(l.pins[0].lon, l.pins[0].lat);
      const mx = (x + hx) / 2, my = Math.min(y, hy) - 70;
      return `<path class="fp-arc" d="M${x.toFixed(1)} ${y.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${hx.toFixed(1)} ${hy.toFixed(1)}"/>`;
    }).join("");
    const pins = locations.map((l, i) => `
      <g class="fp-pin${i === active ? " is-active" : ""}" data-footprint-pin="${i}">
        ${l.pins.map((p, k) => {
          const [x, y] = project(p.lon, p.lat);
          return k === 0
            ? `<circle class="fp-pin__pulse" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8"/>
               <circle class="fp-pin__dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.5"/>
               <text class="fp-pin__label" x="${(x + (p.labelDx || 10)).toFixed(1)}" y="${(y + (p.labelDy || 4)).toFixed(1)}"${p.labelAnchor ? ` text-anchor="${p.labelAnchor}"` : ""}>${p.name}</text>`
            : `<circle class="fp-pin__sub" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6"/>`;
        }).join("")}
      </g>`).join("");
    return `
      <svg class="fp-map" viewBox="0 0 ${MAP.w} ${MAP.h}" role="img" aria-label="Stylized map of the Opus footprint: ${locations.map(l => l.country).join(", ")}">
        <g class="fp-land">${dots}</g>
        <g class="fp-arcs">${arcs}</g>
        ${pins}
      </svg>`;
  }

  function C14Footprint(sec) {
    const active = Math.max(0, sec.locations.findIndex(l => l.active));
    return `
      <section class="content-section" data-component="C14-footprint">
        ${note(sec.note)}
        <div class="section-inner">
          <div class="text-block">${textBlock(sec)}</div>
          <div class="footprint" data-footprint>
            <div class="footprint__map">
              ${footprintMap(sec.locations, active)}
              <span class="footprint__map-label">Stylized map, not to scale</span>
            </div>
            <div class="footprint__list">
              ${sec.locations.map((l, i) => `
                <div class="footprint__item${i === active ? " is-active" : ""}" data-footprint-item="${i}">
                  <button type="button" class="footprint__trigger" data-footprint-index="${i}" aria-expanded="${i === active}">
                    <span class="footprint__country">${l.country}</span>
                    <span class="footprint__headline">${t(l.headline)}</span>
                  </button>
                  <p class="footprint__body">${t(l.body)}</p>
                </div>`).join("")}
            </div>
          </div>
        </div>
      </section>`;
  }

  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-footprint-index]");
    if (!trigger) return;
    const root = trigger.closest("[data-footprint]");
    const idx = trigger.dataset.footprintIndex;
    root.querySelectorAll("[data-footprint-item]").forEach(el => {
      const on = el.dataset.footprintItem === idx;
      el.classList.toggle("is-active", on);
      el.querySelector("[data-footprint-index]").setAttribute("aria-expanded", String(on));
    });
    root.querySelectorAll("[data-footprint-pin]").forEach(el => {
      el.classList.toggle("is-active", el.dataset.footprintPin === idx);
    });
  });

  const REGISTRY = {
    "C02-problem-statement": C02ProblemStatement,
    "C03-pillar-cards": C03PillarCards,
    "C04-pillar-feature": C04PillarFeature,
    "C05-proof": C05Proof,
    "C06-split-media": C06SplitMedia,
    "C07-insights-teaser": C07InsightsTeaser,
    "C09-category-grid": C09CategoryGrid,
    "C10-capability-split": C10CapabilitySplit,
    "C11-statement-band": C11StatementBand,
    "C12-ecosystem-cards": C12EcosystemCards,
    "C13-text-process": C13TextProcess,
    "C14-footprint": C14Footprint
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
