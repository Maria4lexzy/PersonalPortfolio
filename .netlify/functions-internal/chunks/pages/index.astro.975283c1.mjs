/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, _ as __astro_tag_component__, b as addAttribute, F as Fragment } from '../astro.6fa2bed6.mjs';
import { I as IconPill, a as $$Subtitle, b as $$CardLayout, c as $$LinkCode, d as $$BaseLayout } from './AzureProject.md.be108381.mjs';
import { jsx } from 'react/jsx-runtime';
/* empty css                           */
const $$Astro$d = createAstro("https://maria-louisa.com");
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Title;
  const { title } = Astro2.props;
  return renderTemplate`<!-- <div class='flex flex-row items-center'> -->${maybeRenderHead()}<h1 class="capitalize text-sm md:text-xl font-extrabold text-primary-text dark:text-secondary-text font-sourceCode">
  ${`{ ${title} }`}
</h1>
<!-- <div class='bg-gray-200 dark:bg-gray-600 h-px w-full'></div> -->
<!-- </div> -->`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Typography/Title.astro", void 0);

const $$Astro$c = createAstro("https://maria-louisa.com");
const $$AboutSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$AboutSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "about", "classStyle": " flex flex-col md:flex-row md:gap-8 content-center " }, { "default": ($$result2) => renderTemplate`
  

  ${maybeRenderHead()}<div class="mx-auto md:flex md:flex-col md:justify-center md:space-y-4">
    <img src="/images/profile.webp" alt="Maria Failli" decoding="async" loading="lazy" class="rounded-lg h-24 max-w-none md:h-52 md:w-52 sm:h-36 sm:w-36 w-24">
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

      <h2 class="text-base md:text-md font-medium text-neutral-500 mb-4 md:mb-2">
        Fullstack Developer - Frontend Heavy
      </h2>
      <div class="flex flex-col lg:flex-row nowrap gap-x-4 gap-y-1 md:gap-x-8">
        <div class="flex flex-row gap-1 justify-center md:justify-normal">
          <a href="mailto:mariafailli42@gmail.com" class="text-sm font-normal leading-relaxed sm:text-base" target="_self">
            ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/email.svg", "description": "Send me an email", "classListItems": "hover:animate-pulse" })}
          </a>
        </div>
        <div class="flex flex-row gap-1 justify-center md:justify-normal">
          <a href="tel:91 15 47 99" class="text-sm font-normal leading-relaxed sm:text-base" target="_self">
            ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/phone.svg", "classListItems": "hover:animate-pulse", "description": "Give me a call" })}
          </a>
        </div>
      </div>

      <p class="mt-4 text-sm lg:text-base text-justify">
        Hello👋 I'm Maria, a <span class="text-primary-text dark:text-secondary-text">full stack developer</span> with a passion for building <span class="text-primary-text dark:text-secondary-text">well-structured</span>, <span class="text-primary-text dark:text-secondary-text">reusable</span>, and <span class="text-primary-text dark:text-secondary-text">maintainable</span> software solutions. I'm constantly <span class="text-primary-text dark:text-secondary-text">learning</span> and exploring new <span class="text-primary-text dark:text-secondary-text">technologies</span> and <span class="text-primary-text dark:text-secondary-text">trends</span>, and I enjoy taking on new <span class="text-primary-text dark:text-secondary-text">challenges</span>. My journey in technology is driven by <span class="text-primary-text dark:text-secondary-text">curiosity</span> and a desire to make a <span class="text-primary-text dark:text-secondary-text">positive impact</span> through <span class="text-primary-text dark:text-secondary-text">innovation</span>. <br>
        <br>In my free time, I enjoy DIY projects, traveling✈️ , sports🏓, and
        trying new foods🍜. I've been to 20 countries and two continents so far,
        and I look forward to exploring more.
      </p>
      ${renderComponent($$result2, "Subtitle", $$Subtitle, { "subTitle": "Socials" })}

      <!-- urls -->
      <div class="mt-4 md:mt-0 md:gap-y-2">
        <div class="flex gap-x-4 gap-y-1 md:gap-x-8 justify-center">
          <div class="flex flex-row gap-1 justify-center md:justify-normal">
            <a href="https://github.com/Maria4lexzy">
              ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/github.svg" })}
            </a>
          </div>
          <div class="flex flex-row gap-1 justify-center md:justify-normal">
            <a href="https://www.linkedin.com/in/maria-louisa-failli/">
              ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/linkedin.svg" })}
            </a>
          </div>
          <div class="flex flex-row gap-1 justify-center md:justify-normal">
            <a href="https://maria-louisa.com/projects/portfolioProject/">
              ${renderComponent($$result2, "IconPill", IconPill, { "iconSrc": "/images/portfolio.svg" })}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/AboutSection.astro", void 0);

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
    progress: 50,
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

const $$Astro$b = createAstro("https://maria-louisa.com");
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
    progress: 85,
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
    url: "https://en.wikipedia.org/wiki/CSS",
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
    progress: 65,
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

const $$Astro$a = createAstro("https://maria-louisa.com");
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
    backgroundColor: "bg-orange-500"
  },
  {
    name: "Angular",
    progress: 40,
    icon: "/images/angular.svg",
    url: "https://en.wikipedia.org/wiki/Angular_(web_framework)",
    backgroundColor: "bg-red-600"
  },
  {
    name: "Umbraco",
    progress: 65,
    icon: "/images/umbraco.svg",
    url: "https://umbraco.com/",
    backgroundColor: "bg-indigo-600"
  },
  {
    name: "TypeScript",
    progress: 85,
    icon: "/images/typescript.svg",
    url: "https://www.typescriptlang.org/",
    backgroundColor: "bg-blue-400"
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
    name: ".NET ",
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

const $$Astro$9 = createAstro("https://maria-louisa.com");
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
  },
  {
    description: "UML",
    icon: "/images/uml.svg"
  }
];

const $$Astro$8 = createAstro("https://maria-louisa.com");
const $$SWConcepts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SWConcepts;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": "Software Concepts & Approaches" })}

  <div class="flex flex-wrap gap-8 flex-row justify-evenly">
    ${sWConcpetSkills.map((skill) => renderTemplate`${renderComponent($$result, "IconPill", null, { "client:only": "react", "iconSrc": skill.icon, "description": skill.description, "client:component-hydration": "only", "client:component-path": "@components/IconPill", "client:component-export": "default" })}`)}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SWConcepts.astro", void 0);

const $$Astro$7 = createAstro("https://maria-louisa.com");
const $$SkillsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SkillsSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "skills", "classStyle": " " }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Title", $$Title, { "title": "skills" })}
  ${maybeRenderHead()}<div class="flex flex-col gap-8">
    ${renderComponent($$result2, "WebDev", $$WebDev, {})}
    ${renderComponent($$result2, "ProgLang", $$ProgLang, {})}
    ${renderComponent($$result2, "DatabaseManagement", $$DatabaseCloudSkills, {})}
    ${renderComponent($$result2, "SWConcepts", $$SWConcepts, {})}
  </div>
  
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/SkillsSection.astro", void 0);

const $$Astro$6 = createAstro("https://maria-louisa.com");
const $$Languages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Languages;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": " Languages I Speak" })}

  <div class="flex flex-wrap gap-8 flex-row justify-center md:justify-evenly">
    ${renderComponent($$result, "IconPill", IconPill, { "iconSrc": "/images/gb-ukm.svg", "description": "English - Fluent/Native" })}
    ${renderComponent($$result, "IconPill", IconPill, { "iconSrc": "/images/italianflag.svg", "description": "Italian - Fluent" })}
    ${renderComponent($$result, "IconPill", IconPill, { "iconSrc": "/images/danish.svg", "description": "Danish - A2" })}
    ${renderComponent($$result, "IconPill", IconPill, { "iconSrc": "/images/czech.svg", "description": "Czech A1" })}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Languages.astro", void 0);

const $$Astro$5 = createAstro("https://maria-louisa.com");
const $$LanguageSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LanguageSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "languages", "classStyle": "  " }, { "default": ($$result2) => renderTemplate`
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
    className: "flex items-center bg-violet-500/20  rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 ",
    children: /* @__PURE__ */ jsx("p", {
      className: "capitalize text-xs ",
      children: description
    })
  }, id);
};
__astro_tag_component__(PlainPill, "@astrojs/react");

