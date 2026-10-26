(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  const progress = document.getElementById('progress');
  const counter = document.getElementById('counter');
  const footerTitle = document.getElementById('footerTitle');
  const outline = document.getElementById('outline');
  const outlineItems = document.getElementById('outlineItems');
  const toast = document.getElementById('toast');
  let current = 0;
  let toastTimer;

  slides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.className = 'outline-item';
    button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>${slide.dataset.title || `Slide ${index + 1}`}`;
    button.addEventListener('click', () => { goTo(index); closeOutline(); });
    outlineItems.appendChild(button);
  });

  function goTo(index) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });
    [...outlineItems.children].forEach((item, i) => {
      item.classList.toggle('selected', i === current);
      if (i === current) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
    });
    const label = slides[current].dataset.title || `Slide ${current + 1}`;
    footerTitle.textContent = label.toUpperCase();
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    document.title = `${label} · IoT-Based Crayfish Monitoring and Growing System`;
    slides[current].scrollTop = 0;
  }
  function closeOutline() {
    outline.classList.remove('open');
    outline.setAttribute('aria-hidden', 'true');
  }
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1700);
  }
  prev.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));
  document.querySelectorAll('.next-btn').forEach(button => button.addEventListener('click', () => goTo(current + 1)));
  document.getElementById('outlineBtn').addEventListener('click', () => {
    outline.classList.add('open'); outline.setAttribute('aria-hidden', 'false');
  });
  document.getElementById('closeOutline').addEventListener('click', closeOutline);
  document.getElementById('fullscreenBtn').addEventListener('click', async () => {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
      else await document.exitFullscreen();
    } catch { showToast('Fullscreen is not available in this browser.'); }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeOutline(); return; }
    if (outline.classList.contains('open') || lb.classList.contains('open')) return;
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
      event.preventDefault(); goTo(current + 1);
    } else if (['ArrowLeft', 'PageUp'].includes(event.key)) {
      event.preventDefault(); goTo(current - 1);
    } else if (event.key === 'Home') goTo(0);
    else if (event.key === 'End') goTo(slides.length - 1);
  });
  let touchStartX = null;
  document.getElementById('deck').addEventListener('touchstart', event => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });
  document.getElementById('deck').addEventListener('touchend', event => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 65) goTo(current + (delta < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('img');
  document.querySelectorAll('.fig[data-zoom]').forEach(fig => fig.addEventListener('click', () => {
    lbImg.src = fig.querySelector('img').src; lbImg.alt = fig.querySelector('img').alt;
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
  }));
  const closeLb = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); };
  lb.addEventListener('click', closeLb);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
  goTo(0);
})();