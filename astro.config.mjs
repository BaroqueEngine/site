// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightKatex } from 'starlight-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://baroqueengine.net',
  base: '/',
	integrations: [
		starlight({
			title: 'BAROQUE ENGINE',
			pagination: false,
			defaultLocale: "ja",
      locales: {
        root: {
          label: 'Japan',
          lang: 'ja',
        },
      },
      plugins: [
        starlightKatex(),
      ],
		}),
	],
});
