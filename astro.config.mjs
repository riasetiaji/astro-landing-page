import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), metaTags(), alpinejs(), react()],
});