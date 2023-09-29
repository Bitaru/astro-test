import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://bitaru.github.io',
  base: '/astro-test',
	integrations: [
		mdx(),
		sitemap(),
		react()
	],
});
