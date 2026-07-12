/**
* ============================================================
* BRAND CONFIG — Nile Dental Clinic
* عيادة نايل لطب الأسنان
* ============================================================
*/

const BRAND = {

// ════════════════════════════════════════════════════════
// IDENTITY
// ════════════════════════════════════════════════════════

name: "Nile Dental", // Business name — shows in navbar, footer, browser tab
tagline: "ابتسامتك أمانة في أيدي متخصصين", // Short slogan
description: "عيادة نايل لطب الأسنان — رعاية شاملة لأسنانك وابتسامتك بأحدث التقنيات في القاهرة", // Google preview
keywords: "طب أسنان, تقويم, زراعة أسنان, تبييض, فينير, القاهرة, عيادة", // SEO
author: "Nile Dental Clinic",

// ════════════════════════════════════════════════════════
// THEME — Sky blue & navy medical
// ════════════════════════════════════════════════════════

primaryColor: "#0ea5e9", // Sky blue
primaryColorDark: "#0284c7", // Darker blue for hovers
faviconLetter: "N",
faviconColor: "%230ea5e9",

// ════════════════════════════════════════════════════════
// LANGUAGE
// ════════════════════════════════════════════════════════

lang: "ar",
dir: "rtl",

// ════════════════════════════════════════════════════════
// CONTACT
// ════════════════════════════════════════════════════════
// NOTE: this is a portfolio/demo build, not a real clinic — phone/WhatsApp
// route to PioneersX's real number so any lead from this demo actually
// reaches the agency. Email is intentionally left as the dummy placeholder.

phone: "+966 54 770 5498",
whatsapp: "9665477705498",
email: "info@niledental.com",
city: "١٢ شارع التحرير، الدقي، الجيزة",
hours: "يومياً: ٩:٠٠ ص — ١٠:٠٠ م",

// ════════════════════════════════════════════════════════
// API & DOMAIN
// ════════════════════════════════════════════════════════

apiBase: "",
domain: "https://nile-dental-clinic.pages.dev",

// ════════════════════════════════════════════════════════
// SOCIAL
// ════════════════════════════════════════════════════════

social: {
twitter: "",
linkedin: "",
instagram: "https://www.instagram.com/niledental",
youtube: "",
tiktok: "",
},

// ════════════════════════════════════════════════════════
// SECTIONS
// ════════════════════════════════════════════════════════

sections: ["hero", "stats", "features", "services", "team", "testimonials", "cta", "contact"],

showAuthButtons: false,

navLinks: [
{ label: "الرئيسية", href: "#home" },
{ label: "خدماتنا", href: "#section-services" },
{ label: "أطباؤنا", href: "#section-team" },
{ label: "تواصل معنا", href: "#section-contact" },
],

// ════════════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════════════

hero: {
image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80",
tag: "معتمدون من نقابة أطباء الأسنان المصرية",
title: "ابتسامتك أمانة في أيدي متخصصين",
tagline: "عيادة نايل — القاهرة",
description: "رعاية شاملة لأسنانك وابتسامتك بأحدث التقنيات. من التبييض إلى الزراعة — فريقنا معك في كل خطوة.",
buttons: [
{ text: "احجز كشف مجاني", href: "#contact", style: "hero-cta", icon: "fas fa-calendar-check" },
{ text: "واتساب", href: "whatsapp", style: "whatsapp", icon: "fab fa-whatsapp" },
],
},

// ════════════════════════════════════════════════════════
// STATS
// ════════════════════════════════════════════════════════

stats: [
{ number: "12+", label: "سنة خبرة طبية" },
{ number: "8,000+", label: "مريض راضٍ" },
{ number: "15", label: "طبيب متخصص" },
{ number: "98%", label: "رضا المرضى" },
],

// ════════════════════════════════════════════════════════
// FEATURES — Why us cards
// ════════════════════════════════════════════════════════

features: {
title: "لماذا عيادة نايل؟",
subtitle: "نجمع بين الخبرة الطبية وأحدث التقنيات لنمنحك تجربة علاج مريحة وآمنة",
items: [
{ icon: "fas fa-microscope", title: "تقنيات حديثة", description: "أشعة رقمية وأجهزة ثلاثية الأبعاد لتشخيص دقيق وسريع" },
{ icon: "fas fa-shield-alt", title: "معقمة 100%", description: "بروتوكولات تعقيم طبية معتمدة دولياً في كل جلسة" },
{ icon: "fas fa-heart", title: "بيئة مريحة", description: "ديكور هادئ وفريق ودود يريحك من قلق طبيب الأسنان" },
{ icon: "fas fa-clock", title: "مواعيد مرنة", description: "سبعة أيام في الأسبوع من ٩ صباحاً لـ١٠ مساءً" },
{ icon: "fas fa-tags", title: "أسعار شفافة", description: "خطة علاج مفصّلة بالأسعار قبل بدء أي إجراء" },
{ icon: "fas fa-camera", title: "نتائج مضمونة", description: "قبل وبعد موثّق لكل حالة — نتائجنا تتكلم عنا" },
],
},

// ════════════════════════════════════════════════════════
// SERVICES — with photos from Unsplash
// ════════════════════════════════════════════════════════

services: {
title: "خدماتنا",
subtitle: "كل ما يحتاجه أسنانك في مكان واحد",
items: [
{
image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
icon: "fas fa-magic",
title: "تبييض الأسنان",
description: "تبييض احترافي بتقنيات Zoom وليزر — نتائج فورية وابتسامة أكثر إشراقاً",
features: ["Zoom Whitening", "تبييض بالليزر", "نتائج فورية", "بدون ألم"],
},
{
image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
icon: "fas fa-smile-beam",
title: "تقويم الأسنان",
description: "تقويم معدني وشفاف وشرائح Invisalign للأطفال والكبار",
features: ["تقويم معدني", "تقويم شفاف", "Invisalign", "للأطفال والكبار"],
},
{
image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
icon: "fas fa-tooth",
title: "زراعة الأسنان",
description: "زرعات فورية بضمان ٥ سنوات من أطباء زراعة معتمدين دولياً",
features: ["زرعات فورية", "ضمان ٥ سنوات", "أطباء معتمدون", "نتائج دائمة"],
},
{
image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
icon: "fas fa-fill-drip",
title: "حشوات وعلاج عصب",
description: "حشوات زيركون وخزف ومركب بدون ألم بالتخدير الكامل",
features: ["حشوات زيركون", "حشوات خزف", "علاج عصب", "بدون ألم"],
},
{
image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
icon: "fas fa-star",
title: "فينير وابتسامة هوليوودية",
description: "قشور خزفية وكمبوزيت للحصول على ابتسامة مثالية كالمشاهير",
features: ["فينير خزفي", "كمبوزيت", "ابتسامة هوليوودية", "نتائج مذهلة"],
},
{
image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
icon: "fas fa-child",
title: "طب أسنان الأطفال",
description: "بيئة صديقة للأطفال وأطباء متخصصون في علاج الأسنان اللبنية",
features: ["بيئة ودية", "أطباء متخصصون", "أسنان لبنية", "بدون خوف"],
},
],
},

// ════════════════════════════════════════════════════════
// TEAM — with real Unsplash doctor photos
// ════════════════════════════════════════════════════════

team: {
title: "فريقنا الطبي",
subtitle: "أطباء في خدمة ابتسامتك — خبرات دولية وشغف حقيقي",
members: [
{
image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80",
avatar: "أ.س",
name: "د. أحمد السيد",
role: "مؤسس العيادة — استشاري تقويم",
bio: "بكالوريوس طب أسنان القاهرة، دبلوم تقويم من لندن. خبرة ١٢ سنة.",
},
{
image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80",
avatar: "م.ك",
name: "د. منى كمال",
role: "أخصائية تجميل الأسنان",
bio: "متخصصة في الفينير والابتسامة الهوليوودية. شهادة دولية من إيطاليا.",
},
{
image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80",
avatar: "خ.م",
name: "د. خالد محمود",
role: "أخصائي زراعة وجراحة الفم",
bio: "استشاري زراعة الأسنان الفورية. ضمان ٥ سنوات على كل زرعة.",
},
],
},

// ════════════════════════════════════════════════════════
// TESTIMONIALS
// ════════════════════════════════════════════════════════

testimonials: {
title: "مرضانا بيتكلموا",
subtitle: "٨,٠٠٠+ مريض وثقوا فينا — كلامهم أصدق دليل",
items: [
{
text: "عملت فينير كامل والنتيجة خيالية. الدكتورة منى شرحت كل خطوة وكنت مرتاحة تماماً. أنصح كل الناس بعيادة نايل.",
avatar: "س.م", name: "سارة محمود", role: "تبييض وفينير — القاهرة",
},
{
text: "ابني كان خايف من طبيب الأسنان. في عيادة نايل تعامل معاه بشكل رائع وبقى بيجي بكيفه. شكراً على الاحترافية.",
avatar: "م.أ", name: "محمد أحمد", role: "علاج أسنان أطفال — الجيزة",
},
{
text: "عملت زراعة ٤ أسنان والنتيجة ماشاء الله. الدكتور خالد محترف جداً والعيادة نظيفة ومريحة والفريق محترم.",
avatar: "ه.ع", name: "هالة علي", role: "زراعة أسنان — المهندسين",
},
],
},

// ════════════════════════════════════════════════════════
// CTA
// ════════════════════════════════════════════════════════

cta: {
image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80",
title: "ابدأ رحلتك نحو ابتسامة أجمل اليوم",
subtitle: "احجز كشفك المجاني الآن — خطة علاج مفصّلة بدون أي التزام",
buttons: [
{ text: "احجز كشف مجاني", href: "#contact", style: "primary", icon: "fas fa-calendar-check" },
{ text: "واتساب مباشر", href: "whatsapp", style: "whatsapp", icon: "fab fa-whatsapp" },
],
},

// ════════════════════════════════════════════════════════
// CONTACT
// ════════════════════════════════════════════════════════

contact: {
title: "احجز موعدك",
subtitle: "فريقنا جاهز للرد على أسئلتك وحجز موعدك في أسرع وقت",
formTitle: "احجز موعدك المجاني",
formPlaceholder: "أي تفاصيل تساعدنا نجهز لموعدك بشكل أفضل...",
formButton: "احجز موعدي",
inquiries: [
{ value: "checkup", label: "كشف وفحص عام" },
{ value: "whitening", label: "تبييض الأسنان" },
{ value: "braces", label: "تقويم الأسنان" },
{ value: "implant", label: "زراعة الأسنان" },
{ value: "veneer", label: "فينير وتجميل" },
{ value: "kids", label: "أسنان الأطفال" },
],
},

// ════════════════════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════════════════════

footer: {
about: "عيادة نايل لطب الأسنان — رعاية متكاملة لابتسامتك منذ ٢٠١٢. معتمدون من نقابة أطباء الأسنان المصرية.",
copyright: `© ${new Date().getFullYear()} Nile Dental Clinic. جميع الحقوق محفوظة.`,
columns: [
{
title: "خدماتنا",
links: [
{ label: "تبييض الأسنان", href: "#services" },
{ label: "تقويم الأسنان", href: "#services" },
{ label: "زراعة الأسنان", href: "#services" },
{ label: "فينير وتجميل", href: "#services" },
],
},
{
title: "روابط سريعة",
links: [
{ label: "الرئيسية", href: "#home" },
{ label: "أطباؤنا", href: "#team" },
{ label: "آراء المرضى", href: "#testimonials" },
{ label: "احجز موعد", href: "#contact" },
],
},
],
},

};

