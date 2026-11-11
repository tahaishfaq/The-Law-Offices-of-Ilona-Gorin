// Keep entrance behavior separate from section markup and interaction animations.
const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
const plans = [
  { section: '.hero', items: ['.hero-copy'] },
  { section: '.about', items: ['.about-image', '.about-copy'] },
  { section: '.results', items: ['.result'] },
  { section: '.practice', items: ['.heading', '.area'] },
  { section: '.testimonials', items: ['.heading', '.reviews'] },
  { section: '.contact', items: ['h2', '.panel > p', '.actions'] },
  { section: '.footer', items: ['.footer-grid > *'] },
];

if (motion.matches && 'IntersectionObserver' in window) {
  const running = new Map<HTMLElement, Animation[]>();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const section = entry.target as HTMLElement;
      observer.unobserve(section);
      if (!motion.matches || section.contains(document.activeElement)) continue;
      const plan = plans.find((item) => section.matches(item.section));
      if (!plan) continue;
      const animations: Animation[] = [];
      const options = { duration: 400, easing: 'cubic-bezier(0.2, 0, 0, 1)', fill: 'both' as const };
      animations.push(section.animate([{ opacity: 0 }, { opacity: 1 }], { ...options, duration: 300 }));
      const content = Array.from(section.querySelectorAll<HTMLElement>(plan.items.join(', ')));
      content.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const from = rect.left + rect.width / 2 <= window.innerWidth / 2 ? -20 : 20;
        animations.push(element.animate([
          { opacity: 0, transform: `translateX(${from}px)` },
          { opacity: 1, transform: 'translateX(0)' },
        ], { ...options, delay: 100 + index * 100 }));
      });
      running.set(section, animations);
      // Cancel completed effects so hover transforms remain owned by components.
      Promise.all(animations.map((animation) => animation.finished)).then(() => {
        animations.forEach((animation) => animation.cancel());
        running.delete(section);
      }).catch(() => {});
    }
  }, { threshold: 0.08 });

  for (const plan of plans) {
    const section = document.querySelector<HTMLElement>(plan.section);
    if (!section) continue;
    observer.observe(section);
    section.addEventListener('focusin', () => {
      observer.unobserve(section);
      running.get(section)?.forEach((animation) => animation.cancel());
      running.delete(section);
    });
  }
  motion.addEventListener('change', () => {
    if (motion.matches) return;
    observer.disconnect();
    running.forEach((animations) => animations.forEach((animation) => animation.cancel()));
    running.clear();
  });
}
