import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { router } from './router.js';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// 1. DATA REPOSITORIES: MATERIAL SPECIFICATIONS & SHOWROOM GALLERY
// ============================================================================

const MATERIAL_SPECS = {
  plywood: {
    code: 'SPEC-01 / CALIBRATED GURJAN',
    title: 'GURJAN MARINE PLYWOOD',
    category: 'TIMBER • CALIBRATED CORE',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    specs: [
      { label: 'STANDARD', val: 'IS:710 Marine Grade BWP' },
      { label: 'CORE COMPOSITION', val: '100% Calibrated Gurjan Hardwood' },
      { label: 'ADHESIVE BOND', val: 'Unextended Phenol Formaldehyde' },
      { label: 'BOILING WATER TEST', val: '72+ Hours Verified Continuous' },
      { label: 'CALIBRATION TOLERANCE', val: '± 0.2 mm 4-Side Calibrated' },
      { label: 'AVAILABLE THICKNESS', val: '6mm, 9mm, 12mm, 16mm, 19mm, 25mm' }
    ],
    desc: 'Engineered specifically for luxury residential joinery, architectural flush doors, and high-moisture kitchen/vanity carcasses. Zero core gaps ensure structural stability for precision CNC routering and heavy acoustic veneer cladding.',
    finishes: ['Raw Sanded 120 Grit', 'Calibrated Double-Face', 'Phenolic Treated', 'Decorative Teak Backing']
  },
  hardware: {
    code: 'SPEC-02 / SOLID BRASS PVD',
    title: 'ARCHITECTURAL MORTISE HARDWARE',
    category: 'MICRO-MECHANICS • DOOR APPOINTMENTS',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
    specs: [
      { label: 'BASE METAL', val: 'Forged Solid Brass (CuZn39Pb2)' },
      { label: 'FINISH PROCESS', val: 'Physical Vapor Deposition (PVD)' },
      { label: 'CYCLE ENDURANCE', val: '200,000+ Cycles EN 1906 Class 4' },
      { label: 'LATCH MECHANISM', val: 'Magnetic Acoustic Quiet-Latch' },
      { label: 'SECURITY PROFILE', val: 'Dimple Key Euro Profile Cylinder' },
      { label: 'WEIGHT / FEEL', val: 'Heavy Solid Forged Ergonomics' }
    ],
    desc: 'Designed for seamless sensory feedback, our architectural handles offer weighted ergonomic balance and completely silent magnetic strike engagement. Treated with advanced PVD titanium coatings impervious to saline coastal atmospheric wear.',
    finishes: ['Brushed Bronze PVD', 'Satin Champagne Gold', 'Matte Charcoal Black', 'Polished Nickel']
  },
  sanitaryware: {
    code: 'SPEC-03 / MATTE MONOLITH',
    title: 'SCULPTURAL SANITARY SUITE',
    category: 'CERAMIC • MATTE ALABASTER',
    img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85',
    specs: [
      { label: 'CERAMIC CLASS', val: 'Vitreous China Nano-Glaze' },
      { label: 'WATER ABSORPTION', val: '< 0.3% Extreme Density' },
      { label: 'FLUSH MECHANISM', val: 'Dual-Tornado 360° Rimless Vortex' },
      { label: 'SEAT PROFILE', val: 'Urea Formaldehyde Slim Soft-Close' },
      { label: 'MOUNTING STANDARD', val: 'Concealed Carrier Compatible' },
      { label: 'ANTI-BACTERIAL', val: 'Silver-Ion Active Vitreous Glaze' }
    ],
    desc: 'Monolithic minimalist geometries engineered to complement modern architectural limestone and fluted vanities. The hydrophobic nanoscale surface ensures limescale repelling and silent acoustic water delivery.',
    finishes: ['Matte Alabaster', 'Honed Charcoal', 'Warm Stone Beige', 'Alpine White Glaze']
  },
  tiles: {
    code: 'SPEC-04 / CONTINUOUS SLAB',
    title: 'LARGE FORMAT PORCELAIN SLABS',
    category: 'SURFACES • 1200 × 2400 MM',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    specs: [
      { label: 'DIMENSIONS', val: '1200mm × 2400mm / 9mm Profile' },
      { label: 'SURFACE FINISH', val: 'Honed Silk / Natural Travertine' },
      { label: 'BREAKING STRENGTH', val: '≥ 3,500 N High Flexural Rigidity' },
      { label: 'WATER ABSORPTION', val: '≤ 0.05% Impervious Surface' },
      { label: 'VEIN CONTINUITY', val: 'Endless Bookmatched A/B Veining' },
      { label: 'HEAT RESISTANCE', val: 'Direct Flame & Radiant Heat Proof' }
    ],
    desc: 'Continuous unbroken architectural planes that transform floors, shower volumes, and kitchen islands into monolithic stone volumes with hairline grout joints.',
    finishes: ['Honed Travertine', 'Ceppo Di Gre Grey', 'Calacatta Warm Gold', 'Warm Taupe Basalt']
  },
  cpfittings: {
    code: 'SPEC-05 / BRONZE PVD WATER',
    title: 'CONCEALED CP BRASSWARE & MIXERS',
    category: 'WATER ARCHITECTURE • BRUSHED BRONZE',
    img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=85',
    specs: [
      { label: 'CARTRIDGE CORE', val: 'Kerox 35mm Ceramic Disc Cartridge' },
      { label: 'AERATOR SYSTEM', val: 'Swiss Neoperl Cascade Flow' },
      { label: 'BODY CASTING', val: 'Dezincification Resistant Brass' },
      { label: 'SURFACE COATING', val: 'Dual-Layer PVD Brushed Bronze' },
      { label: 'PRESSURE RANGE', val: '0.5 bar to 5.0 bar High Flow' },
      { label: 'DIVERTER TYPE', val: 'Push-Button Instant Return' }
    ],
    desc: 'Curated for discerning architects seeking understated warmth in bath spaces. The brushed bronze PVD treatment creates a soft metallic glow without the high maintenance of unlacquered living brass.',
    finishes: ['Brushed Bronze', 'Champagne Brass', 'Brushed Gunmetal', 'Matte Architectural Black']
  },
  accessories: {
    code: 'SPEC-06 / ARCHITECTURAL DETAILS',
    title: 'MINIMALIST BATH ACCESSORIES',
    category: 'HARDWARE • APPOINTMENTS',
    img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
    specs: [
      { label: 'MATERIAL CORE', val: 'Solid Brass & 304 Stainless' },
      { label: 'MOUNTING SYSTEM', val: 'Concealed Hex-Key Anchor' },
      { label: 'TOWEL RAIL PROPORTION', val: '600mm & 800mm Linear Span' },
      { label: 'MIRROR SPECIFICATION', val: 'Demister Backlit 3000K Warm LED' },
      { label: 'FINISH DURABILITY', val: 'Salt Spray Tested 480 Hours' },
      { label: 'LOAD CAPACITY', val: '25 kg Static Anchor Tested' }
    ],
    desc: 'The final tactile touchpoint of a refined residence. Linear towel rails, recessed toilet roll holders with acoustic dampening, and knurled robe hooks that complete the spatial narrative.',
    finishes: ['Brushed Bronze', 'Matte Charcoal', 'Champagne Gold', 'Polished Chrome']
  },
  // Masonry Specific Aliases
  'gurjan-ply': {
    code: 'SPEC-M1 / GURJAN HARDWOOD',
    title: 'CALIBRATED GURJAN MARINE 710',
    category: 'TIMBER • BWP GRADE',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=85',
    specs: [
      { label: 'GRADE', val: 'IS:710 Marine Calibrated' },
      { label: 'CORE', val: '100% Pure Gurjan Hardwood' },
      { label: 'BOND', val: 'Phenolic Resin Hot-Pressed' },
      { label: 'TOLERANCE', val: '± 0.2 mm Planed Face' }
    ],
    desc: 'The benchmark of architectural joinery in Gujarat. Heavy, stable, dimensionally accurate with zero warpage under varying monsoon humidity levels.',
    finishes: ['16mm Full Calibrated', '19mm Core Balance', '25mm Double Hardwood']
  },
  'brass-hardware': {
    code: 'SPEC-M2 / FORGED BRASS LEVERS',
    title: 'SOLID BRASS MORTISE LEVER SETS',
    category: 'MICRO-MECHANICS • PVD BRONZE',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=85',
    specs: [
      { label: 'MATERIAL', val: 'Forged Heavy Brass' },
      { label: 'COATING', val: 'Titanium PVD Warm Bronze' },
      { label: 'MECHANISM', val: 'Magnetic Latch • Silent Soft Lock' },
      { label: 'WARRANTY', val: '10-Year Mechanical Guarantee' }
    ],
    desc: 'Bespoke lever handles that welcome the hand with substantial weight, silky rotational glide, and timeless architectural proportion.',
    finishes: ['Brushed Bronze', 'Antique Brass', 'Matte Black', 'Satin Gold']
  },
  'monolith-sanitary': {
    code: 'SPEC-M3 / ALABASTER MONOLITH',
    title: 'MONOLITHIC MATTE BASINS & WCS',
    category: 'SANITARY • VITREOUS CHINA',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
    specs: [
      { label: 'SURFACE', val: 'Velvet Matte Hydrophobic' },
      { label: 'DESIGN', val: 'Seamless Monolithic Casting' },
      { label: 'EFFICIENCY', val: 'Water-Saving Tornado Flush' },
      { label: 'ORIGIN', val: 'European Architectural Curation' }
    ],
    desc: 'Sculptural sanitaryware that replaces ordinary glossy porcelain with serene matte earthen surfaces designed to harmonise with limestone and fluted teak.',
    finishes: ['Matte Alabaster', 'Stone Taupe', 'Charcoal Anthracite']
  },
  'pvd-fittings': {
    code: 'SPEC-M4 / WALL SPOUTS',
    title: 'ARCHITECTURAL CONCEALED SPOUTS',
    category: 'WATER • BRUSHED BRONZE PVD',
    img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=900&q=85',
    specs: [
      { label: 'CORE', val: 'Heavy Solid Brass Cast' },
      { label: 'CONTROL', val: 'Single-Lever Precision Joystick' },
      { label: 'FINISH', val: 'PVD Vapor Deposited Bronze' },
      { label: 'FLOW', val: 'Laminar Air-Infused Stream' }
    ],
    desc: 'Clean wall-mounted brassware eliminating countertop clutter, calibrated for effortless single-touch temperature and flow modulation.',
    finishes: ['Brushed Bronze', 'Champagne Brass', 'Gunmetal Grey']
  },
  'porcelain-slabs': {
    code: 'SPEC-M5 / CONTINUOUS SLABS',
    title: '1200×2400 MM ARCHITECTURAL SLABS',
    category: 'PORCELAIN • HONED TRAVERTINE',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    specs: [
      { label: 'SLAB FORMAT', val: '1200 × 2400 mm Large Plate' },
      { label: 'THICKNESS', val: '9mm & 12mm Countertop Grade' },
      { label: 'ABSORPTION', val: '< 0.05% Non-Porous' },
      { label: 'EDGE', val: 'Precision Rectified 90° Edge' }
    ],
    desc: 'Expansive continuous porcelain surfaces offering the grandeur of Italian quarries with absolute stain, scratch, and chemical resistance.',
    finishes: ['Honed Travertine', 'Navona Stone', 'Pulpis Warm Grey']
  },
  'natural-veneers': {
    code: 'SPEC-M6 / QUARTER CUT VENEERS',
    title: 'SMOKED OAK & TEAK VENEERS',
    category: 'TIMBER • DECORATIVE SURFACES',
    img: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=85',
    specs: [
      { label: 'TIMBER SPECIES', val: 'Smoked European Oak & Burma Teak' },
      { label: 'CUT TYPE', val: 'Quarter Cut Linear Grain' },
      { label: 'FLEECE BACK', val: 'Cellulose Reinforced Backing' },
      { label: 'THICKNESS', val: '0.6mm Premium Face Slice' }
    ],
    desc: 'Natural smoked and brushed timber veneers delivering organic warmth, deep wood grain depth, and tactile luxury to wardrobe faces and wall paneling.',
    finishes: ['Smoked Oak', 'Natural Quarter Teak', 'Fluted Relief Veneer']
  }
};

