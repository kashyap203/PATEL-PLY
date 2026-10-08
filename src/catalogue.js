// ============================================================================
// PATEL PLY & HARDWARE SANITARY — CATALOGUE CONTROLLER & VIEW RENDERING
// Category-First Discovery, Dynamic Category Pages, Architectural Product Details
// ============================================================================

import gsap from 'gsap';
import { 
  getAllCategories, 
  getCategoryBySlug, 
  getProductBySlugs, 
  getRelatedProducts, 
  searchAllProducts 
} from './data/products.js';

// State tracker for active filters inside a category
let activeFilter = 'all';
let activeSort = 'featured';
let categorySearchQuery = '';

/**
 * Re-bind hover listeners for the custom cursor on dynamically rendered elements
 */
export function rebindCursorListeners() {
  const cursor = document.getElementById('customCursor');
  const cursorText = document.getElementById('cursorText');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('[data-cursor]').forEach((el) => {
    // Avoid double binding
    if (el._cursorBound) return;
    el._cursorBound = true;

    el.addEventListener('mouseenter', () => {
      const mode = el.getAttribute('data-cursor');
      if (mode === 'VIEW') {
        cursor.classList.add('hovering-view');
        if (cursorText) cursorText.textContent = 'VIEW';
      } else if (mode === 'EXPLORE') {
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
}

/**
 * Animate page entrance subtly (no bounce, calm, expensive)
 */
function animatePageIn(container) {
  const items = container.querySelectorAll('.cat-reveal-item');
  if (items.length) {
    gsap.fromTo(items, 
      { opacity: 0, y: 16 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.75, 
        stagger: 0.08, 
        ease: 'power3.out' 
      }
    );
  }
}

// ============================================================================
// VIEW 1: /products — CATEGORY DISCOVERY
// ============================================================================

export function renderCategoryDiscovery(container) {
  const categories = getAllCategories();

  container.innerHTML = `
    <div class="catalogue-discovery-view">
      
      <!-- HERO HEADER -->
      <section class="catalogue-hero">
        <div class="catalogue-container">
          
          <div class="catalogue-breadcrumb-bar cat-reveal-item">
            <span class="breadcrumb-item"><a href="/" class="cat-nav-link">HOME</a></span>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-item active">PRODUCTS</span>
          </div>

          <div class="catalogue-hero-grid">
            <div class="hero-left">
              <span class="catalogue-eyebrow cat-reveal-item">PATEL PLY / PRODUCTS</span>
              <h1 class="catalogue-hero-title cat-reveal-item">
                <span class="title-line">PRODUCTS</span>
                <span class="title-line">FOR BETTER</span>
                <span class="title-line">SPACES.</span>
              </h1>
            </div>

            <div class="hero-right">
              <p class="catalogue-lead cat-reveal-item">
                Explore our curated range of hardware, kitchen solutions, ceramic water taps and Berger colours.
              </p>
              
              <!-- Subtle Global Search -->
              <div class="catalogue-search-box cat-reveal-item">
                <div class="search-input-wrap">
                  <span class="search-icon">&#x1F50D;</span>
                  <input 
                    type="text" 
                    id="globalProductSearch" 
                    placeholder="Search products, finishes, or codes..." 
                    autocomplete="off"
                    aria-label="Search products"
                  />
                  <button type="button" class="search-clear-btn" id="searchClearBtn" style="display: none;">&times;</button>
                </div>
                <div class="search-results-dropdown" id="searchResultsDropdown" style="display: none;"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ASYMMETRIC CATEGORY GRID -->
      <section class="catalogue-grid-section">
        <div class="catalogue-container">
          
          <div class="category-discovery-grid">
            
            <!-- Category 1: Large Featured Card (Ceramic Water Taps) -->
            <article 
              class="category-card card-large cat-reveal-item" 
              data-cat-slug="${categories[0].slug}" 
              data-cursor="EXPLORE"
            >
              <a href="/products/${categories[0].slug}" class="category-card-link">
                <div class="category-media-wrap">
                  <img 
                    src="${categories[0].image}" 
                    alt="${categories[0].name}" 
                    class="category-img" 
                    loading="eager"
                  />
                  <div class="category-scrim"></div>
                  <div class="category-count-badge">${categories[0].itemCountText}</div>
                </div>

                <div class="category-content">
                  <span class="category-meta-badge">${categories[0].badge}</span>
                  <h2 class="category-card-title">${categories[0].name}</h2>
                  <p class="category-card-desc">${categories[0].description}</p>
                  <div class="category-cta-row">
                    <span class="cta-label">EXPLORE CATEGORY</span>
                    <span class="cta-arrow">&rarr;</span>
                  </div>
                </div>
              </a>
            </article>

            <!-- Stacked Column: Berger Colors & Kitchen Hardware -->
            <div class="category-stacked-col">
              
              <!-- Category 2: Berger Colors -->
              <article 
                class="category-card card-medium cat-reveal-item" 
                data-cat-slug="${categories[1].slug}" 
                data-cursor="EXPLORE"
              >
                <a href="/products/${categories[1].slug}" class="category-card-link">
                  <div class="category-media-wrap">
                    <img 
                      src="${categories[1].image}" 
                      alt="${categories[1].name}" 
                      class="category-img" 
                      loading="lazy"
                    />
                    <div class="category-scrim"></div>
                    <div class="category-count-badge">${categories[1].itemCountText}</div>
                  </div>

                  <div class="category-content">
                    <span class="category-meta-badge">${categories[1].badge}</span>
                    <h2 class="category-card-title">${categories[1].name}</h2>
                    <p class="category-card-desc">${categories[1].description}</p>
                    <div class="category-cta-row">
                      <span class="cta-label">EXPLORE CATEGORY</span>
                      <span class="cta-arrow">&rarr;</span>
                    </div>
                  </div>
                </a>
              </article>

              <!-- Category 3: Kitchen Hardware -->
              <article 
                class="category-card card-medium cat-reveal-item" 
                data-cat-slug="${categories[2].slug}" 
                data-cursor="EXPLORE"
              >
                <a href="/products/${categories[2].slug}" class="category-card-link">
                  <div class="category-media-wrap">
                    <img 
                      src="${categories[2].image}" 
                      alt="${categories[2].name}" 
                      class="category-img" 
                      loading="lazy"
                    />
                    <div class="category-scrim"></div>
                    <div class="category-count-badge">${categories[2].itemCountText}</div>
                  </div>

                  <div class="category-content">
                    <span class="category-meta-badge">${categories[2].badge}</span>
                    <h2 class="category-card-title">${categories[2].name}</h2>
                    <p class="category-card-desc">${categories[2].description}</p>
                    <div class="category-cta-row">
                      <span class="cta-label">EXPLORE CATEGORY</span>
                      <span class="cta-arrow">&rarr;</span>
                    </div>
                  </div>
                </a>
              </article>

            </div>

            <!-- Category 4: Large/Spanning Card (Hardware) -->
            <article 
              class="category-card card-wide cat-reveal-item" 
              data-cat-slug="${categories[3].slug}" 
              data-cursor="EXPLORE"
            >
              <a href="/products/${categories[3].slug}" class="category-card-link">
                <div class="category-media-wrap">
                  <img 
                    src="${categories[3].image}" 
                    alt="${categories[3].name}" 
                    class="category-img" 
                    loading="lazy"
                  />
                  <div class="category-scrim"></div>
                  <div class="category-count-badge">${categories[3].itemCountText}</div>
                </div>

                <div class="category-content">
                  <span class="category-meta-badge">${categories[3].badge}</span>
                  <h2 class="category-card-title">${categories[3].name}</h2>
                  <p class="category-card-desc">${categories[3].description}</p>
                  <div class="category-cta-row">
                    <span class="cta-label">EXPLORE CATEGORY</span>
                    <span class="cta-arrow">&rarr;</span>
                  </div>
                </div>
              </a>
            </article>

          </div>

          <!-- Bottom Editorial Note -->
          <div class="catalogue-footer-note cat-reveal-item">
            <div class="note-left">
              <span class="note-brand">PATEL PLY SHOWROOM ARCHIVE</span>
              <p class="note-sub">Manekpara • Amreli, Gujarat • Architectural consultations available daily.</p>
            </div>
            <div class="note-right">
              <a href="https://wa.me/918460418938?text=Hello%20Patel%20Ply%20Amreli%2C%20I%20would%20like%20to%20inquire%20about%20your%20product%20catalogue." 
                 target="_blank" 
                 rel="noopener" 
                 class="btn-editorial-sm"
              >
                Inquire on WhatsApp &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  `;

  // Init search functionality
  initSearch();
  rebindCursorListeners();
  animatePageIn(container);
}

// ============================================================================
// VIEW 2: /products/:categorySlug — CATEGORY PRODUCT LIST
// ============================================================================

export function renderCategoryPage(container, categorySlug) {
  const category = getCategoryBySlug(categorySlug);
  const allCategories = getAllCategories();

  if (!category) {
    container.innerHTML = `
      <div class="catalogue-not-found">
        <div class="catalogue-container">
          <span class="not-found-eyebrow">404 • CATEGORY NOT FOUND</span>
          <h2>The requested product category does not exist in our archive.</h2>
          <a href="/products" class="btn-editorial-sm">&larr; Return to Products Discovery</a>
        </div>
      </div>
    `;
    return;
  }

  // Filter & sort products
  let products = [...category.products];

  if (activeFilter === 'new') {
    products = products.filter(p => p.isNew || p.filterTag === 'new');
  } else if (activeFilter === 'popular') {
    products = products.filter(p => p.isPopular || p.filterTag === 'popular');
  }

  if (categorySearchQuery.trim()) {
    const q = categorySearchQuery.toLowerCase().trim();
    products = products.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.descriptor.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (activeSort === 'name-asc') {
    products.sort((a, b) => a.name.localeCompare(b.name));
  }

  container.innerHTML = `
    <div class="category-page-view">
      
      <!-- TOP BREADCRUMB & HEADER -->
      <section class="category-header-section">
        <div class="catalogue-container">
          
          <!-- Breadcrumb Navigation -->
          <div class="catalogue-breadcrumb-bar cat-reveal-item">
            <span class="breadcrumb-item"><a href="/" class="cat-nav-link">HOME</a></span>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-item"><a href="/products" class="cat-nav-link">PRODUCTS</a></span>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-item active">${category.name}</span>
          </div>

          <div class="category-header-grid">
            <div class="category-heading-block">
              <span class="catalogue-eyebrow cat-reveal-item">PATEL PLY / PRODUCTS / ${category.name}</span>
              <h1 class="category-hero-title cat-reveal-item">
                ${category.headline.replace('\n', '<br />')}
              </h1>
            </div>

            <div class="category-meta-block">
              <p class="category-full-desc cat-reveal-item">${category.longDescription || category.description}</p>
              <div class="category-stat-row cat-reveal-item">
                <span class="stat-badge">${products.length} Products Displayed</span>
                <span class="stat-badge">${category.badge}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- CATEGORY SELECTOR BAR (SWITCH CATEGORIES DIRECTLY) -->
      <nav class="category-nav-bar" aria-label="Category Selector">
        <div class="catalogue-container">
          <div class="category-nav-scroll">
            ${allCategories.map(cat => `
              <a 
                href="/products/${cat.slug}" 
                class="category-nav-tab ${cat.slug === category.slug ? 'active' : ''}"
                data-cat-slug="${cat.slug}"
              >
                <span class="tab-indicator"></span>
                <span class="tab-name">${cat.name}</span>
                <span class="tab-count">(${cat.products.length})</span>
              </a>
            `).join('')}
          </div>
        </div>
      </nav>

      <!-- MINIMAL FILTER / SORT & INLINE SEARCH -->
      <section class="category-controls-section">
        <div class="catalogue-container">
          <div class="controls-toolbar cat-reveal-item">
            
            <div class="filter-pills-group">
              <span class="filter-label">FILTER:</span>
              <button class="filter-pill ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">ALL</button>
              <button class="filter-pill ${activeFilter === 'new' ? 'active' : ''}" data-filter="new">NEW</button>
              <button class="filter-pill ${activeFilter === 'popular' ? 'active' : ''}" data-filter="popular">POPULAR</button>
            </div>

            <div class="controls-right-group">
              
              <!-- Search within category -->
              <div class="category-inline-search">
                <span class="search-mini-icon">&#x1F50D;</span>
                <input 
                  type="text" 
                  id="categorySearchInput" 
                  placeholder="Filter ${category.shortName.toLowerCase()}..." 
                  value="${categorySearchQuery}" 
                  autocomplete="off"
                />
                ${categorySearchQuery ? `<button class="inline-clear-btn" id="inlineClearBtn">&times;</button>` : ''}
              </div>

              <!-- Sort dropdown -->
              <div class="sort-selector-wrap">
                <label for="categorySortSelect" class="sort-label">SORT:</label>
                <select id="categorySortSelect" class="sort-select">
                  <option value="featured" ${activeSort === 'featured' ? 'selected' : ''}>Featured</option>
                  <option value="name-asc" ${activeSort === 'name-asc' ? 'selected' : ''}>Name A–Z</option>
                </select>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- PRODUCT CARDS GRID (EDITORIAL 3-COLUMN DESKTOP, 2-COLUMN MOBILE) -->
      <section class="products-grid-section">
        <div class="catalogue-container">
          
          ${products.length === 0 ? `
            <div class="empty-products-state">
              <p>No products match your active filter criteria in this category.</p>
              <button class="btn-editorial-sm" id="resetCategoryFilters">Reset Filters</button>
            </div>
          ` : `
            <div class="editorial-products-grid">
              ${products.map(prod => `
                <article 
                  class="product-editorial-card cat-reveal-item" 
                  data-prod-slug="${prod.slug}" 
                  data-cursor="VIEW"
                >
                  <a href="/products/${category.slug}/${prod.slug}" class="product-card-link">
                    
                    <div class="product-media-holder">
                      <img 
                        src="${prod.image}" 
                        alt="${prod.name}" 
                        class="product-img" 
                        loading="lazy"
                      />
                      <div class="product-card-overlay">
                        <span class="hover-view-tag">VIEW DETAILS &rarr;</span>
                      </div>
                      ${prod.isNew ? `<span class="product-status-tag tag-new">NEW SPEC</span>` : ''}
                      ${prod.isPopular ? `<span class="product-status-tag tag-popular">POPULAR</span>` : ''}
                    </div>

                    <div class="product-info-block">
                      <div class="product-code-meta">
                        <span class="prod-code">${prod.code}</span>
                        <span class="prod-cat-crumb">${category.shortName}</span>
                      </div>
                      
                      <h3 class="product-title">${prod.name}</h3>
                      <p class="product-descriptor">${prod.descriptor}</p>

                      <div class="product-action-footer">
                        <span class="action-text">View Product</span>
                        <span class="action-arrow">&rarr;</span>
                      </div>
                    </div>

                  </a>
                </article>
              `).join('')}
            </div>
          `}

          <!-- Quick Navigation Back -->
          <div class="category-bottom-bar cat-reveal-item">
            <a href="/products" class="cat-nav-link back-link">&larr; Return to All Categories</a>
            <span class="showroom-consult-text">
              Looking for tailored sizes? Visit our Manekpara showroom or <a href="https://wa.me/918460418938?text=Hello%20Patel%20Ply%2C%20I%20have%20custom%20specification%20requirements%20for%20${encodeURIComponent(category.name)}." target="_blank" rel="noopener">Inquire on WhatsApp</a>
            </span>
          </div>

        </div>
      </section>

    </div>
  `;

  // Attach category filter & sort event listeners
  bindCategoryControls(container, categorySlug);
  rebindCursorListeners();
  animatePageIn(container);
}

function bindCategoryControls(container, categorySlug) {
  // Filter pills
  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      activeFilter = btn.getAttribute('data-filter');
      renderCategoryPage(container, categorySlug);
    });
  });

  // Sort select
  const sortSelect = container.querySelector('#categorySortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderCategoryPage(container, categorySlug);
    });
  }

  // Inline category search
  const searchInput = container.querySelector('#categorySearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      categorySearchQuery = e.target.value;
      // Debounced re-render
      clearTimeout(searchInput._timer);
      searchInput._timer = setTimeout(() => {
        renderCategoryPage(container, categorySlug);
      }, 250);
    });
  }

  // Clear search
  const clearBtn = container.querySelector('#inlineClearBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      categorySearchQuery = '';
      renderCategoryPage(container, categorySlug);
    });
  }

  // Reset filters
  const resetBtn = container.querySelector('#resetCategoryFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeFilter = 'all';
      activeSort = 'featured';
      categorySearchQuery = '';
      renderCategoryPage(container, categorySlug);
    });
  }
}

