// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';


export default defineConfig({
  compressHTML: true,
  site: 'https://blog.lzplus.top',
  integrations: [mdx(), sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [
      { protocol: "https", hostname: "steamcdn-a.akamaihd.net" },
      { protocol: "https", hostname: "cdn.akamai.steamstatic.com" },
      { protocol: "https", hostname: "shared.fastly.steamstatic.com" },
      { protocol: "http" },
      { protocol: "https" },
    ]
  },
  markdown: {
    shikiConfig: {
      theme: 'gruvbox-dark-soft'
    }
  }
});