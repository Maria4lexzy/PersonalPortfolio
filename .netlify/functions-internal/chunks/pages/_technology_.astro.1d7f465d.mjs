/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.6fa2bed6.mjs';
import { $ as $$BaseLayout } from './_tag_.astro.404b13ca.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                               */
const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths() {
  const allProjects = await Astro.glob(/* #__PURE__ */ Object.assign({"../projects/project-1.md": () => import('./project-1.md.9132c257.mjs')}), () => "../projects/*.md");
  const uniqueTechs = [
    ...new Set(
      allProjects.map((project) => project.frontmatter.technologies).flat()
    )
  ];
  return uniqueTechs.map((technology) => {
    const filteredProjects = allProjects.filter(
      (project) => project.frontmatter.technologies.includes(technology)
    );
    return {
      params: { technology },
      props: { projects: filteredProjects }
    };
  });
}
const $$technology = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$technology;
  const { technology } = Astro2.params;
  const { projects } = Astro2.props;
  const pageTitle = "About";
  const seoTitle = "Mulrem  About";
  const seoDescription = "About me";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<p>Posts tagged with ${technology}</p>
  <ul>
    ${renderTemplate`<p>${projects} kdkk</p>`}
  </ul>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/technologies/[technology].astro", void 0);

const $$file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/technologies/[technology].astro";
const $$url = "/technologies/[technology]";

export { $$technology as default, $$file as file, getStaticPaths, $$url as url };