const educationData = [
  {
    title: "University of Southern Denmark",
    degree: "MSc Software Engineering",
    date: "September 2021 - July 2023",
    description: "My master's program at SDU University was a transformative experience where I strengthed my engineering skills and deepened my knowledge in:",
    skills: [
      "Big Data: Proficiency in handling and analyzing large datasets using tools like Apache Spark, Hadoop, and Hive",
      "Coding Practices: Elevated coding practices with a focus on structured, maintainable, and efficient code. ",
      "Cloud Technologies: In-depth exploration of cloud platforms, encompassing concepts like IaaS, PaaS, and SaaS.",
      "Web3 and Cryptocurrencies: Hands-on experience with decentralized technologies, such as blockchain, P2P, DeFi",
      "Software Development Lifecycle Management: Managing software development lifecycle from inception to deployment, following principles and tools like Agile and Scrum."
    ],
    image: "/images/companies/sdu.svg",
    courses: [
      "Big Data and Data Science Technologies",
      "Blockchain Theory and Usage",
      "Cloud Computing and Edge-Cloud Adaptive Architectures",
      "Data Security",
      "Innovative SW Solutions",
      "Linux for Embedded Objects",
      "Model-Driven SW Development",
      "Scientific Methods",
      "Security in Computer Systems",
      "SW Engineering of Mobile and Ubiquitous Systems",
      "SW System Analysis and Verification",
      "SW Technology for IoT",
      "SW Architecture",
      "Statistics and Machine Learning",
      "Systems Modeling and Simulation"
    ]
  },
  {
    title: "VIA University College",
    degree: "BEng Software Technology Engineering",
    date: "February 2018 - July 2021",
    description: "During my studies at VIA, I acquired technical and soft skills that allow me to: ",
    skills: [
      "Design and develop software systems, architectures, and diagrams",
      "Implement software systems using a variety of programming languages and technologies",
      "Assess and employ appropriate software technologies to address different challenges",
      "Collaborate with others to solve problems and achieve goals",
      "Demonstrate strong problem-solving skills"
    ],
    image: "/images/companies/via.svg",
    courses: [
      "Semester Project: Single User System",
      "Discrete Mathematics and Algorithms",
      "SW Development with UML and Java",
      "Web Development",
      "Database Systems",
      "SW Engineering",
      "Semester Project: Client/Server System",
      "Database Systems",
      "Network and Security",
      "Computer Architecture and Organization",
      "Semester project: Heterogeneous Systems",
      ".NET Programming",
      "Algorithms and Data Structures",
      "DevOps & Cloud",
      "Embedded SW",
      "Semester Project: Internet of Things",
      "Engineering Internship",
      "Applied Linear Algebra",
      "No-SQL versus relational databases",
      "IT Security and Cryptography in Practice",
      "Programming Concepts and Languages",
      "Digital Multi-Media"
    ]
  },
  {
    title: "ITS Tulli Buzzi",
    degree: "High School Diploma - Junior Electronics Engineer",
    date: "September 2014 - July 2017",
    description: "My education at ITS - Buzzi has equipped me with: ",
    skills: [
      "Practical experience in electrical circuitry and components",
      "Knowledge in digital systems and microcontrollers.",
      "Strong problem-solving abilities gained through practical projects and lab work.",
      "Interdisciplinary knowledge in mathematics, physics, computer science, and engineering."
    ],
    image: "/images/companies/tullio.svg",
    courses: [
      "Mathematics",
      "Physics",
      "Electronics",
      "Electrotechnics",
      "Informatics",
      "Automated Systems",
      "Electrical Design"
    ]
  }
];

