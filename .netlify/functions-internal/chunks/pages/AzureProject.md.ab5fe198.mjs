/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, s as spreadAttributes, u as unescapeHTML, e as renderHead, f as renderSlot, _ as __astro_tag_component__, F as Fragment$1, g as createVNode } from '../astro.6fa2bed6.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
/* empty css                                  *//* empty css                                  */
const $$Astro$g = createAstro("https://maria-louisa.com");
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate`${maybeRenderHead()}<button onclick="toggleState()" aria-label="theme-switcher" class="border-none bg-transparent hover:opacity-60 transition delay-75 ease-custom-bezier duration-500 astro-N5CD7LW7">
  <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="astro-N5CD7LW7">
    <path class="fill-primary-text dark:fill-transparent astro-N5CD7LW7" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path>
    <path class="fill-transparent dark:fill-secondary-text astro-N5CD7LW7" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path>
  </svg>
</button>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Header/ThemeIcon.astro", void 0);

const $$Astro$f = createAstro("https://maria-louisa.com");
const $$LinkCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LinkCode;
  const { url, content, classItems, urlTarget } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`${classItems} font-sourceCode hover:text-primary-text dark:text-secondary-text active:text-primary-text dark:text-secondary-text astro-WDYU34QM`, "class")}${addAttribute(urlTarget ? urlTarget : "", "target")}>${content}</a>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Typography/LinkCode.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$e = createAstro("https://maria-louisa.com");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Nav;
  const leftmenu = [
    {
      label: "About",
      href: "/#about"
    },
    {
      label: "Skills",
      href: "/#skills"
    },
    {
      label: "Languages",
      href: "#languages"
    }
  ];
  const rightmenu = [
    {
      label: "Education",
      href: "#education"
    },
    {
      label: "Experience",
      href: "/#exp"
    },
    {
      label: "Projects",
      href: "/projects"
      // external: true,
      // badge: "new",
    }
    // {
    //   label: 'Travel',
    //   href: '/travel',
    // },
  ];
  const mobilemenu = [...leftmenu, ...rightmenu];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<nav role="navigation" class="px-5 py-2 shadow-md sticky top-0 z-50 w-full mx-auto rounded-lg navbar transition ease-in duration-400 font-extrabold">\n  <div class="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">\n    <!-- LEFT MENU -->\n    <div class="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">\n      ', '\n    </div>\n    <!-- LOGO & MENU ICON -->\n    <div class="flex w-full justify-around">\n      <div class="md:hidden">\n        ', `
      </div>

      <a id="smallLogo" class="w-32" href="/">
        <!-- <img src={bigLogo} alt=' Logo' /> -->
        <svg class="h-12 w-12 mx-auto text-primary-text dark:text-secondary-text fill-current" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.69 150.99"><title>maria-logo</title><path d="M66.18,151a2.89,2.89,0,0,1-.91-.15,3,3,0,0,1-1.95-3.76C80.07,94.48,90,59.63,94.61,37.4c5.64-27.31,2-30.94.79-31.4C95.22,6,90,5.51,70.77,34.76,59.9,51.29,49.25,70.14,44.7,78.19c-1,1.68-1.65,2.9-2,3.56A3.09,3.09,0,0,1,37,79.39C41.77,62,44.54,46.19,43.8,41.31,37.11,46.07,19.72,70.19,5.67,91.69A3.09,3.09,0,0,1,.14,89.08L15.43,39.64a3,3,0,0,1,5.74,1.77L11.73,71.93C22.15,56.85,36,38.18,42.24,35.28a4.77,4.77,0,0,1,5.29.51c1.22,1,4.43,3.76.11,25.2C80.85,4.07,91.53-1.83,97.49.38c7.19,2.67,8.05,13.74,3,38.23C95.84,61.05,85.85,96.1,69,148.9A3,3,0,0,1,66.18,151ZM5.87,90.85h0Z"></path></svg>
      </a>
      <a id="bigLogo" class="w-32" href="/">
        <svg class="h-12 w-12 mx-auto text-primary-text dark:text-secondary-text fill-current" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.52 150.99"><title>marialogo</title><path d="M97.49.38C91.53-1.83,80.85,4.07,47.64,61c4.32-21.44,1.11-24.16-.11-25.2a4.77,4.77,0,0,0-5.29-.51C36,38.18,22.15,56.85,11.73,71.93l9.44-30.52a3,3,0,0,0-5.74-1.77L.14,89.08a3.09,3.09,0,0,0,5.53,2.61C19.72,70.19,37.11,46.07,43.8,41.31c.74,4.88-2,20.66-6.78,38.08a3.09,3.09,0,0,0,5.65,2.36c.38-.66,1.08-1.88,2-3.56,4.55-8,15.2-26.9,26.07-43.43C90,5.51,95.22,6,95.4,6c1.24.46,4.85,4.09-.79,31.4C90,59.63,80.07,94.48,63.32,147.08a3,3,0,0,0,1.95,3.76,2.89,2.89,0,0,0,.91.15A3,3,0,0,0,69,148.9c16.81-52.8,26.8-87.85,31.44-110.29C105.54,14.12,104.68,3.05,97.49.38Z"></path><path d="M218.22,70.94a3,3,0,0,0-4.17.78c-.06.08-5.45,7.93-7.71,10.53-3.85,4.42-7.17,6.21-8,6l-.12-.13c-1.09-1.45.71-8.81,3.71-15.16a2.86,2.86,0,0,0,.27-1.06,26.67,26.67,0,0,0,2-5.57,3,3,0,0,0-5.94-.61c-.2.59-.88,2.24-1.74,4.21-2.1-1-5.48-2.37-9-1.07-4.74,1.74-7.09,5.22-9.15,8.3a23.44,23.44,0,0,1-3.06,4c-3.28,3.16-6.82,4.11-8.86,3.66a1.86,1.86,0,0,1-1.35-.85c-.25-1,.59-4.1,2-7.78,2-3.64,3.28-6.63,3.59-7.36a3,3,0,0,0-1.61-3.93,3.36,3.36,0,0,0-4.1,1.4c-.88,1.72-2.18,4.41-3.33,7.32-2.82,5.07-6.72,10.85-10.53,12.88-6,3.2-7.36,2.27-7.8,1.66,0-1.34,1.67-6.11,6.49-14a3.86,3.86,0,0,0,.36-3.3c-.65-1.93-3.07-3.87-7.2-5.77,1.35-4.43,1.6-6.76-.78-7.88-1-.46-2.83-.81-4.55,1.9-2.35,3.71-14.48,21.75-15.43,23-.1.11-.24.3-.43.54-3.56,4.66-6.5,6.61-8.29,5.51-1.1-1.76,1.56-10.67,5.52-18.45l0-.06c0-.1.08-.2.12-.3s.07-.17.1-.26a1.88,1.88,0,0,0,0-.33,1,1,0,0,0,0-.25c0-.11,0-.23,0-.34s0-.16,0-.24,0-.22-.08-.33a1,1,0,0,0,0-.23,2.88,2.88,0,0,0-.13-.31c0-.07-.06-.15-.1-.22s-.13-.19-.19-.28l-.14-.19a3,3,0,0,0-.25-.25l-.17-.16c-.1-.08-.2-.13-.3-.2l-.21-.13h0l-.28-.1-.27-.11-.27,0-.32,0H116l-.25.06a1.73,1.73,0,0,0-.31.07l-.25.11-.27.12a1.19,1.19,0,0,0-.23.16,1.38,1.38,0,0,0-.25.17c-.07.06-.13.14-.2.21a2.08,2.08,0,0,0-.21.21c-.06.08-.11.17-.16.25s-.11.16-.16.25l-.41.81c-.23.47-.5,1-.8,1.57a17.48,17.48,0,0,0-3.35-1.37c-7.37-2.23-13.47,5.42-15,8.28-2,3.59-4.89,10.23-2.53,14.37a6.1,6.1,0,0,0,5.41,3l.71,0a12.62,12.62,0,0,0,9.92-4.48,6,6,0,0,0,2.54,4c3.39,2.22,9,2.84,16.4-6.86l.27-.34c.72-.87,6.69-9.72,11.16-16.43l.19.08a32,32,0,0,1,5.68,2.86c-8.38,14.09-6.63,17.17-5.87,18.51a7.18,7.18,0,0,0,6.63,3.86c3.71,0,7.59-2.06,9.33-3a22.23,22.23,0,0,0,5.9-4.91,7.75,7.75,0,0,0,5.29,3.79,10.8,10.8,0,0,0,2.36.25,16.16,16.16,0,0,0,8.45-2.7,7,7,0,0,0,.74,1.77,6.59,6.59,0,0,0,5.42,3.14l.86,0c3.68,0,6.87-2,9.3-4.2a7,7,0,0,0,1.2,2.83,6.11,6.11,0,0,0,4.77,2.51h.21c4.69,0,9.77-5,12.4-8,2.48-2.85,7.9-10.73,8.13-11.07A3,3,0,0,0,218.22,70.94ZM104.72,83.16c-2.53,3.46-4.27,4.48-7.48,4.36a2.09,2.09,0,0,1-.46-.06c-.35-.91.35-4.32,2.62-8.47.57-1,4.51-6.47,8-5.4a10.82,10.82,0,0,1,2.32.94A92.84,92.84,0,0,1,104.72,83.16Zm77.91,3.92c-.2,0-.67-.07-.78-.25-.49-.81,0-3.33.69-5.13l.82-1.22c1.78-2.65,3.32-4.94,6.23-6,1.39-.51,3.15.24,4.54.92-1,2.18-1.84,4-2.13,4.48C190.71,82,186.52,87.41,182.63,87.08Z"></path><path d="M172,62.84a3.07,3.07,0,0,0,1.56.44,3,3,0,0,0,2.56-1.44L180,55.49a3,3,0,0,0-5.12-3.13L171,58.71A3,3,0,0,0,172,62.84Z"></path></svg>
      </a>

      <button id="menu" aria-label="Toggle Menu" class="md:hidden text-primary-text dark:text-secondary-text rounded-md focus:outline-none">
        <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path class="navmenu-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>

          <path class="navmenu-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"></path>
        </svg>
      </button>
    </div>

    <!-- RIGHT MENU -->
    <div class="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
      `, "\n      ", '\n    </div>\n  </div>\n  <!-- PHONE MENU -->\n  <div class="navmenu-toggle hidden">\n    <div class="flex flex-col items-center justify-start order-2 w-full md:hidden">\n      ', "\n    </div>\n  </div>\n</nav>\n<script>\n  const menuButton = document.getElementById('menu');\n  const smallLogo = document.getElementById('smallLogo');\n  const bigLogo = document.getElementById('bigLogo');\n  const navbar = document.querySelector('.navbar');\n  const htmlElement = document.documentElement;\n  menuButton.addEventListener('click', () => {\n    [...document.querySelectorAll('.navmenu-toggle')].forEach((Element) => {\n      Element.classList.toggle('hidden');\n    });\n  });\n\n  const updateScrollAttribute = () => {\n    const scrollTop = htmlElement.scrollTop || document.body.scrollTop;\n    if (scrollTop > 0) {\n      htmlElement.setAttribute('data-scroll', '1');\n      navbar.classList.add(\n        'shadow-lg',\n        'bg-primary-light',\n        'dark:bg-secondary'\n      );\n      navbar.classList.remove('shadow-md');\n      bigLogo.classList.remove('hidden');\n      smallLogo.classList.add('hidden');\n    } else {\n      htmlElement.setAttribute('data-scroll', '0');\n      navbar.classList.remove(\n        'shadow-lg',\n        'bg-primary-light',\n        'dark:bg-secondary'\n      );\n      navbar.classList.add('shadow-md');\n      // bigLogo.classList.remove('hidden');\n      // smallLogo.classList.add('hidden');\n\n      bigLogo.classList.add('hidden');\n      smallLogo.classList.remove('hidden');\n    }\n  };\n  // Attach scroll event listener\n  window.addEventListener('scroll', updateScrollAttribute);\n  // Initial call to update the scroll attribute on page load\n  updateScrollAttribute();\n<\/script>"])), maybeRenderHead(), leftmenu.map((item) => renderTemplate`${renderComponent($$result, "LinkCode", $$LinkCode, { "url": item.href, "content": item.label, "classItems": " nav__link px-2 lg:px-5 py-2 md:text-sm" })}`), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), rightmenu.map((item) => renderTemplate`${renderComponent($$result, "LinkCode", $$LinkCode, { "url": item.href, "content": item.label, "classItems": "nav__link px-2 lg:px-5 py-2 md:text-sm" })}`), renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "class": "hidden md:inline-flex" }), mobilemenu.map((item) => renderTemplate`${renderComponent($$result, "LinkCode", $$LinkCode, { "url": item.href, "content": item.label, "classItems": "px-5 py-2" })}`));
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Header/Nav.astro", void 0);

const $$Astro$d = createAstro("https://maria-louisa.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="footer" class="backdrop-filter backdrop-blur-lg bg-primary-light dark:bg-secondary/95 w-full p-4 rounded-t-xl shadow-xl lg:space-y-8 mt-auto">
  <div class="flex justify-center items-center">
    <p class="text-neutral-500 dark:text-neutral-400">
      &copy; ${( new Date()).getFullYear()} Maria Louisa Failli. All rights reserved.
    </p>
  </div>
</footer>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Footer.astro", void 0);

const $$Astro$c = createAstro("https://maria-louisa.com");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$b = createAstro("https://maria-louisa.com");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$a = createAstro("https://maria-louisa.com");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$9 = createAstro("https://maria-louisa.com");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$8 = createAstro("https://maria-louisa.com");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$7 = createAstro("https://maria-louisa.com");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$6 = createAstro("https://maria-louisa.com");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$5 = createAstro("https://maria-louisa.com");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}
${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/astro-seo/src/SEO.astro", void 0);

const tabLogo = "/images/profile.webp";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://maria-louisa.com");
const $$LayoutTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LayoutTags;
  const {
    pageTitle,
    // description,
    seoTitle,
    seoDescription,
    image = "/images/pageIcon.png"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><head>\n  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7WTEYMG4ZZ"><\/script>\n  \n  ', '\n\n  <link rel="sitemap" href="/sitemap-index.xml">\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <meta name="description"', '>\n\n  <meta name="theme-color" media="(prefers-color-scheme: light)" content="bg-primary/80 ">\n  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="bg-secondary-dark/90">\n  <link rel="icon" type="image/svg+xml"', '>\n  <link rel="manifest" href="../../manifest.json">\n  <link rel="apple-touch-icon" href="/images/pageIcon.png">\n\n  <title>', `</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;600&family=Source+Code+Pro:wght@200;400;600&display=swap" rel="stylesheet">

  <script src="/lib/theme-util.js" type="text/javascript"><\/script>
  <script src="/lib/index.js" type="text/javascript" defer><\/script>
  <!-- <script src='/lib/serviceWorker.js' type='text/javascript'><\/script> -->
