/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, F as Fragment } from '../astro.713e64d5.mjs';
import { I as IconPill, a as $$Subtitle, b as $$CardLayout, c as $$LinkCode, d as $$BaseLayout } from './AzureProject.md.eb777aea.mjs';
import { jsx } from 'react/jsx-runtime';
/* empty css                           */
const $$Astro$e = createAstro("https://maria-louisa.com");
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Title;
  const { title } = Astro2.props;
  return renderTemplate`<!-- <div class='flex flex-row items-center'> -->${maybeRenderHead()}<h1 class="capitalize text-sm md:text-xl font-extrabold text-primary-text dark:text-secondary-text font-sourceCode">
  ${`{ ${title} }`}
</h1>
<!-- <div class='bg-gray-200 dark:bg-gray-600 h-px w-full'></div> -->
<!-- </div> -->`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Typography/Title.astro", void 0);

const $$Astro$d = createAstro("https://maria-louisa.com");
const $$AboutSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
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
        Greetings Observer👋, I'm Maria. I like developing <span class="text-primary-text dark:text-secondary-text">well-structured</span>, <span class="text-primary-text dark:text-secondary-text">reusable</span>, and <span class="text-primary-text dark:text-secondary-text">maintainable</span> software solutions. In the world of software, learning never stops, I'm
        constantly exploring new technlogies and trends. I enjoy new challenges and
        I'm always ready to tackle them headd-on. My journey in technology is driven
        by<span class="text-primary-text dark:text-secondary-text">curiosity</span> and desire to make a positive impact through<span class="text-primary-text dark:text-secondary-text">innovation</span>. In my free time, you'll find me immersed in DIY projects, from
        tinkering with electronics to crocheting🧶 or hiking🌄. I also love
        traveling✈️ and trying new food🍜. So far, I've been to <span class="text-primary-text dark:text-secondary-text">20 countries</span> and two continents, and I look forward to exploring more places.
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

const dataCloudSkills = [{
  name: 'MySQL',
  progress: 76,
  icon: '/images/mysql.svg',
  url: 'https://en.wikipedia.org/wiki/MySQL',
  backgroundColor: 'bg-blue-500'
}, {
  name: 'MongoDB',
  progress: 65,
  icon: '/images/mongodb.svg',
  url: 'https://en.wikipedia.org/wiki/MongoDB',
  backgroundColor: 'bg-green-500'
},
// {
//   name: 'PostgreSQL',
//   progress: 75,
//   icon: '/images/postgresql.svg',
//   url: 'https://www.postgresql.org/',
//   backgroundColor: 'bg-purple-500',
// },
{
  name: 'Firebase',
  progress: 80,
  icon: '/images/firebase.svg',
  url: 'https://firebase.google.com/',
  backgroundColor: 'bg-yellow-500'
}, {
  name: 'Google Cloud',
  progress: 60,
  icon: '/images/gcp-light.svg',
  url: 'https://cloud.google.com/',
  backgroundColor: 'bg-yellow-300'
}, {
  name: 'Microsoft Azure',
  progress: 40,
  icon: '/images/azure.svg',
  url: 'https://en.wikipedia.org/wiki/Microsoft_Azure',
  backgroundColor: 'bg-sky-600'
},
// {
//   name: 'Terraform',
//   progress: 60,
//   icon: '/images/terraform.svg',
//   url: 'https://www.terraform.io/',
//   backgroundColor: 'bg-purple-600',
// },
{
  name: 'Docker',
  progress: 30,
  icon: '/images/docker.svg',
  url: 'https://en.wikipedia.org/wiki/Docker_(software)',
  backgroundColor: 'bg-sky-500'
}, {
  name: 'Kubernetes',
  progress: 40,
  icon: '/images/kubernetes.svg',
  url: 'https://kubernetes.io/',
  backgroundColor: 'bg-blue-600'
}
// Add more database management systems here
];