const $$Astro$4 = createAstro("https://maria-louisa.com");
const $$EducationSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$EducationSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "education", "classStyle": " flex flex-col md:flex-row md:gap-4 " }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="flex flex-col gap-4">
    ${renderComponent($$result2, "Title", $$Title, { "title": "education" })}
    ${educationData.map((education, index) => renderTemplate`<div class="w-full">
          <div class="flex flex-row gap-8">
            <div class="hidden md:block w-20 h-auto shadow-md text-primary dark:text-secondary">
              <img${addAttribute(education.image, "src")}${addAttribute(education.title, "alt")} decoding="async" loading="lazy" class="rounded-lg w-16 md:w-28 h-auto ">
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="capitalize text-lg font-semibold">
                ${education.title}
              </h1>
              <p class="text-md">${education.degree}</p>
              <span class="text-xs text-neutral-400">${education.date}</span>
            </div>
          </div>
          <div>
            <p class="my-2 text-justify">${education.description}</p>
            <div>
              <ul class="list-disc ml-4">
                ${education.skills.map((skill, index2) => renderTemplate`<li class="mb-2">${skill}</li>`)}
              </ul>
            </div>
            <div class="flex flex-col">
              <details class="open:transition delay-150"${addAttribute(false, "open")}>
                <summary class="my-2 capitalize font-medium text-gray-700 dark:text-gray-300 text-lg">
                  Courses
                </summary>
                <div class="flex flex-wrap gap-4 justify-stretch">
                  ${education.courses.map((course, index2) => renderTemplate`${renderComponent($$result2, "PlainPill", PlainPill, { "id": course + "" + index2, "description": course })}`)}
                </div>
              </details>
            </div>
          </div>
          ${index !== educationData.length - 1 && renderTemplate`<div class="bg-gray-200 dark:bg-gray-600/50 h-px w-full my-4"></div>`}${" "}
        </div>`)}
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/EducationSection.astro", void 0);

