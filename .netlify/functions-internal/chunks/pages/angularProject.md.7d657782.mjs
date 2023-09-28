/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent, F as Fragment$1, g as createVNode, s as spreadAttributes } from '../astro.713e64d5.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { $ as $$BaseLayout } from './_technology_.astro.4ff51612.mjs';

const Pill = ({
  iconSrc,
  description,
  classListItems
}) => {
  const classNames = `flex gap-2 ${classListItems || ''}`;
  return jsx("div", {
    className: 'flex items-center bg-violet-500/20 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-1.5 md:px-2.5 text-gray-700 text-ellipsis ...  w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 cursor-pointer',
    children: jsxs("div", {
      className: classNames,
      children: [jsx("img", {
        src: iconSrc,
        alt: description + 'icon',
        className: 'h-auto w-4'
      }), description ? jsx("p", {
        className: 'capitalize text-xs md:text-base truncate',
        children: description
      }) : jsx(Fragment, {})]
    })
  });
};

const $$Astro$2 = createAstro("https://maria-louisa.com/");
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

const $$Astro$1 = createAstro("https://maria-louisa.com/");
const $$CardLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardLayout;
  const { id, classStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(` ${classStyle} card flex-1 section my-4 backdrop-filter backdrop-blur-lg
   bg-primary-light dark:bg-secondary/95 w-11/12 md:w-3/4  mx-auto p-8 
   rounded-xl shadow-xl lg:space-y-8 `, "class")}>
  ${renderSlot($$result, $$slots["default"])}
</section>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/CardLayout.astro", void 0);