const $$Astro$c = createAstro("https://maria-louisa.com");
const $$DatabaseCloudSkills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$DatabaseCloudSkills;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": "Database & Cloud" })}
  <div class="flex flex-wrap gap-8 flex-row justify-between">
    ${dataCloudSkills.map((sys, index) => renderTemplate`${renderComponent($$result, "SkillBar", null, { "client:only": "react", "id": sys + "" + index, "skillName": sys.name, "progress": sys.progress, "skillUrl": sys.url, "iconSrc": sys.icon, "backgroundColor": sys.backgroundColor, "client:component-hydration": "only", "client:component-path": "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SkillBar", "client:component-export": "default" })}`)}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/Database_CloudSkills.astro", void 0);

const programmingLanguages = [{
  name: 'JavaScript',
  progress: 75,
  url: 'https://en.wikipedia.org/wiki/JavaScript',
  icon: '/images/javascript.svg',
  backgroundColor: 'bg-yellow-400'
}, {
  name: 'HTML5',
  progress: 80,
  url: 'https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard.',
  icon: '/images/html.svg',
  backgroundColor: 'bg-red-500'
}, {
  name: 'CSS3',
  progress: 75,
  url: 'https://en.wikipedia.org/wiki/CSS',
  icon: '/images/css.svg',
  backgroundColor: 'bg-blue-500'
}, {
  name: 'Java',
  progress: 50,
  url: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
  icon: '/images/java.svg',
  backgroundColor: 'bg-blue-700'
}, {
  name: 'C#',
  progress: 40,
  url: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)#:~:text=C%23%20(pronounced%20See%20sharp)%20is,C%23',
  icon: '/images/csharp.svg',
  backgroundColor: 'bg-green-600'
},
// {
//   name: 'R',
//   progress: 20,
//   url: 'https://www.r-project.org/',
//   icon: '/images/r.svg',
//   backgroundColor: 'bg-blue-900',
// },
{
  name: 'Python',
  progress: 40,
  url: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
  icon: '/images/python.svg',
  backgroundColor: 'bg-blue-500'
}];

const $$Astro$b = createAstro("https://maria-louisa.com");
const $$ProgLang = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ProgLang;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": "Programming Languages" })}

  <div class="flex flex-wrap gap-8 flex-row justify-between">
    ${programmingLanguages.map((language, index) => renderTemplate`${renderComponent($$result, "SkillBar", null, { "client:only": "react", "id": language + "" + index, "skillName": language.name, "progress": language.progress, "skillUrl": language.url, "iconSrc": language.icon, "backgroundColor": language.backgroundColor, "client:component-hydration": "only", "client:component-path": "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SkillBar", "client:component-export": "default" })}`)}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/ProgLang.astro", void 0);

const web_MobileSkills = [{
  name: 'ReactJs',
  progress: 80,
  icon: '/images/react.svg',
  url: 'https://reactjs.org/',
  backgroundColor: 'bg-blue-500'
}, {
  name: 'React Native',
  progress: 75,
  icon: '/images/react-native.svg',
  url: 'https://en.wikipedia.org/wiki/React_Native',
  backgroundColor: 'bg-blue-600'
}, {
  name: 'Astro',
  progress: 90,
  icon: '/images/astro.svg',
  url: 'https://astro.build/',
  backgroundColor: 'bg-orange-500'
}, {
  name: 'Angular',
  progress: 20,
  icon: '/images/angular.svg',
  url: 'https://en.wikipedia.org/wiki/Angular_(web_framework)',
  backgroundColor: 'bg-red-600'
}, {
  name: 'Umbraco',
  progress: 65,
  icon: '/images/umbraco.svg',
  url: 'https://umbraco.com/',
  backgroundColor: 'bg-indigo-600'
}, {
  name: 'TypeScript',
  progress: 65,
  icon: '/images/typescript.svg',
  url: 'https://www.typescriptlang.org/',
  backgroundColor: 'bg-blue-400'
}, {
  name: 'Tailwind',
  progress: 70,
  url: 'https://tailwindcss.com/',
  icon: '/images/tailwind.svg',
  backgroundColor: 'bg-sky-400'
},
// {
//   name: 'Sass',
//   progress: 65,
//   icon: '/images/sass.svg',
//   url: 'https://sass-lang.com/',
//   backgroundColor: 'bg-pink-500',
// },
{
  name: 'ASP.NET ',
  progress: 65,
  icon: '/images/asp.svg',
  url: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
  backgroundColor: 'bg-purple-500'
}, {
  name: 'Node.js',
  progress: 65,
  icon: '/images/nodejs.svg',
  url: 'https://en.wikipedia.org/wiki/Node.js/',
  backgroundColor: 'bg-green-500'
}
// ... (other backend skills)
];

