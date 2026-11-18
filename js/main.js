/* Stride Sports — landing interactions */

// TODO: replace with the store's real WhatsApp number in international format,
// digits only (e.g. '58412XXXXXXX'). While empty, links open WhatsApp's
// "choose a contact" screen with the message pre-filled.
const WHATSAPP_NUMBER = '';

document.addEventListener('DOMContentLoaded', () => {
  setupWhatsAppLinks();
  setupImagePlaceholders();
  setupCatalogFilters();
  setupMobileMenu();
});

/* WhatsApp links: any element with data-wa="<message>" */
function setupWhatsAppLinks() {
  document.querySelectorAll('[data-wa]').forEach((link) => {
    const text = encodeURIComponent(link.dataset.wa);
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });
}

/* Show a neutral block with the file name until the real image exists */
function setupImagePlaceholders() {
  document.querySelectorAll('.media img').forEach((img) => {
    const media = img.closest('.media');
    const markMissing = () => media.classList.add('is-missing');
    const markLoaded = () => media.classList.remove('is-missing');

    if (img.complete) {
      if (img.naturalWidth === 0) markMissing();
      return;
    }
    // Lazy images stay hidden (opacity) but still load when scrolled near.
    markMissing();
    img.addEventListener('load', markLoaded, { once: true });
    img.addEventListener('error', markMissing, { once: true });
  });
}

/* Catalog filters: Todos / Zapatillas / Accesorios */
function setupCatalogFilters() {
  const chips = document.querySelectorAll('.chip[data-filter]');
  const products = document.querySelectorAll('.product[data-cat]');
  const status = document.getElementById('catalogo-estado');
  if (!chips.length || !products.length) return;

  const labels = { all: 'productos', shoes: 'zapatillas', acc: 'accesorios' };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      let shown = 0;

      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      products.forEach((p) => {
        const match = filter === 'all' || p.dataset.cat === filter;
        p.hidden = !match;
        if (match) shown += 1;
      });

      if (status) {
        status.textContent = `Mostrando ${shown} ${labels[filter]}. Tallas y colores disponibles en tienda. Precios en USD.`;
      }
    });
  });
}

/* Mobile menu */
function setupMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('menu-principal');
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Cerrar' : 'Menú';
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
}
