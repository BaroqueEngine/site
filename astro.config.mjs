// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://baroqueengine.net',
  base: '/',
	integrations: [
		starlight({
			title: 'BAROQUE ENGINE',
			pagination: false,
		}),
	],
});
