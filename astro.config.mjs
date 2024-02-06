import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://reliable-cassata-d79c7f.netlify.app',
  integrations: [preact()]
});