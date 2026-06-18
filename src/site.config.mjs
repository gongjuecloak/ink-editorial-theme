/**
 * Ink Editorial Theme - Default Configuration
 * Users should override these values in their own site.config.mjs
 */

export const SITE = {
  title: 'My Blog',
  description: 'A blog powered by Ink Editorial theme',
  url: 'https://example.com',
  startYear: new Date().getFullYear(),
};

export const AUTHOR = {
  name: 'Author',
  email: 'your@email.com',
  bio: 'Brief introduction about yourself',
  motto: 'Your motto or tagline',
  location: 'Your City',
  avatar: '/images/avatar.jpg',
};

export const NAV_LINKS = [
  { name: '首页', path: '/' },
  { name: '归档', path: '/archive' },
  { name: '关于', path: '/about' },
];

export const SOCIAL_LINKS = [];

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} My Blog`,
  showThemeCredit: true,
};