`, "</head>"])), renderComponent($$result, "SEO", $$SEO, { "title": seoTitle, "description": seoDescription, "openGraph": {
    basic: {
      title: "Maria's Portfolio",
      type: "website",
      image
    }
  } }), addAttribute(seoDescription, "content"), addAttribute(tabLogo, "href"), pageTitle, renderHead());
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/LayoutTags.astro", void 0);

const $$Astro$3 = createAstro("https://maria-louisa.com");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle, seoTitle, seoDescription } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth astro-37FXCHFA">
  ${renderComponent($$result, "LayoutTags", $$LayoutTags, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription, "class": "astro-37FXCHFA" })}
  ${maybeRenderHead()}<body class="overflow-x-hidden bg-primary/80 dark:bg-secondary-dark/90 text-neutral-700 dark:text-neutral-300 font-dosis transition-colors ease-in duration-450 astro-37FXCHFA">
    <div id="cursor" class="border-2 border-primary-text dark:border-secondary-text astro-37FXCHFA">
    </div>
    <div id="pointer" class="rounded-full dark:bg-secondary-text bg-primary-text astro-37FXCHFA">
    </div>
    ${renderComponent($$result, "Nav", $$Nav, { "class": " astro-37FXCHFA" })}
    <div id="tab-preview" class="astro-37FXCHFA">
      <div class="tab-preview-content astro-37FXCHFA">
        <img src="" alt="Tab Preview Image" class="astro-37FXCHFA">
        <p class="tab-preview-title astro-37FXCHFA">Tab Title</p>
      </div>
    </div>

    <div class="pages-container astro-37FXCHFA">
      ${renderSlot($$result, $$slots["default"])}
    </div>
    ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-37FXCHFA" })}
    
  </body>
</html>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/BaseLayout.astro", void 0);

const IconPill = ({
  iconSrc,
  description,
  classListItems
}) => {
  const classNames = `flex gap-2 ${classListItems || ""}`;
  return /* @__PURE__ */ jsx("div", {
    className: "interactable flex items-center bg-violet-500/20 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-1.5 md:px-2.5 py-3.5 text-gray-700 text-ellipsis ...  w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 ",
    children: /* @__PURE__ */ jsxs("div", {
      className: classNames,
      children: [/* @__PURE__ */ jsx("img", {
        src: iconSrc,
        alt: description + "icon",
        className: "h-auto w-4"
      }), description ? /* @__PURE__ */ jsx("p", {
        className: "capitalize text-xs md:text-base truncate",
        children: description
      }) : /* @__PURE__ */ jsx(Fragment, {})]
    })
  });
};
__astro_tag_component__(IconPill, "@astrojs/react");

const $$Astro$2 = createAstro("https://maria-louisa.com");
const $$Subtitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Subtitle;
  const { subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-2 items-center">
  <p class="my-2 capitalize font-medium text-gray-700 dark:text-gray-300 text-lg">
    ${subTitle}
  </p>
  <div class="bg-gray-200 dark:bg-gray-600/50 h-px grow"></div>
</div>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Typography/Subtitle.astro", void 0);

const $$Astro$1 = createAstro("https://maria-louisa.com");
const $$CardLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardLayout;
  const { id, classStyle } = Astro2.props;
  const hasClassStyle = classStyle !== void 0;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(` ${hasClassStyle ? classStyle : ""} card flex-1 section my-4 backdrop-filter backdrop-blur-lg
   bg-primary-light dark:bg-secondary/95 w-11/12 md:w-3/4  mx-auto p-8 
   rounded-xl shadow-xl lg:space-y-8 `, "class")}>
  ${renderSlot($$result, $$slots["default"])}
</section>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/CardLayout.astro", void 0);

const $$Astro = createAstro("https://maria-louisa.com");
const $$MarkdownProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownProjectLayout;
  const { frontmatter } = Astro2.props;
  const formattedImages = frontmatter.images ? frontmatter.images.map((imageUrl) => ({
    largeURL: imageUrl.url,
    thumbnailURL: imageUrl.thumbNailUrl,
    width: imageUrl.width,
    height: imageUrl.height
  })) : [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.description, "seoTitle": frontmatter.title, "seoDescription": frontmatter.description }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "CardLayout", $$CardLayout, { "id": frontmatter.title, "classStyle": "" }, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Fragment", Fragment$1, {}, { "default": ($$result4) => renderTemplate`
      ${maybeRenderHead()}<div class="flex flex-col gap-8">
        <div class="flex flex-col gap-3">
          <div class="flex gap-2 justify-between w-full">
            <div class="flex gap-4">
              <div class="flex-col">
                <div>
                  <h1 class="tracking-wide capitalize text-xl font-semibold">
                    ${frontmatter.title}
                  </h1>
                </div>
                <div class="flex flex-col gap-3">
                  ${" "}
                  <div class="text-sm mb-4">
                    <div class="flex flex-row gap-2">
                      <span class="text-neutral-950 dark:text-neutral-100">
                        My role:
                      </span>
                      <p class="text-neutral-500 capitalize">
                        ${frontmatter.role}
                      </p>
                    </div>
                    <div class="flex flex-row gap-2">
                      <span class="text-neutral-950 dark:text-neutral-100">
                        Team size:
                      </span>
                      <p class="text-neutral-500 capitalize">
                        ${frontmatter.teamNum}
                      </p>
                    </div>
                    <div class="flex flex-row gap-2">
                      <span class="text-neutral-950 dark:text-neutral-100">
                        Company:
                      </span>
                      <p class="text-neutral-500 capitalize">
                        ${frontmatter.organization}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-3 flex-wrap sm:flex-nowrap">
              ${frontmatter.externals.map((external) => renderTemplate`<a${addAttribute(external.url, "href")} class="cursor-pointer" target="_blank">
                    ${renderComponent($$result4, "IconPill", IconPill, { "iconSrc": `../images/${external.name}.svg`, "description": "" })}
                  </a>`)}
            </div>
          </div>
          <div class="flex flex-col gap-3">
            ${renderComponent($$result4, "Fragment", Fragment$1, {}, { "default": ($$result5) => renderTemplate`
              <p class="mb-4 italic">
                ${frontmatter.description}
              </p>
            ` })}
            <div>
              <p class="text-sm text-neutral-500">Technologies Used:</p>
              <div class="flex flex-wrap gap-4">
                ${frontmatter.technologies.map((tech) => renderTemplate`${renderComponent($$result4, "IconPill", IconPill, { "iconSrc": `../images/${tech}.svg`, "description": tech })}`)}
              </div>
            </div>
          </div>
        </div>
      </div>
    ` })}
    ${formattedImages.length > 0 ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment$1, {}, { "default": ($$result4) => renderTemplate`${" "}${renderComponent($$result4, "Subtitle", $$Subtitle, { "subTitle": "Project Gallery" })}
          ${renderComponent($$result4, "Gallery", null, { "client:only": "react", "galleryID": "my-test-gallery", "images": formattedImages, "client:component-hydration": "only", "client:component-path": "@components/Gallery", "client:component-export": "default" })}
        ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment$1, {})}`}${renderSlot($$result3, $$slots["default"])}
  ` })}
