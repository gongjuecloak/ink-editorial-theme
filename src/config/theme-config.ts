import type { ThemeConfig } from '../types/index.d.ts';

export const defaultConfig: ThemeConfig = {
  site: {
    name: 'My Blog',
  },
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

function deepMerge(target: any, source: any): any {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

// Load user config
async function loadUserConfig(): Promise<Partial<ThemeConfig>> {
  try {
    const config = await import('../site.config.mjs');
    return config.default || {};
  } catch {
    return {};
  }
}

export function getConfig(): ThemeConfig {
  // This will be called at build time
  // For now, use dynamic import pattern
  return defaultConfig;
}

export async function resolveConfig(): Promise<ThemeConfig> {
  const userConfig = await loadUserConfig();
  return deepMerge(defaultConfig, userConfig);
}