const SHOWROOM_SLIDES = [
  {
    title: 'THE TIMBER & VENEER VAULT',
    sub: 'Full-scale vertical racks displaying Calibrated Gurjan, Marine 710, and natural smoked veneer specimens.',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85'
  },
  {
    title: 'THE SANITARY ARCHITECTURE SUITE',
    sub: 'Live water testing fixtures, freestanding stone monoliths, and concealed cistern installations.',
    img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1800&q=85'
  },
  {
    title: 'THE ARCHITECTURAL HARDWARE LOUNGE',
    sub: 'Ergonomic solid brass levers, concealed 3D hinges, and soft-close acoustic mechanisms.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=85'
  },
  {
    title: 'THE LARGE FORMAT SLAB GALLERY',
    sub: '1200x2400 mm continuous porcelain and honed travertine slabs displayed under natural daylight simulation.',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85'
  }
];

// ============================================================================
// 2. SMOOTH SCROLL (LENIS) INITIALIZATION
// ============================================================================

let lenis = null;

function initSmoothScroll() {
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Synchronize ScrollTrigger with Lenis
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

// ============================================================================
// 3. PRELOADER & CINEMATIC REVEAL SEQUENCE
// ============================================================================

function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('preloaderProgress');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 18) + 12;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      if (progressBar) progressBar.style.width = '100%';

      setTimeout(() => {
        if (preloader) preloader.classList.add('fade-out');
        document.body.classList.remove('loading');
        const p = window.location.pathname;
        if (p === '/' || p === '' || p === '/index.html') {
          triggerHeroCinematicReveal();
        }
      }, 350);
    } else {
      if (progressBar) progressBar.style.width = `${progress}%`;
    }
  }, 45);
}