const $$Astro$a = createAstro("https://maria-louisa.com");
const $$WebDev = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$WebDev;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": "Web & Mobile development" })}

  <div class="flex flex-wrap gap-8 flex-row justify-between">
    ${web_MobileSkills.map((sys, index) => renderTemplate`${renderComponent($$result, "SkillBar", null, { "client:only": "react", "id": sys + "" + index, "skillName": sys.name, "progress": sys.progress, "skillUrl": sys.url, "iconSrc": sys.icon, "backgroundColor": sys.backgroundColor, "client:component-hydration": "only", "client:component-path": "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SkillBar", "client:component-export": "default" })}`)}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/WebDev.astro", void 0);

const sWConcpetSkills = [{
  description: 'Scrum Agile',
  icon: '/images/agile.svg'
}, {
  description: 'Micro Services',
  icon: '/images/microservices.svg'
}, {
  description: 'OOP',
  icon: '/images/oop.svg'
}, {
  description: 'CI/CD',
  icon: '/images/cicd.svg'
}, {
  description: 'UML',
  icon: '/images/uml.svg'
}];

const $$Astro$9 = createAstro("https://maria-louisa.com");
const $$SWConcepts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SWConcepts;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col">
  ${renderComponent($$result, "Subtitle", $$Subtitle, { "subTitle": "Software Concepts & Approaches" })}

  <div class="flex flex-wrap gap-8 flex-row justify-evenly">
    ${sWConcpetSkills.map((skill) => renderTemplate`${renderComponent($$result, "IconPill", null, { "client:only": "react", "iconSrc": skill.icon, "description": skill.description, "client:component-hydration": "only", "client:component-path": "@components/IconPill", "client:component-export": "default" })}`)}
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SWConcepts.astro", void 0);

const $$Astro$8 = createAstro("https://maria-louisa.com");
const $$SkillsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
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

const $$Astro$7 = createAstro("https://maria-louisa.com");
const $$Languages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
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

const $$Astro$6 = createAstro("https://maria-louisa.com");
const $$LanguageSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
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
  return jsx("div", {
    className: 'flex items-center bg-violet-500/20  rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-gray-700 text-sm tracking-wide w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 ',
    children: jsx("p", {
      className: 'capitalize text-xs ',
      children: description
    })
  }, id);
};