` })}

<style>
  p {
    text-align: justify;
    text-justify: inter-word;
  }

  /* Styling for headings */
  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 2rem;
  }
  h3{
  font-size: 0.9rem;
  font-weight: bold;
    margin-top: 2rem;
  }

  .astro-code {
  padding: 1rem;
  font-family: monospace;
  border-radius: 4px;
}
</style>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/MarkdownProjectLayout.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"introduction\">Introduction</h2>\n<p>This project explores cloud computing, specifically using Microsoft Azure, to create a system accessible via a web browser for United Airlines managers to view airport-related data. The project’s main challenges include selecting the right cloud provider, designing the system’s architecture, and implementing DevOps practices for efficient development and deployment.</p>\n<h2 id=\"analysis\">ANALYSIS</h2>\n<p>The project begins by analyzing the problem domain and defining requirements. User stories are used to facilitate implementation and testing. The requirements cover various aspects, including data visualization, weather information, and manufacturer data.</p>\n<h2 id=\"design\">DESIGN</h2>\n<p>The system architecture is designed using microservices, which are loosely coupled and independently deployable. It comprises four microservices, an Azure SQL Database, and a React.js web application for data presentation. Azure Functions Proxies are used to create a single API surface for the microservices.</p>\n<h2 id=\"implementation\">IMPLEMENTATION</h2>\n<p>The Azure SQL Database is created and populated with data provided by stakeholders. Four Azure HTTP Trigger Functions are implemented to retrieve flight, weather, and manufacturer data. A Timer Trigger Function periodically updates data from the database to Azure Blob Storage. The Azure Functions Proxies application exposes the microservices’ front-end APIs.</p>\n<h2 id=\"test\">TEST</h2>\n<p>Testing includes Postman tests for the HTTP trigger functions, interface, usability, and performance testing for the web application, and CI/CD testing to ensure successful updates and deployments.</p>\n<h2 id=\"results-and-discussion\">RESULTS AND DISCUSSION</h2>\n<p>The project successfully delivers a system that allows United Airlines managers to access flight-related data from anywhere with internet access. The use of CI/CD enables frequent code updates, and microservices architecture enhances scalability and maintainability.</p>\n<h2 id=\"conclusions\">CONCLUSIONS</h2>\n<p>The project demonstrates the benefits of cloud computing, DevOps, and microservices in building a scalable and reliable system. The use of Microsoft Azure, React.js, and CI/CD processes contributes to efficient development and deployment.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Airline System with Azure","role":"developer","teamNum":"2","organization":"VIA University","description":"A cloud-based system for United Airlines managers to access flight-related data through a web application. The system utilizes cloud computing services, DevOps practices, and Microsoft Azure. It includes microservices for retrieving data, an Azure SQL Database, and a React.js web application for data visualization","images":[],"featured":true,"technologies":["react","azure","api","postman","html","javascript","css","cicd"],"externals":[{"name":"github","url":"https://github.com/314ga/SEP6-WebApp3"},{"name":"github","url":"https://github.com/314ga/SEP6-UnitedAirlanes/"}]};
				const file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/AzureProject.md";
				const url = "/projects/AzureProject";
				function rawContent() {
					return "\n## Introduction\n\nThis project explores cloud computing, specifically using Microsoft Azure, to create a system accessible via a web browser for United Airlines managers to view airport-related data. The project's main challenges include selecting the right cloud provider, designing the system's architecture, and implementing DevOps practices for efficient development and deployment.\n\n## ANALYSIS\n\nThe project begins by analyzing the problem domain and defining requirements. User stories are used to facilitate implementation and testing. The requirements cover various aspects, including data visualization, weather information, and manufacturer data.\n\n## DESIGN\n\nThe system architecture is designed using microservices, which are loosely coupled and independently deployable. It comprises four microservices, an Azure SQL Database, and a React.js web application for data presentation. Azure Functions Proxies are used to create a single API surface for the microservices.\n\n## IMPLEMENTATION\n\nThe Azure SQL Database is created and populated with data provided by stakeholders. Four Azure HTTP Trigger Functions are implemented to retrieve flight, weather, and manufacturer data. A Timer Trigger Function periodically updates data from the database to Azure Blob Storage. The Azure Functions Proxies application exposes the microservices' front-end APIs.\n\n## TEST\n\nTesting includes Postman tests for the HTTP trigger functions, interface, usability, and performance testing for the web application, and CI/CD testing to ensure successful updates and deployments.\n\n## RESULTS AND DISCUSSION\n\nThe project successfully delivers a system that allows United Airlines managers to access flight-related data from anywhere with internet access. The use of CI/CD enables frequent code updates, and microservices architecture enhances scalability and maintainability.\n\n## CONCLUSIONS\n\nThe project demonstrates the benefits of cloud computing, DevOps, and microservices in building a scalable and reliable system. The use of Microsoft Azure, React.js, and CI/CD processes contributes to efficient development and deployment.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"analysis","text":"ANALYSIS"},{"depth":2,"slug":"design","text":"DESIGN"},{"depth":2,"slug":"implementation","text":"IMPLEMENTATION"},{"depth":2,"slug":"test","text":"TEST"},{"depth":2,"slug":"results-and-discussion","text":"RESULTS AND DISCUSSION"},{"depth":2,"slug":"conclusions","text":"CONCLUSIONS"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment$1, { 'set:html': html });
					return createVNode($$MarkdownProjectLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const AzureProject = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownProjectLayout as $, AzureProject as A, IconPill as I, $$Subtitle as a, $$CardLayout as b, $$LinkCode as c, $$BaseLayout as d, $$LayoutTags as e };
