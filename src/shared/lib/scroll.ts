export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const scrollToSection = (section: string) => {
  const el = document.querySelector(`section[data-section="${section}"]`);

  if (!el) return;

  const TOP_MARGIN = 100;

  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - TOP_MARGIN,
    behavior: 'smooth',
  });
};
