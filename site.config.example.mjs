/**
 * Ink Editorial Theme Configuration
 * 
 * Copy this file to your project root as `site.config.mjs`
 * and modify it with your own information.
 */

export const SITE = {
  title: 'My Blog',
  description: 'A blog powered by Ink Editorial theme',
  url: 'https://yourdomain.com',
  startYear: 2024,
};

export const AUTHOR = {
  name: 'Your Name',
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

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
  { name: 'Email', url: 'mailto:your@email.com', icon: 'email' },
];

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Your Name`,
  showThemeCredit: true,  // Show "Theme by Ink Editorial"
};

export default {
  SITE,
  AUTHOR,
  NAV_LINKS,
  SOCIAL_LINKS,
  FOOTER,
};