const educationData = [{
  title: 'University of Southern Denmark',
  degree: 'MSc Software Engineering',
  date: 'February 2018 - July 2021',
  description: 'My education at SDU has provided me with a comprehensive understanding ' + 'of software engineering, allowing me to independently take ' + 'responsibility for the entire software development lifecycle, from ' + 'identifying needs and analyzing requirements to software design, ' + 'programming, testing, and project management.',
  image: '/images/companies/sdu.svg',
  courses: [{
    courseName: 'Big Data and Data Science Technologies'
  }, {
    courseName: 'Blockchain Theory and Usage'
  }, {
    courseName: 'Cloud Computing and Edge-Cloud Adaptive Architectures'
  }, {
    courseName: 'Data Security'
  }, {
    courseName: 'Innovative SW Solutions'
  }, {
    courseName: 'Linux for Embedded Objects'
  }, {
    courseName: 'Model-Driven SW Development'
  }, {
    courseName: 'Scientific Methods'
  }, {
    courseName: 'Security in Computer Systems'
  }, {
    courseName: 'SW Engineering of Mobile and Ubiquitous Systems'
  }, {
    courseName: 'SW System Analysis and Verification'
  }, {
    courseName: 'SW Technology for IoT'
  }, {
    courseName: 'SW Architecture'
  }, {
    courseName: 'Statistics and Machine Learning'
  }, {
    courseName: 'Systems Modeling and Simulation'
  }]
}, {
  title: 'VIA University College',
  degree: 'BEng Software Technology Engineering',
  date: 'September 2021 - July 2023',
  description: 'My education at VIA has equipped me with a strong foundation in software ' + 'engineering and a broad understanding of industry dynamics. ' + 'Additionally, it has nurtured my passion for technology and prepared me ' + 'to thrive in the fast-paced and ever-evolving software industry, and ' + 'allowed me to gain a solid foundation in software engineering principles ' + 'and practices.',
  image: '/images/companies/via.svg',
  courses: [{
    courseName: 'Semester Project: Single User System'
  }, {
    courseName: 'Discrete Mathematics and Algorithms'
  }, {
    courseName: 'SW Development with UML and Java'
  }, {
    courseName: 'Web Development'
  }, {
    courseName: 'Database Systems'
  }, {
    courseName: 'SW Engineering'
  }, {
    courseName: 'Semester Project: Client/Server System'
  }, {
    courseName: 'Database Systems'
  }, {
    courseName: 'Network and Security'
  }, {
    courseName: 'Computer Architecture and Organization'
  }, {
    courseName: 'Semester project: Heterogeneous Systems'
  }, {
    courseName: '.NET Programming'
  }, {
    courseName: 'Algorithms and Data Structures'
  }, {
    courseName: 'DevOps & Cloud'
  }, {
    courseName: 'Embedded SW'
  }, {
    courseName: 'Semester Project: Internet of Things'
  }, {
    courseName: 'Engineering Internship'
  }, {
    courseName: 'Applied Linear Algebra'
  }, {
    courseName: 'No-SQL versus relational databases'
  }, {
    courseName: 'IT Security and Cryptography in Practice'
  }, {
    courseName: 'Programming Concepts and Languages'
  }, {
    courseName: 'Digital Multi Media'
  }, {
    courseName: 'Digital Signal Processing'
  }]
}, {
  title: 'ITS Tulli Buzzi',
  degree: 'High School Diploma - Junior Electronics Engineer',
  date: 'September 2014 - July 2017',
  description: 'My education at ITS - Buzzi has equipped me with a strong foundation in ' + 'electronics and engineering principles. This program has allowed me to ' + 'develop technical skills in areas such as electrical circuits, digital ' + "systems, and microcontrollers. I've honed my problem-solving abilities " + 'and gained hands-on experience through practical projects and lab work. ' + 'The interdisciplinary nature of the curriculum has broadened my ' + 'knowledge in mathematics, physics, computer science, and engineering.',
  image: '/images/companies/tullio.svg',
  courses: [{
    courseName: 'Mathematics'
  }, {
    courseName: 'Physics'
  }, {
    courseName: 'Electronics'
  }, {
    courseName: 'Electrotechnics'
  }, {
    courseName: 'Informatics'
  }, {
    courseName: 'Automated Systems'
  }, {
    courseName: 'Electrical Design'
  }]
}];