function triggerHeroCinematicReveal() {
  const revealItems = document.querySelectorAll('.reveal-item');
  gsap.to(revealItems, {
    opacity: 1,
    y: 0,
    duration: 1.1,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.2
  });
}

// ============================================================================
// 4. BESPOKE CUSTOM CURSOR (DESKTOP)
// ============================================================================

function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const cursorText = document.getElementById('cursorText');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  const circle = cursor.querySelector('.cursor-circle');
  const dot = cursor.querySelector('.cursor-dot');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let circleX = mouseX;
  let circleY = mouseY;
  let dotX = mouseX;
  let dotY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    // Smooth lerp
    circleX += (mouseX - circleX) * 0.15;
    circleY += (mouseY - circleY) * 0.15;
    dotX += (mouseX - dotX) * 0.45;
    dotY += (mouseY - dotY) * 0.45;

    if (circle) {
      circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) translate(-50%, -50%)`;
    }
    if (dot) {
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
    }

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover target listeners
  document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      const cursorMode = el.getAttribute('data-cursor');
      if (cursorMode === 'VIEW') {
        cursor.classList.add('hovering-view');
        if (cursorText) cursorText.textContent = 'VIEW';
      } else if (cursorMode === 'EXPLORE') {
        cursor.classList.add('hovering-explore');
        if (cursorText) cursorText.textContent = 'EXPLORE';
      } else {
        cursor.classList.add('hovering-link');
      }
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering-link', 'hovering-view', 'hovering-explore');
      if (cursorText) cursorText.textContent = '';
    });
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
}

// ============================================================================
// 5. STICKY ARCHITECTURAL HEADER
// ============================================================================

function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ============================================================================
// 6. FULLSCREEN CURTAIN MENU
// ============================================================================

function initFullscreenMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const fullscreenMenu = document.getElementById('fullscreenMenu');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const navLinks = document.querySelectorAll('.fullscreen-nav-link, .fullscreen-book-btn');

  if (!fullscreenMenu || !menuToggle) return;

  function openMenu() {
    fullscreenMenu.classList.add('is-open');
    fullscreenMenu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    if (lenis) lenis.stop();
  }

  function closeMenu() {
    fullscreenMenu.classList.remove('is-open');
    fullscreenMenu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (lenis) lenis.start();
  }

  menuToggle.addEventListener('click', openMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      closeMenu();
      const href = link.getAttribute('href');
      if (!href) return;

      if (href.startsWith('/products') || href === '/' || href.startsWith('/#')) {
        e.preventDefault();
        router.navigate(href);
      } else if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          setTimeout(() => {
            if (lenis) {
              lenis.scrollTo(target, { offset: -70 });
            } else {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }, 350);
        }
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fullscreenMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

// ============================================================================
// 7. PRODUCT WORLD CAROUSEL (SECTION 01)
// ============================================================================

function initProductCarousel() {
  const carousel = document.getElementById('productCarousel');
  const prevBtn = document.getElementById('prodPrevBtn');
  const nextBtn = document.getElementById('prodNextBtn');

  if (!carousel) return;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -420, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 420, behavior: 'smooth' });
    });
  }

  // Open Specification Modal on category click
  document.querySelectorAll('.product-category-card').forEach((card) => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      openSpecModal(cat);
    });
  });
}

// ============================================================================
// 8. ASYMMETRIC MASONRY SHOWCASE (SECTION 02)
// ============================================================================

function initMasonryShowcase() {
  document.querySelectorAll('.masonry-item').forEach((item) => {
    item.addEventListener('click', () => {
      const prodId = item.getAttribute('data-product-id');
      openSpecModal(prodId);
    });
  });
}

// ============================================================================
// 9. MATERIAL SPECIFICATION DRAWER / MODAL
// ============================================================================

function initSpecModal() {
  const backdrop = document.getElementById('specModalBackdrop');
  const closeBtn = document.getElementById('specModalClose');
  const dismissBtn = document.getElementById('specModalDismiss');

  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    if (lenis) lenis.start();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
      closeModal();
    }
  });
}

function openSpecModal(key) {
  const data = MATERIAL_SPECS[key] || MATERIAL_SPECS['plywood'];
  const backdrop = document.getElementById('specModalBackdrop');
  if (!backdrop) return;

  // Populate Fields
  const codeEl = document.getElementById('modalProductCode');
  const titleEl = document.getElementById('modalProductTitle');
  const catEl = document.getElementById('modalProductCategory');
  const imgEl = document.getElementById('modalProductImg');
  const descEl = document.getElementById('modalProductDesc');
  const specGrid = document.getElementById('modalSpecGrid');
  const finishesList = document.getElementById('modalFinishesList');
  const waLink = document.getElementById('modalWhatsAppInquiry');

  if (codeEl) codeEl.textContent = data.code;
  if (titleEl) titleEl.textContent = data.title;
  if (catEl) catEl.innerHTML = data.category;
  if (imgEl) {
    imgEl.src = data.img;
    imgEl.alt = data.title;
  }
  if (descEl) descEl.textContent = data.desc;

  if (specGrid) {
    specGrid.innerHTML = data.specs.map(s => `
      <div class="spec-cell">
        <span class="spec-label">${s.label}</span>
        <span class="spec-value">${s.val}</span>
      </div>
    `).join('');
  }

  if (finishesList) {
    finishesList.innerHTML = data.finishes.map(f => `
      <span class="finish-chip">${f}</span>
    `).join('');
  }

  if (waLink) {
    const textMsg = encodeURIComponent(
      `Hello Patel Ply & Hardware Amreli, I would like to inquire regarding specifications and availability for: ${data.title} (${data.code}).`
    );
    waLink.href = `https://wa.me/918460418938?text=${textMsg}`;
  }

  backdrop.classList.add('is-open');
  backdrop.setAttribute('aria-hidden', 'false');
  if (lenis) lenis.stop();
}

