# Ink Editorial Theme

A minimalist, editorial-style Astro theme for blogs and personal websites.

## Features

- 📝 Clean editorial design with serif typography
- 🌙 Dark mode support with system preference detection
- 🔍 Built-in full-text search (independent page)
- 💬 Comments support (Twikoo, Giscus)
- 📊 Analytics ready (Cloudflare Web Analytics, Umami)
- 🏷️ Tags & Categories with filtering
- 📅 Changelog page with version history
- 🎨 Warm paper-white background (#FAF8F5)
- 🔧 Zero JavaScript frameworks - pure Astro + vanilla JS

## Quick Start

### 1. Install the theme

```bash
npm install ink-editorial-theme
```

### 2. Create your configuration

Copy the example config to your project root:

```bash
cp node_modules/ink-editorial-theme/src/site.config.example.mjs ./site.config.mjs
```

Edit `site.config.mjs` with your information.

### 3. Set up content

Create your blog posts in `src/content/blog/` (MDX format).

### 4. (Optional) Add sample data

If you want the demo pages to work, create these files:

- `src/gear.json` - Your gear/equipment list
- `src/now.json` - "Now" status updates  
- `src/steam_games.json` - Steam game data (for about page)
- `src/friends.json` - Friend links

See the example files in the theme package.

### 5. Run the dev server

```bash
npm run dev
```

## Configuration

Edit `site.config.mjs` to customize:

- `SITE` - Site name, description, URL
- `AUTHOR` - Your name, bio, avatar, social links
- `NAV_LINKS` - Navigation menu items
- `SOCIAL_LINKS` - Social media links
- `FOOTER` - Footer text and theme credit toggle

## Pages Included

- `/` - Homepage with Terminal Hero and latest posts
- `/archive` - Archive page with category/tag filtering
- `/about` - About page with Steam stats and friend links
- `/gear` - Gear/equipment page
- `/search` - Full-text search page
- `/changelog` - Version history page

## Customization

### CSS Variables

Override CSS variables in your custom CSS:

```css
:root {
  --color-primary: #your-color;
  --bg-body: #your-bg;
}
```

### Dark Mode

The theme automatically supports dark mode. Users can toggle via the moon icon.

## License

MIT

