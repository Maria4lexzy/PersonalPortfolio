/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, f as renderSlot } from '../astro.713e64d5.mjs';
import { e as $$LayoutTags, I as IconPill } from './AzureProject.md.eb777aea.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'react/jsx-runtime';
/* empty css                                  *//* empty css                                  */
const $$Astro$1 = createAstro("https://maria-louisa.com");
const $$ResumeLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResumeLayout;
  const { pageTitle, seoTitle, seoDescription } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth">
  ${renderComponent($$result, "LayoutTags", $$LayoutTags, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription })}
  ${maybeRenderHead()}<body class="overflow-x-hidden bg-primary/70 text-neutral-700 font-dosis">
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/ResumeLayout.astro", void 0);

const $$Astro = createAstro("https://maria-louisa.com");
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resume;
  const pageTitle = "Maria's Resume";
  const seoTitle = "Maria's Resume";
  const seoDescription = "Check out my experience, skills, education and my favorite things to do in my free tiem";
  return renderTemplate`${renderComponent($$result, "ResumeLayout", $$ResumeLayout, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="container px-20 py-10">
    <div class="header flex p-5 my-4 bg-green-600 justify-between w-full">
      <!-- Name and occupation title -->
      <div class="flex flex-col bg-green-400 p-2">
        <h1 class="text-4xl font-extrabold">Maria Failli</h1>
        <p class="text-base text-neutral-500">Full stack developer</p>
      </div>
      <div class="flex gap-x-4 items-center p-2 bg-green-300">
        <a href="https://www.linkedin.com/in/maria-louisa-failli/" class="cursor-pointer" target="_blank">
          ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/linkedin.svg" })}
        </a>
        <a href="https://github.com/Maria4lexzy" class="cursor-pointer" target="_blank">
          ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/github.svg" })}
        </a>
        <a href="https://maria-louisa.com/" class="cursor-pointer" target="_blank">
          ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/portfolio.svg" })}
        </a>
        <a href="tel:91 15 47 99" target="_self" class="cursor-pointer">
          ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/phone.svg", "description": "Give me a call" })}
        </a>
        <a href="mailto:mariafailli42@gmail.com" target="_self" class="cursor-pointer">
          ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/email.svg", "description": "Send me an email" })}
        </a>
      </div>
      <!-- socials & contact -->
    </div>
    <div class="experience flex p-5 my-4 bg-green-600">
      <!-- left side -->

      <!-- right side -->
    </div>

    <div class="education p-5 my-4 bg-green-600"></div>
    <div class="skills p-5 my-4 bg-green-600"></div>
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/resume.astro", void 0);

const $$file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/resume.astro";
const $$url = "/resume";

export { $$Resume as default, $$file as file, $$url as url };