// ============================================================================
// 10. SHOWROOM GALLERY LIGHTBOX
// ============================================================================

let currentLightboxIndex = 0;

function initShowroomLightbox() {
  const openBtn = document.getElementById('openShowroomGalleryBtn');
  const lightbox = document.getElementById('galleryLightbox');
  const closeBtn = document.getElementById('lightboxClose');
  const overlay = document.getElementById('lightboxOverlay');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const thumbsContainer = document.getElementById('lightboxThumbs');

  if (!lightbox) return;

  // Render thumbnails
  if (thumbsContainer) {
    thumbsContainer.innerHTML = SHOWROOM_SLIDES.map((slide, i) => `
      <div class="thumb-item ${i === 0 ? 'active' : ''}" data-index="${i}">
        <img src="${slide.img}" alt="${slide.title}" class="thumb-img" />
      </div>
    `).join('');

    thumbsContainer.querySelectorAll('.thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.getAttribute('data-index'), 10);
        setLightboxSlide(idx);
      });
    });
  }

  function openLightbox(index = 0) {
    currentLightboxIndex = index;
    setLightboxSlide(currentLightboxIndex);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    if (lenis) lenis.stop();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    if (lenis) lenis.start();
  }

  if (openBtn) openBtn.addEventListener('click', () => openLightbox(0));
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (overlay) overlay.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex - 1 + SHOWROOM_SLIDES.length) % SHOWROOM_SLIDES.length;
      setLightboxSlide(currentLightboxIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex + 1) % SHOWROOM_SLIDES.length;
      setLightboxSlide(currentLightboxIndex);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
  });
}