const $$Astro = createAstro("https://maria-louisa.com/");
const $$MarkdownProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownProjectLayout;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/projects/angularProject.md": () => Promise.resolve().then(() => angularProject),"../pages/projects/artcaffe.md": () => import('./artcaffe.md.a453def8.mjs'),"../pages/projects/intersectionObserver.md": () => import('./intersectionObserver.md.d076c81b.mjs'),"../pages/projects/portfolioProject.md": () => import('./portfolioProject.md.b61c6424.mjs')}), () => "../pages/projects/*.md");
  const { frontmatter } = Astro2.props;
  const seoDescription = "Projects";
  const formattedImages = frontmatter.images ? frontmatter.images.map((imageUrl) => ({
    largeURL: imageUrl.url,
    thumbnailURL: imageUrl.thumbNailUrl,
    width: imageUrl.width,
    height: imageUrl.height
  })) : [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.description, "seoTitle": frontmatter.title, "seoDescription": seoDescription }, { "default": ($$result2) => renderTemplate`
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
                    ${renderComponent($$result4, "Pill", Pill, { "iconSrc": `../images/${external.name}.svg`, "description": "demo" })}
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
                ${frontmatter.technologies.map((tech) => renderTemplate`${renderComponent($$result4, "Pill", Pill, { "iconSrc": `../images/${tech}.svg`, "description": tech })}`)}
              </div>
            </div>
          </div>
        </div>
      </div>
    ` })}
    ${formattedImages.length > 0 ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment$1, {}, { "default": ($$result4) => renderTemplate`${" "}${renderComponent($$result4, "Subtitle", $$Subtitle, { "subTitle": "Project Gallery" })}
          ${renderComponent($$result4, "Gallery", null, { "client:only": "react", "galleryID": "my-test-gallery", "images": formattedImages, "client:component-hydration": "only", "client:component-path": "@sections/Gallery", "client:component-export": "default" })}
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

				const html = updateImageReferences("<h2 id=\"description\">Description</h2>\n<p>This guide aims to walk you through the process of seamlessly integrating Angular, a popular JavaScript framework, with Astro, a modern static site generator. By combining the capabilities of Angular’s dynamic components with Astro’s performance benefits, you can create dynamic and performant web applications that provide the best of both worlds</p>\n<h2 id=\"step-1-create-an-astro-project\">Step 1: Create an Astro Project</h2>\n<p>Begin by initiating a new Astro project using the following command:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #6A737D\"># create a new project with npm</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">npm</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">create</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">astro@latest</span></span></code></pre>\n<p>This command will set up the foundation for your Astro project.</p>\n<h2 id=\"step-2-implementing-angular-and-astro\">Step 2: Implementing Angular and Astro</h2>\n<p>Integrating Angular with Astro is straightforward. Execute the following command:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #B392F0\">npx</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">astro</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">add</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">@analogjs/astro-angular</span></span></code></pre>\n<p>By running this command, you ensure a seamless collaboration between Angular and Astro.</p>\n<h2 id=\"step-3-setting-up-the-ts-config\">Step 3: Setting Up the TS Config</h2>\n<p>To ensure smooth integration between Angular and Astro, create a tsconfig.app.json file in your project’s root. Follow these steps:</p>\n<ol>\n<li>\n<p>Create a file named <code>tsconfig.app.json</code> in the root directory of your project.</p>\n</li>\n<li>\n<p>Add the following configuration code to the <code>tsconfig.app.json</code> file:</p>\n</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #E1E4E8\">{</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"extends\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"./tsconfig.json\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"compileOnSave\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"compilerOptions\"</span><span style=\"color: #E1E4E8\">: {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"baseUrl\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"./\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"outDir\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"./dist/out-tsc\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"forceConsistentCasingInFileNames\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"strict\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noImplicitOverride\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noPropertyAccessFromIndexSignature\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noImplicitReturns\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noFallthroughCasesInSwitch\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"sourceMap\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"declaration\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"downlevelIteration\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"experimentalDecorators\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"moduleResolution\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"node\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"importHelpers\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noEmit\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"target\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"es2020\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"module\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"es2020\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"lib\"</span><span style=\"color: #E1E4E8\">: [</span><span style=\"color: #9ECBFF\">\"es2020\"</span><span style=\"color: #E1E4E8\">, </span><span style=\"color: #9ECBFF\">\"dom\"</span><span style=\"color: #E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"skipLibCheck\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  },</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"angularCompilerOptions\"</span><span style=\"color: #E1E4E8\">: {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"enableI18nLegacyMessageIdFormat\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"strictInjectionParameters\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"strictInputAccessModifiers\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"strictTemplates\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"allowJs\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  },</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"files\"</span><span style=\"color: #E1E4E8\">: [],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"include\"</span><span style=\"color: #E1E4E8\">: [</span><span style=\"color: #9ECBFF\">\"src/**/*.ts\"</span><span style=\"color: #E1E4E8\">, </span><span style=\"color: #9ECBFF\">\"src/**/*.tsx\"</span><span style=\"color: #E1E4E8\">]</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">}</span></span></code></pre>\n<h2 id=\"step-4-adding-angular-integration-to-astro\">Step 4: Adding Angular Integration to Astro</h2>\n<p>Now we need to add the integration to the <code>astro.config.mjs</code>. Follow these steps:</p>\n<ol>\n<li>\n<p>Find the <code>astro.config.mjs</code> file in the root of your project.</p>\n</li>\n<li>\n<p>Update with the the following imports and configuration:</p>\n</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> { defineConfig } </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'astro/config'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> angular </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'@analogjs/astro-angular'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> analogjsangular </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'@analogjs/astro-angular'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">export</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">default</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">defineConfig</span><span style=\"color: #E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  site: </span><span style=\"color: #9ECBFF\">'https://yoursite.com/'</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  integrations: [</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #B392F0\">angular</span><span style=\"color: #E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">      vite: {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">        inlineStylesExtension: </span><span style=\"color: #9ECBFF\">'scss|sass|less'</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">        ssr: {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">          </span><span style=\"color: #6A737D\">// transform these packages during SSR. Globs supported</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">          noExternal: [</span><span style=\"color: #9ECBFF\">'@rx-angular/**'</span><span style=\"color: #E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">        },</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">      },</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    }),</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #B392F0\">analogjsangular</span><span style=\"color: #E1E4E8\">(),</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  ],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  output: </span><span style=\"color: #9ECBFF\">'server'</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">});</span></span></code></pre>\n<h2 id=\"step-5-creating-an-angular-component\">Step 5: Creating an Angular Component</h2>\n<ol>\n<li>\n<p>Let’s create a component in the <code>src/components</code> folder. Name it <code>hello.component.ts</code>.</p>\n</li>\n<li>\n<p>Define your component. Bear in mind that Astro Angular integration exclusively supports rendering standalone components:</p>\n</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> { NgIf } </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'@angular/common'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> { Component, Input } </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'@angular/core'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">@</span><span style=\"color: #B392F0\">Component</span><span style=\"color: #E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  selector: </span><span style=\"color: #9ECBFF\">'app-hello'</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  standalone: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  imports: [NgIf],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  template: </span><span style=\"color: #9ECBFF\">`</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    &#x3C;p>Hello from Angular!!&#x3C;/p></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    &#x3C;p *ngIf=\"show\">{{ helpText }}&#x3C;/p></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    &#x3C;button (click)=\"toggle()\">Toggle&#x3C;/button></span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">  `</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">})</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">export</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">class</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">HelloComponent</span><span style=\"color: #E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  @</span><span style=\"color: #B392F0\">Input</span><span style=\"color: #E1E4E8\">() </span><span style=\"color: #FFAB70\">helpText</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'help'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #FFAB70\">show</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #B392F0\">toggle</span><span style=\"color: #E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">this</span><span style=\"color: #E1E4E8\">.show </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">!</span><span style=\"color: #79B8FF\">this</span><span style=\"color: #E1E4E8\">.show;</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">}</span></span></code></pre>\n<h2 id=\"step-6-adding-the-component-to-astro-template\">Step 6: Adding the Component to Astro Template</h2>\n<ol>\n<li>Import the component:</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #E1E4E8\">---</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">import { HelloComponent } from '../components/hello.component';</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">const helpText = \"Helping binding\";</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">---</span></span></code></pre>\n<ol start=\"2\">\n<li>Hydrate the component for JavaScript loading:</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #E1E4E8\">&#x3C;</span><span style=\"color: #FDAEB7; font-style: italic\">HelloComponent</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">client:visible</span><span style=\"color: #E1E4E8\"> /></span></span></code></pre>\n<h2 id=\"step-7-running-the-application\">Step 7: Running the Application</h2>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #e1e4e8\">npm run dev</span></span></code></pre>\n<p>This will initiate your integrated Angular and Astro application for local development.\r\nCongratulations, you’ve successfully unlocked the door to a dynamic and performant web development journey by integrating Angular with Astro.</p>\n<p>As you embark on this exciting journey, don’t hesitate to customize and expand upon what you’ve learned here. Feel free to explore deeper integrations, experiment with different Angular components, and unleash your creativity to create truly exceptional web experiences.\r\nHappy coding!</p>\n<p><em>This tutorial draws inspiration from the comprehensive documentation provided by Analog.js. For further insights and detailed information about Astro Angular integration, you can explore the <a href=\"https://analogjs.org/docs/packages/astro-angular/overview\">official Analog.js documentation</a> as well as the <a href=\"https://astro.build/\">Astro website documentation</a>. Building upon these resources, we’ll guide you through the process of seamlessly integrating Angular with Astro to craft dynamic and performant web applications.</em></p>");

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Angular & Astro - Web Application","role":"developer","teamNum":"1","organization":"None","description":"A project demonstrating the use of Angular within Astro project.","images":[],"featured":true,"technologies":["angular","astro"],"externals":[{"name":"web","url":"https://maria-louisa.com/"}]};
				const file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/angularProject.md";
				const url = "/projects/angularProject";
				function rawContent() {
					return "\r\n## Description\r\n\r\nThis guide aims to walk you through the process of seamlessly integrating Angular, a popular JavaScript framework, with Astro, a modern static site generator. By combining the capabilities of Angular's dynamic components with Astro's performance benefits, you can create dynamic and performant web applications that provide the best of both worlds\r\n\r\n## Step 1: Create an Astro Project\r\n\r\nBegin by initiating a new Astro project using the following command:\r\n\r\n```sh\r\n# create a new project with npm\r\nnpm create astro@latest\r\n```\r\n\r\nThis command will set up the foundation for your Astro project.\r\n\r\n## Step 2: Implementing Angular and Astro\r\n\r\nIntegrating Angular with Astro is straightforward. Execute the following command:\r\n\r\n```sh\r\nnpx astro add @analogjs/astro-angular\r\n```\r\n\r\nBy running this command, you ensure a seamless collaboration between Angular and Astro.\r\n\r\n## Step 3: Setting Up the TS Config\r\n\r\nTo ensure smooth integration between Angular and Astro, create a tsconfig.app.json file in your project's root. Follow these steps:\r\n\r\n1. Create a file named `tsconfig.app.json` in the root directory of your project.\r\n\r\n2. Add the following configuration code to the `tsconfig.app.json` file:\r\n\r\n```json\r\n{\r\n  \"extends\": \"./tsconfig.json\",\r\n  \"compileOnSave\": false,\r\n  \"compilerOptions\": {\r\n    \"baseUrl\": \"./\",\r\n    \"outDir\": \"./dist/out-tsc\",\r\n    \"forceConsistentCasingInFileNames\": true,\r\n    \"strict\": true,\r\n    \"noImplicitOverride\": true,\r\n    \"noPropertyAccessFromIndexSignature\": true,\r\n    \"noImplicitReturns\": true,\r\n    \"noFallthroughCasesInSwitch\": true,\r\n    \"sourceMap\": true,\r\n    \"declaration\": false,\r\n    \"downlevelIteration\": true,\r\n    \"experimentalDecorators\": true,\r\n    \"moduleResolution\": \"node\",\r\n    \"importHelpers\": true,\r\n    \"noEmit\": false,\r\n    \"target\": \"es2020\",\r\n    \"module\": \"es2020\",\r\n    \"lib\": [\"es2020\", \"dom\"],\r\n    \"skipLibCheck\": true\r\n  },\r\n  \"angularCompilerOptions\": {\r\n    \"enableI18nLegacyMessageIdFormat\": false,\r\n    \"strictInjectionParameters\": true,\r\n    \"strictInputAccessModifiers\": true,\r\n    \"strictTemplates\": true,\r\n    \"allowJs\": false\r\n  },\r\n  \"files\": [],\r\n  \"include\": [\"src/**/*.ts\", \"src/**/*.tsx\"]\r\n}\r\n```\r\n\r\n## Step 4: Adding Angular Integration to Astro\r\n\r\nNow we need to add the integration to the `astro.config.mjs`. Follow these steps:\r\n\r\n1. Find the `astro.config.mjs` file in the root of your project.\r\n\r\n2. Update with the the following imports and configuration:\r\n\r\n```js\r\nimport { defineConfig } from 'astro/config';\r\nimport angular from '@analogjs/astro-angular';\r\nimport analogjsangular from '@analogjs/astro-angular';\r\n\r\nexport default defineConfig({\r\n  site: 'https://yoursite.com/',\r\n  integrations: [\r\n    angular({\r\n      vite: {\r\n        inlineStylesExtension: 'scss|sass|less',\r\n        ssr: {\r\n          // transform these packages during SSR. Globs supported\r\n          noExternal: ['@rx-angular/**'],\r\n        },\r\n      },\r\n    }),\r\n    analogjsangular(),\r\n  ],\r\n  output: 'server',\r\n});\r\n```\r\n\r\n## Step 5: Creating an Angular Component\r\n\r\n1. Let's create a component in the `src/components` folder. Name it `hello.component.ts`.\r\n\r\n2. Define your component. Bear in mind that Astro Angular integration exclusively supports rendering standalone components:\r\n\r\n```ts\r\nimport { NgIf } from '@angular/common';\r\nimport { Component, Input } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'app-hello',\r\n  standalone: true,\r\n  imports: [NgIf],\r\n  template: `\r\n    <p>Hello from Angular!!</p>\r\n\r\n    <p *ngIf=\"show\">{{ helpText }}</p>\r\n\r\n    <button (click)=\"toggle()\">Toggle</button>\r\n  `,\r\n})\r\nexport class HelloComponent {\r\n  @Input() helpText = 'help';\r\n\r\n  show = false;\r\n\r\n  toggle() {\r\n    this.show = !this.show;\r\n  }\r\n}\r\n```\r\n\r\n## Step 6: Adding the Component to Astro Template\r\n\r\n1. Import the component:\r\n\r\n```markdown\r\n---\r\nimport { HelloComponent } from '../components/hello.component';\r\nconst helpText = \"Helping binding\";\r\n---\r\n```\r\n\r\n2. Hydrate the component for JavaScript loading:\r\n\r\n```html\r\n<HelloComponent client:visible />\r\n```\r\n\r\n## Step 7: Running the Application\r\n\r\n```\r\nnpm run dev\r\n```\r\n\r\nThis will initiate your integrated Angular and Astro application for local development.\r\nCongratulations, you've successfully unlocked the door to a dynamic and performant web development journey by integrating Angular with Astro.\r\n\r\nAs you embark on this exciting journey, don't hesitate to customize and expand upon what you've learned here. Feel free to explore deeper integrations, experiment with different Angular components, and unleash your creativity to create truly exceptional web experiences.\r\nHappy coding!\r\n\r\n_This tutorial draws inspiration from the comprehensive documentation provided by Analog.js. For further insights and detailed information about Astro Angular integration, you can explore the [official Analog.js documentation](https://analogjs.org/docs/packages/astro-angular/overview) as well as the [Astro website documentation](https://astro.build/). Building upon these resources, we'll guide you through the process of seamlessly integrating Angular with Astro to craft dynamic and performant web applications._\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"description","text":"Description"},{"depth":2,"slug":"step-1-create-an-astro-project","text":"Step 1: Create an Astro Project"},{"depth":2,"slug":"step-2-implementing-angular-and-astro","text":"Step 2: Implementing Angular and Astro"},{"depth":2,"slug":"step-3-setting-up-the-ts-config","text":"Step 3: Setting Up the TS Config"},{"depth":2,"slug":"step-4-adding-angular-integration-to-astro","text":"Step 4: Adding Angular Integration to Astro"},{"depth":2,"slug":"step-5-creating-an-angular-component","text":"Step 5: Creating an Angular Component"},{"depth":2,"slug":"step-6-adding-the-component-to-astro-template","text":"Step 6: Adding the Component to Astro Template"},{"depth":2,"slug":"step-7-running-the-application","text":"Step 7: Running the Application"}];
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

const angularProject = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { $$MarkdownProjectLayout as $, Pill as P, $$Subtitle as a, $$CardLayout as b, angularProject as c };