const experienceData = [
  {
    company: "Master Thesis - IBM CIC & Smukfest",
    role: "React Native Performance Research & Implementation",
    date: "February 2023 - June 2023",
    image: "/images/companies/ibm.png",
    responsibilities: [
      "Conducted extensive research on React Native performance, focusing on technical factors affecting performance and best practices for optimization",
      "Performed in-depth performance analysis of React Native applications, identifying areas for improvement such as unnecessary re-renders, slow app startup time, thread bottlenecks, and slow list rendering",
      "Developed a set of best practices for optimizing React Native performance, including the use of performance profiling tools, lazy loading, code splitting, memoization, and list optimization strategies",
      "Applied research findings to the development of the Smukfest application in collaboration with IBM CIC and Smukfest festival, resulting in a 93% improvement in performance compared to the original application"
    ]
  },
  {
    company: "Art Caffe Sabinov",
    role: "Software Developer ",
    date: "January 2022 - July 2022",
    image: "/images/companies/artcaffe.svg",
    responsibilities: [
      "Design and implement user interface components using Astro and React, ensuring a responsive and visually appealing design",
      "Integrate Firebase to handle data storage and retrieval, enabling dynamic content updates on the website",
      "Set up and maintained CI/CD pipelines using GitHub Actions"
    ]
  },
  {
    company: "Startup Central",
    role: "Software Developer Intern",
    date: "February 2020 - July 2020",
    image: "/images/companies/startupCentral.svg",
    responsibilities: [
      "Acquired proficiency in Umbraco and actively contributed to web development projects.",
      "Worked in an agile team environment, participating in sprint stand-ups and collaborating with cross-functional teams.",
      "Engaged in technical discussions and contributed innovative ideas to enhance technical solutions."
    ]
  },
  {
    company: "Biamp Denmark",
    role: "Juinor Software/Hardware Tester",
    date: "February 2017 - August 2018",
    image: "/images/companies/biamp.svg",
    responsibilities: [
      "Tested new releases of the company's software and ensured seamless integration with hardware.",
      "Assisted in the assembly of electronic devices, contributing to the production of high-quality products.",
      "Collaborated with cross-functional teams to identify areas of improvement and enhance overall product performance."
    ]
  },
  {
    company: "Klakring El, Denmark",
    role: "Assistant Electronics Technician",
    date: "July 2017 - January 2018",
    image: "/images/companies/klakring.svg",
    responsibilities: [
      "Conducted soldering of electronic components and effectively mounted control panels used in mechanic shops.",
      "Ensured the quality and reliability of electronic assemblies by adhering to industry standards and specifications."
    ]
  },
  {
    company: "European Laboratory for Non-Linear Spectroscopy, ITALY",
    role: "Electronics Technician Intern",
    date: "September 2016 - September 2016",
    image: "/images/companies/lens.svg",
    responsibilities: [
      "One month internship during my high school education in Italy.",
      "Assisted in the development of hardware components for power lasers within the physics department.",
      "Integrated Arduino IDE with Processing IDE and hardware components to create seamless connections."
    ]
  }
];