function setLightboxSlide(index) {
  const slide = SHOWROOM_SLIDES[index];
  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const thumbs = document.querySelectorAll('.thumb-item');

  if (imgEl) {
    imgEl.src = slide.img;
    imgEl.alt = slide.title;
  }

  if (captionEl) {
    captionEl.innerHTML = `
      <span class="caption-title">${slide.title}</span>
      <span class="caption-sub">${slide.sub}</span>
    `;
  }

  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

// ============================================================================
// 11. BRAND STATEMENT WORD REVEAL (GSAP SCROLLTRIGGER)
// ============================================================================

function initBrandStatementAnimation() {
  const statement = document.getElementById('statementQuote');
  if (!statement) return;

  const words = statement.querySelectorAll('.word');

  gsap.fromTo(words, 
    { opacity: 0.15, y: 14 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: statement,
        start: 'top 75%',
        end: 'bottom 50%',
        scrub: 0.5
      }
    }
  );
}

// ============================================================================
// 12. SHOWROOM PARALLAX
// ============================================================================

function initShowroomParallax() {
  const showroomImg = document.getElementById('showroomBgImg');
  const showroomSection = document.getElementById('showroom');
  if (!showroomImg || !showroomSection) return;

  gsap.fromTo(showroomImg,
    { y: '-12%' },
    {
      y: '12%',
      ease: 'none',
      scrollTrigger: {
        trigger: showroomSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    }
  );
}

// ============================================================================
// 13. EDITORIAL TESTIMONIAL SLIDER
// ============================================================================

function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot-btn');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');

  if (!slides.length) return;

  let current = 0;

  function goToSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    current = index;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const idx = (current - 1 + slides.length) % slides.length;
      goToSlide(idx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const idx = (current + 1) % slides.length;
      goToSlide(idx);
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide'), 10);
      goToSlide(idx);
    });
  });

  // Gentle auto-rotation every 8 seconds
  setInterval(() => {
    const idx = (current + 1) % slides.length;
    goToSlide(idx);
  }, 8000);
}

