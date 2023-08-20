/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, F as Fragment, m as maybeRenderHead, b as addAttribute, f as renderSlot, g as createVNode, s as spreadAttributes } from '../astro.6fa2bed6.mjs';
import { $ as $$CardLayout, P as Pill, a as $$Subtitle } from './index.astro.df9a12de.mjs';
import { $ as $$BaseLayout } from './_tag_.astro.a8fff8ab.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'react/jsx-runtime';
/* empty css                           *//* empty css                               */
const $$Astro = createAstro("https://maria-louisa.com/");
const $$MarkdownProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownProjectLayout;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/projects/project-1.md": () => Promise.resolve().then(() => project1)}), () => "../pages/projects/*.md");
  const { frontmatter } = Astro2.props;
  const seoDescription = "Projects";
  const formattedImages = frontmatter.images.map((imageUrl) => ({
    largeURL: imageUrl.url,
    thumbnailURL: imageUrl.thumbNailUrl,
    width: imageUrl.width,
    // Set the actual width
    height: imageUrl.height
    // Set the actual height
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.description, "seoTitle": frontmatter.title, "seoDescription": seoDescription }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "CardLayout", $$CardLayout, { "id": frontmatter.title, "classStyles": "" }, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`
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
                    ${renderComponent($$result4, "Pill", Pill, { "iconSrc": `../images/${external.name}.svg` })}
                  </a>`)}
            </div>
          </div>
          <div class="flex flex-col gap-3">
            ${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate`
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
    ${renderComponent($$result3, "Subtitle", $$Subtitle, { "subTitle": "Project Gallery" })}

    ${renderComponent($$result3, "Gallery", null, { "client:only": "react", "galleryID": "my-test-gallery", "images": formattedImages, "client:component-hydration": "only", "client:component-path": "@sections/Gallery", "client:component-export": "default" })}

    ${renderSlot($$result3, $$slots["default"])}
  ` })}
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/MarkdownProjectLayout.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h1 id=\"artcaffe-sabinov-website-project\">Artcaffe Sabinov Website Project</h1>\n<h2 id=\"description\">Description</h2>\n<p>The Artcaffe Sabinov website is a project that aimed to create an interactive and user-friendly website for Artcaffe, a cafe located in Sabinov. The website provides information about the cafe’s menu, opening hours, location, and more. It was developed using modern web technologies such as Astro, React, and Firebase to deliver a seamless and dynamic user experience.</p>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li>Astro: A static site generator that combines the best of static and dynamic rendering.</li>\n<li>React: A JavaScript library for building user interfaces.</li>\n<li>Firebase: A platform that provides various services for building web and mobile applications, including hosting, authentication, and database.</li>\n</ul>\n<h2 id=\"features\">Features</h2>\n<ul>\n<li><strong>Menu Display:</strong> The website showcases the cafe’s menu, allowing users to explore the variety of food and beverages offered.</li>\n<li><strong>Opening Hours:</strong> Users can easily find the cafe’s opening and closing hours, helping them plan their visits.</li>\n<li><strong>Location Information:</strong> The website provides the cafe’s address and location on an interactive map.</li>\n<li><strong>Contact Information:</strong> Users can get in touch with the cafe through provided contact details.</li>\n<li><strong>Interactive Reservation System:</strong> Users can reserve a table through an interactive view where they are able to see the layout of the caffe and click on available seats depending on the number of guests and prefered location in the caffe.</li>\n<li><strong>Email and Phone Cofirmation:</strong> Users can automatically recieve a confirmation when a reservation is made.</li>\n<li><strong>Admin Management System:</strong> The owner of the caffe is able to manage reservations through a reserved page for admin purposes.</li>\n</ul>\n<h2 id=\"my-role\">My Role</h2>\n<p>I played a key role in the development of the Artcaffe Sabinov website. As a frontend developer, I utilized Astro and React to design and implement the user interface components, ensuring a responsive and visually appealing design. I integrated Firebase to handle data storage and retrieval, enabling dynamic content updates on the website. Additionally, I worked on optimizing the website’s performance and ensuring a smooth user experience.</p>\n<h2 id=\"website\">Website</h2>\n<p>For a visual overview of the Artcaffe Sabinov website, you can access it <a href=\"https://artcaffe.sk/\">here</a>.</p>\n<p>This project was an exciting opportunity to combine the power of Astro, React, and Firebase to create a modern and engaging website for Artcaffe Sabinov.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Artcaffe Sabinov Web Application","role":"frontend developer","teamNum":"2","organization":"Mulrem","description":"The Artcaffe Sabinov website is a project that aimed to create a friendly website for Artcaffe, a cafe located in Sabinov, Slovakia.","images":[{"url":"/images/projects/artcaffe/home.png","thumbNailUrl":"/images/projects/artcaffe/homeThumb.png","alt":"Art caffe home","width":1295,"height":2000},{"url":"/images/projects/artcaffe/menu.png","thumbNailUrl":"/images/projects/artcaffe/menuThumb.png","alt":"Art caffe project - menu","width":2392,"height":2990},{"url":"/images/projects/artcaffe/about.png","thumbNailUrl":"/images/projects/artcaffe/aboutThumb.png","alt":"Art caffe project - about","width":2392,"height":1446},{"url":"/images/projects/artcaffe/reservation.png","thumbNailUrl":"/images/projects/artcaffe/reservationThumb.png","alt":"Art caffe project - reservation","width":2392,"height":2017}],"technologies":["javascript","firebase","astro","react"],"externals":[{"name":"web","url":"https://artcaffe.sk/"}]};
				const file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/project-1.md";
				const url = "/projects/project-1";
				function rawContent() {
					return "\n# Artcaffe Sabinov Website Project\n\n## Description\n\nThe Artcaffe Sabinov website is a project that aimed to create an interactive and user-friendly website for Artcaffe, a cafe located in Sabinov. The website provides information about the cafe's menu, opening hours, location, and more. It was developed using modern web technologies such as Astro, React, and Firebase to deliver a seamless and dynamic user experience.\n\n## Technologies Used\n\n- Astro: A static site generator that combines the best of static and dynamic rendering.\n- React: A JavaScript library for building user interfaces.\n- Firebase: A platform that provides various services for building web and mobile applications, including hosting, authentication, and database.\n\n## Features\n\n- **Menu Display:** The website showcases the cafe's menu, allowing users to explore the variety of food and beverages offered.\n- **Opening Hours:** Users can easily find the cafe's opening and closing hours, helping them plan their visits.\n- **Location Information:** The website provides the cafe's address and location on an interactive map.\n- **Contact Information:** Users can get in touch with the cafe through provided contact details.\n- **Interactive Reservation System:** Users can reserve a table through an interactive view where they are able to see the layout of the caffe and click on available seats depending on the number of guests and prefered location in the caffe.\n- **Email and Phone Cofirmation:** Users can automatically recieve a confirmation when a reservation is made.\n- **Admin Management System:** The owner of the caffe is able to manage reservations through a reserved page for admin purposes.\n\n## My Role\n\nI played a key role in the development of the Artcaffe Sabinov website. As a frontend developer, I utilized Astro and React to design and implement the user interface components, ensuring a responsive and visually appealing design. I integrated Firebase to handle data storage and retrieval, enabling dynamic content updates on the website. Additionally, I worked on optimizing the website's performance and ensuring a smooth user experience.\n\n## Website\n\nFor a visual overview of the Artcaffe Sabinov website, you can access it [here](https://artcaffe.sk/).\n\nThis project was an exciting opportunity to combine the power of Astro, React, and Firebase to create a modern and engaging website for Artcaffe Sabinov.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"artcaffe-sabinov-website-project","text":"Artcaffe Sabinov Website Project"},{"depth":2,"slug":"description","text":"Description"},{"depth":2,"slug":"technologies-used","text":"Technologies Used"},{"depth":2,"slug":"features","text":"Features"},{"depth":2,"slug":"my-role","text":"My Role"},{"depth":2,"slug":"website","text":"Website"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
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

const project1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
