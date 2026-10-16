// OPUS Website Demo - Animated shoe illustrations for pillar capability cards (inline SVG, no image files)
(function () {
  const UPPER_D = "M46 106 C44 88 46 70 54 58 C60 50 72 48 84 52 C96 56 104 62 116 60 L132 56 C142 66 156 78 176 86 C200 94 236 96 262 98 C280 100 290 103 291 106 Z";
  const SOLE_D = "M38 106 L292 106 C297 106 299 111 296 115 C292 122 280 125 262 125 L54 125 C42 125 36 118 38 106 Z";
  const BOOT_D = "M46 106 C43 80 45 46 52 26 L108 26 C110 42 114 52 128 58 C142 68 156 78 176 86 C200 94 236 96 262 98 C280 100 290 103 291 106 Z";
  const MID_D = "M38 106 L292 106 C297 106 299 111 296 115 L40 115 C37 113 37 109 38 106 Z";
  const OUT_D = "M40 115 L296 115 C292 122 280 125 262 125 L54 125 C44 125 39 121 40 115 Z";
  const STRIPE_D = "M70 96 C110 86 170 88 230 99";
  const LACES_D = "M136 66 l12 -7 M148 74 l12 -7 M160 81 l12 -7";
  const HEEL_D = "M54 62 C60 74 62 90 60 106";
  const MIDLINE_D = "M40 115 H295";
  const TREAD_D = "M70 125 v-4 M90 125 v-4 M110 125 v-4 M130 125 v-4 M150 125 v-4 M170 125 v-4 M190 125 v-4 M210 125 v-4 M230 125 v-4 M250 125 v-4";

  const PILLAR = {
    "product-creation": "lab",
    "design-3d-development": "lab",
    "virtual-development": "lab",
    "development-center": "lab",
    "outsole-mould-tooling-engineering": "lab",
    "footwear-rendering": "studio",
    "footwear-animation-video": "studio",
    "digital-product-assets": "studio",
    "interactive-ecommerce-footwear-visuals": "studio",
    "manufacturing-units-in-vietnam": "mfg",
    "footwear-categories": "mfg",
    "innovation-technology": "mfg",
    "double-guard-qms": "mfg",
    "supply-chain-certifications": "mfg"
  };

  function sneaker(upperFill) {
    const fill = upperFill ? ` style="fill:${upperFill}"` : "";
    return `
      <path class="sa-sole" d="${SOLE_D}"/>
      <path class="sa-midline" d="${MIDLINE_D}"/>
      <path class="sa-upper" d="${UPPER_D}"${fill}/>
      <path class="sa-stripe" d="${STRIPE_D}"/>
      <path class="sa-line" d="${LACES_D}"/>
      <path class="sa-line" d="${HEEL_D}"/>`;
  }

  const shadow = (cx = 166, rx = 120) => `<ellipse class="sa-shadow" cx="${cx}" cy="136" rx="${rx}" ry="6"/>`;

  // Places a scaled shoe so its center lands on (cx, cy); the inner group stays free for CSS animation.
  function mini(cx, cy, s, fill, cls = "") {
    const tx = (cx - 167 * s).toFixed(1);
    const ty = (cy - 86 * s).toFixed(1);
    return `<g transform="translate(${tx} ${ty}) scale(${s})"><g class="${cls}">${sneaker(fill)}</g></g>`;
  }

  function range(from, to, step) {
    const out = [];
    for (let v = from; v <= to; v += step) out.push(v);
    return out;
  }

  const SCENES = {
    "product-creation": () => `
      <g class="sa-grid">${range(20, 320, 25).map(x => `<path d="M${x} 0 V150"/>`).join("")}${range(15, 150, 25).map(y => `<path d="M0 ${y} H330"/>`).join("")}</g>
      <path class="sa-draw" pathLength="1" d="${UPPER_D}"/>
      <path class="sa-draw sa-d2" pathLength="1" d="${SOLE_D}"/>
      <path class="sa-draw sa-draw--accent sa-d3" pathLength="1" d="${STRIPE_D}"/>
      <path class="sa-draw sa-d3" pathLength="1" d="${LACES_D}"/>
      <g class="sa-pencil">
        <path class="sa-pencil-body" d="M0 0 L8 -2 L30 -24 L24 -30 L2 -8 Z"/>
        <path class="sa-pencil-tip" d="M0 0 L8 -2 L2 -8 Z"/>
      </g>`,

    "design-3d-development": () => `
      <defs><clipPath id="sa-clip-3d"><path d="${UPPER_D}"/><path d="${SOLE_D}"/></clipPath></defs>
      <g class="sa-cad-corners"><path d="M24 34 h14 M24 34 v14 M306 34 h-14 M306 34 v14 M24 138 h14 M24 138 v-14 M306 138 h-14 M306 138 v-14"/></g>
      ${shadow()}
      ${sneaker()}
      <g class="sa-mesh" clip-path="url(#sa-clip-3d)">
        ${range(60, 290, 20).map(x => `<path d="M${x} 40 C${x + 6} 80 ${x - 4} 110 ${x + 2} 130"/>`).join("")}
        ${range(58, 124, 11).map(y => `<path d="M30 ${y} C120 ${y - 6} 220 ${y + 6} 300 ${y}"/>`).join("")}
        <rect class="sa-scan" x="20" y="40" width="10" height="92"/>
      </g>`,

    "virtual-development": () => `
      ${shadow()}
      <path class="sa-sole" d="${SOLE_D}"/>
      <path class="sa-midline" d="${MIDLINE_D}"/>
      <path class="sa-upper sa-colorway" d="${UPPER_D}"/>
      <path class="sa-stripe sa-stripe--light" d="${STRIPE_D}"/>
      <path class="sa-line" d="${LACES_D}"/>
      <path class="sa-line" d="${HEEL_D}"/>
      <g class="sa-swatches">
        ${["#ffffff", "#c84b31", "#2b5b84", "#1f6f50"].map((c, i) => `<circle class="sa-swatch sa-swatch--${i + 1}" cx="${246 + i * 18}" cy="24" r="6.5" style="fill:${c}"/>`).join("")}
      </g>`,

    "development-center": () => `
      <path class="sa-pattern" d="M18 34 C38 16 78 16 96 32 L90 46 C70 38 46 38 26 46 Z"/>
      <path class="sa-pattern sa-pattern--2" d="M236 20 C252 12 282 14 296 26 L290 38 C272 30 254 30 240 34 Z"/>
      ${shadow()}
      ${sneaker()}
      <path class="sa-stitch" d="M62 104 C58 86 60 70 68 60"/>
      <path class="sa-stitch" d="M84 100 C126 90 178 92 244 102"/>
      <g class="sa-needle"><path d="M196 18 V84"/><circle cx="196" cy="22" r="3"/></g>`,

    "outsole-mould-tooling-engineering": () => `
      <rect class="sa-mould" x="40" y="112" width="250" height="20" rx="4"/>
      <path class="sa-sole-solo" d="M54 112 L276 112 C290 112 294 102 286 96 L64 96 C48 96 44 108 54 112 Z"/>
      <path class="sa-tread" d="${range(80, 260, 18).map(x => `M${x} 104 h10`).join(" ")}"/>
      <g class="sa-press">
        <path class="sa-ram" d="M165 0 V30"/>
        <rect class="sa-mould" x="40" y="30" width="250" height="20" rx="4"/>
        <path class="sa-mould-cavity" d="M64 50 L276 50"/>
      </g>`,

    "footwear-rendering": () => `
      <defs>
        <linearGradient id="sa-g-render" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffffff"/>
          <stop offset="1" stop-color="#ddd6ff"/>
        </linearGradient>
        <clipPath id="sa-clip-render"><path d="${UPPER_D}"/><path d="${SOLE_D}"/></clipPath>
      </defs>
      <rect class="sa-softbox" x="14" y="12" width="42" height="22" rx="3"/>
      <path class="sa-rays" d="M58 30 L86 48 M50 36 L64 60 M60 22 L96 30"/>
      ${shadow()}
      <path class="sa-sole" d="${SOLE_D}"/>
      <path class="sa-midline" d="${MIDLINE_D}"/>
      <path class="sa-upper" d="${UPPER_D}" style="fill:url(#sa-g-render)"/>
      <path class="sa-stripe" d="${STRIPE_D}"/>
      <path class="sa-line" d="${LACES_D}"/>
      <path class="sa-line" d="${HEEL_D}"/>
      <g clip-path="url(#sa-clip-render)"><g transform="skewX(-20)"><rect class="sa-shine" x="0" y="30" width="34" height="110"/></g></g>
      <path class="sa-spark" d="M282 30 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z"/>
      <path class="sa-spark sa-spark--2" d="M250 58 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 Z"/>`,

    "footwear-animation-video": () => `
      <rect class="sa-frame" x="10" y="8" width="310" height="134" rx="10"/>
      <g class="sa-motion"><path d="M18 64 h18 M12 78 h24 M20 92 h16"/></g>
      <g transform="translate(0 -10)"><g class="sa-float">${sneaker()}</g></g>
      <path class="sa-play" d="M22 123 l9 5.5 l-9 5.5 Z"/>
      <rect class="sa-track" x="40" y="127" width="262" height="3" rx="1.5"/>
      <rect class="sa-progress" x="40" y="127" width="262" height="3" rx="1.5"/>`,

    "digital-product-assets": () => {
      const fills = ["#ffffff", "#c84b31", "#ddd6ff", "#1f6f50", "#2b5b84", "#f2c94c"];
      return fills.map((f, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 17 + col * 102;
        const y = 12 + row * 66;
        return `<g class="sa-tile sa-tile--${i + 1}">
          <rect class="sa-tile-bg" x="${x}" y="${y}" width="92" height="58" rx="8"/>
          ${mini(x + 46, y + 30, 0.28, f)}
        </g>`;
      }).join("");
    },

    "interactive-ecommerce-footwear-visuals": () => `
      <ellipse class="sa-orbit" cx="166" cy="134" rx="112" ry="9"/>
      <path class="sa-orbit-arrow" d="M270 128 l10 6 l-11 4"/>
      <g class="sa-spin">
        ${sneaker()}
        <circle class="sa-hotspot" cx="200" cy="92" r="4.5"/>
        <circle class="sa-hotspot sa-hotspot--2" cx="96" cy="72" r="4.5"/>
      </g>
      <text class="sa-label" x="296" y="34" text-anchor="end">360°</text>`,

    "manufacturing-units-in-vietnam": () => `
      <path class="sa-roof" d="M0 64 ${range(0, 300, 30).map(x => `L${x} 64 L${x + 30} 36 L${x + 30} 64`).join(" ")} L330 64 L330 0 L0 0 Z"/>
      <defs><clipPath id="sa-clip-belt"><rect x="10" y="40" width="310" height="80"/></clipPath></defs>
      <g clip-path="url(#sa-clip-belt)">
        ${mini(-60, 94, 0.32, "#ffffff", "sa-convey sa-convey--1")}
        ${mini(-60, 94, 0.32, "#c84b31", "sa-convey sa-convey--2")}
        ${mini(-60, 94, 0.32, "#1f6f50", "sa-convey sa-convey--3")}
      </g>
      <rect class="sa-belt" x="10" y="112" width="310" height="16" rx="8"/>
      <path class="sa-belt-dash" d="M20 120 H310"/>
      ${range(24, 306, 28).map(x => `<circle class="sa-roller" cx="${x}" cy="120" r="3"/>`).join("")}`,

    "footwear-categories": () => `
      ${shadow()}
      <g class="sa-cat sa-cat--1">${sneaker()}</g>
      <g class="sa-cat sa-cat--2">
        <path class="sa-sole" d="${SOLE_D}"/>
        <path class="sa-tread sa-tread--light" d="${TREAD_D}"/>
        <path class="sa-upper" d="${BOOT_D}"/>
        <path class="sa-line" d="M98 34 l14 -4 M102 44 l14 -4 M108 54 l14 -4 M136 66 l12 -7 M148 74 l12 -7"/>
        <path class="sa-stripe" d="M60 98 C110 86 170 88 230 99"/>
      </g>
      <g class="sa-cat sa-cat--3">
        <path class="sa-sole" d="${SOLE_D}"/>
        <path class="sa-strap" d="M58 106 C56 90 62 80 76 78 L98 84"/>
        <path class="sa-strap" d="M118 106 C126 74 156 70 170 106"/>
        <path class="sa-strap" d="M196 106 C208 84 240 84 252 106"/>
      </g>
      <g class="sa-dots">
        <circle class="sa-dot sa-dot--1" cx="152" cy="18" r="3.5"/>
        <circle class="sa-dot sa-dot--2" cx="166" cy="18" r="3.5"/>
        <circle class="sa-dot sa-dot--3" cx="180" cy="18" r="3.5"/>
      </g>`,

    "innovation-technology": () => `
      ${shadow()}
      <g class="sa-layer sa-layer--out">
        <path class="sa-sole" d="${OUT_D}"/>
        <path class="sa-tread sa-tread--light" d="${TREAD_D}"/>
      </g>
      <g class="sa-layer sa-layer--mid"><path class="sa-foam" d="${MID_D}"/></g>
      <g class="sa-layer sa-layer--upper">
        <path class="sa-upper" d="${UPPER_D}"/>
        <path class="sa-stripe" d="${STRIPE_D}"/>
        <path class="sa-line" d="${LACES_D}"/>
        <path class="sa-line" d="${HEEL_D}"/>
      </g>
      <g class="sa-leaders">
        <path d="M296 80 H314"/><circle cx="316" cy="80" r="3"/>
        <path d="M300 110 H314"/><circle cx="316" cy="110" r="3"/>
        <path d="M296 124 H314"/><circle cx="316" cy="124" r="3"/>
      </g>`,

    "double-guard-qms": () => `
      ${shadow()}
      ${sneaker()}
      <g class="sa-magnifier"><circle cx="0" cy="0" r="18"/><path d="M13 13 L26 26"/></g>
      <g transform="translate(266 14)"><g class="sa-shield sa-shield--1">
        <path d="M0 0 L12 4 V12 C12 20 6 25 0 28 C-6 25 -12 20 -12 12 V4 Z"/><path class="sa-check" d="M-5 13 l4 4 l7 -8"/>
      </g></g>
      <g transform="translate(298 14)"><g class="sa-shield sa-shield--2">
        <path d="M0 0 L12 4 V12 C12 20 6 25 0 28 C-6 25 -12 20 -12 12 V4 Z"/><path class="sa-check" d="M-5 13 l4 4 l7 -8"/>
      </g></g>`,

    "supply-chain-certifications": () => `
      <path class="sa-flow" d="M52 36 L120 68"/>
      <path class="sa-flow" d="M52 116 L120 98"/>
      <path class="sa-flow" d="M278 36 L214 68"/>
      <path class="sa-flow" d="M278 116 L214 98"/>
      <g class="sa-node sa-node--1"><circle cx="40" cy="30" r="14"/><rect x="33" y="23" width="14" height="14" rx="2"/></g>
      <g class="sa-node sa-node--2"><circle cx="40" cy="120" r="14"/><circle class="sa-node-inner" cx="40" cy="120" r="6"/></g>
      <g class="sa-node sa-node--3"><circle cx="290" cy="30" r="14"/><path class="sa-node-inner" d="M283 36 L290 23 L297 36 Z"/></g>
      <g class="sa-node sa-node--4"><circle cx="290" cy="120" r="14"/><path class="sa-node-inner" d="M284 120 l4 4 l8 -9"/></g>
      ${mini(166, 84, 0.5, "#ffffff", "sa-hub-shoe")}`
  };

  const fallback = () => `${shadow()}<g class="sa-float">${sneaker()}</g>`;

  function render(key) {
    const scene = SCENES[key] || fallback;
    const pillar = PILLAR[key] || "lab";
    return `<svg class="shoe-art shoe-art--${pillar}" viewBox="0 0 330 150" preserveAspectRatio="xMidYMid meet" role="presentation" focusable="false">${scene()}</svg>`;
  }

  window.ShoeArt = { render, pillarFor: key => PILLAR[key] || "lab" };
})();
