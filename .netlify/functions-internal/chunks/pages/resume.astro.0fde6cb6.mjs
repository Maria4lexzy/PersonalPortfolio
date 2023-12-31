/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, f as renderSlot, b as addAttribute } from '../astro.6fa2bed6.mjs';
import { e as $$LayoutTags, I as IconPill } from './AzureProject.md.be108381.mjs';
import { e as experienceData, a as educationData, p as programmingLanguages, d as dataCloudSkills, w as web_MobileSkills } from './index.astro.975283c1.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'react/jsx-runtime';
/* empty css                                  *//* empty css                                  *//* empty css                           */
const $$Astro$2 = createAstro("https://maria-louisa.com");
const $$ResumeLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ResumeLayout;
  const { pageTitle, seoTitle, seoDescription } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth">
  ${renderComponent($$result, "LayoutTags", $$LayoutTags, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription })}
  ${maybeRenderHead()}<body class="overflow-x-hidden bg-primary/20 dark:bg-secondary font-dosis text-neutral-700 dark:text-neutral-300">
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/ResumeLayout.astro", void 0);

const $$Astro$1 = createAstro("https://maria-louisa.com");
const $$SkillBarNoModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SkillBarNoModal;
  const { skillName, progress, iconSrc, backgroundColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="interactable gap-3 w-20 md:w-28 text-slate-700 dark:text-slate-400">
  <div>
    <div class="flex gap-2 mb-1">
      <img${addAttribute(iconSrc, "src")}${addAttribute(skillName, "alt")} class="h-auto w-4">
      <p class="text-xs md:text-sm truncate overflow-hidden ...">
        ${skillName}
      </p>
    </div>
  </div>

  <div class="relative w-full h-2 bg-slate-600 rounded">
    <div${addAttribute(`absolute top-0 left-0 h-full rounded ${backgroundColor ? backgroundColor : "bg-slate-200"}`, "class")}${addAttribute({ width: `${progress}%` }, "style")}>
    </div>
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SkillBarNoModal.astro", void 0);

const $$Astro = createAstro("https://maria-louisa.com");
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resume;
  const pageTitle = "Maria's Resume";
  const seoTitle = "Maria's Resume";
  const seoDescription = "Check out my experience, skills, education and my favorite things to do in my free time";
  const mergedSkills = [
    ...programmingLanguages,
    ...dataCloudSkills,
    ...web_MobileSkills
  ];
  return renderTemplate`${renderComponent($$result, "ResumeLayout", $$ResumeLayout, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="px-5 md:px-10 py-5 mx-auto w-full">
    <div class="header flex flex-col md:flex-row justify-center md:text-left text-center md:justify-between">
      <!-- Name and occupation title -->
      <div class="flex p-2 justify-center flex-col">
        <h1 class="text-xl md:text-4xl font-extrabold">Maria Failli</h1>
        <p class="text-base text-neutral-500">Full stack developer</p>
      </div>
      <div class="flex gap-x-4 md:items-center justify-center p-2">
        <a href="https://www.linkedin.com/in/maria-louisa-failli/" class="cursor-pointer" target="_blank">
          ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/linkedin.svg", "description": "LinkedIn" })}
        </a>
        <a href="https://github.com/Maria4lexzy" class="cursor-pointer" target="_blank">
          ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/github.svg", "description": "GitHub" })}
        </a>
        <a href="https://maria-louisa.com/" class="cursor-pointer" target="_blank">
          ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/portfolio.svg", "description": "Portfolio" })}
        </a>

        <a href="mailto:mariafailli42@gmail.com" target="_self" class="cursor-pointer">
          ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/email.svg", "description": "get in touch" })}
        </a>
      </div>
      <!-- socials & contact -->
    </div>
    <!-- About -->

    <div class="about-me flex flex-col p-2 md:p-3 my-3 mx-auto w-full">
      <!-- Title bar -->
      <div class="flex items-center w-full">
        <div class="mt-1 w-2 h-2 rounded-full bg-gray-600"></div>
        <div class="mt-1 bg-gray-600 dark:bg-gray-600/50 h-px flex-grow"></div>

        <h1 class="mx-4 capitalize text-xl font-semibold">About Me</h1>
        <div class="mt-1 bg-gray-600 dark:bg-gray-600/50 h-px flex-grow"></div>
        <div class="mt-1 w-2 h-2 rounded-full bg-gray-600"></div>
      </div>

      <!-- Content -->
      <div class="flex mt-2 md:mt-5 gap-4">
        <p class="mt-4 text-sm lg:text-base text-justify">
          Hello👋 I'm Maria, a <span class="text-primary-text dark:text-secondary-text">full stack developer</span> with a passion for building <span class="text-primary-text dark:text-secondary-text">well-structured</span>, <span class="text-primary-text dark:text-secondary-text">reusable</span>, and <span class="text-primary-text dark:text-secondary-text">maintainable</span> software solutions. I'm constantly <span class="text-primary-text dark:text-secondary-text">learning</span> and exploring new <span class="text-primary-text dark:text-secondary-text">technologies</span> and <span class="text-primary-text dark:text-secondary-text">trends</span>, and I enjoy taking on new <span class="text-primary-text dark:text-secondary-text">challenges</span>. My journey in technology is driven by <span class="text-primary-text dark:text-secondary-text">curiosity</span> and a desire to make a <span class="text-primary-text dark:text-secondary-text">positive impact</span> through <span class="text-primary-text dark:text-secondary-text">innovation</span>.

          <br>
          <br>In my free time, I enjoy DIY projects , traveling✈️ , sports🏓,
          and trying new foods🍜. I've been to 20 countries and two continents
          so far, and I look forward to exploring more.
        </p>
      </div>
    </div>

    <!-- Skills -->
    <div class="skills flex flex-col p-2 md:p-5 my-4 mx-auto w-full">
      <!-- Title bar -->
      <div class="flex items-center w-full">
        <div class="mt-1 w-2 h-2 rounded-full bg-gray-600"></div>
        <div class="mt-1 bg-gray-600 dark:bg-gray-600/50 h-px flex-grow"></div>
        <h1 class="mx-4 capitalize text-xl font-semibold">Tech Skills</h1>
        <div class="mt-1 bg-gray-600 dark:bg-gray-600/50 h-px flex-grow"></div>
        <div class="mt-1 w-2 h-2 rounded-full bg-gray-600"></div>
      </div>
      <div class="flex flex-wrap gap-y-4 gap-x-6 mt-5 flex-row justify-center md:justify-items-start">
        ${mergedSkills.map((sys, index) => renderTemplate`${renderComponent($$result2, "SkillBarNoModal", $$SkillBarNoModal, { "skillName": sys.name, "progress": sys.progress, "iconSrc": sys.icon, "backgroundColor": sys.backgroundColor })}`)}
      </div>
    </div>
    <!-- Experience Section -->
    <div class="experience flex flex-col p-2 md:p-5 my-4 mx-auto w-full">
      <!-- Title bar -->
      <div class="flex items-center w-full">
        <div class="mt-1 w-2 h-2 rounded-full bg-gray-600"></div>
        <div class="mt-1 bg-gray-600 dark:bg-gray-600/50 h-px flex-grow"></div>
        <h1 class="mx-4 capitalize text-xl font-semibold">Experience</h1>
        <div class="mt-1 bg-gray-600 dark:bg-gray-600/50 h-px flex-grow"></div>
        <div class="mt-1 w-2 h-2 rounded-full bg-gray-600"></div>
      </div>
      ${experienceData.map((job, index) => renderTemplate`<div class="flex flex-col md:flex-row mt-5  text-center  md:text-left gap-4">
            <div class="w-full  md:w-1/4  mx-auto ">
              <h1 class="text-base font-semibold">${job.company}</h1>
              <p class="text-md">${job.role}</p>
              <span class="text-xs text-neutral-500">${job.date} </span>
            </div>
            <div class=" w-full md:w-3/4 ">
              <p class="capitalize text-base font-semibold tracking-wide">
                Responsibilities
              </p>
              <ul class="list-disc ml-2 md:ml-8  text-left leading-tight ">
                ${job.responsibilities.map((responsibility, index2) => renderTemplate`<li class="mb-2">${responsibility}</li>`)}
              </ul>
            </div>
          </div>`)}
    </div>
    <!-- Education Section -->
    <div class="education flex flex-col p-2 md:p-5 my-4 mx-auto w-full">
      <!-- Title bar -->
      <div class="flex items-center w-full">
        <div class="mt-1 w-2 h-2 rounded-full bg-gray-600"></div>
        <div class="mt-1 bg-gray-600 dark:bg-gray-600/50 h-px flex-grow"></div>
        <h1 class="mx-4 capitalize text-xl font-semibold">Education</h1>
        <div class="mt-1 bg-gray-600 dark:bg-gray-600/50 h-px flex-grow"></div>
        <div class="mt-1 w-2 h-2 rounded-full bg-gray-600"></div>
      </div>
      ${educationData.map((edu, index) => renderTemplate`<div class="flex flex-col md:flex-row mt-5 text-center  md:text-left gap-4">
            <div class="w-full  md:w-1/4  mx-auto ">
              <h1 class="capitalize text-base font-semibold">${edu.title}</h1>
              <p class="text-md">${edu.degree}</p>
              <span class="text-xs text-neutral-500">${edu.date} </span>
            </div>
            <div class=" w-full md:w-3/4 ">
              <p class="my-2  text-justify">${edu.description}</p>
              <div>
                <ul class="list-disc ml-2 md:ml-8 text-left leading-tight">
                  ${edu.skills.map((skill, index2) => renderTemplate`<li class="mb-2">${skill}</li>`)}
                </ul>
              </div>
            </div>
          </div>`)}
    </div>
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/resume.astro", void 0);

const $$file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/resume.astro";
const $$url = "/resume";

export { $$Resume as default, $$file as file, $$url as url };