const $$Astro$5 = createAstro("https://maria-louisa.com");
const $$EducationSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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
            <p class="my-2 text-justify">
              My education at SDU has provided me with a comprehensive
              understanding of software engineering, allowing me to
              independently take responsibility for the entire software
              development lifecycle, from identifying needs and analyzing
              requirements to software design, programming, testing, and project
              management.
            </p>
            <div class="flex flex-col">
              <details class="open:transition delay-150"${addAttribute(false, "open")}>
                <summary class="my-2 capitalize font-medium text-gray-700 dark:text-gray-300 text-lg">
                  Courses
                </summary>
                <div class="flex flex-wrap gap-4 justify-stretch">
                  ${education.courses.map((course, index2) => renderTemplate`${renderComponent($$result2, "PlainPill", PlainPill, { "id": course.courseName + "" + index2, "description": course.courseName })}`)}
                </div>
              </details>
            </div>
          </div>
          ${index !== educationData.length - 1 && renderTemplate`<div class="bg-gray-200 dark:bg-gray-600/50 h-px w-full my-4"></div>`}${" "}
        </div>`)}
  </div>
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/EducationSection.astro", void 0);

const experienceData = [{
  company: 'Startup Central - Dit iværksætternetværk Denmark',
  role: 'Software Developer Intern',
  date: 'February 2020 - July 2020',
  image: '/images/companies/startupCentral.svg',
  responsibilities: ['Acquired proficiency in Umbraco and actively contributed to web development projects.', 'Worked in an agile team environment, participating in sprint stand-ups and collaborating with cross-functional teams.', 'Engaged in technical discussions and contributed innovative ideas to enhance technical solutions.']
}, {
  company: 'Biamp Denmark',
  role: 'Juinor Hardware Tester',
  date: 'February 2017 - August 2018',
  image: '/images/companies/biamp.svg',
  responsibilities: ["Tested new releases of the company's software and ensured seamless integration with hardware.", 'Assisted in the assembly of electronic devices, contributing to the production of high-quality products.', 'Collaborated with cross-functional teams to identify areas of improvement and enhance overall product performance.']
}, {
  company: 'Klakring El Denmark',
  role: 'Assistant Electronics Technician',
  date: 'July 2017 - January 2018',
  image: '/images/companies/klakring.svg',
  responsibilities: ['Conducted soldering of electronic components and effectively mounted control panels used in mechanic shops.', 'Ensured the quality and reliability of electronic assemblies by adhering to industry standards and specifications.']
}, {
  company: 'Geltec LTD Paignton, UK',
  role: 'Electronics Technician Intern',
  date: 'May 2016 - July 2016',
  image: '/images/companies/geltec.svg',
  responsibilities: ['Assisted in the development and documentation of a vibration detection sensor circuit for the company.', 'Conducted maintenance tasks for 3D printers, amplifiers, and other electronic appliances.', 'Contributed to the development of water detection sensors and optimized battery life for improved efficiency.']
}, {
  company: 'European Laboratory for Non-Linear Spectroscopy - ITALY',
  role: 'Electronics Technician Intern',
  date: 'September 2016 - September 2016',
  image: '/images/companies/lens.svg',
  responsibilities: ['One month internship during my high school education in Italy.', 'Assisted in the development of hardware components for power lasers within the physics department.', 'Integrated Arduino IDE with Processing IDE and hardware components to create seamless connections.']
}];

const $$Astro$4 = createAstro("https://maria-louisa.com");
const $$ExperienceSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExperienceSection;
  return renderTemplate`${renderComponent($$result, "CardLayout", $$CardLayout, { "id": "exp", "classStyle": "card flex flex-col md:flex-row md:gap-4" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="flex flex-col gap-4">
    ${renderComponent($$result2, "Title", $$Title, { "title": "Experience" })}
    ${experienceData.map((job, index) => renderTemplate`<div class="w-full">
          <div class="flex flex-row gap-8">
            <div class="hidden md:block">
              <img${addAttribute(job.image, "src")}${addAttribute(job.company, "alt")} decoding="async" loading="lazy" width="100" class="rounded-lg w-16 md:w-28 h-auto">
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

const $$Astro$3 = createAstro("https://maria-louisa.com");
const $$ProjectSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/projects/AzureProject.md": () => import('./AzureProject.md.eb777aea.mjs').then(n => n.A),"../pages/projects/angularProject.md": () => import('./angularProject.md.a96d1622.mjs'),"../pages/projects/artcaffe.md": () => import('./artcaffe.md.67fb7b37.mjs'),"../pages/projects/intersectionObserver.md": () => import('./intersectionObserver.md.eefcbb8e.mjs'),"../pages/projects/portfolioProject.md": () => import('./portfolioProject.md.f901cddd.mjs'),"../pages/projects/weatherServer.md": () => import('./weatherServer.md.dceac9f2.mjs')}), () => "../pages/projects/*.md");
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

const $$Astro$2 = createAstro("https://maria-louisa.com");
const $$SplashSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SplashSection;
  return renderTemplate`${maybeRenderHead()}<div class="splash p-5 fixed top-0 left-0 w-full h-full flex items-center justify-center">
  <!-- <h1 class='font-extrabold text-3xl'>$ Good Code is:</h1>

  <div class='grow-0'>
    <span class='text-secondary-text font-extrabold text-6xl' id='typed'
      >jdkkkjj</span
    >
  </div> -->

  <div class="terminal-container flex flex-col w-1/2 h-1/2">
    <div class="terminal-bar flex gap-3 p-3 h-6 items-center font-bold text-neutral-900">
      <div class="close cursor-pointer bg-red-700 w-4 h-4 p-2 text-xs rounded-full flex items-center justify-center">
        &#10005;
      </div>

      <div class="minimize cursor-pointer bg-neutral-600 p-2 w-4 h-4 text-xs rounded-full flex items-center justify-center">
        &#9472;
      </div>
      <div class="maximize cursor-pointer bg-neutral-600 p-2 w-4 h-4 text-xs rounded-full flex items-center justify-center">
        &#9723;
      </div>
      <div class="user">maria@ubuntu: ~</div>
    </div>
    <div class="terminal-console w-full h-full font-mono">
      <div class="">
        <h1 class="text-green-700">maria@ubuntu: ~$ ~/Maria/Portfolio</h1>

        <div class="">
          <span class="text-neutral-200" id="typed"></span>
        </div>
      </div>
    </div>
  </div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/sections/SplashSection.astro", void 0);

const $$Astro$1 = createAstro("https://maria-louisa.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "Maria's Portfolio";
  const seoTitle = "Maria's Portfolio";
  const seoDescription = "Explore my diverse portfolio showcasing innovative software solutions and creative projects. As a skilled software engineer, I specialize in developing well-structured, reusable, and maintainable applications. Discover how my passion for technology drives me to create impactful solutions that make a positive impact. Let's connect and embark on a journey of innovation together";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription, "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "SplashSection", $$SplashSection, { "class": "astro-J7PV25F6" })}
  ${maybeRenderHead()}<div class="hidden-content astro-J7PV25F6">
    ${renderComponent($$result2, "AboutSection", $$AboutSection, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result2, "SkillsSection", $$SkillsSection, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result2, "LanguageSection", $$LanguageSection, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result2, "EducationSection", $$EducationSection, { "class": "astro-J7PV25F6" })}
    ${renderComponent($$result2, "ExperienceSection", $$ExperienceSection, { "class": "astro-J7PV25F6" })}
  </div>
  
  
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
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"./AzureProject.md": () => import('./AzureProject.md.eb777aea.mjs').then(n => n.A),"./angularProject.md": () => import('./angularProject.md.a96d1622.mjs'),"./artcaffe.md": () => import('./artcaffe.md.67fb7b37.mjs'),"./intersectionObserver.md": () => import('./intersectionObserver.md.eefcbb8e.mjs'),"./portfolioProject.md": () => import('./portfolioProject.md.f901cddd.mjs'),"./weatherServer.md": () => import('./weatherServer.md.dceac9f2.mjs')}), () => "../projects/*.md");
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

export { index as a, index$1 as i };
