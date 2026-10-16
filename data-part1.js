// OPUS Website Demo - Data Part 1 (Clean Main Page Content)
window.OPUS_PAGES_PART1 = {
  "home": {
    id: "home",
    title: "Home",
    menuLabel: "Home",
    url: "/",
    metaTitle: "Shoe Manufacturer in Vietnam | Opus Footwear 3D Design and Manufacturing",
    metaDescription: "Discover how we help brands move from design and 3D development to scalable footwear manufacturing in Vietnam.",
    hero: {
      layout: "banner",
      eyebrow: "Footwear manufacturing, done with purpose.",
      eyebrowCase: "sentence",
      note: {
        label: "Hero",
        component: "C01 · banner",
        purpose: "CEO tagline (confirmed 2 Oct) plus the platform promise; full-width video banner on top, copy stacked below",
        source: "Roy's H1 kept; layout from partner wireframe 1a; video file to come"
      },
      title: "Footwear product creation, 3D innovation, and manufacturing in one connected platform",
      subtitle: "Opus brings together OPUSlab, OPUStudio, and OPUS Manufacturing to guide footwear brands from concept through virtual and technical development to digital assets, marketing content, and Vietnam-based manufacturing.",
      image: "assets/opus-hero-platform.jpg",
      videoBadge: "Introduction Video · Concept to Vietnam Bulk Production",
      primaryCta: { label: "Schedule a Call", target: "contact" },
      secondaryCta: { label: "Explore Product Creation", target: "opus-lab" }
    },
    sections: [
      {
        type: "C02-problem-statement",
        note: {
          label: "A shoe passes through many hands",
          component: "C02",
          purpose: "open the story with the client's problem",
          source: "Roy's words from Why Choose Opus, Benefit 01; kept from our version (not in partner wireframe 1a)"
        },
        tag: "THE PROBLEM WE SOLVE",
        title: "A shoe passes through many hands",
        body: "A concept may be created by one team, developed by another, visualized by a separate partner, sourced through different suppliers, and finally handed to a factory for production. Every handoff is a place where the product loses detail and the timeline slips.",
        highlight: "At Opus, one team follows your shoe from first sketch to bulk."
      },
      {
        type: "C03-pillar-cards",
        note: {
          label: "Develop, present, and produce…",
          component: "C03 · flow",
          purpose: "answer the problem with one team, three verbs joined by arrows: one connected system",
          source: "Roy's card texts kept; arrows and caption from partner wireframe 1a, section 2"
        },
        tag: "PLATFORM OVERVIEW",
        title: "Develop, present, and produce your footwear with one team",
        subtitle: "Three specialized pillars support the work from early concept to market communication and Vietnam-based production.",
        flow: true,
        caption: "One connected system, not three unrelated services.",
        pillars: [
          {
            verb: "Develop.",
            name: "OPUSlab",
            badge: "Product Creation & Engineering",
            desc: "OPUSlab creates and develops footwear through design, advanced 3D, technical engineering, prototyping, and manufacturing preparation.",
            image: "assets/opus-lab-3d-cad.jpg",
            target: "opus-lab"
          },
          {
            verb: "Present.",
            name: "OPUStudio",
            badge: "3D & Digital Brand Assets",
            desc: "OPUStudio turns footwear into photorealistic renders, animation, videos, interactive e-commerce visuals, sales tools, and launch content.",
            image: "assets/opus-studio-render.jpg",
            target: "footwear-3d-studio"
          },
          {
            verb: "Produce.",
            name: "OPUS Manufacturing",
            badge: "Vietnam Production & QMS",
            desc: "OPUS Manufacturing operates Vietnam-based production shaped by category, construction, technical requirements, quality control, and production capabilities.",
            image: "assets/opus-factory-vietnam.jpg",
            target: "manufacturing"
          }
        ]
      },
      {
        type: "C04-pillar-feature",
        variant: "nested",
        pillar: "lab",
        note: {
          label: "OPUSlab section",
          component: "C04 · nested",
          purpose: "show product creation before production; supporting services nested inside the pillar",
          source: "Content Master v5 + Jiami 9 Oct; nested panel and key points from partner wireframe 1a, section 3"
        },
        tag: "OPUSlab",
        title: "OPUSlab, creating footwear through design, 3D, and technical innovation",
        body: "OPUSlab brings together design direction, 3D and virtual development, technical interpretation, and physical development to move brand teams from early concept to production-ready footwear with fewer gaps across design, engineering, sampling, and manufacturing.",
        cta: { label: "Discover OPUSlab", target: "opus-lab" },
        nestedLabel: "OPUSlab supporting services",
        nested: [
          {
            name: "Design & 3D Development",
            title: "Design and 3D development that keep your brand moving",
            body: "Advanced 3D and virtual development allow teams to assess proportion, construction, materials, colorways, and details before physical sampling. Earlier alignment supports a clearer, faster, and more buildable route into development and production.",
            bullets: [
              "Footwear design and development",
              "Advanced 3D development",
              "Technical refinement and problem-solving",
              "Virtual review before physical sampling",
              "Better alignment across design, development, and production"
            ],
            image: "assets/opus-lab-3d-cad.jpg",
            cta: { label: "Discover Design & 3D Development", target: "design-3d-development" }
          },
          {
            name: "Development Center",
            title: "From footwear concept to physical prototypes",
            body: "The Development Center turns concepts into wearable, testable samples, shaping each prototype around fit, comfort, construction, cost, and timing.",
            image: "assets/opus-dev-center.jpg",
            cta: { label: "Explore the Development Center", target: "development-center" }
          }
        ]
      },
      {
        type: "C04-pillar-feature",
        variant: "checklist",
        note: {
          label: "OPUStudio section",
          component: "C04",
          purpose: "one 3D base reused for sales and marketing assets; subtitle styled as a distinct lead line",
          source: "Content Master v5; list heading and lead-line styling from partner comments on 1a, section 4"
        },
        tag: "OPUStudio",
        title: "OPUStudio, where footwear becomes digital brand assets",
        subtitle: "3D rendering, animation, videos, and interactive showcases for marketing, sales, e-commerce, and faster market communication.",
        body: "OPUStudio creates photorealistic footwear renders, animation, videos, and interactive digital assets for e-commerce, sales tools, campaigns, and launches, built from the same 3D model used in development. The same shoe can be shown in different colors, materials, lighting conditions, and environments without repeating a full physical shoot.",
        image: "assets/opus-studio-render.jpg",
        bulletsTitle: "Creative outputs built for launch, sales, and growth:",
        bullets: [
          "Photorealistic footwear renders and color or material updates",
          "Marketing videos and footwear animation",
          "Interactive e-commerce visuals",
          "Exploded shoe anatomy and product explainers",
          "Color, material, texture, and finishing"
        ],
        cta: { label: "Discover OPUStudio", target: "footwear-3d-studio" }
      },
      {
        type: "C04-pillar-feature",
        variant: "nested",
        pillar: "mfg",
        note: {
          label: "Manufacturing built around the shoe",
          component: "C04 · nested",
          purpose: "production routed from the product; supporting systems nested inside the pillar",
          source: "v5 + confirmed 12 Oct; unit count to confirm; nested panel from partner wireframe 1a, section 5"
        },
        tag: "OPUS MANUFACTURING",
        title: "Manufacturing built around the shoe",
        subtitle: "Vietnam-based production shaped by brand category, construction, technical requirements, and production capabilities.",
        body: "Footwear becomes stronger when development and manufacturing are built around the same product logic. OPUS Manufacturing supports complex constructions, advanced upper applications, outsole engineering, performance materials, and production oversight so brands can move from development into production with greater confidence. Its network of {{tbc:[number to confirm]}} partner manufacturing units in Vietnam gives each program access to the right category fit, construction capability, and technical manufacturing route without losing centralized control. The OPUSlab Development Center team works inside these units, so the people who made your samples are on site when bulk production begins.",
        image: "assets/opus-factory-vietnam.jpg",
        cta: { label: "Explore Manufacturing", target: "manufacturing" },
        nestedLabel: "Manufacturing supporting systems",
        nested: [
          {
            name: "Innovation & Technology",
            title: "Practical innovation for technical footwear development",
            art: "innovation-technology",
            body: "Across OPUSlab, OPUStudio, and OPUS Manufacturing, Opus applies virtual development, product visualization, advanced compounds, engineered materials, outsole systems, and construction technologies according to the product's category, performance needs, and production route.",
            cta: { label: "Explore Innovation & Technology", target: "innovation-technology" }
          },
          {
            name: "Double Guard QMS",
            title: "Quality built into the manufacturing process",
            art: "double-guard-qms",
            body: "Double Guard QMS adds a second layer of control across OPUS Manufacturing to support consistency, timeline discipline, and production accountability. It identifies issues earlier and keeps production aligned with the approved product standard.",
            cta: { label: "See Double Guard QMS", target: "double-guard-qms" }
          }
        ]
      },
      {
        type: "C09-category-grid",
        note: {
          label: "Footwear categories",
          component: "C09",
          purpose: "let brands find their category; compact tiles right after Manufacturing",
          source: "v5; comfort/barefoot proposed; moved to section 6 and redesigned per partner comment on 1a"
        },
        tag: "FOOTWEAR CATEGORIES",
        title: "Footwear built around brand categories",
        subtitle: "Different categories require different answers in fit, materials, construction, tooling, and production scale.",
        body: "Opus supports outleisure, athleisure, outdoor, sneakers, performance, casual, children's, and comfort and barefoot footwear with development and manufacturing capabilities shaped around how each shoe needs to perform, fit, and scale.",
        categories: [
          { label: "Outleisure", icon: "outleisure" },
          { label: "Athleisure", icon: "athleisure" },
          { label: "Outdoor", icon: "outdoor" },
          { label: "Sneakers", icon: "sneakers" },
          { label: "Performance", icon: "performance" },
          { label: "Casual", icon: "casual" },
          { label: "Children’s Footwear", icon: "children" },
          { label: "Comfort & Barefoot", icon: "barefoot", tbc: true }
        ],
        chipTarget: "footwear-categories",
        cta: { label: "Explore Footwear Categories", target: "footwear-categories" }
      },
      {
        type: "C06-split-media",
        mediaSide: "left",
        note: {
          label: "Sustainability",
          component: "C06",
          purpose: "sustainability as product decisions, not promises",
          source: "v5; \"& EOL\" dropped from the label per partner comment on 1a"
        },
        tag: "SUSTAINABILITY",
        title: "Sustainability starts before production",
        subtitle: "Responsible footwear choices begin with materials, product construction, engineering, and manufacturing planning.",
        body: "Opus builds sustainability thinking into material selection, component compatibility, construction choices, production methods, and end-of-life possibilities. Each choice is considered against the category, performance needs, production route, and product lifecycle.",
        image: "assets/opus-sustainability.jpg",
        cta: { label: "Explore Sustainability", target: "sustainability-end-of-life" }
      },
      {
        type: "C05-proof",
        note: {
          label: "Why brands build with Opus",
          component: "C05",
          purpose: "the only proof block on the page",
          source: "NEW block, all content to confirm; kept from our version (not in partner wireframe 1a)"
        },
        tag: "WHY BRANDS BUILD WITH OPUS",
        title: "Why brands build with Opus",
        quote: {
          text: "[TO CONFIRM: one or two sentences from Roy on why Opus exists and how it works with brands.]",
          author: "[Roy — full name and title to confirm]",
          tbc: true
        },
        stats: [
          { value: "[Year]", label: "Founded", tbc: true },
          { value: "[XX]", label: "People across Italy, Vietnam & international", tbc: true },
          { value: "[8 or 10]", label: "Partner manufacturing units in Vietnam", tbc: true },
          { value: "[XX]", label: "Countries shipped to", tbc: true }
        ],
        projects: [
          { label: "[Category] · [Market]", title: "[Project name — with the brand's permission]", text: "[Pillars involved: OPUSlab / OPUStudio / OPUS Manufacturing] · [one measurable result]", tbc: true },
          { label: "[Category] · [Market]", title: "[Project name — with the brand's permission]", text: "[Pillars involved: OPUSlab / OPUStudio / OPUS Manufacturing] · [one measurable result]", tbc: true },
          { label: "[Category] · [Market]", title: "[Project name — with the brand's permission]", text: "[Pillars involved: OPUSlab / OPUStudio / OPUS Manufacturing] · [one measurable result]", tbc: true }
        ],
        cta: { label: "See Why Brands Choose Opus", target: "why-choose-opus" }
      },
      {
        type: "C07-insights-teaser",
        variant: "editorial",
        note: {
          label: "Opus Insights",
          component: "C07 · editorial",
          purpose: "low-commitment next step: three real articles plus subscribe",
          source: "articles from the Opus Insights page; editorial cards from partner wireframe 1a, section 8; newsletter tool to confirm"
        },
        tag: "OPUS INSIGHTS",
        title: "Practical footwear insights from concept to production",
        subtitle: "Thinking on product creation, materials, digital development, manufacturing, innovation, quality, and sustainability.",
        articleIds: ["tech-pack-readiness", "render-vs-photo", "double-guard-qms-guide"],
        primaryCta: { label: "Read Opus Insights", target: "opus-insights" },
        secondaryCta: { label: "Subscribe to Opus Insights", target: "opus-insights" }
      }
    ],
    closingCta: {
      note: {
        label: "Closing CTA",
        component: "C08",
        purpose: "qualified inquiry",
        source: "v5"
      },
      tag: "START A CONVERSATION",
      title: "Tell us what you want to build",
      subtitle: "Start a footwear project conversation",
      body: "Tell us about your category, development stage, digital asset needs, production goals, and target timeline. Opus will help identify the right next step across OPUSlab, OPUStudio, and OPUS Manufacturing.",
      primaryCta: { label: "Schedule a Call", target: "contact" },
      secondaryCta: { label: "Contact Opus", target: "contact" }
    }
  },

  "why-choose-opus": {
    id: "why-choose-opus",
    title: "Why Choose Opus",
    menuLabel: "Why Choose Opus",
    url: "/why-choose-opus",
    metaTitle: "Why Choose Opus | Footwear Manufacturing Partner",
    metaDescription: "Discover why footwear brands choose Opus as their footwear manufacturing partner: one team from first sketch to bulk production.",
    hero: {
      eyebrow: "WHY CHOOSE OPUS",
      title: "Why footwear brands choose Opus: Work with people who understand the product, not just the order",
      subtitle: "A partner who thinks the product through with you, so the shoe that ships is the shoe you designed. Opus blends European shoemaking know-how with modern production in Vietnam. Our teams are product-minded, technically grounded, and commercially aware: they turn creative direction and technical requirements into practical product decisions.",
      image: "assets/opus-dev-center.jpg",
      chips: [
        "One team from first sketch to bulk",
        "Development inside the factories that make your shoe",
        "Two layers of quality control with Double Guard QMS",
        "Orders sized to your stage"
      ],
      primaryCta: { label: "Schedule a Call", target: "contact" },
      secondaryCta: { label: "Contact Opus", target: "contact" }
    },
    sections: [
      {
        type: "benefits-list",
        tag: "HOW OPUS SOLVES FOOTWEAR CHALLENGES",
        title: "Five reasons footwear programs move better with one connected partner",
        benefits: [
          {
            num: "01",
            title: "One team carries your shoe from idea to bulk production",
            subtitle: "Fewer gaps between the people who create, present, and manufacture your shoe.",
            problem: "Footwear programs lose clarity between stages. A concept may be created by one team, developed by another, visualized by a separate partner, sourced through different suppliers, and finally handed to a factory for production.",
            solution: "OPUS brings product creation, digital product presentation, materials and components, quality control, and Vietnam-based manufacturing into one organized footwear platform. Nothing is re-explained at the factory door: lasts, pattern files, sampling milestones, and test reports move with the shoe into production."
          },
          {
            num: "02",
            title: "See your full collection come to life earlier, so each sample round has a clear purpose",
            subtitle: "Product creation, 3D development, and technical thinking before the product costs time and money.",
            problem: "Late changes are the expensive ones. A fit issue found after the mould is cut, or a material that fails a test after the sales samples are made, costs weeks and money.",
            solution: "OPUSlab handles the early and technical stages of footwear creation. Your team reviews proportion, materials, construction, fit, and production feasibility in 3D first, then confirms them on physical samples.",
            extra: "<strong>What you get:</strong> a confirmed product direction before sampling, tooling, and production commitments become harder to change. Materials, construction, and tooling are checked against your target price as the shoe develops.<br><strong>Proof:</strong> outsole options are reviewed on 3D-printed or PU mockups before the brand invests in a production mould.",
            cta: { label: "Explore OPUSlab", target: "opus-lab" }
          },
          {
            num: "03",
            title: "Start selling before the photoshoot",
            subtitle: "Digital assets for sell-in, launch, e-commerce, and brand communication.",
            problem: "Sell-in, launch, and e-commerce content often has to start before final samples and photography are ready, and every new colorway means another shoot.",
            solution: "OPUStudio creates realistic renders, animations, product films, and digital experiences from the same 3D model used in development, so teams can present the product with more detail, flexibility, and consistency.",
            extra: "<strong>What you get:</strong> assets for sales presentations, campaigns, product launches, e-commerce, and market communication, without repeating a full shoot for every colorway.",
            cta: { label: "Explore OPUStudio", target: "footwear-3d-studio" }
          },
          {
            num: "04",
            title: "Production matched to your shoe, with our team on site",
            subtitle: "Manufacturing capacity built around product, growth, and brand, rather than a generic factory model.",
            problem: "Footwear brands need more than factory capacity. Each program needs a production route that fits the product: its category, materials, construction method, technical requirements, quality expectations, and scale.",
            solution: "OPUS Manufacturing connects Vietnam-based production with category-specific manufacturing, technical applications, and quality control. Instead of treating production as a final handoff, OPUS carries product thinking into the manufacturing route. The OPUSlab Development Center team works inside the partner manufacturing units, so the people who made your samples are on site when bulk begins.",
            cta: { label: "Explore OPUS Manufacturing", target: "manufacturing" }
          },
          {
            num: "05",
            title: "Start small, scale with the same team",
            subtitle: "From first runs to larger volumes, without changing partners.",
            problem: "Many factories set high minimums per style and color, so new brands and new categories struggle to start, and growing brands often have to switch suppliers as volumes rise.",
            solution: "Opus sizes production to your stage and keeps the same team and production route as your volumes grow.",
            cta: { label: "Start a Project Inquiry", target: "contact" }
          }
        ]
      },
      {
        type: "comparison-table",
        tag: "BENEFIT SUMMARY",
        title: "Separate suppliers, or one accountable partner",
        subtitle: "Footwear brands want product, production, and quality to stay aligned. Here is what changes with Opus:",
        rows: [
          { dimension: "Product thinking", separate: "Starts when the order arrives", opus: "Product thinking before production begins" },
          { dimension: "Technical decisions", separate: "Surface late, at the factory", opus: "Technical decisions earlier in development" },
          { dimension: "Sales & marketing visuals", separate: "Wait for final samples and a photoshoot", opus: "Digital assets that support sales, launch, and e-commerce" },
          { dimension: "Materials & quality", separate: "Checked at the end", opus: "Material development and quality control connected to the product" },
          { dimension: "Production route", separate: "The shoe is fitted to the factory", opus: "Vietnam-based manufacturing shaped around category and construction" },
          { dimension: "Accountability", separate: "One contact per stage", opus: "One accountable partner across creation, presentation, and execution" },
          { dimension: "Order size", separate: "High minimums per style", opus: "Orders sized to your stage" }
        ]
      },
      {
        type: "proof-block",
        tag: "SELECTED WORK",
        title: "Work you can check",
        quote: "“Working with Opus cut our sampling iterations in half and gave our sales team photorealistic 3D assets six weeks before physical SMS pairs arrived.”",
        author: "Head of Footwear Product, European Outdoor Brand",
        projects: [
          { brand: "Brand Alpha (Italy)", country: "Outleisure", product: "Technical Trail Sneaker", year: "2025", summary: "Full 3D development, custom EVA/rubber mould engineering & bulk production." },
          { brand: "Brand Beta (Netherlands)", country: "Sneakers", product: "Modular Cupsole & Recycled Knit Line", year: "2025", summary: "Physical-to-digital style library, OPUStudio e-commerce renders & Vietnam sourcing." },
          { brand: "Brand Gamma (UK)", country: "Performance", product: "Carbon-Infused Road Runner", year: "2026", summary: "Supercritical foam compound alignment, 3D-printed mockups & Double Guard QMS." }
        ],
        cta: { label: "Schedule a Call", target: "contact" }
      }
    ],
    closingCta: {
      tag: "START YOUR PROGRAM",
      title: "Tell us what you want to build",
      subtitle: "Identify the most suitable next step across OPUS",
      body: "Share your category, development stage, digital asset needs, manufacturing goals, target timeline, and expected volume if relevant. We will help you identify the most suitable next step across product creation, digital product presentation, sourcing, and Vietnam-based manufacturing.",
      primaryCta: { label: "Schedule a Call", target: "contact" },
      secondaryCta: { label: "Contact Opus", target: "contact" }
    }
  },

  "about-opus-manufacturing": {
    id: "about-opus-manufacturing",
    title: "About",
    menuLabel: "About",
    url: "/about-opus-manufacturing",
    metaTitle: "About Opus: Shoemakers Behind Your Shoe | OPUS Manufacturing",
    metaDescription: "Learn how Opus combines product creation, technical know-how, and Vietnam-based manufacturing to support footwear brands.",
    hero: {
      layout: "banner",
      eyebrow: "ABOUT OPUS",
      note: {
        label: "Hero",
        component: "C01 · banner",
        purpose: "who Opus is: product, people, and place",
        source: "Partner wireframe 2a, section 1; team or studio photography to come"
      },
      title: "A footwear partner shaped by product, people, and place",
      lead: "Opus is a connected footwear platform built around product creation, digital product presentation, and Vietnam-based manufacturing.",
      paragraphs: [
        "Opus brings together OPUSlab, OPUStudio, and OPUS Manufacturing to support footwear brands with the work that sits between idea, development, presentation, and production. Our structure reflects how footwear is actually made: through design judgment, technical interpretation, material and construction decisions, manufacturing discipline, and clear coordination between teams. With roots in shoemaking and a working footprint across Europe and Vietnam, Opus has grown into a footwear partner for brands that need product understanding as well as production execution."
      ],
      image: "assets/opus-dev-center.jpg"
    },
    sections: [
      {
        type: "C13-text-process",
        note: {
          label: "Our story",
          component: "C13",
          purpose: "from shoemaking roots to a connected platform, with a three-stage timeline",
          source: "Partner wireframe 2a, section 2; stages without years (no dates confirmed)"
        },
        tag: "OUR STORY",
        title: "From shoemaking roots to a broader footwear creation platform",
        paragraphs: [
          "Opus began with a focus on shoemaking, product detail, and the practical work needed to turn ideas into real footwear. Over time, that foundation expanded into a broader model covering product creation, technical development, digital presentation, manufacturing coordination, and quality oversight.",
          "This evolution came from the way footwear brands work today. A product rarely succeeds because of one isolated stage. Design intent, materials, construction, development decisions, sourcing, manufacturing, and presentation all influence the final result.",
          "Opus has grown around that reality. The company is built to keep those parts closer together, so the product can move from early thinking into physical development, commercial presentation, and manufacturing with fewer gaps between teams and stages."
        ],
        steps: [
          { label: "Stage 1", text: "Shoemaking roots & product detail" },
          { label: "Stage 2", text: "Model expands — technical, digital, manufacturing, quality" },
          { label: "Stage 3", text: "Opus today — parts kept close, fewer gaps" }
        ]
      },
      {
        type: "C03-pillar-cards",
        variant: "text",
        note: {
          label: "What Opus is today",
          component: "C03 · text",
          purpose: "the three connected pillars, one line each",
          source: "Partner wireframe 2a, section 3"
        },
        tag: "WHAT OPUS IS TODAY",
        title: "A connected platform for creation, innovation, and manufacturing footwear",
        lead: "Today, Opus works through three connected pillars.",
        pillars: [
          {
            pillar: "lab",
            verb: "Develop",
            name: "OPUSlab",
            desc: "The product creation and technical development hub. Supports the work that happens before manufacturing, including design direction, 3D development, virtual development, prototyping, technical interpretation, outsole mould and tooling engineering, and manufacturing readiness.",
            target: "opus-lab"
          },
          {
            pillar: "studio",
            verb: "Present",
            name: "OPUStudio",
            desc: "The digital product presentation studio. Creates realistic renders, footwear animation, e-commerce visuals, sales tools, launch assets, and product storytelling materials that help teams present products clearly and consistently.",
            target: "footwear-3d-studio"
          },
          {
            pillar: "mfg",
            verb: "Produce",
            name: "OPUS Manufacturing",
            desc: "The Vietnam-based production and execution platform. Connects product understanding with manufacturing planning, sourcing coordination, quality control, production oversight, and category-specific execution.",
            target: "manufacturing"
          }
        ],
        caption: "Together, these pillars allow Opus to support footwear brands across the stages where product decisions, visual communication, and manufacturing execution need to stay aligned."
      },
      {
        type: "C14-footprint",
        note: {
          label: "Our footprint",
          component: "C14",
          purpose: "each location supports a different part of the work; click a country to highlight it on the map",
          source: "Partner wireframe 2a, section 4; Vietnam province names to confirm"
        },
        tag: "OUR FOOTPRINT",
        title: "Europe, Italy, and Vietnam working as one footwear structure",
        lead: "Opus operates across Europe and Vietnam, with each location supporting a different part of the company's work.",
        paragraphs: [
          "This footprint is not only geographical. It shapes how Opus thinks, communicates, develops, and manufactures footwear."
        ],
        locations: [
          {
            country: "Italy",
            headline: "Design thinking rooted in footwear sensibility",
            body: "In Treviso, Italy, OPUSlab includes the design studio where early product thinking begins — proportion, aesthetics, category language, and brand direction before technical development. Italy gives Opus a strong product sensibility at the beginning of the process; good design thinking helps clarify purpose, construction direction, material expression, and commercial character.",
            pins: [{ name: "Treviso", lon: 12.24, lat: 45.67, labelDx: 10, labelDy: 16 }]
          },
          {
            country: "The Netherlands",
            headline: "European coordination for international brand teams",
            body: "Opus has a sales and management office in Amsterdam, supporting client communication, commercial coordination, and strategic management — a clear point of contact in Europe while keeping the work connected to Opus's development and manufacturing base in Vietnam.",
            pins: [{ name: "Amsterdam", lon: 4.9, lat: 52.37, labelDx: 10, labelDy: -6 }]
          },
          {
            country: "Vietnam",
            active: true,
            hub: true,
            headline: "Development, coordination, and manufacturing depth",
            body: "Vietnam is the operational heart of Opus. The company's headquarters and 3D development studio are based in Ho Chi Minh City, close to the manufacturing environment where many product decisions are carried into execution. Opus also works across manufacturing units in {{tbc:Binh Duong, Dong Nai, and Long An}}, allowing different product categories and technical requirements to be matched with suitable production environments. This Vietnam-based structure gives Opus development proximity, production visibility, sourcing coordination, and manufacturing discipline in one operating base.",
            pins: [{ name: "Ho Chi Minh City", lon: 106.7, lat: 10.8, labelDx: -12, labelDy: 22, labelAnchor: "end" }]
          }
        ]
      },
      {
        type: "C13-text-process",
        note: {
          label: "How we work with brands",
          component: "C13",
          purpose: "collaborative but not vague, condensed into four steps",
          source: "Partner wireframe 2a, section 5"
        },
        tag: "HOW WE WORK WITH BRANDS",
        title: "Practical collaboration from early thinking to execution",
        lead: "Opus works with brands through clear communication, structured development, and product-focused decision-making.",
        paragraphs: [
          "The work often begins with understanding the product: the category, intended consumer, design direction, construction logic, material needs, development stage, commercial objective, and manufacturing route. From there, Opus helps align the right capabilities around the product, whether the need is early product creation, digital development, presentation assets, technical development, or production execution.",
          "This way of working is collaborative, but it is not vague. Opus supports brands by helping clarify options, manage development information, coordinate technical input, and keep the product connected to manufacturing reality.",
          "Strong footwear development depends on many small decisions being handled correctly. Opus is built to make those decisions more visible, more structured, and easier to carry through the process."
        ],
        steps: [
          { label: "01", text: "Understand the product" },
          { label: "02", text: "Align the right capabilities" },
          { label: "03", text: "Clarify options, coordinate input" },
          { label: "04", text: "Keep connected to manufacturing reality" }
        ]
      },
      {
        type: "C11-statement-band",
        note: {
          label: "Why the structure matters",
          component: "C11",
          purpose: "the belief behind the model",
          source: "Partner wireframe 2a, section 6 (partner suggests trimming)"
        },
        tag: "WHY THE STRUCTURE MATTERS",
        title: "Product sensibility connected to manufacturing execution",
        lead: "The Opus model is built around a simple belief: footwear works best when product thinking and manufacturing execution are not separated too early.",
        paragraphs: [
          "A shoe may begin with a sketch, a reference, a CAD, a 3D model, or an existing physical style. But it becomes successful through the way every later decision is handled: last shape, pattern logic, materials, components, outsole engineering, sample stages, visual presentation, sourcing, quality control, and production planning.",
          "By connecting European product sensibility, Italy-based design thinking, Vietnam-based development and manufacturing, and international coordination, Opus gives brands a structure where those decisions can be managed with more context.",
          "The result is not a generic service process. It is a footwear-specific way of working, shaped around how products are created, presented, and manufactured in real conditions."
        ]
      }
    ],
    closingCta: {
      note: {
        label: "Closing CTA",
        component: "C08",
        purpose: "qualified inquiry",
        source: "Partner wireframe 2a, section 7"
      },
      tag: "NEXT STEP",
      title: "Tell us what you are building",
      body: "Share your category, development stage, target timeline, production goals, and the type of support you need. Opus will help assess the most relevant path across product creation, digital presentation, development, and Vietnam-based manufacturing.",
      primaryCta: { label: "Schedule a Call", target: "contact" },
      secondaryCta: { label: "Contact Opus", target: "contact" }
    }
  },

  "opus-lab": {
    id: "opus-lab",
    title: "OPUSlab",
    menuLabel: "OPUSlab",
    url: "/opus-lab",
    metaTitle: "Footwear Design & Development | OPUSlab",
    metaDescription: "Discover how Opus turns concepts into manufacturable, commercial-ready footwear through design, development, and technical support.",
    journeyActive: "Develop",
    hero: {
      layout: "banner",
      eyebrow: "OPUSLAB",
      note: {
        label: "Hero",
        component: "C01 · banner",
        purpose: "what OPUSlab is and why it matters before manufacturing",
        source: "OPUSlab partner wireframe, section 1"
      },
      title: "Footwear creation and technical development before manufacturing and scale",
      lead: "OPUSlab is where footwear ideas become clearer, more buildable, and better prepared for production.",
      paragraphs: [
        "OPUSlab brings together product creation, design direction, 3D development, virtual workflows, physical development, sampling, outsole engineering, and manufacturing readiness.",
        "The focus is simple: shape the product earlier, solve technical questions sooner, and create a clearer route from concept to production."
      ],
      image: "assets/opus-lab-3d-cad.jpg",
      primaryCta: { label: "Talk to OPUSlab", target: "contact" }
    },
    sections: [
      {
        type: "C10-capability-split",
        mediaSide: "right",
        art: "product-creation",
        pillar: "lab",
        note: {
          label: "Product Creation",
          component: "C10",
          purpose: "product decisions come before production",
          source: "OPUSlab partner wireframe, section 2; animated sketch until a real visual is chosen"
        },
        tag: "PRODUCT CREATION",
        title: "Product creation starts before production",
        lead: "A shoe is not ready for manufacturing just because the concept looks strong.",
        paragraphs: [
          "Before production begins, the product needs to be reviewed through fit, last shape, pattern logic, construction, materials, outsole direction, sample stages, and manufacturing conditions.",
          "OPUSlab brings these decisions into the process earlier, so product teams can move from creative concepts to a more practical development path."
        ],
        callout: {
          title: "What OPUSlab covers in product creation",
          paragraphs: [
            "Early product creation defines the direction of the shoe before technical development goes too far.",
            "This includes design direction, category logic, material thinking, construction planning, product architecture, and the development route needed to turn a creative concept into a real footwear program."
          ]
        },
        cta: { label: "Explore Product Creation", target: "product-creation" }
      },
      {
        type: "C10-capability-split",
        mediaSide: "left",
        art: "design-3d-development",
        pillar: "lab",
        note: {
          label: "Design & 3D Development",
          component: "C10",
          purpose: "review the shoe in 3D before physical sampling",
          source: "OPUSlab partner wireframe, section 3; heading flagged by the partner for revision"
        },
        tag: "DESIGN & 3D DEVELOPMENT",
        title: "Reviewing footwear before physical sampling",
        paragraphs: [
          "Design & 3D Development helps teams review footwear earlier through CAD, 3D models, last-based proportion review, material exploration, and editable digital product data.",
          "It gives teams a clearer way to evaluate shape, details, construction direction, and product updates before relying only on physical sample rounds."
        ],
        cta: { label: "Explore Design & 3D Development", target: "design-3d-development" }
      },
      {
        type: "C10-capability-split",
        mediaSide: "right",
        art: "virtual-development",
        pillar: "lab",
        note: {
          label: "Virtual Development",
          component: "C10",
          purpose: "one editable digital style for new and existing shoes",
          source: "OPUSlab partner wireframe, section 4; heading flagged by the partner for revision"
        },
        tag: "VIRTUAL DEVELOPMENT",
        title: "Digital workflows for new and existing styles",
        paragraphs: [
          "Virtual Development supports digital footwear workflows for both new and existing styles.",
          "This can include physical-to-digital conversion, reusable 3D style libraries, material and color updates, and virtual assets that help product teams review, update, and manage styles more efficiently across seasons."
        ],
        cta: { label: "Explore Virtual Development", target: "virtual-development" }
      },
      {
        type: "C10-capability-split",
        mediaSide: "left",
        image: "assets/opus-dev-center.jpg",
        imageAlt: "Development Center sample room",
        note: {
          label: "Development Center",
          component: "C10",
          purpose: "where the shoe becomes physical",
          source: "OPUSlab partner wireframe, section 5; heading flagged by the partner for revision"
        },
        tag: "DEVELOPMENT CENTER",
        title: "Where footwear becomes physical",
        paragraphs: [
          "The Development Center is where footwear becomes physical.",
          "It develops last, pattern, construction, materials, development tooling, sampling stages, fitting, testing, line review, and manufacturing readiness. This is where product ideas are tested through real shoemaking processes and refined into footwear that can move toward production."
        ],
        cta: { label: "Explore the Development Center", target: "development-center" }
      },
      {
        type: "C10-capability-split",
        mediaSide: "right",
        image: "assets/opus-outsole-tooling.jpg",
        imageAlt: "Outsole mould and tooling engineering",
        note: {
          label: "Outsole Mould & Tooling Engineering",
          component: "C10",
          purpose: "review the bottom unit before mould investment",
          source: "OPUSlab partner wireframe, section 6"
        },
        tag: "OUTSOLE MOULD & TOOLING ENGINEERING",
        title: "Engineering the bottom unit of the shoe",
        paragraphs: [
          "Outsole Mould and Tooling Engineering focus on the bottom unit of the shoe.",
          "OPUSlab supports outsole design, 3D development, blueprinting, mockups, compound and process alignment, mould development, and sole engineering. This helps brands review outsole concepts before mould investment and prepare bottom units for real product, wear, and manufacturing conditions."
        ],
        cta: { label: "Explore Outsole Engineering", target: "outsole-mould-tooling-engineering" }
      },
      {
        type: "C11-statement-band",
        note: {
          label: "Digital tools grounded in shoemaking",
          component: "C11",
          purpose: "transition: what makes OPUSlab different from a standalone 3D service",
          source: "OPUSlab partner wireframe, section 7"
        },
        tag: "DIGITAL TOOLS GROUNDED IN SHOEMAKING",
        title: "3D and virtual development are most useful when they are connected to real footwear knowledge.",
        paragraphs: [
          "OPUSlab uses digital workflows to improve product review, communication, and development visibility. But the work remains connected to patterns, samples, materials, tooling, fitting, and manufacturing readiness.",
          "That is what makes OPUSlab different from a general design studio or standalone 3D service — the digital work supports the product development process, not only the visual result."
        ]
      },
      {
        type: "C12-ecosystem-cards",
        note: {
          label: "Connected to the Opus ecosystem",
          component: "C12",
          purpose: "what happens after OPUSlab: OPUStudio and OPUS Manufacturing",
          source: "OPUSlab partner wireframe, section 8"
        },
        tag: "CONNECTED TO THE OPUS ECOSYSTEM",
        title: "OPUSlab is part of a wider platform, supporting brand needs before, during, and after product development",
        cards: [
          {
            title: "OPUStudio",
            body: "After a new product is created, OPUStudio can develop digital asset creation for faster market communication through realistic renders, animations, e-commerce visuals, launch assets, and sales tools.",
            image: "assets/opus-studio-render.jpg",
            cta: { label: "Explore OPUStudio", target: "footwear-3d-studio" }
          },
          {
            title: "OPUS Manufacturing",
            body: "When the product is ready for production, OPUS Manufacturing takes over the development work to Vietnam-based manufacturing, sourcing coordination, production oversight, and quality control.",
            image: "assets/opus-factory-vietnam.jpg",
            cta: { label: "Explore Manufacturing", target: "manufacturing" }
          }
        ],
        caption: "Together, the three pillars support footwear from product creation to digital assets and manufacturing execution."
      }
    ],
    closingCta: {
      note: {
        label: "Closing CTA",
        component: "C08",
        purpose: "qualified OPUSlab inquiry",
        source: "OPUSlab partner wireframe, section 9"
      },
      tag: "TALK TO OPUSlab",
      title: "Talk to OPUSlab",
      subtitle: "Tell us about your category, development stage, product goals, timeline, and the type of support you need.",
      body: "OPUSlab can help identify the right route across product creation, design and 3D development, virtual workflows, physical development, outsole engineering, and manufacturing readiness.",
      primaryCta: { label: "Talk to OPUSlab", target: "contact" },
      secondaryCta: { label: "Contact Opus", target: "contact" }
    }
  },

  "product-creation": {
    id: "product-creation",
    parent: "opus-lab",
    title: "Product Creation",
    menuLabel: "Product Creation",
    url: "/product-creation",
    metaTitle: "Footwear Product Creation | OPUSlab",
    metaDescription: "Explore Product Creation at OPUSlab, where virtual development, technical refinement, and footwear innovation come together before production.",
    journeyActive: "Develop",
    hero: {
      eyebrow: "OPUSlab · PRODUCT CREATION",
      title: "Footwear product creation before development goes too far",
      subtitle: "Product Creation at OPUSlab shapes the early decisions that define a footwear program. Before a shoe moves into detailed 3D development, physical sampling, outsole engineering, or manufacturing, the product direction needs to be clear: category, consumer, design direction, material logic, construction method, fit expectation, cost target, and development route.",
      image: "assets/opus-hero-platform.jpg",
      primaryCta: { label: "Discuss Product Creation", target: "contact" },
      secondaryCta: { label: "Talk to OPUSlab", target: "opus-lab" }
    },
    sections: [
      {
        type: "checklist-feature",
        tag: "FROM CREATIVE CONCEPT TO PRODUCT IMPLICATION",
        title: "Many development problems begin before the first sample is made",
        subtitle: "Product Creation gives structure to early work so design, development, sourcing, sampling, and manufacturing teams work from the same product logic. OPUSlab supports brands in shaping:",
        items: [
          "Design direction and product language",
          "Category logic for your product type",
          "2D concept development and CAD direction",
          "Material and component thinking",
          "Construction direction",
          "Outsole and bottom-unit concept",
          "Fit and comfort expectations",
          "Development route and sample plan",
          "Preparation for 3D, sampling, or manufacturing"
        ]
      },
      {
        type: "narrative-grid",
        tag: "COMMERCIAL & TECHNICAL GROUNDING",
        title: "Design thinking with manufacturing capabilities and target price in mind",
        lead: "Last shape, upper pattern, material physical properties, construction, tooling engineering, and production process all influence whether a design can become a real shoe.",
        cards: [
          {
            title: "Designed around a target price",
            body: "A shoe that cannot meet its target price is not ready, however good it looks. Product Creation checks early how materials, construction, components, and tooling choices affect cost, so the design is shaped around a price the brand can sell at."
          },
          {
            title: "Product construction, not only styling",
            body: "Considers the shoe as a complete system: upper, lining, reinforcements, bottom unit, components, materials, fit, comfort, durability, and construction method—tailored to lifestyle sneakers, outdoor/performance, or children's footwear."
          },
          {
            title: "What you receive",
            body: "Depending on the stage: a product direction and development route, CAD direction, a material and construction plan, or a sampling plan ready for the Development Center."
          }
        ]
      },
      {
        type: "connected-links",
        tag: "WHERE PRODUCT CREATION CONNECTS",
        title: "Connected across the OPUS platform",
        links: [
          { title: "Design & 3D Development", desc: "Turn ideas into CAD, 3D models, and editable digital product data.", target: "design-3d-development" },
          { title: "Virtual Development", desc: "Digitize existing styles or build reusable digital product libraries.", target: "virtual-development" },
          { title: "Development Center", desc: "Move into last, pattern, construction, sample stages, fitting, and testing.", target: "development-center" },
          { title: "Outsole Mould & Tooling", desc: "Outsole design, mockups, compound alignment, and sole-unit engineering.", target: "outsole-mould-tooling-engineering" },
          { title: "OPUS Manufacturing", desc: "Carry development work into Vietnam-based production and quality control.", target: "manufacturing" }
        ]
      }
    ],
    closingCta: {
      tag: "DISCUSS PRODUCT CREATION",
      title: "Shape the right product creation route",
      subtitle: "Tell us about your category, product idea, development stage, and target timeline",
      body: "OPUSlab can help define the right product creation route before the program moves into 3D development, physical sampling, outsole engineering, or manufacturing.",
      primaryCta: { label: "Talk to OPUSlab", target: "contact" },
      secondaryCta: { label: "Contact Opus", target: "contact" }
    }
  },

  "design-3d-development": {
    id: "design-3d-development",
    parent: "opus-lab",
    title: "Design & 3D Development",
    menuLabel: "Design & 3D Development",
    url: "/design-3d-development",
    metaTitle: "3D Footwear Design & Development | Opus",
    metaDescription: "See how Opus turns concepts into production-ready footwear through design support, digital development, and technical refinement.",
    journeyActive: "Develop",
    hero: {
      eyebrow: "OPUSlab · DESIGN & 3D DEVELOPMENT",
      title: "3D footwear development for clearer product review",
      subtitle: "Design & 3D Development at OPUSlab helps brand teams turn product ideas into visible, editable, and more technically useful footwear development work. Instead of waiting for every question to appear in physical sampling, teams review proportion, shape, material direction, construction lines, and outsole relationship earlier through CAD and 3D.",
      image: "assets/opus-lab-3d-cad.jpg",
      primaryCta: { label: "Discuss 3D Development", target: "contact" },
      secondaryCta: { label: "Talk to OPUSlab", target: "opus-lab" }
    },
    sections: [
      {
        type: "checklist-feature",
        tag: "FROM PRODUCT DIRECTION TO VISIBLE FOOTWEAR",
        title: "What 2D CAD and 3D footwear development help your team review early",
        subtitle: "Because 3D development, pattern work, and sampling sit with the same OPUSlab team, what you review on screen is what goes to the sample room:",
        items: [
          "Overall silhouette and proportion",
          "Last shape and volume",
          "Upper lines and panel balance",
          "Outsole and upper relationship",
          "Material and color direction",
          "Trims, logos, and detail placement",
          "Construction direction & material thickness",
          "Category-specific product language",
          "Preparation for physical sampling"
        ]
      },
      {
        type: "narrative-grid",
        tag: "DESIGN REVIEW WITH FOOTWEAR LOGIC",
        title: "3D grounded in how shoes are actually built",
        lead: "A shoe is not a flat visual object. It has volume, stance, flex, layers, material thickness, bottom-unit geometry, and construction requirements.",
        cards: [
          {
            title: "Editable product data before physical sampling",
            body: "Colorways, material direction, logo placement, panel lines, outsole proportions, and detail options can be explored before committing to physical iterations—improving alignment across design, product management, sourcing, and manufacturing."
          },
          {
            title: "From existing styles to updated development work",
            body: "When a physical shoe, previous sample, or carryover product needs to be updated, OPUSlab translates the product into editable digital development work to review new materials, colors, and construction adjustments without restarting from zero."
          }
        ]
      },
      {
        type: "connected-links",
        tag: "CONNECTED ACROSS OPUS",
        title: "Next steps from Design & 3D Development",
        links: [
          { title: "Virtual Development", desc: "Physical-to-digital conversion and reusable 3D style libraries across seasons.", target: "virtual-development" },
          { title: "Development Center", desc: "Physical lasts, patterns, fitting, testing, and sample stages.", target: "development-center" },
          { title: "OPUStudio", desc: "Photorealistic renders, animation, and e-commerce visuals from the same 3D model.", target: "footwear-3d-studio" },
          { title: "OPUS Manufacturing", desc: "Vietnam-based production, sourcing coordination, and Double Guard QMS.", target: "manufacturing" }
        ]
      }
    ],
    closingCta: {
      tag: "DISCUSS 3D DEVELOPMENT",
      title: "Start from a new concept, existing sample, or seasonal update",
      subtitle: "Define the right design and 3D development route",
      body: "Tell us whether you are starting from a new product idea, an existing physical style, a carryover product, or a seasonal update.",
      primaryCta: { label: "Discuss 3D Development", target: "contact" },
      secondaryCta: { label: "Talk to OPUSlab", target: "opus-lab" }
    }
  },

  "virtual-development": {
    id: "virtual-development",
    parent: "opus-lab",
    title: "Virtual Development",
    menuLabel: "Virtual Development",
    url: "/virtual-development",
    metaTitle: "Virtual Footwear Development | Opus",
    metaDescription: "Accelerate footwear development with Opus’s virtual development service for technical translation, visualization, and faster approvals.",
    journeyActive: "Develop",
    hero: {
      eyebrow: "OPUSlab · VIRTUAL DEVELOPMENT",
      title: "Virtual footwear development for carryover styles and seasonal updates",
      subtitle: "A virtual style is a working development file, not just a picture. Virtual Development at OPUSlab turns footwear styles into editable digital product assets for development, review, physical-to-digital conversion, and reusable virtual style libraries across seasons.",
      image: "assets/opus-lab-3d-cad.jpg",
      primaryCta: { label: "Discuss Virtual Development", target: "contact" },
      secondaryCta: { label: "Talk to OPUSlab", target: "opus-lab" }
    },
    sections: [
      {
        type: "checklist-feature",
        tag: "EDITABLE DIGITAL PRODUCT ASSETS",
        title: "Every update reviewed on screen reaches the next sample round with one less open question",
        subtitle: "Virtual Development supports review and fast iteration across:",
        items: [
          "Silhouette and proportion",
          "Material and color direction",
          "Upper and outsole relationship",
          "Logo and trim placement",
          "Detail updates & construction direction",
          "Carryover style changes",
          "Seasonal product updates",
          "Physical-to-digital conversion for existing shoes",
          "Multi-SKU collection style libraries"
        ]
      },
      {
        type: "narrative-grid",
        tag: "REUSABLE WORKFLOWS",
        title: "From physical shoes to seasonal virtual style libraries",
        lead: "A single digital product asset can support one style. A virtual style library supports the way a brand manages products across seasons.",
        cards: [
          {
            title: "Physical-to-Digital Conversion",
            body: "Many brands already have physical shoes, samples, or carryover styles that need updates. Once digitized by OPUSlab, teams can review new colorways, material changes, trims, and construction updates without restarting development from zero."
          },
          {
            title: "Virtual Style Libraries",
            body: "Organize styles, materials, colors, and product data in a reusable format. Compare options clearly, reduce repeated sampling work, and maintain consistency across design, product management, and sourcing teams."
          },
          {
            title: "Grounded in Shoemaking Knowledge",
            body: "Because Virtual Development sits inside OPUSlab, digital assets respect last shape, upper construction, and outsole geometry—connecting directly to the Development Center, OPUStudio, and OPUS Manufacturing."
          }
        ]
      }
    ],
    closingCta: {
      tag: "DISCUSS VIRTUAL DEVELOPMENT",
      title: "Build editable digital product assets or a virtual style library",
      subtitle: "Tell us your product stage, category, and seasonal workflow needs",
      body: "Tell us whether you need editable digital product assets, physical-to-digital conversion, seasonal color and material updates, or a reusable virtual footwear library.",
      primaryCta: { label: "Discuss Virtual Development", target: "contact" },
      secondaryCta: { label: "Talk to OPUSlab", target: "opus-lab" }
    }
  },

  "development-center": {
    id: "development-center",
    parent: "opus-lab",
    title: "Development Center",
    menuLabel: "Development Center",
    url: "/development-center",
    metaTitle: "Footwear Development Center | Opus",
    metaDescription: "Discover how Opus develops footwear from pattern design through prototyping, fitting, line review, testing, and commercialization samples.",
    journeyActive: "Develop",
    hero: {
      eyebrow: "OPUSlab · DEVELOPMENT CENTER",
      title: "Development Center: Where footwear becomes physical",
      subtitle: "The OPUSlab Development Center turns product concepts into real footwear, right inside the manufacturing units in Vietnam that will produce it. Concepts, CADs, 3D models, materials, and construction ideas move into patterns, development tooling, physical samples, fitting review, testing, and manufacturing readiness.",
      image: "assets/opus-dev-center.jpg",
      primaryCta: { label: "Talk to the Development Team", target: "contact" },
      secondaryCta: { label: "Contact Opus", target: "contact" }
    },
    sections: [
      {
        type: "narrative-grid",
        tag: "LAST, PATTERN, CONSTRUCTION & TOOLING",
        title: "The bridge between design and real product",
        lead: "A footwear product becomes real through last, pattern, material layers, construction method, sample making, fitting, testing, and repeated technical review.",
        cards: [
          {
            title: "Last, Pattern & Construction Focus",
            body: "Defines how the shoe fits and holds the foot, how the upper is structured, how material layers work together, how design lines translate into real construction, and how the shoe flexes, supports, and wears."
          },
          {
            title: "Development Tooling (Sample Environment)",
            body: "Supports cutting dies, toe moulds for toe preforming, heel moulds, pressing pads for assembly, outsole marking pads, HF moulds, and no-sew moulds—giving physical sample execution better accuracy and control."
          },
          {
            title: "Category-Specific Ergonomics & Testing",
            body: "Adapts development across Last & Fit Ergonomics, Material Sourcing, Upper Patterning, Flex Point & Torsional Stability, Abrasion Resistance, Waterproofing Membranes, Outsole Mechanics, and Physical Testing Standards."
          }
        ]
      },
      {
        type: "sample-stages",
        tag: "STRUCTURED SAMPLING PROCESS",
        title: "Sampling is not one event. Each sample stage answers a different question.",
        subtitle: "Together, these 10 structured sample stages create a disciplined route from concept to commercial product:",
        stages: [
          { code: "Stage 01 · Proto 1", name: "First Physical Translation", desc: "Assesses overall proportion, construction direction, visual balance, and whether the product is moving in the right direction." },
          { code: "Stage 02 · Fitting Samples", name: "Fit, Comfort & Stance", desc: "Refines how the shoe sits on the foot and where adjustments are needed in upper construction, last, or bottom unit." },
          { code: "Stage 03 · ILR", name: "Initial Line Review", desc: "Evaluates the product in a more commercial and technical state to review readiness and align on remaining corrections." },
          { code: "Stage 04 · FLR", name: "Final Line Review", desc: "Final review stage before full commercialization or bulk readiness to confirm expected standards." },
          { code: "Stage 05 · SMS", name: "Salesman Samples", desc: "Samples used for sales activities, buyer meetings, internal line building, and commercial presentation." },
          { code: "Stage 06 · Photo Samples", name: "Photo Shooting Samples", desc: "Prepared specifically for photography, campaign work, website use, and visual brand presentation." },
          { code: "Stage 07 · Marketing Samples", name: "Launch & Storytelling", desc: "Supports launch preparation and content creation (or partially replaced digitally via OPUStudio 3D renders)." },
          { code: "Stage 08 · Testing Samples", name: "Physical & Lab Testing", desc: "Assesses physical performance, wear behavior, bonding strength, construction reliability, and category standards." },
          { code: "Stage 09 · Size Sets", name: "Full Size Run Grading", desc: "Samples across the size run to confirm grading and fit consistency before bulk production begins." },
          { code: "Stage 10 · Confirmation", name: "Confirmation Samples", desc: "The approved golden reference that OPUS Manufacturing and Double Guard QMS measure bulk production against." }
        ]
      }
    ],
    closingCta: {
      tag: "TALK TO THE DEVELOPMENT TEAM",
      title: "Move your footwear from concept into structured sampling",
      subtitle: "Pattern development, sample stages, fitting review, testing & seasonal calendar support",
      body: "Tell us what you are developing, where the product stands, and what support you need inside our Vietnam Development Center.",
      primaryCta: { label: "Talk to the Development Team", target: "contact" },
      secondaryCta: { label: "Contact Opus", target: "contact" }
    }
  },

  "outsole-mould-tooling-engineering": {
    id: "outsole-mould-tooling-engineering",
    parent: "opus-lab",
    title: "Outsole Mould & Tooling Engineering",
    menuLabel: "Outsole Mould & Tooling",
    url: "/outsole-mould-tooling-engineering",
    metaTitle: "Outsole Mould & Tooling Engineering | Opus",
    metaDescription: "Explore how Opus converts outsole design into engineering, mockups, mould-ready solutions, and wearable footwear that meets real physical requirements.",
    journeyActive: "Develop",
    hero: {
      eyebrow: "OPUSlab · OUTSOLE MOULD & TOOLING ENGINEERING",
      title: "From outsole design to mould-ready engineering",
      subtitle: "The outsole affects stance, weight, grip, flexibility, durability, comfort, and performance. A production mould is a significant investment, and changing it is slow and costly. That is why OPUSlab checks the outsole as a 3D-printed or PU mockup before the mould route is fixed.",
      image: "assets/opus-outsole-tooling.jpg",
      primaryCta: { label: "Discuss Outsole Engineering", target: "contact" },
      secondaryCta: { label: "Talk to OPUSlab", target: "opus-lab" }
    },
    sections: [
      {
        type: "narrative-grid",
        tag: "MOCKUPS, MOULD LOGIC & COMPOUNDS",
        title: "Engineering the sole unit as a complete mechanical system",
        lead: "A strong outsole must work in the product, in the mould, and in wear—connecting midsoles, shanks, speed boards, heel clips, stabilizers, plates, and inserts.",
        cards: [
          {
            title: "Mockups Before Mould Investment",
            body: "3D-printed hard mockups, PU mockups, and evaluation models let teams physically verify outsole shape, proportion, sidewall expression, tread direction, flex logic, and upper/last integration before cutting steel."
          },
          {
            title: "Mould Logic & Tooling Direction",
            body: "Engineering support across slide moulds, slide moulds for Injection Phylon, compression moulds for CMEVA/Phylon, direct moulding/injection systems, dual-color/dual-density injection, and three-plate mould systems."
          },
          {
            title: "Compound & Process Alignment",
            body: "Matching shrinkage, density, rebound, abrasion, and bonding across compression-moulded rubber, injected rubber, CMEVA/Phylon, Injection Phylon, supercritical foam systems, eTPU, TPU injection, cast PU, and injected PU."
          }
        ]
      },
      {
        type: "checklist-feature",
        tag: "FROM 2D DIRECTION TO 3D OUTSOLE DEVELOPMENT",
        title: "Technical capabilities in outsole engineering",
        subtitle: "OPUSlab supports bottom-unit development from early sketch to bulk readiness:",
        items: [
          "2D outsole concept direction",
          "3D outsole CAD development",
          "Technical blueprint refinement",
          "Geometry review against the shoe last",
          "Proportion review with the upper",
          "Tread, lug, and sidewall development",
          "Early compound and process discussion",
          "3D-printed & PU mockup evaluation",
          "Production mould opening & sole-unit QC"
        ]
      }
    ],
    closingCta: {
      tag: "DISCUSS OUTSOLE ENGINEERING",
      title: "Review your outsole concept before committing to mould investment",
      subtitle: "Tell us about your outsole concept, category, compound direction, and tooling challenge",
      body: "OPUSlab can help define the right route across outsole design, 3D development, mockups, compound alignment, mould logic, and sole-unit engineering.",
      primaryCta: { label: "Discuss Outsole Engineering", target: "contact" },
      secondaryCta: { label: "Talk to OPUSlab", target: "opus-lab" }
    }
  }
};
