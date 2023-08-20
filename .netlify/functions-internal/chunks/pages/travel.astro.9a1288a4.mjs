/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.6fa2bed6.mjs';
import { a as $$Subtitle } from './index.astro.df9a12de.mjs';
import { $ as $$BaseLayout } from './_tag_.astro.a8fff8ab.mjs';
/* empty css                            */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'react/jsx-runtime';
/* empty css                           *//* empty css                               */
const $$Astro = createAstro("https://maria-louisa.com/");
const $$Travel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Travel;
  const pageTitle = "Travels";
  const seoTitle = "Maria's travels";
  const seoDescription = "Discover a world of ...";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription, "class": "astro-WHIPUGJR" }, { "default": ($$result2) => renderTemplate`
  
  ${renderComponent($$result2, "Subtitle", $$Subtitle, { "subTitle": "coming soon", "class": "astro-WHIPUGJR" })}
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/travel.astro", void 0);

const $$file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/travel.astro";
const $$url = "/travel";

export { $$Travel as default, $$file as file, $$url as url };
