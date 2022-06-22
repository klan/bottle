import isClient from 'helpers/isClient';

const isMobile = (): boolean => {
  if (!isClient) return false;

  return window.matchMedia(`(max-width: 780px)`).matches;
};

const isDesktop = (): boolean => {
  if (!isClient) return false;

  return window.matchMedia(`(min-width: 1200px)`).matches;
};

export default { isMobile, isDesktop };