// ============================================================================
// 14. MATERIAL CONSULTATION FORM WITH DIRECT WHATSAPP INTEGRATION
// ============================================================================

function initConsultationForm() {
  const form = document.getElementById('consultForm');
  const banner = document.getElementById('formSuccessBanner');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim() || 'Client';
    const phone = form.elements['phone']?.value.trim() || '';
    const discipline = form.elements['discipline']?.value || 'Architecture';
    const material = form.elements['material']?.value || 'Material Spec';
    const notes = form.elements['notes']?.value.trim() || 'N/A';

    const message = `*PATEL PLY & HARDWARE — SPECIFICATION INQUIRY*\n` +
      `-----------------------------------------\n` +
      `• *Name/Studio:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Discipline:* ${discipline}\n` +
      `• *Material Interest:* ${material}\n` +
      `• *Scope/Notes:* ${notes}\n` +
      `-----------------------------------------\n` +
      `Sent via Patel Ply Amreli Digital Catalogue.`;

    const waUrl = `https://wa.me/918460418938?text=${encodeURIComponent(message)}`;

    if (banner) {
      banner.style.display = 'flex';
      form.reset();
    }

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  });
}

// ============================================================================
// 15. LIVE LOCAL TIME WIDGET & BACK TO TOP
// ============================================================================

function initLiveLocalTime() {
  const timeEl = document.getElementById('footerLocalTime');
  if (!timeEl) return;

  function update() {
    const now = new Date();
    // Format in IST
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
    timeEl.textContent = `AMRELI, GUJARAT: ${timeStr} IST • SHOWROOM OPEN`;
  }

  update();
  setInterval(update, 1000);
}

function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// ============================================================================
// 16. SMOOTH ANCHOR NAVIGATION INTERCEPTOR
// ============================================================================

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(target, { offset: -70 });
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ============================================================================
// MAIN DOM INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initPreloader();
  initCustomCursor();
  initStickyHeader();
  initFullscreenMenu();
  initProductCarousel();
  initMasonryShowcase();
  initSpecModal();
  initShowroomLightbox();
  initBrandStatementAnimation();
  initShowroomParallax();
  initTestimonialSlider();
  initConsultationForm();
  initLiveLocalTime();
  initBackToTop();
  initSmoothAnchors();
  router.init(lenis);
});
