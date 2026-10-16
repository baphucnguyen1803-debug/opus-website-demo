// OPUS Website Demo - Header navigation: desktop mega-menu (≥1024px) and mobile menu (<1024px)
(function () {
  const NAV = [
    { label: "Home", page: "home" },
    { label: "Why Choose Opus", page: "why-choose-opus" },
    { label: "About", page: "about-opus-manufacturing" },
    {
      id: "lab",
      label: "OPUSlab",
      page: "opus-lab",
      eyebrow: "Develop with purpose",
      items: [
        { title: "OPUSlab Overview", desc: "Footwear creation and technical development before manufacturing", page: "opus-lab" },
        { title: "Product Creation", desc: "Early decisions on category, design direction, materials, construction and cost target", page: "product-creation" },
        { title: "Design & 3D Development", desc: "CAD, 3D on the last and editable product data", page: "design-3d-development" },
        { title: "Virtual Development", desc: "Digital styles, plus colorway and material updates by season", page: "virtual-development" },
        { title: "Development Center", desc: "Lasts, patterns, samples, fitting and testing", page: "development-center" },
        { title: "Outsole Mould & Tooling Engineering", desc: "Review the sole with mockups before investing in the mould", page: "outsole-mould-tooling-engineering" }
      ]
    },
    {
      id: "studio",
      label: "OPUStudio",
      page: "footwear-3d-studio",
      eyebrow: "Present with purpose",
      items: [
        { title: "OPUStudio Overview", desc: "Digital product assets for marketing, sales and launch", page: "footwear-3d-studio" },
        { title: "3D Rendering", desc: "Realistic footwear renders before final photography", page: "footwear-rendering" },
        { title: "Animation & Video", desc: "Product films that explain materials and construction", page: "footwear-animation-video" },
        { title: "Digital Asset Creation", desc: "One asset base reused across channels and seasons", page: "digital-product-assets" },
        { title: "Interactive E-commerce Visuals", desc: "Footwear-specific views for product pages and catalogs", page: "interactive-ecommerce-footwear-visuals" }
      ]
    },
    {
      id: "mfg",
      label: "OPUS Manufacturing",
      page: "manufacturing",
      eyebrow: "Produce with purpose",
      items: [
        { title: "OPUS Manufacturing Overview", desc: "Vietnam-based production built around the product", page: "manufacturing" },
        { title: "Manufacturing Units in Vietnam", desc: "Partner units matched to category and construction", page: "manufacturing-units-in-vietnam" },
        { title: "Footwear Categories", desc: "What each category needs in fit, materials and construction", page: "footwear-categories" },
        { title: "Innovation & Technology", desc: "Technical applications that improve the product", page: "innovation-technology" },
        { title: "Double Guard QMS", desc: "Two layers of quality control during production", page: "double-guard-qms" },
        { title: "Supply Chain & Certifications", desc: "Sourcing coordination and supply chain visibility", page: "supply-chain-certifications" }
      ]
    },
    { label: "Sustainability", page: "sustainability-end-of-life" },
    { label: "Insights", page: "opus-insights" }
  ];

  const HOVER_OPEN_DELAY = 150;
  const HOVER_CLOSE_DELAY = 120;
  const DESKTOP_QUERY = window.matchMedia("(min-width: 1024px)");

  const chevron = `<span class="nav-chevron" aria-hidden="true"></span>`;

  function renderDesktop() {
    return NAV.map(item => {
      if (!item.items) {
        return `
          <li class="nav-item">
            <a class="nav-link" href="#${item.page}" data-page="${item.page}" data-page-link="${item.page}">${item.label}</a>
          </li>`;
      }
      return `
        <li class="nav-item nav-item--mega" data-mega="${item.id}">
          <button type="button" class="nav-link" id="mega-trigger-${item.id}" aria-expanded="false" aria-controls="mega-panel-${item.id}" data-page-link="${item.page}">
            ${item.label}${chevron}
          </button>
          <div class="mega-panel" id="mega-panel-${item.id}" role="region" aria-labelledby="mega-trigger-${item.id}" hidden>
            <span class="mega-eyebrow">${item.eyebrow}</span>
            <ul class="mega-list">
              ${item.items.map(sub => `
                <li>
                  <a class="mega-link" href="#${sub.page}" data-page="${sub.page}" data-page-link="${sub.page}">
                    <span class="mega-link__title">${sub.title}</span>
                    <span class="mega-link__desc">${sub.desc}</span>
                  </a>
                </li>`).join("")}
            </ul>
          </div>
        </li>`;
    }).join("");
  }

  function renderMobile() {
    return NAV.map(item => {
      if (!item.items) {
        return `<li><a class="mobile-nav__link" href="#${item.page}" data-page="${item.page}" data-page-link="${item.page}">${item.label}</a></li>`;
      }
      return `
        <li class="mobile-acc">
          <button type="button" class="mobile-nav__link mobile-acc__trigger" id="m-acc-trigger-${item.id}" aria-expanded="false" aria-controls="m-acc-${item.id}">
            ${item.label}${chevron}
          </button>
          <ul class="mobile-acc__list" id="m-acc-${item.id}" role="region" aria-labelledby="m-acc-trigger-${item.id}" hidden>
            ${item.items.map(sub => `
              <li><a class="mobile-acc__link" href="#${sub.page}" data-page="${sub.page}" data-page-link="${sub.page}">${sub.title}</a></li>`).join("")}
          </ul>
        </li>`;
    }).join("");
  }

  // ---------- Desktop mega-menu ----------
  let openId = null;
  let openTimer = null;
  let closeTimer = null;

  function megaParts(id) {
    return {
      item: document.querySelector(`.nav-item--mega[data-mega="${id}"]`),
      trigger: document.getElementById(`mega-trigger-${id}`),
      panel: document.getElementById(`mega-panel-${id}`)
    };
  }

  function openMega(id, { focusFirst = false } = {}) {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    if (openId && openId !== id) closeMega(openId);
    const { trigger, panel } = megaParts(id);
    if (!trigger || !panel) return;
    panel.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    openId = id;
    if (focusFirst) {
      const first = panel.querySelector("a");
      if (first) first.focus();
    }
  }

  function closeMega(id, { returnFocus = false } = {}) {
    const { trigger, panel } = megaParts(id);
    if (!trigger || !panel) return;
    panel.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    if (openId === id) openId = null;
    if (returnFocus) trigger.focus();
  }

  function closeAllMega() {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    if (openId) closeMega(openId);
  }

  function bindDesktop(root) {
    root.querySelectorAll(".nav-item--mega").forEach(item => {
      const id = item.getAttribute("data-mega");
      const trigger = item.querySelector(".nav-link");

      item.addEventListener("pointerenter", e => {
        if (e.pointerType !== "mouse" || !DESKTOP_QUERY.matches) return;
        clearTimeout(closeTimer);
        if (openId === id) return;
        clearTimeout(openTimer);
        openTimer = setTimeout(() => openMega(id), HOVER_OPEN_DELAY);
      });

      item.addEventListener("pointerleave", e => {
        if (e.pointerType !== "mouse") return;
        clearTimeout(openTimer);
        closeTimer = setTimeout(() => { if (openId === id) closeMega(id); }, HOVER_CLOSE_DELAY);
      });

      trigger.addEventListener("click", () => {
        if (openId === id) closeMega(id);
        else openMega(id);
      });

      trigger.addEventListener("keydown", e => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          openMega(id, { focusFirst: true });
        }
      });

      item.addEventListener("focusout", e => {
        if (e.relatedTarget && !item.contains(e.relatedTarget) && openId === id) closeMega(id);
      });
    });

    document.addEventListener("click", e => {
      if (openId && !e.target.closest(".nav-item--mega")) closeAllMega();
    });
  }

  // ---------- Mobile menu ----------
  function mobileParts() {
    return {
      menu: document.getElementById("mobile-menu"),
      toggle: document.getElementById("nav-toggle")
    };
  }

  function isMobileOpen() {
    const { menu } = mobileParts();
    return !!menu && !menu.hidden;
  }

  function openMobile() {
    const { menu, toggle } = mobileParts();
    if (!menu) return;
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.documentElement.classList.add("menu-open");
    document.body.classList.add("menu-open");
    const closeBtn = menu.querySelector(".mobile-menu__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeMobile({ returnFocus = true } = {}) {
    const { menu, toggle } = mobileParts();
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.documentElement.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    if (returnFocus) toggle.focus();
  }

  function trapFocus(e) {
    const { menu } = mobileParts();
    const focusables = Array.from(menu.querySelectorAll("a[href], button:not([disabled])"))
      .filter(el => el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function bindMobile() {
    const { menu, toggle } = mobileParts();
    if (!menu || !toggle) return;

    toggle.addEventListener("click", () => (isMobileOpen() ? closeMobile() : openMobile()));
    menu.querySelector(".mobile-menu__close").addEventListener("click", () => closeMobile());

    // The menu background outside the content column acts as the overlay.
    menu.addEventListener("click", e => {
      if (e.target === menu) closeMobile();
    });

    menu.addEventListener("keydown", e => {
      if (e.key === "Tab") trapFocus(e);
    });

    menu.querySelectorAll(".mobile-acc__trigger").forEach(btn => {
      btn.addEventListener("click", () => {
        const list = document.getElementById(btn.getAttribute("aria-controls"));
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        list.hidden = expanded;
      });
    });

    let wasDesktop = DESKTOP_QUERY.matches;
    const syncViewport = () => {
      const isDesktop = DESKTOP_QUERY.matches;
      if (isDesktop === wasDesktop) return;
      wasDesktop = isDesktop;
      if (isDesktop) closeMobile({ returnFocus: false });
      else closeAllMega();
    };
    DESKTOP_QUERY.addEventListener("change", syncViewport);
    window.addEventListener("resize", syncViewport);
  }

  function init() {
    const desktop = document.getElementById("main-nav");
    const mobile = document.getElementById("mobile-nav");
    if (desktop) {
      desktop.innerHTML = renderDesktop();
      bindDesktop(desktop);
    }
    if (mobile) mobile.innerHTML = renderMobile();
    bindMobile();

    document.addEventListener("keydown", e => {
      if (e.key !== "Escape") return;
      if (isMobileOpen()) {
        closeMobile();
      } else if (openId) {
        closeMega(openId, { returnFocus: true });
      }
    });
  }

  window.OpusNav = {
    init,
    closeAll({ returnFocus = false } = {}) {
      closeAllMega();
      closeMobile({ returnFocus });
    }
  };
})();
