import type { ThemeConfig } from '../types/index.d.ts';

export const defaultConfig: ThemeConfig = {
  site: { name: 'My Blog' },
  nav: [
    { text: '首页', href: '/' },
    { text: '归档', href: '/archive' },
    { text: '关于', href: '/about' },
  ],
  footer: {
    showThemeCredit: true,
    themeCreditText: 'Ink Editorial',
  },
  features: {
    darkMode: true,
    backToTop: true,
    search: true,
    comments: { provider: 'none' },
    analytics: { provider: 'none' },
    rss: true,
  },
  index: {
    showPostCount: true,
    postsPerPage: 10,
  },
};
