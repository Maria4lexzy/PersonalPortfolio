/* empty css                        */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent, F as Fragment$1, g as createVNode, s as spreadAttributes } from '../astro.6fa2bed6.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { $ as $$BaseLayout } from './_tag_.astro.895a9d5a.mjs';

const Pill = ({
  iconSrc,
  description,
  classListItems
}) => {
  const classNames = `flex gap-2 ${classListItems || ""}`;
  return /* @__PURE__ */ jsx("div", {
    className: "flex items-center bg-violet-500/20 rounded dark:bg-gray-700 dark:text-gray-100 font-medium gap-x-1.5 h-6 px-1.5 md:px-2.5 text-gray-700 text-ellipsis ...  w-fit dark:hover:bg-gray-600 hover:bg-gray-200 transition ease-in-out delay-150 cursor-pointer",
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
__astro_tag_component__(Pill, "@astrojs/react");

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
  const { classStyle, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(` ${classStyle} section my-4 backdrop-filter backdrop-blur-lg
   bg-primary-light dark:bg-secondary/95 w-11/12 md:w-3/4  mx-auto p-8 
   rounded-xl shadow-xl lg:space-y-8`, "class")}>
  ${renderSlot($$result, $$slots["default"])}
</section>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/CardLayout.astro", void 0);

const $$Astro = createAstro("https://maria-louisa.com/");
const $$MarkdownProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownProjectLayout;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/projects/artcaffe.md": () => Promise.resolve().then(() => artcaffe),"../pages/projects/portfolioProject.md": () => import('./portfolioProject.md.70b5b575.mjs')}), () => "../pages/projects/*.md");
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
    ${renderComponent($$result3, "Subtitle", $$Subtitle, { "subTitle": "Project Gallery" })}

    ${renderComponent($$result3, "Gallery", null, { "client:only": "react", "galleryID": "my-test-gallery", "images": formattedImages, "client:component-hydration": "only", "client:component-path": "@sections/Gallery", "client:component-export": "default" })}

    ${renderSlot($$result3, $$slots["default"])}
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

				const html = updateImageReferences("<h2 id=\"description\">Description</h2>\n<p>The Artcaffe Sabinov website is a project that aimed to create an interactive and user-friendly website for Artcaffe, a cafe located in Sabinov. The website provides information about the cafe’s menu, opening hours, location, and more. It was developed using modern web technologies such as Astro, React, and Firebase to deliver a seamless and dynamic user experience.</p>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li>Astro: A static site generator that combines the best of static and dynamic rendering.</li>\n<li>React: A JavaScript library for building user interfaces.</li>\n<li>Firebase: A platform that provides various services for building web and mobile applications, including hosting, authentication, and database.</li>\n</ul>\n<h2 id=\"features\">Features</h2>\n<ul>\n<li><strong>Menu Display:</strong> The website showcases the cafe’s menu, allowing users to explore the variety of food and beverages offered.</li>\n<li><strong>Opening Hours:</strong> Users can easily find the cafe’s opening and closing hours, helping them plan their visits.</li>\n<li><strong>Location Information:</strong> The website provides the cafe’s address and location on an interactive map.</li>\n<li><strong>Contact Information:</strong> Users can get in touch with the cafe through provided contact details.</li>\n<li><strong>Interactive Reservation System:</strong> Users can reserve a table through an interactive view where they are able to see the layout of the caffe and click on available seats depending on the number of guests and prefered location in the caffe.</li>\n<li><strong>Email and Phone Cofirmation:</strong> Users can automatically recieve a confirmation when a reservation is made.</li>\n<li><strong>Admin Management System:</strong> The owner of the caffe is able to manage reservations through a reserved page for admin purposes.</li>\n</ul>\n<h2 id=\"my-role\">My Role</h2>\n<p>I played a key role in the development of the Artcaffe Sabinov website. As a frontend developer, I utilized Astro and React to design and implement the user interface components, ensuring a responsive and visually appealing design. I integrated Firebase to handle data storage and retrieval, enabling dynamic content updates on the website. Additionally, I worked on optimizing the website’s performance and ensuring a smooth user experience.</p>\n<h2 id=\"website\">Website</h2>\n<p>For a visual overview of the Artcaffe Sabinov website, <a href=\"https://artcaffe.sk/\">acess the website here</a>.</p>\n<p>This project was an exciting opportunity to combine the power of Astro, React, and Firebase to create a modern and engaging website for Artcaffe Sabinov.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Artcaffe Sabinov - Web Application","role":"frontend developer","teamNum":"2","organization":"Mulrem","description":"The Artcaffe Sabinov website is a project that aimed to create a friendly website for Artcaffe, a cafe located in Sabinov, Slovakia.","images":[{"url":"/images/projects/artcaffe/home.webp","thumbNailUrl":"/images/projects/artcaffe/homeThumb.webp","alt":"Art caffe home","width":1295,"height":2000},{"url":"/images/projects/artcaffe/menu.webp","thumbNailUrl":"/images/projects/artcaffe/menuThumb.webp","alt":"Art caffe project - menu","width":2392,"height":2990},{"url":"/images/projects/artcaffe/about.webp","thumbNailUrl":"/images/projects/artcaffe/aboutThumb.webp","alt":"Art caffe project - about","width":2392,"height":1446},{"url":"/images/projects/artcaffe/reservation.webp","thumbNailUrl":"/images/projects/artcaffe/reservationThumb.webp","alt":"Art caffe project - reservation","width":2392,"height":2017}],"technologies":["javascript","firebase","astro","react"],"externals":[{"name":"web","url":"https://artcaffe.sk/"}]};
				const file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/artcaffe.md";
				const url = "/projects/artcaffe";
				function rawContent() {
					return "\r\n## Description\r\n\r\nThe Artcaffe Sabinov website is a project that aimed to create an interactive and user-friendly website for Artcaffe, a cafe located in Sabinov. The website provides information about the cafe's menu, opening hours, location, and more. It was developed using modern web technologies such as Astro, React, and Firebase to deliver a seamless and dynamic user experience.\r\n\r\n## Technologies Used\r\n\r\n- Astro: A static site generator that combines the best of static and dynamic rendering.\r\n- React: A JavaScript library for building user interfaces.\r\n- Firebase: A platform that provides various services for building web and mobile applications, including hosting, authentication, and database.\r\n\r\n## Features\r\n\r\n- **Menu Display:** The website showcases the cafe's menu, allowing users to explore the variety of food and beverages offered.\r\n- **Opening Hours:** Users can easily find the cafe's opening and closing hours, helping them plan their visits.\r\n- **Location Information:** The website provides the cafe's address and location on an interactive map.\r\n- **Contact Information:** Users can get in touch with the cafe through provided contact details.\r\n- **Interactive Reservation System:** Users can reserve a table through an interactive view where they are able to see the layout of the caffe and click on available seats depending on the number of guests and prefered location in the caffe.\r\n- **Email and Phone Cofirmation:** Users can automatically recieve a confirmation when a reservation is made.\r\n- **Admin Management System:** The owner of the caffe is able to manage reservations through a reserved page for admin purposes.\r\n\r\n## My Role\r\n\r\nI played a key role in the development of the Artcaffe Sabinov website. As a frontend developer, I utilized Astro and React to design and implement the user interface components, ensuring a responsive and visually appealing design. I integrated Firebase to handle data storage and retrieval, enabling dynamic content updates on the website. Additionally, I worked on optimizing the website's performance and ensuring a smooth user experience.\r\n\r\n## Website\r\n\r\nFor a visual overview of the Artcaffe Sabinov website, [acess the website here](https://artcaffe.sk/).\r\n\r\nThis project was an exciting opportunity to combine the power of Astro, React, and Firebase to create a modern and engaging website for Artcaffe Sabinov.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"description","text":"Description"},{"depth":2,"slug":"technologies-used","text":"Technologies Used"},{"depth":2,"slug":"features","text":"Features"},{"depth":2,"slug":"my-role","text":"My Role"},{"depth":2,"slug":"website","text":"Website"}];
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

const artcaffe = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { $$Subtitle as $, Pill as P, $$CardLayout as a, $$MarkdownProjectLayout as b, artcaffe as c };
