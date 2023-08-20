/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent, _ as __astro_tag_component__, F as Fragment$1 } from '../astro.6fa2bed6.mjs';
import { a as $$LinkCode, $ as $$BaseLayout } from './_tag_.astro.404b13ca.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
/* empty css                           */
const $$Astro$f = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Title;
  const { title } = Astro2.props;
  return renderTemplate`<!-- <div class='flex flex-row items-center'> -->${maybeRenderHead()}<h1 class="capitalize text-sm md:text-xl font-extrabold text-myTextBlue font-sourceCode">
  ${`{ ${title} }`}
</h1>
<!-- <div class='bg-gray-200 dark:bg-gray-600 h-px w-full'></div> -->
<!-- </div> -->`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Typography/Title.astro", void 0);

const $$Astro$e = createAstro();
const $$CardLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$CardLayout;
  const { classStyle, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(` ${classStyle} section my-4 backdrop-filter backdrop-blur-lg
   bg-primary-light dark:bg-secondary/95 w-11/12 md:w-3/4  mx-auto p-8 
   rounded-xl shadow-xl lg:space-y-8`, "class")}>
  ${renderSlot($$result, $$slots["default"])}
</section>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/CardLayout.astro", void 0);

const $$Astro$d = createAstro();
const $$AboutSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$AboutSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "about", "classStyle": "flex flex-col md:flex-row md:gap-8 content-center" }, { "default": ($$result2) => renderTemplate`
  

  ${maybeRenderHead()}<div class="mx-auto md:flex md:flex-col md:justify-center md:space-y-4">
    <img src="/images/profile.jpeg" alt="Maria Failli" decoding="async" loading="lazy" class="rounded-lg h-24 max-w-none md:h-52 md:w-52 sm:h-36 sm:w-36 w-24">
    <!-- <a
      href='/cv.pdf'
      class='font-medium items-center active:translate-y-px cursor-pointer h-10 inline-flex px-4 rounded-md select-none text-base'
      >Download CV</a
    > -->
  </div>
  
  <div class="mx-auto md:flex md:flex-col md:py-2 text-center md:text-left">
    <!-- <div class='bg-green-400 md:flex md:flex-col md:justify-between md:py-2'> -->
    <div class="mt-4 md:mt-0 md:gap-y-2">
      ${renderComponent($$result2, "Title", $$Title, { "title": "Maria Louisa Failli" })}

      <h3 class="text-base md:text-md font-medium text-neutral-500 mb-4 md:mb-2">
        Frontend Developer
      </h3>
      <div class="flex flex-col lg:flex-row nowrap gap-x-4 gap-y-1 md:gap-x-8">
        <div class="flex flex-row gap-1 justify-center md:justify-normal">
          <svg <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9c-.98.49-1.87 1.12-2.66 1.85c-.18.18-.43.28-.7.28c-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71c0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29c-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.85a.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"></path></svg>

          ${renderComponent($$result2, "LinkCode", $$LinkCode, { "url": "mailto:mariafailli42@gmail.com", "classItems": "text-sm font-normal leading-relaxed sm:text-base ", "urlTarget": "_self", "content": "mariafailli42@gmail.com" })}
        </div>
        <div class="flex flex-row gap-1 justify-center md:justify-normal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"></path></svg>
          ${renderComponent($$result2, "LinkCode", $$LinkCode, { "url": "tel:91 15 47 99", "classItems": "text-sm font-normal leading-relaxed sm:text-base ", "urlTarget": "_self", "content": "+45 91 15 47 99" })}
        </div>
      </div>
    </div>
    <p class="mt-4 text-sm lg:text-base text-justify">
      Greetings Observer👋, I'm Maria. I like developing, <span class="text-myTextBlue">well-structured</span>, <span class="text-myTextBlue">reusable</span>, and <span class="text-myTextBlue">maintainable</span> software solutions. What I enjoy about the software world is the constant
      evolution of technologies and tools, always offering new opportunities to learn
      and create more efficient solutions. My journey in technology is driven by
      <span class="text-myTextBlue">curiosity</span> and desire to make a positive
      impact through
      <span class="text-myTextBlue">innovation</span>. In my free time, you'll
      find me immersed in DIY projects, from tinkering with electronics to
      crocheting🧶 or hiking🌄. I also love traveling✈️ and trying new food🍜.
      So far, I've been to <span class="text-myTextBlue">15 countries</span> and
      two continents, and I look forward to exploring more places.
    </p>
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/AboutSection.astro", void 0);

const $$Astro$c = createAstro();
const $$Subtitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Subtitle;
  const { subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-2 items-center">
  <p class="my-2 capitalize font-medium text-gray-700 dark:text-gray-300 text-lg">
    ${subTitle}
  </p>
  <div class="bg-gray-200 dark:bg-gray-600/50 h-px grow"></div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Typography/Subtitle.astro", void 0);

const dataCloudSkills = [
  {
    name: "MySQL",
    progress: 76,
    icon: "/images/mysql.svg",
    url: "https://en.wikipedia.org/wiki/MySQL",
    backgroundColor: "bg-blue-500"
  },
  {
    name: "MongoDB",
    progress: 65,
    icon: "/images/mongodb.svg",
    url: "https://en.wikipedia.org/wiki/MongoDB",
    backgroundColor: "bg-green-500"
  },
  // {
  //   name: 'PostgreSQL',
  //   progress: 75,
  //   icon: '/images/postgresql.svg',
  //   url: 'https://www.postgresql.org/',
  //   backgroundColor: 'bg-purple-500',
  // },
  {
    name: "Firebase",
    progress: 80,
    icon: "/images/firebase.svg",
    url: "https://firebase.google.com/",
    backgroundColor: "bg-yellow-500"
  },
  {
    name: "Google Cloud",
    progress: 60,
    icon: "/images/gcp-light.svg",
    url: "https://cloud.google.com/",
    backgroundColor: "bg-yellow-300"
  },
  {
    name: "Microsoft Azure",
    progress: 40,
    icon: "/images/azure.svg",
    url: "https://en.wikipedia.org/wiki/Microsoft_Azure",
    backgroundColor: "bg-sky-600"
  },
  // {
  //   name: 'Terraform',
  //   progress: 60,
  //   icon: '/images/terraform.svg',
  //   url: 'https://www.terraform.io/',
  //   backgroundColor: 'bg-purple-600',
  // },
  {
    name: "Docker",
    progress: 30,
    icon: "/images/docker.svg",
    url: "https://en.wikipedia.org/wiki/Docker_(software)",
    backgroundColor: "bg-sky-500"
  },
  {
    name: "Kubernetes",
    progress: 40,
    icon: "/images/kubernetes.svg",
    url: "https://kubernetes.io/",
    backgroundColor: "bg-blue-600"
  }
  // Add more database management systems here
];

const $$Astro$b = createAstro();
const $$DatabaseCloudSkills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$DatabaseCloudSkills;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": "Database & Cloud" })}
  <div class="flex flex-wrap gap-8 flex-row justify-between">
    ${dataCloudSkills.map((sys, index) => renderTemplate`${renderComponent($$result, "SkillBar", null, { "client:only": "react", "id": sys + "" + index, "skillName": sys.name, "progress": sys.progress, "skillUrl": sys.url, "iconSrc": sys.icon, "backgroundColor": sys.backgroundColor, "client:component-hydration": "only", "client:component-path": "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SkillBar", "client:component-export": "default" })}`)}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/Database_CloudSkills.astro", void 0);

const programmingLanguages = [
  {
    name: "JavaScript",
    progress: 75,
    url: "https://en.wikipedia.org/wiki/JavaScript",
    icon: "/images/javascript.svg",
    backgroundColor: "bg-yellow-400"
  },
  {
    name: "HTML5",
    progress: 80,
    url: "https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard.",
    icon: "/images/html.svg",
    backgroundColor: "bg-red-500"
  },
  {
    name: "CSS3",
    progress: 75,
    url: "https://sk.wikipedia.org/wiki/CSS3",
    icon: "/images/css.svg",
    backgroundColor: "bg-blue-500"
  },
  {
    name: "Java",
    progress: 50,
    url: "https://en.wikipedia.org/wiki/Java_(programming_language)",
    icon: "/images/java.svg",
    backgroundColor: "bg-blue-700"
  },
  {
    name: "C#",
    progress: 40,
    url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)#:~:text=C%23%20(pronounced%20See%20sharp)%20is,C%23",
    icon: "/images/csharp.svg",
    backgroundColor: "bg-green-600"
  },
  // {
  //   name: 'R',
  //   progress: 20,
  //   url: 'https://www.r-project.org/',
  //   icon: '/images/r.svg',
  //   backgroundColor: 'bg-blue-900',
  // },
  {
    name: "Python",
    progress: 40,
    url: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    icon: "/images/python.svg",
    backgroundColor: "bg-blue-500"
  }
];

const $$Astro$a = createAstro();
const $$ProgLang = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ProgLang;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": "Programming Languages" })}

  <div class="flex flex-wrap gap-8 flex-row justify-between">
    ${programmingLanguages.map((language, index) => renderTemplate`${renderComponent($$result, "SkillBar", null, { "client:only": "react", "id": language + "" + index, "skillName": language.name, "progress": language.progress, "skillUrl": language.url, "iconSrc": language.icon, "backgroundColor": language.backgroundColor, "client:component-hydration": "only", "client:component-path": "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SkillBar", "client:component-export": "default" })}`)}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/ProgLang.astro", void 0);

const web_MobileSkills = [
  {
    name: "ReactJs",
    progress: 80,
    icon: "/images/react.svg",
    url: "https://reactjs.org/",
    backgroundColor: "bg-blue-500"
  },
  {
    name: "React Native",
    progress: 75,
    icon: "/images/react-native.svg",
    url: "https://en.wikipedia.org/wiki/React_Native",
    backgroundColor: "bg-blue-600"
  },
  {
    name: "Astro",
    progress: 90,
    icon: "/images/astro.svg",
    url: "https://astro.build/",
    backgroundColor: "bg-orange-700"
  },
  {
    name: "TypeScript",
    progress: 65,
    icon: "/images/typescript.svg",
    url: "https://www.typescriptlang.org/",
    backgroundColor: "bg-blue-700"
  },
  {
    name: "Tailwind",
    progress: 70,
    url: "https://tailwindcss.com/",
    icon: "/images/tailwind.svg",
    backgroundColor: "bg-sky-400"
  },
  // {
  //   name: 'Sass',
  //   progress: 65,
  //   icon: '/images/sass.svg',
  //   url: 'https://sass-lang.com/',
  //   backgroundColor: 'bg-pink-500',
  // },
  {
    name: "ASP.NET ",
    progress: 65,
    icon: "/images/asp.svg",
    url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    backgroundColor: "bg-purple-500"
  },
  {
    name: "Node.js",
    progress: 65,
    icon: "/images/nodejs.svg",
    url: "https://en.wikipedia.org/wiki/Node.js/",
    backgroundColor: "bg-green-500"
  }
  // ... (other backend skills)
];

const $$Astro$9 = createAstro();
const $$WebDev = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$WebDev;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": "Web & Mobile development" })}

  <div class="flex flex-wrap gap-8 flex-row justify-between">
    ${web_MobileSkills.map((sys, index) => renderTemplate`${renderComponent($$result, "SkillBar", null, { "client:only": "react", "id": sys + "" + index, "skillName": sys.name, "progress": sys.progress, "skillUrl": sys.url, "iconSrc": sys.icon, "backgroundColor": sys.backgroundColor, "client:component-hydration": "only", "client:component-path": "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SkillBar", "client:component-export": "default" })}`)}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/WebDev.astro", void 0);

const sWConcpetSkills = [
  {
    description: "Scrum Agile",
    icon: "/images/agile.svg"
  },
  {
    description: "Micro Services",
    icon: "/images/microservices.svg"
  },
  {
    description: "OOP",
    icon: "/images/oop.svg"
  },
  {
    description: "CI/CD",
    icon: "/images/cicd.svg"
  }
];

const $$Astro$8 = createAstro();
const $$SWConcepts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SWConcepts;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": "Software Concepts & Approaches" })}

  <div class="flex flex-wrap gap-8 flex-row justify-evenly">
    ${sWConcpetSkills.map((skill) => renderTemplate`${renderComponent($$result, "Pill", null, { "client:only": "react", "iconSrc": skill.icon, "description": skill.description, "client:component-hydration": "only", "client:component-path": "@components/DomElements/Pill", "client:component-export": "default" })}`)}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SWConcepts.astro", void 0);

const $$Astro$7 = createAstro();
const $$SkillsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SkillsSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "skills", "classStyle": "" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Title", $$Title, { "title": "skills" })}
  ${maybeRenderHead()}<div class="flex flex-col gap-8">
    ${renderComponent($$result2, "WebDev", $$WebDev, {})}
    ${renderComponent($$result2, "ProgLang", $$ProgLang, {})}
    ${renderComponent($$result2, "DatabaseManagement", $$DatabaseCloudSkills, {})}
    ${renderComponent($$result2, "SWConcepts", $$SWConcepts, {})}
  </div>
  
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/SkillsSection.astro", void 0);

const Pill = ({
  iconSrc,
  description
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "flex items-center bg-violet-500/20 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-1.5 md:px-2.5 text-gray-700 text-ellipsis ...  w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 cursor-pointer",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex gap-2",
      children: [/* @__PURE__ */ jsx("img", {
        src: iconSrc,
        alt: description
      }), description ? /* @__PURE__ */ jsx("p", {
        className: "capitalize text-xs md:text-base truncate",
        children: description
      }) : /* @__PURE__ */ jsx(Fragment, {})]
    })
  });
};
__astro_tag_component__(Pill, "@astrojs/react");

const $$Astro$6 = createAstro();
const $$Languages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Languages;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": " Languages I Speak" })}

  <div class="flex flex-wrap gap-8 flex-row justify-center md:justify-evenly">
    ${renderComponent($$result, "Pill", Pill, { "iconSrc": "/images/gb-ukm.svg", "description": "English - Fluent/Native" })}
    ${renderComponent($$result, "Pill", Pill, { "iconSrc": "/images/italianflag.svg", "description": "Italian - Fluent" })}
    ${renderComponent($$result, "Pill", Pill, { "iconSrc": "/images/danish.svg", "description": "Danish - A2" })}
    ${renderComponent($$result, "Pill", Pill, { "iconSrc": "/images/czech.svg", "description": "Czech A1" })}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Languages/Languages.astro", void 0);

const $$Astro$5 = createAstro();
const $$LanguageSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LanguageSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "languages", "classStyles": "" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Title", $$Title, { "title": "languages" })}

  ${maybeRenderHead()}<div class="flex flex-col gap-8">
    ${renderComponent($$result2, "Languages", $$Languages, {})}
  </div>
  
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/LanguageSection.astro", void 0);

const PlainPill = ({
  id,
  description
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "flex items-center bg-violet-500/20  rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 cursor-pointer",
    children: /* @__PURE__ */ jsx("p", {
      className: "capitalize text-xs ",
      children: description
    })
  }, id);
};
__astro_tag_component__(PlainPill, "@astrojs/react");

const viaCourseList = [
  { courseName: "Semester Project: Single User System" },
  { courseName: "Discrete Mathematics and Algorithms" },
  { courseName: "SW Development with UML and Java" },
  { courseName: "Web Development" },
  { courseName: "Database Systems" },
  { courseName: "SW Engineering" },
  { courseName: "Semester Project: Client/Server System" },
  { courseName: "Database Systems" },
  { courseName: "Network and Security" },
  { courseName: "Computer Architecture and Organization" },
  { courseName: "Semester project: Heterogeneous Systems" },
  { courseName: ".NET Programming" },
  { courseName: "Algorithms and Data Structures" },
  { courseName: "DevOps & Cloud" },
  { courseName: "Embedded SW" },
  { courseName: "Semester Project: Internet of Things" },
  { courseName: "Engineering Internship" },
  { courseName: "Applied Linear Algebra" },
  { courseName: "No-SQL versus relational databases" },
  { courseName: "IT Security and Cryptography in Practice" },
  { courseName: "Programming Concepts and Languages" },
  { courseName: "Digital Multi Media" },
  { courseName: "Digital Signal Processing" }
];

const sduCourseList = [
  { courseName: "Big Data and Data Science Technologies" },
  { courseName: "Blockchain Theory and Usage" },
  { courseName: "Cloud Computing and Edge-Cloud Adaptive Architectures" },
  { courseName: "Data Security" },
  { courseName: "Innovative SW Solutions" },
  { courseName: "Linux for Embedded Objects" },
  { courseName: "Model-Driven SW Development" },
  { courseName: "Scientific Methods" },
  { courseName: "Security in Computer Systems" },
  { courseName: "SW Engineering of Mobile and Ubiquitous Systems" },
  { courseName: "SW System Analysis and Verification" },
  { courseName: "SW Technology for IoT" },
  { courseName: "SW Architecture" },
  { courseName: "Statistics and Machine Learning" },
  { courseName: "Systems Modeling and Simulation" }
];

const $$Astro$4 = createAstro();
const $$EducationSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$EducationSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "education", "classStyle": "flex flex-col md:flex-row md:gap-4 " }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="flex flex-col gap-4">
    ${renderComponent($$result2, "Title", $$Title, { "title": "education" })}
    <div class="flex flex-row gap-8">
      <div class="hidden md:block">
        <img src="/images/companies/SDU_B.jpg" alt="Maria Failli" decoding="async" loading="lazy" class="rounded-lg w-16 md:w-28 h-auto">
        <!-- <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 742.58 197.82'
          ><title>sdu</title><path
            d='M0,172.64l23.34-22.45c8.39,8.33,18.13,14.75,30,17.14,8.28,1.67,16.57,2,24.24-2.54,12.53-7.37,14-23.53,2.75-32.7a66.61,66.61,0,0,0-14.15-8.22c-9-4.19-18.42-7.61-27.42-11.85-12.19-5.75-22.55-13.57-27-27.15C4,61,16.39,36.37,41.57,27.39,67,18.32,90.94,22.6,113.1,37.7a5.79,5.79,0,0,1,1.06,1c.1.11.1.31.25.78-5.31,7.57-10.73,15.32-16.52,23.57a47.39,47.39,0,0,0-24.2-10.72c-8.49-1.1-16.64,0-23.94,4.72-9.53,6.17-10.18,18.7-.72,25,6.7,4.45,14.43,7.36,21.74,10.88,9,4.31,18.32,7.92,26.87,12.92,31.26,18.29,30.18,62.2.81,81.17-22.3,14.4-45.72,13.31-69,3.1-9.61-4.21-18.23-10.66-27.58-16.26'
          ></path><path
            d='M148.82,195.68V26.18c.54-.33.83-.66,1.1-.66,24.61.47,49.47-1.06,73.77,1.91,39.85,4.88,63.84,32.2,69.11,70.79,3.44,25.28-2.62,48.2-18.61,68.12-13.07,16.28-30.95,25.19-51.16,26.95C198.57,195.42,173.9,195,148.82,195.68Zm32.51-30.15c11,0,21.8.32,32.54-.15a45.26,45.26,0,0,0,14-3.2c35.6-13.71,44.93-65.44,17-93.15-11.3-11.2-25.43-14.42-40.62-14.69-7.59-.13-15.18,0-22.86,0Z'
          ></path><path
            d='M320.84,25.64h32.23c0,13.12,0,25.92,0,38.72,0,20.83-.12,41.66,0,62.49.13,21.9,10.74,36.27,30.49,40.44,22.55,4.76,49-5.84,49.38-38.5.41-32.32.09-64.65.09-97v-6h32.54c.09,1.33.25,2.62.25,3.91,0,32,.15,64-.05,96-.11,18.43-4.53,35.62-17.12,49.78-10.86,12.23-24.94,18.58-40.86,20.89-18.15,2.64-35.86,1.18-52.45-7.35-19.22-9.88-29.52-26.29-33.21-47.09a111.09,111.09,0,0,1-1.52-18.86c-.14-31.32-.06-62.65-.05-94C320.56,28.14,320.71,27.16,320.84,25.64Z'
          ></path><path
            d='M501.7,133.57c-2.24-3.1-4.25-5.92-6.46-9,12.22-9.24,25.44-16,39.24-21.85,26.53-11.14,54.11-17,82.95-16.6,4.15.06,8.3.85,12.44.78a6.08,6.08,0,0,0,4.53-2.43c6.16-10.94,15.85-15.65,27.9-16.45,26.15-1.72,46.12,10.48,63.1,28.7,6.26,6.72,11.48,14.42,17.18,21.66l-.91,1.67c-13.06,2-26.07,4.61-39.2,5.7-11.71,1-23.7,1.36-35.32,0-16.47-2-28.71-10.71-34.12-27.34a5.46,5.46,0,0,0-3.49-3.19c-15.26-2.27-30.46-1.51-46.08,1.65C596.21,102,599.83,112.92,602,125c1.29-.36,2.18-.64,3.09-.86,15.65-3.81,26.92,2.13,31.68,17.71,5.21,17,2.06,33-9.1,46.9-7.58,9.45-16.18,10.75-27.15,5.78a9.62,9.62,0,0,0-7.23.12c-8.91,4.31-15.8,3.75-23.53-2.59-13.74-11.28-19.74-36.8-12.48-53.09,5.62-12.64,17.37-18.54,31.1-15.63.78.16,1.55.34,2.37.52.5-10.91-8.56-20.29-19.59-21-10.35-.69-19.65,2.82-28.86,6.63a153.86,153.86,0,0,0-38.11,22.45A28.09,28.09,0,0,1,501.7,133.57Z'
          ></path><path
            d='M575.61,76.19c.78-17.78,9-30.73,20.51-41.88,17.19-16.64,38.5-25.65,61.07-32.15,3-.86,6.1-1.46,9.16-2.15.26-.06.58.16,1.52.45C655,11.05,648.39,25.81,640.13,39.35,627.56,60,608.69,70.67,585.5,74.79,582.47,75.33,579.4,75.66,575.61,76.19Z'
          ></path><path
            d='M181.33,165.53V54.32c7.68,0,15.27-.11,22.86,0,15.19.27,29.32,3.49,40.62,14.69,28,27.71,18.63,79.44-17,93.15a45.26,45.26,0,0,1-14,3.2C203.13,165.85,192.36,165.53,181.33,165.53Z'
            fill='currentColor'></path></svg
        > -->
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="capitalize text-lg font-semibold">
          University of Southern Denmark
        </h1>
        <p class="text-md">MSc Software Engineering</p>
        <span class="text-xs text-neutral-500">February 2018 - July 2021</span>
      </div>
    </div>
    <div>
      <p class="mb-2 text-justify">
        My education at SDU, has provided me with a comprehensive understanding
        of software engineering, allowing me to independently take
        responsibility for the entire software development lifecycle, from
        identifying needs and analyzing requirements to software design,
        programming, testing, and project management.
      </p>

      <div class="flex flex-col">
        <details class="open:transition delay-150" !open>
          <summary class="my-2 capitalize font-medium text-gray-700 dark:text-gray-300 text-lg cursor-pointer">
            Courses
          </summary>

          <div class="flex flex-wrap gap-4 justify-stretch">
            ${sduCourseList.map((course, index) => renderTemplate`${renderComponent($$result2, "PlainPill", PlainPill, { "id": index, "description": course.courseName })}`)}
          </div>
        </details>
      </div>
    </div>

    <div class="bg-gray-200 dark:bg-gray-600/50 h-px w-full my-4"></div>
    <!-- via university -->

    <div class="flex flex-row gap-8">
      <div class="hidden md:block">
        <img src="/images/companies/VIA.png" alt="VIA University College" decoding="async" loading="lazy" class="rounded-lg w-16 md:w-28 h-auto">
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="capitalize text-lg font-semibold">
          BEng Software Technology Engineering
        </h1>
        <p class="text-md">VIA University College</p>
        <span class="text-xs text-neutral-500">September 2021 - July 2023</span>
      </div>
    </div>
    <div>
      <p class="mb-2 text-justify">
        My education at VIA has equipped me with a strong foundation in software
        engineering, and a broad understanding of industry dynamics.
        Additionally, it has nurtured my passion for technology and prepared me
        to thrive in the fast-paced and ever-evolving software industry, and
        allowed me to gain a solid foundation in software engineering principles
        and practices.
      </p>

      <div class="flex flex-col">
        <details class="open:transition delay-150" !open>
          <summary class="my-2 capitalize font-medium text-gray-700 dark:text-gray-300 text-lg cursor-pointer">
            Courses
          </summary>

          <div class="flex flex-wrap gap-4 justify-stretch">
            ${viaCourseList.map((course, index) => renderTemplate`${renderComponent($$result2, "PlainPill", PlainPill, { "id": index, "description": course.courseName })}`)}
          </div>
        </details>
      </div>
    </div>
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/EducationSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$ExperienceSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ExperienceSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "exp", "classStyle": "flex flex-col md:flex-row md:gap-4" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="flex flex-col gap-4">
    ${renderComponent($$result2, "Title", $$Title, { "title": "Experience" })}

    <!-- Experience 1 -->
    <div class="flex flex-row gap-8">
      <div class="hidden md:block">
        <img src="/images/companies/startupCentral.png" alt="Startup Central Logo" decoding="async" loading="lazy" class="rounded-lg w-16 md:w-28 h-auto">
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="tracking-wide capitalize text-xl font-semibold">
          Startup Central - Dit iværksætternetværk Denmark
        </h1>
        <p class="text-md">Software Developer Intern</p>
        <span class="text-xs text-neutral-500">February 2020 - July 2020</span>
      </div>
    </div>

    <div>
      <ul class="list-disc ml-6">
        <li class="mb-2">
          Acquired proficiency in Umbraco and actively contributed to web
          development projects.
        </li>
        <li class="mb-2">
          Worked in an agile team environment, participating in sprint stand-ups
          and collaborating with cross-functional teams.
        </li>
        <li class="mb-2">
          Engaged in technical discussions and contributed innovative ideas to
          enhance technical solutions.
        </li>
      </ul>
    </div>
    <div class="bg-gray-200 dark:bg-gray-600/50 h-px w-full my-4"></div>

    <!-- Experience 2 -->
    <div class="flex flex-row gap-8">
      <div class="hidden md:block">
        <img src="/images/companies/Biamp-Logo.jpg" alt="Biamp Logo" decoding="async" loading="lazy" class="rounded-lg w-16 md:w-28 h-auto">
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="tracking-wide capitalize text-xl font-semibold">
          Biamp Denmark
        </h1>
        <p class="text-md">Juinor Hardware Tester</p>
        <span class="text-xs text-neutral-500">February 2017 - August 2018</span>
      </div>
    </div>

    <div>
      <ul class="list-disc ml-6">
        <li class="mb-2">
          Tested new releases of the company's software and ensured seamless
          integration with hardware.
        </li>
        <li class="mb-2">
          Assisted in the assembly of electronic devices, contributing to the
          production of high-quality products.
        </li>
        <li class="mb-2">
          Collaborated with cross-functional teams to identify areas of
          improvement and enhance overall product performance.
        </li>
      </ul>
    </div>

    <div class="bg-gray-200 dark:bg-gray-600/50 h-px w-full my-4"></div>

    <!-- Experience 3 -->
    <div class="flex flex-row gap-8">
      <div class="hidden md:block">
        <img src="/images/companies/kakring-el-logo.png" alt="Klakring El Logo" decoding="async" loading="lazy" class="rounded-lg w-16 md:w-28 h-auto">
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="tracking-wide capitalize text-xl font-semibold">
          Klakring El Denmark
        </h1>
        <p class="text-md">Assitant Electronics Technician</p>
        <span class="text-xs text-neutral-500">July 2017 - January 2018</span>
      </div>
    </div>

    <div>
      <ul class="list-disc ml-6">
        <li class="mb-2">
          Conducted soldering of electronic components and effectively mounted
          control panels used in mechanic shops.
        </li>
        <li class="mb-2">
          Ensured the quality and reliability of electronic assemblies by
          adhering to industry standards and specifications.
        </li>
      </ul>
    </div>
    <div class="bg-gray-200 dark:bg-gray-600/50 h-px w-full my-4"></div>

    <!-- Experience 4 -->
    <div class="flex flex-row gap-8">
      <div class="hidden md:block">
        <img src="/images/companies/geltec.png" alt="Biamp Logo" decoding="async" loading="lazy" class="rounded-lg w-16 md:w-28 h-auto">
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="tracking-wide capitalize text-xl font-semibold">
          Geltec LTD Paignton, UK
        </h1>
        <p class="text-md">Electronics Technican Intern</p>
        <span class="text-xs text-neutral-500">May 2016 - July 2016</span>
      </div>
    </div>

    <div>
      <ul class="list-disc ml-6">
        <li class="mb-2">
          Assisted in the development and documentation of a vibration detection
          sensor circuit for the company.
        </li>
        <li class="mb-2">
          Conducted maintenance tasks for 3D printers, amplifiers, and other
          electronic appliances.
        </li>
        <li class="mb-2">
          Contributed to the development of water detection sensors and
          optimized battery life for improved efficiency.
        </li>
      </ul>
    </div>
    <div class="bg-gray-200 dark:bg-gray-600/50 h-px w-full my-4"></div>

    <!-- Experience 5 -->
    <div class="flex flex-row gap-8">
      <div class="hidden md:block">
        <img src="/images/companies/lens-logo.png" alt="LENS Logo" decoding="async" loading="lazy" class="rounded-lg w-16 md:w-28 h-auto">
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="tracking-wide capitalize text-xl font-semibold">
          European Laboratory for Non-Linear Spectroscopy - ITALY
        </h1>
        <p class="text-md">Electronics Technican Intern</p>
        <span class="text-xs text-neutral-500">September 2016 - September 2016</span>
      </div>
    </div>

    <div>
      <ul class="list-disc ml-6">
        <li class="mb-2">
          One month internship during my highschool education in Italy
        </li>
        <li class="mb-2">
          Assisted in the development of hardware components for power lasers
          within the physics department.
        </li>
        <li class="mb-2">
          Integrated Arduino IDE with Processing IDE and hardware components to
          create seamless connections.
        </li>
      </ul>
    </div>
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/ExperienceSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProjectSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/projects/project-1.md": () => import('./project-1.md.9132c257.mjs')}), () => "../pages/projects/*.md");
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "projects", "classStyles": "" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Title", $$Title, { "title": "Projects" })}

  ${allProjects.map((project) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": ($$result3) => renderTemplate`
        ${maybeRenderHead()}<div class="flex flex-col gap-8">
          <div class="flex flex-col gap-3 ">
            <div class="flex gap-2 justify-between w-full">
              <div class="flex gap-4">
                <div class="flex-col">
                  <div>
                    <a${addAttribute(project.url, "href")}>
                      <h1 class="tracking-wide capitalize text-xl font-semibold">
                        ${project.frontmatter.title}
                      </h1>
                    </a>
                  </div>
                  <div class="flex flex-col gap-3">
                    ${" "}
                    <div class="text-sm mb-4">
                      <div class="flex flex-row gap-2">
                        <span class="text-neutral-950  dark:text-neutral-100">
                          My role:
                        </span>
                        <p class="text-neutral-500 capitalize">
                          ${project.frontmatter.role}
                        </p>
                      </div>
                      <div class="flex flex-row gap-2">
                        <span class="text-neutral-950  dark:text-neutral-100">
                          Team size:
                        </span>
                        <p class="text-neutral-500 capitalize">
                          ${project.frontmatter.teamNum}
                        </p>
                      </div>
                      <div class="flex flex-row gap-2">
                        <span class="text-neutral-950  dark:text-neutral-100">
                          Company:
                        </span>
                        <p class="text-neutral-500 capitalize">
                          ${project.frontmatter.organization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex gap-3 flex-wrap sm:flex-nowrap">
                ${project.frontmatter.externals.map((external) => renderTemplate`<a${addAttribute(external.url, "href")} class="cursor-pointer" target="_blank">
                    ${renderComponent($$result3, "Pill", Pill, { "iconSrc": `../images/${external.name}.svg` })}
                  </a>`)}
              </div>
            </div>
            <div class="flex flex-col gap-3">
              ${renderComponent($$result3, "Fragment", Fragment$1, {}, { "default": ($$result4) => renderTemplate`
                <p class="mb-4 italic">
                  ${project.frontmatter.description}${" "}
                  ${renderComponent($$result4, "LinkCode", $$LinkCode, { "content": "Read More", "url": project.url, "classItems": "text-myTextBlue" })}${" "}
                </p>
              ` })}
              <div>
                <p class="text-sm text-neutral-500 ">Technologies Used:</p>
                <div class="flex flex-wrap gap-4">
                  ${project.frontmatter.technologies.map((tech) => renderTemplate`${renderComponent($$result3, "Pill", Pill, { "iconSrc": `images/${tech}.svg`, "description": tech })}`)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-400 my-4 h-px last:hidden w-full"></div>
        ${renderComponent($$result3, "Subtitle", $$Subtitle, { "subTitle": "more comming soon after my vacation \u{1F60E}\u2708\uFE0F" })}
      ` })}`)}` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/ProjectSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "Maria's Portfolio";
  const seoTitle = "Maria's Portfolio";
  const seoDescription = "Explore my diverse portfolio showcasing innovative software solutions and creative projects. As a skilled software engineer, I specialize in developing well-structured, reusable, and maintainable applications. Discover how my passion for technology drives me to create impactful solutions that make a positive impact. Let's connect and embark on a journey of innovation together";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AboutSection", $$AboutSection, {})}
  ${renderComponent($$result2, "SkillsSection", $$SkillsSection, {})}
  ${renderComponent($$result2, "LanguageSection", $$LanguageSection, {})}
  ${renderComponent($$result2, "EducationSection", $$EducationSection, {})}
  ${renderComponent($$result2, "ExperienceSection", $$ExperienceSection, {})}
  ${renderComponent($$result2, "ProjectSection", $$ProjectSection, {})}
  
  
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/index.astro", void 0);

const $$file$1 = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"../projects/project-1.md": () => import('./project-1.md.9132c257.mjs')}), () => "../projects/*.md");
  const technologies = [
    ...new Set(allProjects.map((post) => post.frontmatter.technologies).flat())
  ];
  const seoTitle = "index Proj";
  const seoDescription = "Projects";
  const title = "My Awesome Software Project";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": title, "seoTitle": seoTitle, "seoDescription": seoDescription, "class": "astro-4MAE3WQV" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="tags astro-4MAE3WQV">
    ${technologies.map((tech) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, { "class": "astro-4MAE3WQV" }, { "default": ($$result3) => renderTemplate`
          <p class="tag astro-4MAE3WQV">
            <a${addAttribute(`/technologies/${tech}`, "href")} class="astro-4MAE3WQV">${tech}</a>
          </p>
        ` })}`)}
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/technologies/index.astro", void 0);

const $$file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/technologies/index.astro";
const $$url = "/technologies";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CardLayout as $, Pill as P, $$Subtitle as a, index as b, index$1 as i };
