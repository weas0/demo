/* ═══════════════════════════════════════════
   MUSEO DA VINCI — Main Script
   ═══════════════════════════════════════════ */

/* ─── SCROLL HINT ─── */
document.getElementById('scrollHint').addEventListener('click', () => {
  document.querySelector('.intro').scrollIntoView({ behavior: 'smooth' });
});

/* ─── IMAGE PROXY & PLACEHOLDER ─── */
function proxyUrl(url) {
  return 'https://wsrv.nl/?url=' + encodeURIComponent(url) + '&w=600&output=jpg&q=80';
}

function proxyUrlLarge(url) {
  return 'https://wsrv.nl/?url=' + encodeURIComponent(url) + '&w=900&output=jpg&q=85';
}

function makePlaceholder(art) {
  const title = art.title.replace(/'/g, '&apos;');
  const year  = art.year;
  const bg    = (art.color || '#2a1f0f').replace('#', '%23');
  const gold  = '%23b8860b';
  const cream = '%23f5ead5';
  const goldL = '%23d4a017';
  const svg = [
    "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'>",
    "<defs><radialGradient id='rg' cx='50%25' cy='40%25' r='60%25'>",
    "<stop offset='0%25' stop-color='" + bg + "'/><stop offset='100%25' stop-color='%23080503'/></radialGradient></defs>",
    "<rect width='400' height='500' fill='url(%23rg)'/>",
    "<rect x='30' y='30' width='340' height='440' fill='none' stroke='" + gold + "' stroke-width='0.5' opacity='0.4'/>",
    "<text x='200' y='210' text-anchor='middle' font-family='serif' font-size='80' fill='" + gold + "' opacity='0.1'>&#10022;</text>",
    "<text x='200' y='305' text-anchor='middle' font-family='Georgia,serif' font-style='italic' font-size='20' fill='" + cream + "' opacity='0.85'>" + title + "</text>",
    "<line x1='155' y1='320' x2='245' y2='320' stroke='" + gold + "' stroke-width='0.8' opacity='0.5'/>",
    "<text x='200' y='342' text-anchor='middle' font-family='Georgia,serif' font-size='11' fill='" + goldL + "' opacity='0.7'>" + year + "</text>",
    "</svg>"
  ].join('');
  return 'data:image/svg+xml,' + svg;
}

/* ─── BUILD GALLERY ─── */
const gallery = document.getElementById('gallery');

artworks.forEach(function(art, i) {
  const card        = document.createElement('div');
  card.className    = 'artwork-card reveal';
  const thumb       = proxyUrl(art.img);
  const placeholder = makePlaceholder(art);

  card.innerHTML =
    '<img src="' + thumb + '" alt="' + art.title + '" loading="lazy"/>' +
    '<div class="card-overlay">' +
      '<p class="card-year">' + art.year + '</p>' +
      '<h3 class="card-title">' + art.title + '</h3>' +
      '<p class="card-cta">View details</p>' +
    '</div>';

  const img = card.querySelector('img');
  img.addEventListener('error', function() {
    if (this.src !== placeholder) this.src = placeholder;
  });

  card.addEventListener('click', function() { openLightbox(i); });
  gallery.appendChild(card);
});

/* ─── LIGHTBOX ─── */
var currentIdx   = 0;
var lightbox     = document.getElementById('lightbox');
var lbBackdrop   = document.getElementById('lbBackdrop');
var lbImage      = document.getElementById('lbImage');
var lbLabel      = document.getElementById('lbLabel');
var lbTitle      = document.getElementById('lbTitle');
var lbMeta       = document.getElementById('lbMeta');
var lbDesc       = document.getElementById('lbDesc');
var lbTech       = document.getElementById('lbTech');
var lbClose      = document.getElementById('lbClose');
var lbPrev       = document.getElementById('lbPrev');
var lbNext       = document.getElementById('lbNext');

function openLightbox(idx) {
  currentIdx       = idx;
  var art          = artworks[idx];
  var large        = proxyUrlLarge(art.img);
  var placeholder  = makePlaceholder(art);

  lbImage.src      = large;
  lbImage.alt      = art.title;
  lbImage.onerror  = function() { if (this.src !== placeholder) this.src = placeholder; };

  lbLabel.textContent = 'Work ' + String(idx + 1).padStart(2, '0') + ' of ' + artworks.length;
  lbTitle.textContent = art.title;
  lbMeta.textContent  = art.year + ' · ' + art.location;
  lbDesc.textContent  = art.description;
  lbTech.textContent  = art.medium;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

lbClose.addEventListener('click', closeLightbox);
lbBackdrop.addEventListener('click', closeLightbox);

lbPrev.addEventListener('click', function() {
  openLightbox((currentIdx - 1 + artworks.length) % artworks.length);
});

lbNext.addEventListener('click', function() {
  openLightbox((currentIdx + 1) % artworks.length);
});

document.addEventListener('keydown', function(e) {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  openLightbox((currentIdx - 1 + artworks.length) % artworks.length);
  if (e.key === 'ArrowRight') openLightbox((currentIdx + 1) % artworks.length);
});

/* ─── SCROLL REVEAL ─── */
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      setTimeout(function() { entry.target.classList.add('visible'); }, i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});
