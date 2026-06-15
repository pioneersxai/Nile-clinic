/**
 * ============================================================
 *  BRAND CONFIG — THE ONLY FILE YOU EVER EDIT PER CLIENT
 *  Change this file = entire site rebrands automatically
 *  Engine below the line — never touch it
 * ============================================================
 */

const BRAND = {

  // ════════════════════════════════════════════════════════
  //  IDENTITY — Who is this business?
  // ════════════════════════════════════════════════════════

  name:        "Alex Cafe",            // Business name — shows in navbar, footer, browser tab, everywhere
  tagline:     "أفضل تجربة قهوة في صعيد مصر", // Short slogan — shows under the name in the browser tab
  description: "كافيه أليكس - وجهتك المثالية للقهوة والمشروبات الفاخرة في سوهاج", // 1-2 sentences about the business — used in Google preview (SEO)
  keywords:    "كافيه, قهوة, سوهاج, مشروبات, كافيه أليكس", // Search keywords — comma separated — helps Google find the site
  author:      "Alex Cafe",            // Who built/owns the site — used in meta tags

  // ════════════════════════════════════════════════════════
  //  THEME — Colors and logo
  // ════════════════════════════════════════════════════════

  primaryColor:     "#1a1a1a",         // Main brand color — hex code — used for buttons and accents
  primaryColorDark: "#000000",         // Darker version of the main color — used for hover states
  faviconLetter:    "A",               // Single letter shown as the tiny browser tab icon — use first letter of business name
  faviconColor:     "%231a1a1a",       // Color of the favicon letter — MUST be hex with # replaced by %23 — e.g. red #ff0000 = %23ff0000

  // ════════════════════════════════════════════════════════
  //  LANGUAGE — Arabic or English?
  // ════════════════════════════════════════════════════════

  lang: "ar",   // Page language — "ar" for Arabic, "en" for English — affects fonts and SEO
  dir:  "rtl",  // Text direction — "rtl" for Arabic (right to left), "ltr" for English (left to right)

  // ════════════════════════════════════════════════════════
  //  CONTACT — How to reach the business
  // ════════════════════════════════════════════════════════

  phone:     "+20 100 000 0000",       // Phone number as it appears on screen — with country code and spaces
  whatsapp:  "201000000000",           // WhatsApp number — digits ONLY, no + no spaces no dashes — country code first
  email:     "hello@alexcafe.com",     // Business email — shown on site and used in mailto: links
  city:      "سوهاج، مصر",             // City and country — shown in contact section and footer
  hours:     "يومياً: 8:00 ص - 12:00 م", // Opening hours — shown in contact section

  // ════════════════════════════════════════════════════════
  //  API & DOMAIN — Technical settings
  // ════════════════════════════════════════════════════════

  apiBase: "https://api.alexcafe.com/api", // Backend API URL — if client has no backend, leave as is or put "#"
  domain:  "https://pioneersxai.github.io/Alex-Cafe", // The live website URL — used in OG tags for social sharing previews

  // ════════════════════════════════════════════════════════
  //  SOCIAL MEDIA — Leave "" to hide the icon completely
  // ════════════════════════════════════════════════════════

  social: {
    twitter:   "",                                      // Twitter/X URL — e.g. "https://x.com/alexcafe" — "" = hidden
    linkedin:  "",                                      // LinkedIn URL — "" = hidden
    instagram: "https://www.instagram.com/alexcafe",   // Instagram URL — "" = hidden
    youtube:   "",                                      // YouTube URL — "" = hidden
    tiktok:    "https://www.tiktok.com/@alexcafe",     // TikTok URL — "" = hidden
  },

  // ════════════════════════════════════════════════════════
  //  SECTIONS — Which sections show on the page?
  //  Remove a name from this list = that section disappears
  //  Add it back = it reappears
  //  ORDER MATTERS — sections show top to bottom as listed
  //
  //  Available options:
  //  "hero"         — Big opening section with title and buttons
  //  "stats"        — Numbers strip (5+ years, 20+ drinks, etc.)
  //  "features"     — Feature cards grid (why choose us)
  //  "services"     — Services cards with lists
  //  "products"     — Product cards with prices
  //  "team"         — Team member cards
  //  "process"      — How we work / steps
  //  "casestudies"  — Success stories with numbers
  //  "clients"      — Client logo grid
  //  "testimonials" — Customer reviews
  //  "cta"          — Call to action banner
  //  "contact"      — Contact form + info
  // ════════════════════════════════════════════════════════

  sections: [
    "hero",           // Always keep hero first
    "stats",          // Numbers strip
    "features",       // Why choose us cards
    "testimonials",   // Customer reviews
    "cta",            // Call to action
    "contact",        // Contact form
  ],

  // ════════════════════════════════════════════════════════
  //  AUTH BUTTONS — Show login/register buttons in navbar?
  //  true  = show (for SaaS/tech businesses with dashboards)
  //  false = hide (for cafes, clinics, restaurants, etc.)
  // ════════════════════════════════════════════════════════

  showAuthButtons: false, // true or false — false hides the login/register buttons

  // ════════════════════════════════════════════════════════
  //  NAV LINKS — Links shown in the navbar menu
  //  label = text shown, href = where it scrolls to
  //  Use "#sectionname" to scroll to a section on the page
  // ════════════════════════════════════════════════════════

  navLinks: [
    { label: "الرئيسية",     href: "#home" },          // Scrolls to top of page
    { label: "مميزاتنا",    href: "#features" },       // Scrolls to features section — must be in sections[] above
    { label: "آراء العملاء", href: "#testimonials" },  // Scrolls to testimonials section
    { label: "تواصل معنا",  href: "#contact" },        // Scrolls to contact section
  ],

  // ════════════════════════════════════════════════════════
  //  HERO — The first thing visitors see (full screen section)
  // ════════════════════════════════════════════════════════

  hero: {
    image:       "media/hero.png",              // Path to background photo — e.g. "media/hero.png"
                                  // Leave "" for the default warm espresso background (no photo)
                                  // When a path is set, photo fills the screen with a dark overlay on top
                                  // so text stays readable on any device size

    title:       "أفضل قهوة في صعيد مصر",   // Big headline — 5-8 words max — most important text on the site
    tagline:     "كافيه أليكس — سوهاج",      // Smaller text under the headline — brand name or short phrase
    description: "استمتع بتجربة قهوة فريدة في قلب سوهاج. أجواء هادئة، قهوة مختصة، ومشروبات فاخرة تناسب كل الأذواق.", // 1-2 sentences describing the business

    buttons: [
      // style options: "primary" (main button), "secondary" (outline), "whatsapp" (green)
      // href: use "#sectionid" to scroll, "whatsapp" to open WhatsApp, or any URL
      { text: "تواصل معنا", href: "#contact",  style: "primary" },                        // Main CTA button
      { text: "واتساب",     href: "whatsapp",  style: "whatsapp", icon: "fab fa-whatsapp" }, // WhatsApp button
    ],
  },

  // ════════════════════════════════════════════════════════
  //  STATS — The 4 numbers strip under the hero
  //  Keep exactly 4 — the 4th one always shows in dark color
  // ════════════════════════════════════════════════════════

  stats: [
    { number: "5+",   label: "سنوات خبرة" },   // number = big text, label = small text below it
    { number: "20+",  label: "نوع مشروب" },
    { number: "24/7", label: "متاح دائماً" },
    { number: "100%", label: "رضا العملاء" },  // This 4th one shows on dark background automatically
  ],

  // ════════════════════════════════════════════════════════
  //  FEATURES — "Why choose us" cards grid
  //  Add or remove items freely — 6 looks best (2 rows of 3)
  //  Every 3rd card automatically flips to dark color
  // ════════════════════════════════════════════════════════

  features: {
    title:    "لماذا أليكس؟",                           // Section heading
    subtitle: "نقدم أكثر من مجرد قهوة — نقدم تجربة لا تُنسى", // Section subheading

    items: [
      // icon = Font Awesome class — browse icons at fontawesome.com/icons
      // title = card heading, description = card body text
      { icon: "fas fa-coffee",    title: "قهوة مختصة",    description: "حبوب قهوة مختارة بعناية من أفضل المزارع العالمية، محمصة بشكل مثالي." },
      { icon: "fas fa-couch",     title: "أجواء مريحة",   description: "ديكور أنيق وأجواء هادئة تجعلك تستمتع بوقتك بعيداً عن ضغوط اليوم." },
      { icon: "fas fa-wifi",      title: "واي فاي مجاني", description: "اتصال إنترنت سريع ومجاني لجميع زوارنا طوال فترة إقامتهم." }, // ← this one auto-flips dark
      { icon: "fas fa-utensils",  title: "مأكولات خفيفة", description: "تشكيلة من أشهى المأكولات الخفيفة والحلويات المصنوعة يومياً." },
      { icon: "fas fa-snowflake", title: "مشروبات باردة", description: "تشكيلة واسعة من العصائر الطازجة والمشروبات الباردة المنعشة." },
      { icon: "fas fa-star",      title: "جودة لا تُضاهى", description: "نلتزم بأعلى معايير الجودة في كل كوب نقدمه لضمان رضاك التام." }, // ← this one auto-flips dark
    ],
  },

  // ════════════════════════════════════════════════════════
  //  SERVICES — Detailed service cards with feature lists
  //  Only shows if "services" is in sections[] above
  // ════════════════════════════════════════════════════════

  services: {
    title:    "خدماتنا",
    subtitle: "نقدم تشكيلة متنوعة من الخدمات",

    items: [
      {
        number:      "01",                    // Display number on the card
        icon:        "fas fa-coffee",         // Font Awesome icon
        title:       "قهوة مختصة",            // Service name
        description: "أفضل أنواع القهوة من حول العالم", // Short description
        features:    ["إسبريسو", "كابوتشينو", "لاتيه", "فلات وايت"], // Bullet list of features
      },
      {
        number:      "02",
        icon:        "fas fa-glass-cheers",
        title:       "مناسبات خاصة",
        description: "خدمة القهوة للمناسبات والفعاليات",
        features:    ["حجز صالة كاملة", "باريستا خاص", "قائمة مخصصة", "ديكور مميز"],
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  PRODUCTS — Product/menu cards with prices
  //  Only shows if "products" is in sections[] above
  // ════════════════════════════════════════════════════════

  products: {
    title:    "منتجاتنا",
    subtitle: "تشكيلتنا المميزة",

    items: [
      {
        badge:       "الأكثر طلباً",          // Badge label top-right of card — e.g. "جديد" "الأفضل" "مميز"
        icon:        "fas fa-coffee",          // Font Awesome icon for the product
        name:        "قهوة أليكس المميزة",     // Product name
        tagline:     "مزيجنا السري",           // Short product tagline
        description: "مزيج خاص من أجود أنواع حبوب القهوة يمنحك طعماً لا يُنسى.", // Product description
        features:    ["حبوب مختارة يدوياً", "تحميص طازج", "طعم فريد", "يُقدم يومياً"], // Feature list
        price:       "25",                     // Price number only — no currency symbol here
        currency:    "جنيه",                   // Currency label shown after the price
        buttons: [
          { text: "اطلب الآن", href: "whatsapp", style: "primary" }, // Order button — "whatsapp" opens WhatsApp
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  TEAM — Team member cards
  //  Only shows if "team" is in sections[] above
  // ════════════════════════════════════════════════════════

  team: {
    title:    "فريقنا",
    subtitle: "باريستا محترفون في خدمتك",

    members: [
      {
        avatar: "أ.م",           // 2-3 letters shown in the avatar circle — usually initials
        name:   "أحمد محمد",     // Full name
        role:   "مدير الكافيه",  // Job title
        bio:    "خبرة أكثر من 8 سنوات في عالم القهوة المختصة.", // Short bio
      },
      {
        avatar: "س.ع",
        name:   "سارة علي",
        role:   "رئيسة الباريستا",
        bio:    "حاصلة على شهادات دولية في تحضير القهوة المختصة.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  PROCESS — How we work / step by step
  //  Only shows if "process" is in sections[] above
  // ════════════════════════════════════════════════════════

  process: {
    title:    "كيف نعمل",
    subtitle: "من الحبة إلى الكوب",

    steps: [
      {
        icon:  "fas fa-seedling", // Font Awesome icon for this step
        title: "اختيار الحبوب",   // Step name
        items: ["مزارع معتمدة", "اختيار يدوي دقيق", "جودة مضمونة"], // Bullet points for this step
      },
      { icon: "fas fa-fire",   title: "التحميص",  items: ["تحميص يومي طازج", "درجات حرارة مضبوطة", "رائحة لا تُقاوم"] },
      { icon: "fas fa-coffee", title: "التحضير",  items: ["باريستا محترف", "معدات حديثة", "وصفات مدروسة"] },
      { icon: "fas fa-smile",  title: "التقديم",  items: ["تقديم أنيق", "خدمة مميزة", "ابتسامة دائمة"] },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  CASE STUDIES — Success stories with result numbers
  //  Only shows if "casestudies" is in sections[] above
  // ════════════════════════════════════════════════════════

  casestudies: {
    title:    "قصص نجاحنا",
    subtitle: "أرقام تتحدث عن نفسها",

    items: [
      {
        icon:    "fas fa-coffee",              // Icon for this story
        title:   "نمو أليكس كافيه",           // Story title
        client:  "سوهاج، مصر — منذ 2019",    // Client name / location / date
        content: "بدأنا بفرع واحد وحلم كبير. اليوم نخدم مئات العملاء يومياً ونُعدّ من أشهر الكافيهات في سوهاج.", // Story paragraph

        results: [
          { number: "500+", label: "عميل يومياً" }, // number = big, label = small below
          { number: "4.9",  label: "تقييم جوجل" },
          { number: "5+",   label: "سنوات نجاح" },
          { number: "98%",  label: "رضا العملاء" },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  CLIENTS — Client logo grid (shows icons as placeholders)
  //  Only shows if "clients" is in sections[] above
  //  icons = Font Awesome class names — one per client slot
  // ════════════════════════════════════════════════════════

  clients: {
    title:    "عملاؤنا",
    subtitle: "نفخر بثقة عملائنا",
    icons: [
      "fas fa-building",       // Replace with client logo image later
      "fas fa-university",
      "fas fa-store",
      "fas fa-hotel",
      "fas fa-graduation-cap",
      "fas fa-briefcase",
    ],
  },

  // ════════════════════════════════════════════════════════
  //  TESTIMONIALS — Customer review cards
  //  Middle card (2nd item) automatically shows in light color
  //  Add as many as you want — 3 looks best
  // ════════════════════════════════════════════════════════

  testimonials: {
    title:    "آراء عملائنا",
    subtitle: "ماذا يقول زوارنا عن تجربتهم",

    items: [
      {
        text:   "أفضل قهوة جربتها في سوهاج! الأجواء رائعة والخدمة ممتازة. بصراحة مش هتلاقي أحسن من كده.", // The review text
        avatar: "م.أ",                  // 2-3 letter initials shown in the avatar circle
        name:   "محمد أحمد",            // Reviewer name
        role:   "زبون منتظم — سوهاج",  // Reviewer title/location
      },
      {
        text:   "كل مرة أجي أليكس أحس إن اليوم بدأ صح. القهوة خرافية والفريق محترف ومبتسم دايماً.",
        avatar: "س.م",
        name:   "سارة محمود",
        role:   "زبونة منتظمة — سوهاج",
      },
      {
        text:   "عملنا حفلة تخرج هنا وكانت تجربة استثنائية. الاهتمام بالتفاصيل والخدمة فاقت توقعاتنا.",
        avatar: "ع.ح",
        name:   "علي حسن",
        role:   "حجز مناسبة — سوهاج",
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  CTA — Call to action banner (above contact section)
  // ════════════════════════════════════════════════════════

  cta: {
    image:    "",                      // Path to background photo — e.g. "media/cta.png"
                                       // Leave "" for the default warm latte background (no photo)
                                       // When a path is set, photo fills the section with dark overlay

    title:    "تعال وجرّب بنفسك",    // Big CTA headline
    subtitle: "انضم لآلاف العملاء الراضين واستمتع بأفضل تجربة قهوة في سوهاج", // Supporting text

    buttons: [
      { text: "تواصل معنا", href: "#contact", style: "primary" },                        // Main button
      { text: "واتساب",     href: "whatsapp", style: "whatsapp", icon: "fab fa-whatsapp" }, // WhatsApp button
    ],
  },

  // ════════════════════════════════════════════════════════
  //  CONTACT — Contact form and info section
  // ════════════════════════════════════════════════════════

  contact: {
    title:           "تواصل معنا",                    // Section heading
    subtitle:        "يسعدنا سماعك — زورنا أو تواصل معنا", // Section subheading
    formTitle:       "أرسل لنا رسالة",               // Form card heading
    formPlaceholder: "اكتب رسالتك هنا...",            // Placeholder text in the message box
    formButton:      "إرسال",                         // Submit button text

    inquiries: [
      // These fill the dropdown in the form — value = internal id, label = what visitor sees
      { value: "reservation", label: "حجز طاولة" },
      { value: "event",       label: "حجز مناسبة" },
      { value: "feedback",    label: "اقتراح أو شكوى" },
      { value: "other",       label: "أخرى" },
    ],
  },

  // ════════════════════════════════════════════════════════
  //  FOOTER — Bottom of the page
  // ════════════════════════════════════════════════════════

  footer: {
    about:     "كافيه أليكس — وجهتك المثالية للقهوة المختصة والمشروبات الفاخرة في قلب سوهاج.", // Short about text in footer
    copyright: `© ${new Date().getFullYear()} Alex Cafe. جميع الحقوق محفوظة.`, // Copyright line — year auto-updates

    columns: [
      // Extra link columns in the footer — add more objects for more columns
      {
        title: "روابط سريعة", // Column heading
        links: [
          { label: "الرئيسية",     href: "#home" },         // label = text shown, href = where it goes
          { label: "مميزاتنا",    href: "#features" },
          { label: "آراء العملاء", href: "#testimonials" },
          { label: "تواصل معنا",  href: "#contact" },
        ],
      },
    ],
  },

};

// ============================================================
//  ENGINE — DO NOT EDIT ANYTHING BELOW THIS LINE
//  This reads the BRAND object above and builds the whole page
// ============================================================

(function () {

  function applyColors() {
    const r = document.documentElement.style;
    r.setProperty('--accent',   BRAND.primaryColor);
    r.setProperty('--bg-dark',  BRAND.primaryColor);
  }

  function applySections() {
    const all = ['stats','features','services','products','team','process','casestudies','clients','testimonials','cta','contact'];
    all.forEach(id => {
      const el = document.getElementById('section-' + id);
      if (!el) return;
      el.style.display = BRAND.sections.includes(id) ? '' : 'none';
    });
  }

  function buildNav() {
    document.querySelectorAll('.brand-logo').forEach(el => el.textContent = BRAND.name);
    const authEl = document.getElementById('nav-auth');
    if (authEl) authEl.style.display = BRAND.showAuthButtons ? '' : 'none';
    const navEl = document.getElementById('navLinks');
    if (navEl && BRAND.navLinks.length) {
      navEl.innerHTML = BRAND.navLinks.map(l =>
        `<li><a href="${l.href}">${l.label}</a></li>`
      ).join('');
    }
  }

  function buildHero() {
    const set = (sel, val) => document.querySelectorAll(sel).forEach(el => el.innerHTML = val);
    set('.hero-title',       BRAND.hero.title);
    set('.hero-tagline',     BRAND.hero.tagline);
    set('.hero-description', BRAND.hero.description);

    // Hero background image — if path set, shows photo; if empty, shows warm CSS background
    const heroEl = document.querySelector('.hero');
    if (heroEl && BRAND.hero.image) {
      heroEl.style.backgroundImage = [
        'linear-gradient(160deg, rgba(26,15,10,0.88) 0%, rgba(44,26,14,0.80) 50%, rgba(26,15,10,0.88) 100%)',
        `url('${BRAND.hero.image}')`
      ].join(', ');
      heroEl.style.backgroundSize     = 'cover';
      heroEl.style.backgroundPosition = 'center center';
      heroEl.style.backgroundRepeat   = 'no-repeat';
      heroEl.style.backgroundAttachment = 'scroll'; // scroll works on mobile, fixed does not
    }

    const btnsEl = document.querySelector('.hero-buttons');
    if (btnsEl) {
      btnsEl.innerHTML = BRAND.hero.buttons.map(b => {
        const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
        const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
        const cls  = b.style === 'whatsapp' ? 'btn btn-whatsapp' : b.style === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
        const tgt  = b.href === 'whatsapp' ? ' target="_blank"' : '';
        return `<a href="${href}" class="${cls}"${tgt}>${icon}${b.text}</a>`;
      }).join('');
    }
  }

  function buildStats() {
    const grid = document.querySelector('.stats-grid');
    if (!grid) return;
    grid.innerHTML = BRAND.stats.map(s =>
      `<div class="stat-item fade-in"><div class="stat-number">${s.number}</div><div class="stat-label">${s.label}</div></div>`
    ).join('');
  }

  function buildFeatures() {
    const sec = document.getElementById('section-features');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.features.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.features.subtitle;
    const grid = sec.querySelector('.medical-grid');
    if (grid) {
      grid.innerHTML = BRAND.features.items.map(f =>
        `<div class="medical-card fade-in">
          <i class="${f.icon} medical-icon"></i>
          <h3 class="medical-title">${f.title}</h3>
          <p class="medical-description">${f.description}</p>
        </div>`
      ).join('');
    }
  }

  function buildServices() {
    const sec = document.getElementById('section-services');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.services.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.services.subtitle;
    const grid = sec.querySelector('.services-grid');
    if (grid) {
      grid.innerHTML = BRAND.services.items.map(s =>
        `<div class="service-card fade-in">
          <span class="service-number">${s.number}</span>
          <i class="${s.icon} service-icon"></i>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-description">${s.description}</p>
          <ul class="service-features">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>`
      ).join('');
    }
  }

  function buildProducts() {
    const sec = document.getElementById('section-products');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.products.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.products.subtitle;
    const grid = sec.querySelector('.products-grid');
    if (grid) {
      grid.innerHTML = BRAND.products.items.map(p => {
        const btns = p.buttons.map(b => {
          const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
          return `<a href="${href}" class="btn btn-${b.style}">${b.text}</a>`;
        }).join('');
        return `<div class="product-card fade-in">
          <div class="product-badge">${p.badge}</div>
          <div class="product-icon"><i class="${p.icon}"></i></div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-tagline">${p.tagline}</p>
          <p class="product-description">${p.description}</p>
          <ul class="product-features">${p.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}</ul>
          <div class="product-price"><span class="price-amount">${p.price}</span><span class="price-currency"> ${p.currency}</span></div>
          <div class="product-buttons">${btns}</div>
        </div>`;
      }).join('');
    }
  }

  function buildTeam() {
    const sec = document.getElementById('section-team');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.team.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.team.subtitle;
    const grid = sec.querySelector('.team-grid');
    if (grid) {
      grid.innerHTML = BRAND.team.members.map(m =>
        `<div class="team-card fade-in">
          <div class="team-avatar">${m.avatar}</div>
          <h3 class="team-name">${m.name}</h3>
          <p class="team-role">${m.role}</p>
          <p class="team-bio">${m.bio}</p>
        </div>`
      ).join('');
    }
  }

  function buildProcess() {
    const sec = document.getElementById('section-process');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.process.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.process.subtitle;
    const steps = sec.querySelector('.process-steps');
    if (steps) {
      steps.innerHTML = BRAND.process.steps.map(s =>
        `<div class="process-step fade-in">
          <div class="process-icon-wrapper"><i class="${s.icon} process-icon"></i></div>
          <h3 class="process-title">${s.title}</h3>
          <ul class="process-items">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>`
      ).join('');
    }
  }

  function buildCaseStudies() {
    const sec = document.getElementById('section-casestudies');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.casestudies.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.casestudies.subtitle;
    const container = sec.querySelector('.case-studies-container');
    if (container) {
      container.innerHTML = BRAND.casestudies.items.map(c =>
        `<div class="case-study fade-in">
          <div class="case-study-header">
            <div class="case-study-icon"><i class="${c.icon}"></i></div>
            <div><h3 class="case-study-title">${c.title}</h3><p class="case-study-client">${c.client}</p></div>
          </div>
          <p class="case-study-content">${c.content}</p>
          <div class="case-study-results">
            ${c.results.map(r => `<div class="result-item"><div class="result-number">${r.number}</div><div class="result-label">${r.label}</div></div>`).join('')}
          </div>
        </div>`
      ).join('');
    }
  }

  function buildClients() {
    const sec = document.getElementById('section-clients');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.clients.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.clients.subtitle;
    const grid = sec.querySelector('.clients-grid');
    if (grid) {
      grid.innerHTML = BRAND.clients.icons.map(i =>
        `<div class="client-logo fade-in"><i class="${i}"></i></div>`
      ).join('');
    }
  }

  function buildTestimonials() {
    const sec = document.getElementById('section-testimonials');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.testimonials.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.testimonials.subtitle;
    const grid = sec.querySelector('.testimonials-grid');
    if (grid) {
      grid.innerHTML = BRAND.testimonials.items.map(t =>
        `<div class="testimonial fade-in">
          <p class="testimonial-text">"${t.text}"</p>
          <div class="testimonial-author">
            <div class="author-avatar">${t.avatar}</div>
            <div class="author-info"><h4>${t.name}</h4><p>${t.role}</p></div>
          </div>
        </div>`
      ).join('');
    }
  }

  function buildCTA() {
    const sec = document.getElementById('section-cta');
    if (!sec) return;
    sec.querySelector('.cta-title').textContent   = BRAND.cta.title;
    sec.querySelector('.cta-subtitle').textContent = BRAND.cta.subtitle;

    // CTA background image — same logic as hero
    if (BRAND.cta.image) {
      sec.style.backgroundImage = [
        'linear-gradient(135deg, rgba(26,15,10,0.87) 0%, rgba(44,26,14,0.78) 100%)',
        `url('${BRAND.cta.image}')`
      ].join(', ');
      sec.style.backgroundSize     = 'cover';
      sec.style.backgroundPosition = 'center center';
      sec.style.backgroundRepeat   = 'no-repeat';
      sec.style.backgroundAttachment = 'scroll';
      // Switch text to white when photo is behind it
      sec.querySelector('.cta-title').style.color   = '#ffffff';
      sec.querySelector('.cta-subtitle').style.color = 'rgba(255,255,255,0.8)';
    }

    const btns = sec.querySelector('.hero-buttons');
    if (btns) {
      btns.innerHTML = BRAND.cta.buttons.map(b => {
        const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
        const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
        const cls  = b.style === 'whatsapp' ? 'btn btn-whatsapp' : b.style === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
        const tgt  = b.href === 'whatsapp' ? ' target="_blank"' : '';
        return `<a href="${href}" class="${cls}"${tgt}>${icon}${b.text}</a>`;
      }).join('');
    }
  }

  function buildContact() {
    const sec = document.getElementById('section-contact');
    if (!sec) return;
    sec.querySelector('.section-title').textContent   = BRAND.contact.title;
    sec.querySelector('.section-subtitle').textContent = BRAND.contact.subtitle;
    const phone = sec.querySelector('.contact-phone'); if (phone) phone.textContent = BRAND.phone;
    const email = sec.querySelector('.contact-email'); if (email) { email.textContent = BRAND.email; email.href = `mailto:${BRAND.email}`; }
    const wa    = sec.querySelector('.contact-wa');    if (wa)    { wa.textContent = BRAND.phone; wa.href = `https://wa.me/${BRAND.whatsapp}`; }
    const city  = sec.querySelector('.contact-city'); if (city) city.textContent = BRAND.city;
    const hours = sec.querySelector('.contact-hours'); if (hours) hours.textContent = BRAND.hours;
    const ft    = sec.querySelector('.form-title'); if (ft) ft.textContent = BRAND.contact.formTitle;
    const sel   = sec.querySelector('#service');
    if (sel && BRAND.contact.inquiries) {
      sel.innerHTML = `<option value="">اختر نوع الاستفسار</option>` +
        BRAND.contact.inquiries.map(i => `<option value="${i.value}">${i.label}</option>`).join('');
    }
    const ta = sec.querySelector('textarea'); if (ta) ta.placeholder = BRAND.contact.formPlaceholder;
    const sb = sec.querySelector('.contact-form button[type="submit"]'); if (sb) sb.textContent = BRAND.contact.formButton;
  }

  function buildFooter() {
    const ft = document.querySelector('footer');
    if (!ft) return;
    const abt = ft.querySelector('.footer-about'); if (abt) abt.textContent = BRAND.footer.about;
    ft.querySelectorAll('.footer-brand-name').forEach(el => el.textContent = BRAND.name);
    const socMap = {
      'footer-twitter':   BRAND.social.twitter,
      'footer-linkedin':  BRAND.social.linkedin,
      'footer-instagram': BRAND.social.instagram,
      'footer-youtube':   BRAND.social.youtube,
      'footer-tiktok':    BRAND.social.tiktok,
    };
    Object.entries(socMap).forEach(([id, url]) => {
      const el = ft.querySelector(`#${id}`);
      if (!el) return;
      if (!url) { el.style.display = 'none'; } else { el.href = url; }
    });
    const fc = ft.querySelector('.footer-contact-phone'); if (fc) fc.textContent = BRAND.phone;
    const fe = ft.querySelector('.footer-contact-email'); if (fe) { fe.textContent = BRAND.email; fe.href = `mailto:${BRAND.email}`; }
    const fw = ft.querySelector('.footer-contact-wa');    if (fw) { fw.textContent = BRAND.phone; fw.href = `https://wa.me/${BRAND.whatsapp}`; }
    const fx = ft.querySelector('.footer-contact-city'); if (fx) fx.textContent = BRAND.city;
    const cols = ft.querySelector('.footer-dynamic-cols');
    if (cols && BRAND.footer.columns) {
      cols.innerHTML = BRAND.footer.columns.map(col =>
        `<div class="footer-section">
          <h3>${col.title}</h3>
          <ul>${col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
        </div>`
      ).join('');
    }
    const cp = ft.querySelector('.footer-copyright'); if (cp) cp.textContent = BRAND.footer.copyright;
  }

  function buildWhatsApp() {
    const wa = document.querySelector('.whatsapp-float');
    if (wa) wa.href = `https://wa.me/${BRAND.whatsapp}`;
  }

  function buildMeta() {
    document.title = `${BRAND.name} - ${BRAND.tagline}`;
    document.documentElement.lang = BRAND.lang;
    document.documentElement.dir  = BRAND.dir;
    const setMeta = (sel, val) => { const m = document.querySelector(sel); if (m) m.content = val; };
    setMeta('meta[name="description"]',       BRAND.description);
    setMeta('meta[name="keywords"]',          BRAND.keywords);
    setMeta('meta[name="author"]',            BRAND.author);
    setMeta('meta[property="og:title"]',      `${BRAND.name} - ${BRAND.tagline}`);
    setMeta('meta[property="og:description"]', BRAND.description);
    setMeta('meta[property="og:url"]',        BRAND.domain);
    const fav = document.getElementById('favicon');
    if (fav) fav.href = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='75' font-family='Arial,sans-serif' font-size='95' font-weight='bold' text-anchor='middle' fill='${BRAND.faviconColor}'%3E${BRAND.faviconLetter}%3C/text%3E%3C/svg%3E`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyColors();
    buildMeta();
    buildNav();
    buildHero();
    buildStats();
    buildFeatures();
    buildServices();
    buildProducts();
    buildTeam();
    buildProcess();
    buildCaseStudies();
    buildClients();
    buildTestimonials();
    buildCTA();
    buildContact();
    buildFooter();
    buildWhatsApp();
    applySections();

    // Re-observe fade-in elements after engine builds the DOM
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) { el.classList.add('visible'); }
        else { observer.observe(el); }
      });
    }, 100);
  });

})();
