import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";



import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  site: 'https://maria-louisa.com',
  integrations: [tailwind(), react(), compress(), sitemap({
    filter: page => page !== 'https://maria-louisa.com'
  }), analogjsangular()],
  output: "server",
  adapter: netlify()
});