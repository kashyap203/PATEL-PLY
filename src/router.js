// ============================================================================
// PATEL PLY & HARDWARE SANITARY — CLIENT-SIDE SPA ROUTER
// Seamless transitions, clean URLs, deep linking, Lenis scroll coordination
// ============================================================================

import { 
  renderCategoryDiscovery, 
  renderCategoryPage, 
  renderProductDetailPage, 
  rebindCursorListeners 
} from './catalogue.js';
import { getCategoryBySlug, getProductBySlugs } from './data/products.js';

class AppRouter {
  constructor() {
    this.mainContent = null;
    this.catalogueApp = null;
    this.siteHeader = null;
    this.lenis = null;
    this.currentPath = null;
  }

  init(lenisInstance) {
    this.lenis = lenisInstance;
    this.mainContent = document.getElementById('mainContent');
    this.catalogueApp = document.getElementById('catalogueApp');
    this.siteHeader = document.getElementById('siteHeader');

    // Handle browser back / forward navigation
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname + window.location.hash, false);
    });

    // Intercept clicks on internal links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Ignore external links, mailto, tel, whatsapp, javascript
      if (
        href.startsWith('http') || 
        href.startsWith('//') || 
        href.startsWith('mailto:') || 
        href.startsWith('tel:') || 
        href.startsWith('javascript:') ||
        link.getAttribute('target') === '_blank'
      ) {
        return;
      }

      // Check for internal routes
      if (href.startsWith('/products') || href === '/' || href.startsWith('/#')) {
        e.preventDefault();
        this.navigate(href);
      }
    });

    // Handle initial URL route
    this.handleRoute(window.location.pathname + window.location.hash, false);
  }

  navigate(url, pushState = true) {
    if (pushState) {
      window.history.pushState({}, '', url);
    }
    this.handleRoute(url, true);
  }

  handleRoute(url, scrollToTop = true) {
    const [pathPart, hashPart] = url.split('#');
    let pathname = pathPart || window.location.pathname;
    
    // Normalize path
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }

    this.currentPath = pathname;

    // Route matching
    if (pathname === '' || pathname === '/' || pathname === '/index.html') {
      this.showHomePage(hashPart);
    } else if (pathname === '/products') {
      this.showProductsDiscovery(scrollToTop);
    } else if (pathname.startsWith('/products/')) {
      const segments = pathname.replace('/products/', '').split('/');
      const categorySlug = segments[0];
      const productSlug = segments[1];

      if (productSlug) {
        this.showProductDetail(categorySlug, productSlug, scrollToTop);
      } else {
        this.showCategoryPage(categorySlug, scrollToTop);
      }
    } else {
      // Fallback: show home
      this.showHomePage(hashPart);
    }

    this.updateActiveNavLinks(pathname);
    rebindCursorListeners();
  }

  showHomePage(hashTarget = null) {
    if (!this.mainContent || !this.catalogueApp) return;

    this.mainContent.style.display = 'block';
    this.catalogueApp.style.display = 'none';

    // Update Header styling for home (transparent over hero or scrolled)
    if (this.siteHeader) {
      this.siteHeader.classList.remove('header-subpage');
      if (window.scrollY > 80) {
        this.siteHeader.classList.add('scrolled');
      } else {
        this.siteHeader.classList.remove('scrolled');
      }
    }

    document.title = 'PATEL PLY & HARDWARE SANITARY — Amreli, Gujarat';

    if (hashTarget) {
      setTimeout(() => {
        const el = document.getElementById(hashTarget);
        if (el) {
          if (this.lenis) {
            this.lenis.scrollTo(el, { offset: -70 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  }

  showProductsDiscovery(scrollToTop = true) {
    if (!this.mainContent || !this.catalogueApp) return;

    this.mainContent.style.display = 'none';
    this.catalogueApp.style.display = 'block';

    // Apply subpage header style
    this.setSubpageHeader();

    renderCategoryDiscovery(this.catalogueApp);

    document.title = 'Products for Better Spaces — Patel Ply & Hardware Sanitary, Amreli';

    if (scrollToTop) {
      this.resetScroll();
    }
  }

  showCategoryPage(categorySlug, scrollToTop = true) {
    if (!this.mainContent || !this.catalogueApp) return;

    this.mainContent.style.display = 'none';
    this.catalogueApp.style.display = 'block';

    this.setSubpageHeader();

    renderCategoryPage(this.catalogueApp, categorySlug);

    const cat = getCategoryBySlug(categorySlug);
    if (cat) {
      document.title = `${cat.name} — Patel Ply & Hardware Sanitary`;
    }

    if (scrollToTop) {
      this.resetScroll();
    }
  }

  showProductDetail(categorySlug, productSlug, scrollToTop = true) {
    if (!this.mainContent || !this.catalogueApp) return;

    this.mainContent.style.display = 'none';
    this.catalogueApp.style.display = 'block';

    this.setSubpageHeader();

    renderProductDetailPage(this.catalogueApp, categorySlug, productSlug);

    const prod = getProductBySlugs(categorySlug, productSlug);
    if (prod) {
      document.title = `${prod.name} (${prod.code}) — Patel Ply & Hardware Sanitary`;
    }

    if (scrollToTop) {
      this.resetScroll();
    }
  }

  setSubpageHeader() {
    if (this.siteHeader) {
      this.siteHeader.classList.add('header-subpage');
    }
  }

  resetScroll() {
    if (this.lenis) {
      this.lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  updateActiveNavLinks(pathname) {
    // Desktop Nav
    document.querySelectorAll('.desktop-nav .nav-link').forEach(link => {
      const navTarget = link.getAttribute('data-nav');
      const href = link.getAttribute('href');

      if (navTarget === 'products' || href === '/products') {
        if (pathname.startsWith('/products')) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      } else if (navTarget === 'home' || href === '/') {
        if (pathname === '/' || pathname === '') {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      } else {
        link.classList.remove('is-active');
      }
    });

    // Mobile Bottom Floating Bar active state
    const floatingProductsBtn = document.getElementById('floatingProductsBtn');
    if (floatingProductsBtn) {
      if (pathname.startsWith('/products')) {
        floatingProductsBtn.classList.add('active');
      } else {
        floatingProductsBtn.classList.remove('active');
      }
    }
  }
}

export const router = new AppRouter();
