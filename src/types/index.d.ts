export interface NavItem {
  text: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface GearItem {
  name: string;
  description?: string;
  category?: string;
  image?: string;
  link?: string;
}

export interface CommentsConfig {
  provider: 'twikoo' | 'giscus' | 'none';
  envId?: string;
  repo?: string;
  repoId?: string;
  categoryId?: string;
}

export interface AnalyticsConfig {
  provider: 'cloudflare' | 'umami' | 'none';
  siteId?: string;
}

export interface ThemeConfig {
  site: {
    name: string;
    description?: string;
    author?: string;
    avatar?: string;
    location?: string;
    bio?: string;
  };
  nav: NavItem[];
  social?: SocialLink[];
  about?: {
    title?: string;
    content?: string;
    stats?: StatItem[];
  };
  gear?: GearItem[];
  footer?: {
    copyright?: string;
    showThemeCredit?: boolean;
    themeCreditText?: string;
    showBuildTime?: boolean;
  };
  features?: {
    darkMode?: boolean;
    backToTop?: boolean;
    search?: boolean;
    comments?: CommentsConfig;
    analytics?: AnalyticsConfig;
    rss?: boolean;
  };
  index?: {
    heroTitle?: string;
    heroSubtitle?: string;
    showPostCount?: boolean;
    postsPerPage?: number;
  };
  advanced?: {
    customCSS?: string;
    customFonts?: Array<{ name: string; url: string }>;
  };
}