const $$Astro$3 = createAstro("https://maria-louisa.com");
const $$ExperienceSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ExperienceSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "exp", "classStyle": "card flex flex-col md:flex-row md:gap-4" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="flex flex-col gap-4">
    ${renderComponent($$result2, "Title", $$Title, { "title": "Experience" })}
    ${experienceData.map((job, index) => renderTemplate`<div class="w-full">
          <div class="flex flex-row gap-8">
            <div class="hidden md:block">
              <img${addAttribute(job.image, "src")}${addAttribute(job.company, "alt")} decoding="async" loading="lazy" width="100" class="rounded-lg w-16 md:w-20 h-auto">
            </div>
            <div class="flex flex-col gap-1">
              <h1 class="tracking-wide capitalize text-xl font-semibold">
                ${job.company}
              </h1>
              <p class="text-md">${job.role}</p>
              <span class="text-xs text-neutral-500">${job.date}</span>
            </div>
          </div>
          <div>
            <ul class="list-disc ml-6">
              ${job.responsibilities.map((responsibility, index2) => renderTemplate`<li class="mb-2">${responsibility}</li>`)}
            </ul>
          </div>
          ${index !== experienceData.length - 1 && renderTemplate`<div class="bg-gray-200 dark:bg-gray-600/50 h-px w-full my-4"></div>`}
        </div>`)}
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/ExperienceSection.astro", void 0);

