// Ink Editorial Theme - Astro Integration
export default function inkEditorial(config = {}) {
  return {
    name: 'ink-editorial',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          vite: {
            define: {
              'THEME_CONFIG': JSON.stringify(config)
            }
          }
        });
      }
    }
  };
}

// Export for direct use
export * from './src/components';
export * from './src/layouts';
