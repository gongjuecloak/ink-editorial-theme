import type { ThemeConfig, NavItem, SocialLink, StatItem, GearItem } from './types/index.d.ts';

// Default config for runtime access
const defaultConfig: ThemeConfig = {
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

export function getConfig(): ThemeConfig {
  // Runtime config access
  try {
    // @ts-ignore - dynamic import of user config
    const mod = require('../site.config.mjs');
    return { ...defaultConfig, ...mod.default };
  } catch {
    return defaultConfig;
  }
}

export function getNav(config: ThemeConfig): NavItem[] {
  return config.nav || defaultConfig.nav;
}

export function getSocial(config: ThemeConfig): SocialLink[] {
  return config.social || [];
}

export function getFooterCopyright(config: ThemeConfig): string {
  const year = new Date().getFullYear();
  if (config.footer?.copyright) return config.footer.copyright;
  return `© ${year} ${config.site.name}`;
}

export function shouldShowThemeCredit(config: ThemeConfig): boolean {
  return config.footer?.showThemeCredit !== false;
}

export function getThemeCreditText(config: ThemeConfig): string {
  return config.footer?.themeCreditText || 'Ink Editorial';
}
