(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  const revealSelectors = [
    '.hero-copy > *',
    '.portrait-card',
    '.current-kicker',
    '.ifagrithm-card',
    '.trusted',
    '.section-heading > *',
    '.data-summary-grid > *',
    '.screenshot-projects > *',
    '.subsection-heading',
    '.ambassador-grid > *',
    '.campaign-heading',
    '.campaign-strip > *',
    '.community-grid > *',
    '.skills > .section-kicker',
    '.skills > h2',
    '.skill-grid > *',
    '.education > *',
    '.contact > *'
  ];

  const items = [...new Set(
    revealSelectors.flatMap((selector) => [...document.querySelectorAll(selector)])
  )];

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    return;
  }

  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.prepend(progress);

  items.forEach((item) => {
    const siblings = item.parentElement
      ? [...item.parentElement.children].filter((sibling) => items.includes(sibling))
      : [];
    const position = Math.max(0, siblings.indexOf(item));

    item.classList.add('reveal-item');
    item.style.setProperty('--reveal-delay', Math.min(position * 70, 280) + 'ms');
  });

  const motionSurfaces = [
    ...document.querySelectorAll(
      '.linked-card, .community-evidence-card, .portrait-card, .education-card'
    )
  ];

  motionSurfaces.forEach((surface) => surface.classList.add('motion-surface'));
  document.documentElement.classList.add('motion-ready');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -3% 0px',
    threshold: 0.08
  });

  items.forEach((item) => observer.observe(item));

  let ticking = false;
  const updateScrollMotion = () => {
    const scrollRange = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const scrollProgress = Math.min(1, Math.max(0, scrollY / scrollRange));
    progress.style.transform = 'scaleX(' + scrollProgress + ')';

    const portrait = document.querySelector('.portrait');
    if (portrait) {
      portrait.style.setProperty(
        '--portrait-shift',
        Math.min(20, Math.max(0, scrollY * 0.04)) + 'px'
      );
    }

    const ifagrithmImage = document.querySelector('.ifagrithm-visual img');
    if (ifagrithmImage) {
      const rect = ifagrithmImage.getBoundingClientRect();
      const distanceFromCenter = (innerHeight / 2) - (rect.top + rect.height / 2);
      const shift = Math.min(18, Math.max(-18, distanceFromCenter * 0.035));
      ifagrithmImage.style.setProperty('--ifagrithm-shift', shift + 'px');
    }

    ticking = false;
  };

  const requestScrollUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScrollMotion);
  };

  addEventListener('scroll', requestScrollUpdate, { passive: true });
  addEventListener('resize', requestScrollUpdate);
  updateScrollMotion();

  if (finePointer.matches) {
    motionSurfaces.forEach((surface) => {
      surface.addEventListener('pointermove', (event) => {
        const rect = surface.getBoundingClientRect();
        const horizontal = (event.clientX - rect.left) / rect.width - 0.5;
        const vertical = (event.clientY - rect.top) / rect.height - 0.5;

        surface.style.setProperty('--tilt-y', (horizontal * 5).toFixed(2) + 'deg');
        surface.style.setProperty('--tilt-x', (-vertical * 5).toFixed(2) + 'deg');
      });

      surface.addEventListener('pointerleave', () => {
        surface.style.setProperty('--tilt-x', '0deg');
        surface.style.setProperty('--tilt-y', '0deg');
      });
    });
  }
})();