// ============================================================================
// VIEW 3: /products/:categorySlug/:productSlug — PRODUCT DETAIL
// ============================================================================

export function renderProductDetailPage(container, categorySlug, productSlug) {
  const category = getCategoryBySlug(categorySlug);
  const product = getProductBySlugs(categorySlug, productSlug);

  if (!category || !product) {
    container.innerHTML = `
      <div class="catalogue-not-found">
        <div class="catalogue-container">
          <span class="not-found-eyebrow">404 • PRODUCT SPECIFICATION NOT FOUND</span>
          <h2>The requested product specification could not be located in our catalogue archive.</h2>
          <a href="/products" class="btn-editorial-sm">&larr; Return to Products Directory</a>
        </div>
      </div>
    `;
    return;
  }

  const relatedProducts = getRelatedProducts(categorySlug, productSlug, 3);

  // Pre-filled WhatsApp inquiry message
  const waMessage = `*PATEL PLY & HARDWARE AMRELI — PRODUCT INQUIRY*\n` +
    `-----------------------------------------\n` +
    `• *Product:* ${product.name}\n` +
    `• *Reference Code:* ${product.code}\n` +
    `• *Category:* ${category.name}\n` +
    `-----------------------------------------\n` +
    `Hello Patel Ply team, I would like to check showroom pricing, stock availability, and technical sampling for this specification.`;

  const waUrl = `https://wa.me/918460418938?text=${encodeURIComponent(waMessage)}`;

  container.innerHTML = `
    <div class="product-detail-view">
      
      <!-- BREADCRUMBS & TOP NAV -->
      <section class="detail-breadcrumb-section">
        <div class="catalogue-container">
          
          <div class="catalogue-breadcrumb-bar cat-reveal-item">
            <span class="breadcrumb-item"><a href="/" class="cat-nav-link">HOME</a></span>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-item"><a href="/products" class="cat-nav-link">PRODUCTS</a></span>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-item"><a href="/products/${category.slug}" class="cat-nav-link">${category.name}</a></span>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-item active">${product.code}</span>
          </div>

          <div class="detail-back-row cat-reveal-item">
            <a href="/products/${category.slug}" class="cat-nav-link back-link">&larr; BACK TO ${category.name}</a>
          </div>

        </div>
      </section>

      <!-- MAIN 2-COLUMN PRODUCT SPECIFICATION LAYOUT -->
      <section class="detail-main-section">
        <div class="catalogue-container">
          
          <div class="detail-split-grid">
            
            <!-- LEFT: PRODUCT IMAGE GALLERY -->
            <div class="detail-gallery-col cat-reveal-item">
              
              <div class="gallery-hero-frame">
                <img 
                  src="${product.gallery[0] || product.image}" 
                  alt="${product.name}" 
                  id="detailMainImg" 
                  class="gallery-main-img" 
                  loading="eager"
                />
                <div class="gallery-zoom-badge">CURATED SPECIMEN</div>
              </div>

              <!-- Gallery Thumbnails -->
              <div class="gallery-thumbnails-strip" id="galleryThumbsStrip">
                ${product.gallery.map((thumbUrl, idx) => `
                  <button 
                    type="button" 
                    class="thumb-btn ${idx === 0 ? 'active' : ''}" 
                    data-img-src="${thumbUrl}" 
                    aria-label="View photo ${idx + 1}"
                  >
                    <img src="${thumbUrl}" alt="${product.name} view ${idx + 1}" class="thumb-strip-img" />
                  </button>
                `).join('')}
              </div>

              <!-- Showroom Assurance -->
              <div class="showroom-assurance-card">
                <div class="assurance-icon">&#x25C7;</div>
                <div class="assurance-body">
                  <h4>GENUINE SPECIFICATION VERIFIED</h4>
                  <p>In-person material viewing and tactile samples available at our Manekpara showroom in Amreli, Gujarat.</p>
                </div>
              </div>

            </div>

            <!-- RIGHT: PRODUCT SPECIFICATIONS & CTAS -->
            <div class="detail-info-col cat-reveal-item">
              
              <div class="detail-header-meta">
                <span class="detail-category-tag">${category.name}</span>
                <span class="detail-code-badge">${product.code}</span>
              </div>

              <h1 class="detail-product-title">${product.name}</h1>
              
              <p class="detail-descriptor-lead">${product.descriptor}</p>

              <div class="detail-divider"></div>

              <!-- Curator's Notes -->
              <div class="detail-desc-block">
                <h4 class="detail-section-eyebrow">CURATOR’S NOTES & APPLICATION</h4>
                <p class="detail-description-text">${product.description}</p>
              </div>

              <!-- Architectural Specifications Table -->
              <div class="detail-specs-block">
                <h4 class="detail-section-eyebrow">ARCHITECTURAL SPECIFICATIONS</h4>
                <div class="specs-editorial-grid">
                  ${product.specs.map(s => `
                    <div class="spec-row-item">
                      <span class="spec-label">${s.label}</span>
                      <span class="spec-val">${s.val}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Available Finishes / Variants -->
              ${product.finishes && product.finishes.length ? `
                <div class="detail-finishes-block">
                  <h4 class="detail-section-eyebrow">AVAILABLE FINISHES & VARIANTS</h4>
                  <div class="finishes-chips-wrap">
                    ${product.finishes.map(f => `
                      <span class="finish-chip">${f}</span>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Commercial Note & Direct Action CTAs -->
              <div class="detail-cta-box">
                <div class="price-notice-row">
                  <span class="notice-badge">SHOWROOM CATALOGUE</span>
                  <span class="notice-text">Direct trade and project quotes provided instantly</span>
                </div>

                <div class="cta-actions-group">
                  <a 
                    href="${waUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn-primary-whatsapp"
                    data-cursor="VIEW"
                  >
                    <span class="wa-icon">&#x1F4AC;</span>
                    <span class="wa-text">ENQUIRE ON WHATSAPP</span>
                    <span class="wa-arrow">&rarr;</span>
                  </a>

                  <a 
                    href="tel:08460418938" 
                    class="btn-secondary-call"
                  >
                    <span class="call-icon">&#x260E;</span>
                    <span class="call-text">CALL US (08460418938)</span>
                  </a>
                </div>

                <div class="consultation-footnote">
                  <span>Street No. 2, Opp. HDFC Bank, Manekpara, Amreli</span>
                  <span>•</span>
                  <span>Direct Showroom Desk</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- RELATED PRODUCTS SECTION (STRICTLY FROM THE SAME CATEGORY) -->
      ${relatedProducts.length > 0 ? `
        <section class="related-products-section">
          <div class="catalogue-container">
            
            <div class="related-header-row cat-reveal-item">
              <div>
                <span class="catalogue-eyebrow">ARCHITECTURAL SELECTION</span>
                <h2 class="editorial-headline-sm">YOU MAY ALSO LIKE</h2>
              </div>
              <a href="/products/${category.slug}" class="cat-nav-link">
                View all in ${category.shortName} &rarr;
              </a>
            </div>

            <div class="editorial-products-grid related-grid">
              ${relatedProducts.map(rel => `
                <article 
                  class="product-editorial-card cat-reveal-item" 
                  data-prod-slug="${rel.slug}" 
                  data-cursor="VIEW"
                >
                  <a href="/products/${category.slug}/${rel.slug}" class="product-card-link">
                    
                    <div class="product-media-holder">
                      <img 
                        src="${rel.image}" 
                        alt="${rel.name}" 
                        class="product-img" 
                        loading="lazy"
                      />
                      <div class="product-card-overlay">
                        <span class="hover-view-tag">VIEW DETAILS &rarr;</span>
                      </div>
                    </div>

                    <div class="product-info-block">
                      <div class="product-code-meta">
                        <span class="prod-code">${rel.code}</span>
                        <span class="prod-cat-crumb">${category.shortName}</span>
                      </div>
                      
                      <h3 class="product-title">${rel.name}</h3>
                      <p class="product-descriptor">${rel.descriptor}</p>

                      <div class="product-action-footer">
                        <span class="action-text">View Product</span>
                        <span class="action-arrow">&rarr;</span>
                      </div>
                    </div>

                  </a>
                </article>
              `).join('')}
            </div>

          </div>
        </section>
      ` : ''}

    </div>
  `;

  // Init thumbnail gallery switching
  initGallerySwitcher(container);
  rebindCursorListeners();
  animatePageIn(container);
}

function initGallerySwitcher(container) {
  const mainImg = container.querySelector('#detailMainImg');
  const thumbBtns = container.querySelectorAll('.thumb-btn');

  if (!mainImg || !thumbBtns.length) return;

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-img-src');
      if (src && mainImg.src !== src) {
        gsap.to(mainImg, {
          opacity: 0.2,
          duration: 0.15,
          onComplete: () => {
            mainImg.src = src;
            gsap.to(mainImg, { opacity: 1, duration: 0.25 });
          }
        });
        thumbBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
}

// ============================================================================
// GLOBAL SEARCH COMPONENT (INSTANT RESULTS ON DISCOVERY PAGE)
// ============================================================================

function initSearch() {
  const searchInput = document.getElementById('globalProductSearch');
  const resultsDropdown = document.getElementById('searchResultsDropdown');
  const clearBtn = document.getElementById('searchClearBtn');

  if (!searchInput || !resultsDropdown) return;

  function performSearch() {
    const val = searchInput.value.trim();
    if (!val) {
      resultsDropdown.style.display = 'none';
      if (clearBtn) clearBtn.style.display = 'none';
      return;
    }

    if (clearBtn) clearBtn.style.display = 'block';

    const results = searchAllProducts(val);

    if (results.length === 0) {
      resultsDropdown.innerHTML = `
        <div class="search-empty-result">
          <p>No products matching "<strong>${escapeHtml(val)}</strong>"</p>
          <span class="search-hint">Try searching by category (e.g. taps, colors, hardware) or finish.</span>
        </div>
      `;
      resultsDropdown.style.display = 'block';
    } else {
      resultsDropdown.innerHTML = `
        <div class="search-results-list">
          <div class="search-results-header">FOUND ${results.length} PRODUCT SPECIFICATIONS</div>
          ${results.slice(0, 8).map(item => `
            <a href="/products/${item.categorySlug}/${item.slug}" class="search-result-row">
              <img src="${item.image}" alt="${item.name}" class="search-thumb" />
              <div class="search-info">
                <div class="search-meta">
                  <span class="search-code">${item.code}</span>
                  <span class="search-cat">${item.categoryName}</span>
                </div>
                <div class="search-title">${item.name}</div>
                <div class="search-desc">${item.descriptor}</div>
              </div>
              <span class="search-view-arrow">&rarr;</span>
            </a>
          `).join('')}
        </div>
      `;
      resultsDropdown.style.display = 'block';
    }
  }

  searchInput.addEventListener('input', () => {
    clearTimeout(searchInput._searchTimer);
    searchInput._searchTimer = setTimeout(performSearch, 180);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      resultsDropdown.style.display = 'none';
      clearBtn.style.display = 'none';
      searchInput.focus();
    });
  }

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.catalogue-search-box')) {
      resultsDropdown.style.display = 'none';
    }
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) {
      performSearch();
    }
  });
}

function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, (s) => entityMap[s]);
}