const $$Astro$2 = createAstro("https://maria-louisa.com");
const $$ProjectSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/projects/AzureProject.md": () => import('./AzureProject.md.be108381.mjs').then(n => n.A),"../pages/projects/angularProject.md": () => import('./angularProject.md.92f5a68a.mjs'),"../pages/projects/artcaffe.md": () => import('./artcaffe.md.3b6314ca.mjs'),"../pages/projects/intersectionObserver.md": () => import('./intersectionObserver.md.6258fc6f.mjs'),"../pages/projects/portfolioProject.md": () => import('./portfolioProject.md.848cec88.mjs'),"../pages/projects/weatherServer.md": () => import('./weatherServer.md.64dfcdda.mjs')}), () => "../pages/projects/*.md");
  const featuredProjects = allProjects.filter(
    (project) => project.frontmatter.featured
  );
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "projects", "classStyle": " " }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Title", $$Title, { "title": "Featured Projects" })}

  ${featuredProjects.map((project) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
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
                    ${renderComponent($$result3, "IconPill", IconPill, { "iconSrc": `../images/${external.name}.svg`, "description": "" })}
                  </a>`)}
              </div>
            </div>
            <div class="flex flex-col gap-3">
              ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`
                <p class="mb-4 italic">
                  ${project.frontmatter.description}${" "}
                  ${renderComponent($$result4, "LinkCode", $$LinkCode, { "content": "Read the full article", "url": project.url, "classItems": "text-primary-text dark:text-secondary-text" })}${" "}
                </p>
              ` })}
              <div>
                <p class="text-sm text-neutral-500 my-2 ">Technologies Used:</p>
                <div class="flex flex-wrap gap-4">
                  ${project.frontmatter.technologies.map((tech) => renderTemplate`${renderComponent($$result3, "IconPill", IconPill, { "iconSrc": `./images/${tech}.svg`, "description": tech })}`)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-400 my-4 h-px last:hidden w-full"></div>
      ` })}`)}${renderComponent($$result2, "LinkCode", $$LinkCode, { "content": "See all projects", "url": "/projects", "classItems": "text-primary-text dark:text-secondary-text" })}
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/ProjectSection.astro", void 0);

const $$Astro$1 = createAstro("https://maria-louisa.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "Maria's Portfolio";
  const seoTitle = "Maria's Portfolio";
  const seoDescription = "Explore my diverse portfolio showcasing innovative software solutions and creative projects. As a skilled software engineer, I specialize in developing well-structured, reusable, and maintainable applications. Discover how my passion for technology drives me to create impactful solutions that make a positive impact. Let's connect and embark on a journey of innovation together";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription, "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  
  
  ${renderComponent($$result2, "AboutSection", $$AboutSection, { "class": "astro-J7PV25F6" })}
  ${renderComponent($$result2, "SkillsSection", $$SkillsSection, { "class": "astro-J7PV25F6" })}
  ${renderComponent($$result2, "ExperienceSection", $$ExperienceSection, { "class": "astro-J7PV25F6" })}
  ${renderComponent($$result2, "EducationSection", $$EducationSection, { "class": "astro-J7PV25F6" })}
  ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "class": "astro-J7PV25F6" })}
  ${renderComponent($$result2, "LanguageSection", $$LanguageSection, { "class": "astro-J7PV25F6" })}
  
  
  
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

const $$Astro = createAstro("https://maria-louisa.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"./AzureProject.md": () => import('./AzureProject.md.be108381.mjs').then(n => n.A),"./angularProject.md": () => import('./angularProject.md.92f5a68a.mjs'),"./artcaffe.md": () => import('./artcaffe.md.3b6314ca.mjs'),"./intersectionObserver.md": () => import('./intersectionObserver.md.6258fc6f.mjs'),"./portfolioProject.md": () => import('./portfolioProject.md.848cec88.mjs'),"./weatherServer.md": () => import('./weatherServer.md.64dfcdda.mjs')}), () => "../projects/*.md");
  const pageTitle = "Maria's Projects";
  const seoTitle = "Maria's Projects";
  const seoDescription = "Welcome to my projects page showcasing some of my creative projects.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "CardLayout", $$CardLayout, { "id": "projects", "classStyle": "" }, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Title", $$Title, { "title": "Projects" })}

    ${allProjects.map((project) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`
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
                      ${renderComponent($$result4, "IconPill", IconPill, { "iconSrc": `../images/${external.name}.svg`, "description": "" })}
                    </a>`)}
                </div>
              </div>
              <div class="flex flex-col gap-3">
                ${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`
                  <p class="mb-4 italic">
                    ${project.frontmatter.description}${" "}
                    ${renderComponent($$result5, "LinkCode", $$LinkCode, { "content": "Read the full article", "url": project.url, "classItems": "text-primary-text dark:text-secondary-text" })}${" "}
                  </p>
                ` })}
                <div>
                  <p class="text-sm text-neutral-500 my-2 ">
                    Technologies Used:
                  </p>
                  <div class="flex flex-wrap gap-4">
                    ${project.frontmatter.technologies.map((tech) => renderTemplate`${renderComponent($$result4, "IconPill", IconPill, { "iconSrc": `../images/${tech}.svg`, "description": tech })}`)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-400 my-4 h-px last:hidden w-full"></div>
        ` })}`)}${renderComponent($$result3, "Subtitle", $$Subtitle, { "subTitle": "more comming soon after my vacation \u{1F60E}\u2708\uFE0F" })}
  ` })}
` })}
<style>
  body {
    background-color: green;
    min-height: 100vh;
    height: 100%;
  }
</style>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/index.astro";
const $$url = "/projects";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { educationData as a, index as b, dataCloudSkills as d, experienceData as e, index$1 as i, programmingLanguages as p, web_MobileSkills as w };