// ============================================================
// ENGINE — DO NOT EDIT BELOW THIS LINE
// ============================================================

(function () {

function applyColors() {
const r = document.documentElement.style;
r.setProperty('--primary-red', BRAND.primaryColor);
r.setProperty('--accent', BRAND.primaryColor);
r.setProperty('--espresso', '#0c4a6e');
r.setProperty('--dark-roast', '#082f49');
r.setProperty('--caramel', BRAND.primaryColor);
r.setProperty('--cream', '#f0f9ff');
r.setProperty('--latte', '#e0f2fe');
r.setProperty('--parchment', '#f8fafc');
r.setProperty('--text-on-dark', '#ffffff');
r.setProperty('--text-muted-dark','#94a3b8');
r.setProperty('--text-on-light', '#0f172a');
r.setProperty('--text-muted-light','#64748b');
r.setProperty('--card-dark', '#0f172a');
r.setProperty('--border-dark', '#1e3a5f');
r.setProperty('--border-light', '#bae6fd');
r.setProperty('--border-cream', '#7dd3fc');
r.setProperty('--darker-bg', '#082f49');
r.setProperty('--dark-bg', '#0c4a6e');
r.setProperty('--text-gray', '#94a3b8');
r.setProperty('--card-bg', '#0f172a');
r.setProperty('--border-color', '#1e3a5f');
r.setProperty('--success-green', '#10b981');
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
// Split the brand name so the last word gets the glowing accent
// treatment, same pattern as "Pioneers[X]" on the agency site.
document.querySelectorAll('.brand-logo').forEach(el => {
const words = BRAND.name.trim().split(' ');
const last = words.pop();
const rest = words.join(' ');
el.innerHTML = (rest ? rest + ' ' : '') + '<span class="logo-accent">' + last + '</span>';
});
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
const heroEl = document.querySelector('.hero');
if (heroEl && BRAND.hero.image) {
heroEl.style.backgroundImage = [
'linear-gradient(135deg,rgba(12,74,110,0.88) 0%,rgba(14,165,233,0.65) 60%,rgba(12,74,110,0.80) 100%)',
`url('${BRAND.hero.image}')`
].join(', ');
heroEl.style.backgroundSize = 'cover';
heroEl.style.backgroundPosition = 'center center';
heroEl.style.backgroundRepeat = 'no-repeat';
}

// Hero tag badge
const tagEl = document.querySelector('.hero-tag');
if (tagEl && BRAND.hero.tag) tagEl.innerHTML = `<i class="fas fa-certificate"></i> ${BRAND.hero.tag}`;
else if (tagEl && !BRAND.hero.tag) tagEl.style.display = 'none';

document.querySelectorAll('.hero-title').forEach(el => el.innerHTML = BRAND.hero.title);
document.querySelectorAll('.hero-tagline').forEach(el => el.innerHTML = BRAND.hero.tagline);
document.querySelectorAll('.hero-description').forEach(el => el.innerHTML = BRAND.hero.description);

const btnsEl = document.querySelector('.hero-buttons');
if (btnsEl) {
btnsEl.innerHTML = BRAND.hero.buttons.map(b => {
const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
const cls = b.style === 'whatsapp' ? 'btn btn-whatsapp' : b.style === 'primary' ? 'btn btn-primary' : b.style === 'hero-cta' ? 'btn btn-hero-cta' : 'btn btn-secondary';
const tgt = b.href === 'whatsapp' ? ' target="_blank"' : '';
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
sec.querySelector('.section-title').textContent = BRAND.features.title;
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
sec.querySelector('.section-title').textContent = BRAND.services.title;
sec.querySelector('.section-subtitle').textContent = BRAND.services.subtitle;
const grid = sec.querySelector('.services-grid');
if (grid) {
grid.innerHTML = BRAND.services.items.map(s =>
`<div class="service-card fade-in">
${s.image ? `<div class="service-card-img"><img src="${s.image}" alt="${s.title}" loading="lazy"></div>` : ''}
<div class="service-card-body">
<span class="service-number"><i class="${s.icon}"></i></span>
<h3 class="service-title">${s.title}</h3>
<p class="service-description">${s.description}</p>
<ul class="service-features">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
</div>
</div>`
).join('');
}
}

function buildTeam() {
const sec = document.getElementById('section-team');
if (!sec) return;
sec.querySelector('.section-title').textContent = BRAND.team.title;
sec.querySelector('.section-subtitle').textContent = BRAND.team.subtitle;
const grid = sec.querySelector('.team-grid');
if (grid) {
grid.innerHTML = BRAND.team.members.map(m =>
`<div class="team-card fade-in">
${m.image
? `<div class="team-card-img"><img src="${m.image}" alt="${m.name}" loading="lazy"></div>`
: `<div class="team-avatar">${m.avatar}</div>`}
<h3 class="team-name">${m.name}</h3>
<p class="team-role">${m.role}</p>
<p class="team-bio">${m.bio}</p>
</div>`
).join('');
}
}

function buildTestimonials() {
const sec = document.getElementById('section-testimonials');
if (!sec) return;
sec.querySelector('.section-title').textContent = BRAND.testimonials.title;
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
sec.querySelector('.cta-title').textContent = BRAND.cta.title;
sec.querySelector('.cta-subtitle').textContent = BRAND.cta.subtitle;
if (BRAND.cta.image) {
sec.style.backgroundImage = `linear-gradient(135deg,rgba(12,74,110,0.92),rgba(14,165,233,0.85)),url('${BRAND.cta.image}')`;
sec.style.backgroundSize = 'cover';
sec.style.backgroundPosition = 'center';
sec.style.backgroundAttachment = 'scroll';
sec.querySelector('.cta-title').style.color = '#ffffff';
sec.querySelector('.cta-subtitle').style.color = 'rgba(255,255,255,0.85)';
}
const btns = sec.querySelector('.hero-buttons');
if (btns) {
btns.innerHTML = BRAND.cta.buttons.map(b => {
const href = b.href === 'whatsapp' ? `https://wa.me/${BRAND.whatsapp}` : b.href;
const icon = b.icon ? `<i class="${b.icon}"></i> ` : '';
const cls = b.style === 'whatsapp' ? 'btn btn-whatsapp' : b.style === 'primary' ? 'btn btn-primary' : b.style === 'hero-cta' ? 'btn btn-hero-cta' : 'btn btn-secondary';
const tgt = b.href === 'whatsapp' ? ' target="_blank"' : '';
return `<a href="${href}" class="${cls}"${tgt}>${icon}${b.text}</a>`;
}).join('');
}
}

function buildContact() {
const sec = document.getElementById('section-contact');
if (!sec) return;
sec.querySelector('.section-title').textContent = BRAND.contact.title;
sec.querySelector('.section-subtitle').textContent = BRAND.contact.subtitle;
const phone = sec.querySelector('.contact-phone'); if (phone) phone.textContent = BRAND.phone;
const email = sec.querySelector('.contact-email'); if (email) { email.textContent = BRAND.email; email.href = `mailto:${BRAND.email}`; }
const wa = sec.querySelector('.contact-wa'); if (wa) { wa.textContent = BRAND.phone; wa.href = `https://wa.me/${BRAND.whatsapp}`; }
const city = sec.querySelector('.contact-city'); if (city) city.textContent = BRAND.city;
const hours = sec.querySelector('.contact-hours'); if (hours) hours.textContent = BRAND.hours;
const ft = sec.querySelector('.form-title'); if (ft) ft.textContent = BRAND.contact.formTitle;
const sel = sec.querySelector('#service');
if (sel && BRAND.contact.inquiries) {
sel.innerHTML = `<option value="">اختر الخدمة المطلوبة</option>` +
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
'footer-twitter': BRAND.social.twitter,
'footer-linkedin': BRAND.social.linkedin,
'footer-instagram': BRAND.social.instagram,
'footer-youtube': BRAND.social.youtube,
'footer-tiktok': BRAND.social.tiktok,
};
Object.entries(socMap).forEach(([id, url]) => {
const el = ft.querySelector(`#${id}`);
if (!el) return;
if (!url) { el.style.display = 'none'; } else { el.href = url; }
});
const fc = ft.querySelector('.footer-contact-phone'); if (fc) fc.textContent = BRAND.phone;
const fe = ft.querySelector('.footer-contact-email'); if (fe) { fe.textContent = BRAND.email; fe.href = `mailto:${BRAND.email}`; }
const fw = ft.querySelector('.footer-contact-wa'); if (fw) { fw.textContent = BRAND.phone; fw.href = `https://wa.me/${BRAND.whatsapp}`; }
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
document.documentElement.dir = BRAND.dir;
const setMeta = (sel, val) => { const m = document.querySelector(sel); if (m) m.content = val; };
setMeta('meta[name="description"]', BRAND.description);
setMeta('meta[name="keywords"]', BRAND.keywords);
setMeta('meta[name="author"]', BRAND.author);
setMeta('meta[property="og:title"]', `${BRAND.name} - ${BRAND.tagline}`);
setMeta('meta[property="og:description"]', BRAND.description);
setMeta('meta[property="og:url"]', BRAND.domain);
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
buildTeam();
buildTestimonials();
buildCTA();
buildContact();
buildFooter();
buildWhatsApp();
applySections();

setTimeout(() => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) entry.target.classList.add('visible');
});
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.fade-in').forEach(el => {
const rect = el.getBoundingClientRect();
if (rect.top < window.innerHeight) el.classList.add('visible');
else observer.observe(el);
});
}, 100);
});

})();
