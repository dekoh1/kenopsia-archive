'use strict';
(() => {
  const DESIGN_WIDTH = 1180;
  const CONTENTS_Y = 2625;
  const isSection = document.body.dataset.page?.startsWith('section') === true;
  let scrollAnimation = 0;
  const scale = () => Math.min(1, document.documentElement.clientWidth / DESIGN_WIDTH);

  function resize() {
    const ratio = scale();
    document.documentElement.style.setProperty('--scale', String(ratio));
    document.documentElement.style.setProperty('--page-width', `${DESIGN_WIDTH * ratio}px`);
  }

  function cancelScroll() {
    cancelAnimationFrame(scrollAnimation);
    scrollAnimation = 0;
  }

  function goTo(y, animate) {
    cancelScroll();
    const destination = Math.max(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight));
    if (!animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, destination);
      return;
    }
    const start = window.scrollY;
    const startedAt = performance.now();
    function frame(now) {
      const progress = Math.min(1, (now - startedAt) / 600);
      const eased = progress < .5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      window.scrollTo(0, start + (destination - start) * eased);
      if (progress < 1) scrollAnimation = requestAnimationFrame(frame);
      else scrollAnimation = 0;
    }
    scrollAnimation = requestAnimationFrame(frame);
  }

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  resize();
  document.getElementById('contents-button').addEventListener('click', () => {
    if (isSection) window.location.assign('index.html#contents');
    else goTo(CONTENTS_Y * scale(), true);
  });
  document.getElementById('home-button').addEventListener('click', () => {
    if (!isSection && window.location.hash) history.replaceState(null, '', window.location.pathname + window.location.search);
    goTo((Number(document.body.dataset.scrollTop) || 0) * scale(), true);
  });
  document.querySelectorAll('[data-href]').forEach(button => {
    button.addEventListener('click', () => window.location.assign(button.dataset.href));
  });
  window.addEventListener('resize', resize, {passive: true});
  window.addEventListener('pageshow', () => {
    goTo(!isSection && window.location.hash === '#contents' ? CONTENTS_Y * scale() : 0, false);
  });
  for (const name of ['touchstart', 'wheel', 'pointerdown']) window.addEventListener(name, cancelScroll, {passive: true});
  window.addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) cancelScroll();
  });
})();
