// Pillar hub layout: one scrollable page per pillar (overview + all sub-pages).
(function () {
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
    manufacturing: [
      "manufacturing-units-in-vietnam",
      "footwear-categories",
      "innovation-technology",
      "double-guard-qms",
      "supply-chain-certifications"
    ]
  };

  function isHub() {
    return new URLSearchParams(window.location.search).get("layout") === "hub";
  }

  function hubParentFor(pageId, pages) {
    const page = pages[pageId];
    if (!page) return null;
    if (page.parent && PILLAR_CHILDREN[page.parent]) return page.parent;
    if (PILLAR_CHILDREN[pageId]) return pageId;
    return null;
  }

  function composeHubPage(parentId, pages) {
    const parent = pages[parentId];
    if (!parent || !PILLAR_CHILDREN[parentId]) return parent;

    const sections = JSON.parse(JSON.stringify(parent.sections || []));
    PILLAR_CHILDREN[parentId].forEach(childId => {
      const child = pages[childId];
      if (!child) return;
      sections.push({
        type: "hub-chapter-intro",
        id: childId,
        chapterTitle: child.title,
        eyebrow: child.hero?.eyebrow || child.title,
        title: child.hero?.title || child.title,
        subtitle: child.hero?.subtitle || ""
      });
      (child.sections || []).forEach(sec => sections.push(sec));
    });

    return {
      ...parent,
      sections,
      _hubComposed: true
    };
  }

  function resolveView(pageId, pages) {
    if (!isHub()) {
      return { page: pages[pageId] || pages.home, scrollTo: null, hubParent: null };
    }
    const parentId = hubParentFor(pageId, pages);
    if (!parentId) {
      return { page: pages[pageId] || pages.home, scrollTo: null, hubParent: null };
    }
    const page = pages[pageId] || pages[parentId];
    const scrollTo = page.parent ? `hub-chapter-${pageId}` : null;
    return {
      page: composeHubPage(parentId, pages),
      scrollTo,
      hubParent: parentId
    };
  }

  function setLayout(mode) {
    const url = new URL(window.location.href);
    if (mode === "hub") url.searchParams.set("layout", "hub");
    else url.searchParams.delete("layout");
    const next = url.pathname + url.search + url.hash;
    if (next !== window.location.pathname + window.location.search + window.location.hash) {
      history.replaceState(null, "", next);
    }
    document.body.classList.toggle("layout-hub", mode === "hub");
    document.querySelectorAll("[data-layout-btn]").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-layout-btn") === mode);
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-layout-btn") === mode));
    });
  }

  function initLayoutToggle(onChange) {
    document.body.classList.toggle("layout-hub", isHub());
    document.querySelectorAll("[data-layout-btn]").forEach(btn => {
      const mode = btn.getAttribute("data-layout-btn");
      btn.classList.toggle("active", (mode === "hub") === isHub());
      btn.setAttribute("aria-pressed", String((mode === "hub") === isHub()));
      btn.addEventListener("click", e => {
        e.preventDefault();
        const next = mode === "hub" ? "hub" : "classic";
        setLayout(next);
        if (onChange) onChange();
      });
    });
  }

  window.OpusLayout = {
    PILLAR_CHILDREN,
    isHub,
    hubParentFor,
    composeHubPage,
    resolveView,
    setLayout,
    initLayoutToggle
  };
})();
