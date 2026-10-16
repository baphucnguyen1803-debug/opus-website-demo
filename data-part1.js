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
      eyebrow: "Footwear manufacturing, done with purpose.",
      eyebrowCase: "sentence",
      note: {
        label: "Hero",
        component: "C01",
        purpose: "CEO tagline (confirmed 2 Oct) plus the platform promise",
        source: "Roy's H1 kept; eyebrow is a proposal"
      },
      title: "Footwear product creation, 3D innovation, and manufacturing in one connected platform",
      subtitle: "Opus brings together OPUSlab, OPUStudio, and OPUS Manufacturing to guide footwear brands from concept through virtual and technical development to digital assets, marketing content, and Vietnam-based manufacturing.",
      image: "assets/opus-hero-platform.jpg",
      videoBadge: "Introduction Video · Concept to Vietnam Bulk Production",
      primaryCta: { label: "Schedule a Call", target: "contact" },
      secondaryCta: { label: "Explore Product Creation", target: "product-creation" }
    },
    sections: [
      {
        type: "C02-problem-statement",
        note: {
          label: "A shoe passes through many hands",
          component: "C02",
          purpose: "open the story with the client's problem",
          source: "Roy's words from Why Choose Opus, Benefit 01"
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
          component: "C03",
          purpose: "answer the problem with one team, three verbs (not numbered: the work runs in parallel)",
          source: "Roy's card texts kept"
        },
        tag: "PLATFORM OVERVIEW",
        title: "Develop, present, and produce your footwear with one team",
        subtitle: "Three specialized pillars support the work from early concept to market communication and Vietnam-based production.",
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
        variant: "cards",
        note: {
          label: "OPUSlab section",
          component: "C04",
          purpose: "show product creation before production; 3D first, physical samples confirm",
          source: "Content Master v5 + Jiami 9 Oct"
        },
        tag: "OPUSlab",
        title: "OPUSlab, creating footwear through design, 3D, and technical innovation",
        subtitle: "OPUSlab brings together design direction, 3D and virtual development, technical interpretation, and physical development to move brand teams from early concept to production-ready footwear with fewer gaps across design, engineering, sampling, and manufacturing.",
        cards: [
          {
            eyebrow: "Design & 3D Development",
            title: "Design and 3D development that keep your brand moving",
            body: "Advanced 3D and virtual development allow teams to assess proportion, construction, materials, colorways, and details before physical sampling. Earlier alignment supports a clearer, faster, and more buildable route into development and production.",
            image: "assets/opus-lab-3d-cad.jpg",
            cta: { label: "Discover Design & 3D Development", target: "design-3d-development" }
          },
          {
            eyebrow: "Development Center",
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
          purpose: "one 3D base reused for sales and marketing assets",
          source: "Content Master v5"
        },
        tag: "OPUStudio",
        title: "OPUStudio, where footwear becomes digital brand assets",
        subtitle: "3D rendering, animation, videos, and interactive showcases for marketing, sales, e-commerce, and faster market communication.",
        body: "OPUStudio creates photorealistic footwear renders, animation, videos, and interactive digital assets for e-commerce, sales tools, campaigns, and launches, built from the same 3D model used in development. The same shoe can be shown in different colors, materials, lighting conditions, and environments without repeating a full physical shoot.",
        image: "assets/opus-studio-render.jpg",
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
        variant: "subcards",
        note: {
          label: "Manufacturing built around the shoe",
          component: "C04",
          purpose: "production routed from the product; the Development Center works inside the units",
          source: "v5 + confirmed 12 Oct; unit count to confirm"
        },
        tag: "OPUS MANUFACTURING",
        title: "Manufacturing built around the shoe",
        subtitle: "Vietnam-based production shaped by brand category, construction, technical requirements, and production capabilities.",
        body: "Footwear becomes stronger when development and manufacturing are built around the same product logic. OPUS Manufacturing supports complex constructions, advanced upper applications, outsole engineering, performance materials, and production oversight so brands can move from development into production with greater confidence. Its network of {{tbc:[number to confirm]}} partner manufacturing units in Vietnam gives each program access to the right category fit, construction capability, and technical manufacturing route without losing centralized control. The OPUSlab Development Center team works inside these units, so the people who made your samples are on site when bulk production begins.",
        image: "assets/opus-factory-vietnam.jpg",
        cta: { label: "Explore Manufacturing", target: "manufacturing" },
        subFeatures: [
          {
            eyebrow: "Innovation & Technology",
            title: "Practical innovation for technical footwear development",
            body: "Across OPUSlab, OPUStudio, and OPUS Manufacturing, Opus applies virtual development, product visualization, advanced compounds, engineered materials, outsole systems, and construction technologies according to the product's category, performance needs, and production route.",
            cta: { label: "Explore Innovation & Technology", target: "innovation-technology" }
          },
          {
            eyebrow: "Double Guard QMS",
            title: "Quality built into the manufacturing process",
            body: "Double Guard QMS adds a second layer of control across OPUS Manufacturing to support consistency, timeline discipline, and production accountability. It identifies issues earlier and keeps production aligned with the approved product standard.",
            cta: { label: "See Double Guard QMS", target: "double-guard-qms" }
          }
        ]
      },
      {
        type: "C05-proof",
        note: {
          label: "Why brands build with Opus",
          component: "C05",
          purpose: "the only proof block on the page",
          source: "NEW block, all content to confirm"
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
        type: "C06-split-media",
        mediaSide: "right",
        note: {
          label: "Footwear categories",
          component: "C06",
          purpose: "let brands find their category",
          source: "v5; comfort/barefoot proposed"
        },
        tag: "FOOTWEAR CATEGORIES",
        title: "Footwear built around brand categories",
        subtitle: "Different categories require different answers in fit, materials, construction, tooling, and production scale.",
        body: "Opus supports outleisure, athleisure, outdoor, sneakers, performance, casual, children's, and comfort and barefoot footwear with development and manufacturing capabilities shaped around how each shoe needs to perform, fit, and scale.",
        image: "assets/opus-categories.jpg",
        imageAlt: "Footwear Categories",
        chips: [
          { label: "Outleisure" },
          { label: "Athleisure" },
          { label: "Outdoor" },
          { label: "Sneakers" },
          { label: "Performance" },
          { label: "Casual" },
          { label: "Children’s Footwear" },
          { label: "Comfort & Barefoot", tbc: true }
        ],
        chipTarget: "footwear-categories",
        ctaStyle: "primary",
        cta: { label: "Explore Footwear Categories", target: "footwear-categories" }
      },
      {
        type: "C06-split-media",
        mediaSide: "left",
        note: {
          label: "Sustainability",
          component: "C06",
          purpose: "sustainability as product decisions, not promises",
          source: "v5"
        },
        tag: "SUSTAINABILITY & END-OF-LIFE",
        title: "Sustainability starts before production",
        subtitle: "Responsible footwear choices begin with materials, product construction, engineering, and manufacturing planning.",
        body: "Opus builds sustainability thinking into material selection, component compatibility, construction choices, production methods, and end-of-life possibilities. Each choice is considered against the category, performance needs, production route, and product lifecycle.",
        image: "assets/opus-sustainability.jpg",
        cta: { label: "Explore Sustainability", target: "sustainability-end-of-life" }
      },
      {
        type: "C07-insights-teaser",
        note: {
          label: "Opus Insights",
          component: "C07",
          purpose: "low-commitment next step (subscribe)",
          source: "proposal, newsletter tool to confirm"
        },
        tag: "OPUS INSIGHTS",
        title: "Practical footwear insights from concept to production",
        subtitle: "Thinking on product creation, materials, digital development, manufacturing, innovation, quality, and sustainability.",
        body: "Opus Insights shares product-specific perspectives for teams working across footwear development, sourcing, digital assets, and Vietnam-based manufacturing.",
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
      eyebrow: "ABOUT OPUS",
      title: "Shoemakers who stay with your shoe, from first sketch to bulk",
      subtitle: "Opus is built by footwear people working across Europe and Asia, with expertise in product creation, digital assets creation, and Vietnam-based manufacturing. From design thinking in Italy to development and production work in Vietnam, Opus is structured to support footwear brands from early idea to manufacturing execution through OPUSlab, OPUStudio, and OPUS Manufacturing.",
      image: "assets/opus-hero-platform.jpg",
      primaryCta: { label: "Schedule a Call", target: "contact" },
      secondaryCta: { label: "Explore Our Structure", target: "opus-lab" }
    },
    sections: [
      {
        type: "fact-strip",
        tag: "OPUS AT A GLANCE",
        stats: [
          { value: "2016", label: "Founded" },
          { value: "85+", label: "People across Italy, Vietnam, and international offices" },
          { value: "8 Units", label: "Partner manufacturing units in Vietnam" },
          { value: "25+", label: "Countries we ship to" }
        ]
      },
      {
        type: "story-timeline",
        tag: "OUR STORY",
        title: "Shoemakers first, rooted in craft, driven by innovation, and built to scale.",
        paragraphs: [
          "OPUS began with shoemaking roots, product details, and the practical work needed to turn ideas into real footwear. That foundation continues to shape how OPUS works today.",
          "Behind Opus is an international team of footwear people with different creative, technical, manufacturing, and commercial backgrounds. They bring experience from Europe and Asia, but what connects them is a shared understanding of how a shoe is designed, presented, and produced.",
          "As Opus has grown, that knowledge has become more structured. Today, it is organized through OPUSlab, OPUStudio, and OPUS Manufacturing, so product thinking, digital presentation, manufacturing coordination, and quality oversight can stay closer to the product."
        ],
        milestones: [
          { year: "2016", text: "Opus begins with European footwear design and technical sourcing roots." },
          { year: "2019", text: "First OPUSlab development team placed directly inside a partner manufacturing unit in South Vietnam." },
          { year: "2022", text: "Ho Chi Minh City headquarters and 3D development studio established alongside Treviso design hub." },
          { year: "2025", text: "Integrated OPUSlab, OPUStudio, and OPUS Manufacturing with Double Guard QMS across 8 partner units." }
        ]
      },
      {
        type: "people-grid",
        tag: "THE PEOPLE BEHIND OPUS",
        title: "The people who work on your shoe",
        subtitle: "Shoes are made by people with specific skills. These are some of the people you will work with.",
        people: [
          { name: "Roy", role: "Founder & Managing Director", exp: "22 years in footwear", location: "Treviso & Ho Chi Minh City", proud: "A technical waterproof trail runner where we solved a complex dual-density bonding challenge in round one." },
          { name: "David", role: "Head of Product & Development", exp: "18 years in footwear", location: "Ho Chi Minh City", proud: "An outleisure cupsole collection taken from 3D concept to confirmation sample in just two physical rounds." },
          { name: "Minh Nguyen", role: "Senior Pattern Maker", exp: "16 years in footwear", location: "Binh Duong Development Center", proud: "A multi-layered engineered mesh upper that kept perfect tension across all 12 graded sizes." },
          { name: "Marco Rossi", role: "Lead Sole Engineer", exp: "14 years in footwear", location: "Treviso / Dong Nai", proud: "A 3D-printed lugged outsole mockup that saved a client €18,000 in premature steel mould modifications." },
          { name: "Lan Pham", role: "Quality Control Lead (Double Guard QMS)", exp: "15 years in footwear", location: "Dong Nai & Long An Units", proud: "Zero AQL failures across a 45,000-pair European retail launch through inline Double Guard checks." },
          { name: "Hanh Tran", role: "Sourcing Specialist", exp: "12 years in footwear", location: "Ho Chi Minh City HQ", proud: "Sourcing a REACH-compliant bio-based EVA and recycled ripstop package without increasing target FOB." }
        ]
      },
      {
        type: "locations-grid",
        tag: "WHERE OPUS OPERATES",
        title: "Italy and Vietnam working at the center of the OPUS structure",
        subtitle: "Opus works through a focused international structure. Italy and Vietnam sit at the center of the company’s product and manufacturing model, while the international structure supports footwear brands’ business operations.",
        locations: [
          {
            place: "Italy (Treviso)",
            headline: "Design thinking in footwear",
            body: "In Treviso, Italy, OPUSlab transforms inspiration from leading design shows, emerging materials, innovation, and evolving trends into distinctive footwear ideas and informed product choices for our clients’ brands. Set within Italy’s strong design culture, OPUSlab gives a clear product identity at the beginning of the process—clarifying purpose, research, construction, material, and commercial characteristics."
          },
          {
            place: "Vietnam (Ho Chi Minh City & South Vietnam)",
            headline: "Where design moves into physical development and production",
            body: "Vietnam is the operational heart of OPUS. From our headquarters and 3D development studio in Ho Chi Minh City, OPUS teams carry footwear from virtual creation into physical development and production across 8 partner manufacturing units in South Vietnam. The OPUSlab Development Center team works inside these units, so the people who made your samples are on site when bulk production begins."
          },
          {
            place: "International Presence",
            headline: "Supporting the operations of international brands",
            body: "Opus also supports international brand relationships through coordinated operations in China, Singapore, and the Netherlands. These locations help support business development, communication, commercial coordination, and practical needs across global markets."
          }
        ]
      },
      {
        type: "compact-pillars-strip",
        tag: "HOW OPUS IS STRUCTURED TODAY",
        title: "Three pillars, a connected platform for footwear creation and manufacturing",
        subtitle: "Not every brand enters the OPUS structure at the same stage. OPUS brings the right people and capabilities around the product at the right time:",
        items: [
          { verb: "Develop", name: "OPUSlab", desc: "Design, 3D, and physical development, from first sketch to a shoe ready to make.", cta: { label: "Explore OPUSlab", target: "opus-lab" } },
          { verb: "Present", name: "OPUStudio", desc: "Renders, animation, and e-commerce visuals built from the same 3D model.", cta: { label: "Explore OPUStudio", target: "footwear-3d-studio" } },
          { verb: "Produce", name: "OPUS Manufacturing", desc: "Vietnam-based production, sourcing coordination, and Double Guard QMS quality control.", cta: { label: "Explore OPUS Manufacturing", target: "manufacturing" } }
        ]
      },
      {
        type: "steps-grid",
        tag: "HOW WE WORK WITH BRANDS",
        title: "A working model shaped around your product stage and brand needs",
        subtitle: "Every footwear project starts from a different point—early idea, sketch, CAD, 3D model, physical sample, carryover style, digital asset need, outsole challenge, or product ready for manufacturing.",
        steps: [
          { step: "1. Understand the product stage", desc: "We start by understanding the category, current development stage, available materials, technical questions, commercial needs, and target timeline." },
          { step: "2. Bring the right people together", desc: "Depending on the need, Opus can involve product creation, design, 3D, digital presentation, development, outsole engineering, sourcing, manufacturing, quality, or client coordination teams." },
          { step: "3. Define the next route", desc: "The next step may be product creation, 3D development, virtual development, physical sampling, digital product presentation, outsole engineering, manufacturing preparation, or production execution." },
          { step: "4. Carry the work forward", desc: "As the project develops, Opus keeps product information, technical input, digital assets, sourcing needs, quality expectations, and manufacturing reality connected around the product." }
        ]
      },
      {
        type: "verifiable-work",
        tag: "WORK YOU CAN CHECK",
        title: "Claims are easy to make. Here is what you can check.",
        items: [
          "<strong>Client Program Reference:</strong> European Outleisure Brand — Developed technical outleisure line from 3D CAD to bulk in 2 sample rounds.",
          "<strong>Certifications & Audit Reports:</strong> Shared on request for the specific facilities in your program.",
          "<strong>Physical & Chemical Test Reports:</strong> Test reports for your shoe from accredited international testing labs.",
          "<strong>On-Site Factory Visits:</strong> Visit the manufacturing units in South Vietnam where your shoe is developed and made."
        ]
      }
    ],
    closingCta: {
      tag: "NEXT STEP",
      title: "Where is your footwear project now?",
      subtitle: "Identify the right next step across OPUS",
      body: "Whether you are starting with an early idea, refining a design direction, developing a 3D model, reviewing samples, preparing digital assets, engineering an outsole, or planning production in Vietnam, Opus can help identify the right next step.",
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
      eyebrow: "OPUSlab · DEVELOP WITH PURPOSE",
      title: "Footwear design and development, from first sketch to a shoe that is ready to make",
      subtitle: "OPUSlab puts development right on the factory in Vietnam, keeping one dedicated team by your side from the first proto all the way to bulk production. You get the pattern makers, sole engineers, developers, and sourcing specialists of a full development team, without building one.",
      image: "assets/opus-lab-3d-cad.jpg",
      primaryCta: { label: "Talk to OPUSlab", target: "contact" },
      secondaryCta: { label: "Explore Product Creation", target: "product-creation" }
    },
    sections: [
      {
        type: "narrative-grid",
        tag: "EARLY TECHNICAL ALIGNMENT",
        title: "Product creation starts before production",
        lead: "A shoe is not ready for manufacturing just because the concept looks strong. Before production begins, the product needs to be reviewed through fit, last shape, pattern logic, construction, materials, outsole direction, sample stages, and manufacturing conditions.",
        cards: [
          {
            title: "Why Brands Choose OPUSlab as Their Trustworthy Partner?",
            body: "Most footwear brands don't maintain in-house development teams anymore, and too many suppliers work in silos—one does the upper, another the outsole, a third the assembly. That handoff is where timelines break: a misread pattern, a missing component, or a tooling revision after the mould has already opened. OPUSlab keeps the entire process with one team from day one."
          },
          {
            title: "Everything moves at once, around one shoe",
            body: "Product creation, 3D design, patterns and samples, and outsole engineering run in parallel, not one after another. Virtual Development keeps them connected: one editable virtual style that the whole team works from."
          }
        ]
      },
      {
        type: "subpillar-cards",
        tag: "OPUSlab CAPABILITIES",
        title: "Five connected capabilities inside OPUSlab",
        subtitle: "Explore each specialized stage of the OPUSlab product creation and engineering workflow:",
        cards: [
          {
            eyebrow: "Stage 01 · Product Direction",
            title: "Product Creation",
            desc: "Early product creation defines the direction of the shoe before technical development goes too far—including design direction, category logic, material thinking, construction planning, product architecture, and target price alignment.",
            cta: { label: "Explore Product Creation", target: "product-creation" }
          },
          {
            eyebrow: "Stage 02 · CAD & 3D",
            title: "Design & 3D Development",
            desc: "Helps teams review footwear earlier through CAD, 3D models, last-based proportion review, material exploration, and editable digital product data before relying only on physical sample rounds.",
            cta: { label: "Explore Design & 3D Development", target: "design-3d-development" }
          },
          {
            eyebrow: "Stage 03 · Digital Library",
            title: "Virtual Development",
            desc: "Every change in design, materials, and colorways is kept in one editable virtual style, so the team works from the same version, and next season starts from it. Existing shoes join through physical-to-digital conversion.",
            cta: { label: "Explore Virtual Development", target: "virtual-development" }
          },
          {
            eyebrow: "Stage 04 · Physical Prototyping",
            title: "Development Center",
            desc: "Where footwear becomes physical—developing last, pattern, construction, materials, development tooling, sampling stages (Proto 1 to Confirmation Sample), fitting, testing, and manufacturing readiness inside our Vietnam units.",
            cta: { label: "Explore the Development Center", target: "development-center" }
          },
          {
            eyebrow: "Stage 05 · Bottom-Unit Engineering",
            title: "Outsole Mould & Tooling Engineering",
            desc: "A production mould is a significant investment. Outsole Mould & Tooling Engineering checks the bottom unit as a 3D-printed or PU mockup first, supporting 3D blueprint refinement, compound alignment, and sole engineering.",
            cta: { label: "Explore Outsole Engineering", target: "outsole-mould-tooling-engineering" }
          }
        ]
      },
      {
        type: "highlight-split",
        tag: "DIGITAL + PHYSICAL SYNERGY",
        title: "3D shows the shoe. Samples prove it.",
        leftTitle: "3D Virtual Exploration",
        leftBody: "We use 3D to explore options fast: another colorway, a new material placement, a refined toe shape, without making a new pair each time.",
        rightTitle: "Physical Sample Proof",
        rightBody: "We use physical samples to confirm what matters on the foot: fit, comfort, materials, and how the shoe is built. Knowing which question belongs to which tool saves rounds, time, and cost. That is the difference between OPUSlab and a standalone 3D service.",
        image: "assets/opus-dev-center.jpg"
      },
      {
        type: "what-carries-forward",
        tag: "PLATFORM CONTINUITY",
        title: "What carries forward into OPUStudio & OPUS Manufacturing",
        body: "OPUSlab is part of the wider Opus platform. Once a shoe is developed, the same 3D model moves into OPUStudio for realistic renders, animations, e-commerce visuals, launch assets, and sales tools. Developing inside our manufacturing units means zero data loss: every shoe scales into OPUS Manufacturing with its entire history preserved—lasts, pattern files, sampling milestones, and test reports."
      }
    ],
    closingCta: {
      tag: "TALK TO OPUSlab",
      title: "Talk to OPUSlab",
      subtitle: "Wherever your shoe starts, we’ll map the next step",
      body: "Whether you have a rough sketch, a CAD file, a 3D render, a physical sample, or a carryover style—bring us where you are, and we’ll define exactly what Round 1 needs to solve.",
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
