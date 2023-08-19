/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.6fa2bed6.mjs';
import { $ as $$BaseLayout } from './_projects_.astro.a6e51f1f.mjs';
/* empty css                               */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                               */
const $$Astro = createAstro();
const $$MarkdownProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
	Astro2.self = $$MarkdownProjectLayout;
	const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({ "../pages/projects/project-1.md": () => Promise.resolve().then(() => project1) }), () => "../pages/projects/*.md");
	const { frontmatter } = Astro2.props;
	const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
	const seoTitle = "Maria Projects";
	const seoDescription = "Projects";
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "seoTitle": seoTitle, "seoDescription": seoDescription, "class": "astro-LFQ5PVLT" }, {
		"default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<p class="astro-LFQ5PVLT">${frontmatter.pubDate.slice(0, 10)}</p>
  <p class="astro-LFQ5PVLT"><em class="astro-LFQ5PVLT">${frontmatter.description}</em></p>
  <p class="astro-LFQ5PVLT">Written by: ${frontmatter.author}</p>
  <img${addAttribute(frontmatter.image.src, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")} class="astro-LFQ5PVLT">
  <div class="tags astro-LFQ5PVLT">
    ${tags.map((tag) => renderTemplate`<p class="tag astro-LFQ5PVLT">
          <a${addAttribute(`/tags/${tag}`, "href")} class="astro-LFQ5PVLT">${tag}</a>
        </p>`)}
  </div>

  ${renderSlot($$result2, $$slots["default"])}
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/layouts/MarkdownProjectLayout.astro", void 0);

const images = {

};

function updateImageReferences(html) {
	return html.replaceAll(
		/__ASTRO_IMAGE_="([^"]+)"/gm,
		(full, imagePath) => spreadAttributes({ src: images[imagePath].src, ...images[imagePath].attributes })
	);
}

const html = updateImageReferences("<h1 id=\"project-showcase-amazing-website\">Project Showcase: Amazing Website</h1>\n<p>Welcome to the project showcase for “Amazing Website,” our latest creation that combines innovative design and cutting-edge technology. In this post, we are excited to share the details of this project and the journey of building it.</p>\n<h2 id=\"overview\">Overview</h2>\n<p>The “Amazing Website” project is a showcase of our software development company’s capabilities. It was developed for our esteemed client, who wanted a visually striking and user-friendly website to represent their brand online. Our team took on the challenge and created an exceptional online platform that captures the essence of the client’s business.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<p>The website boasts several key features that set it apart:</p>\n<ol>\n<li>\n<p><strong>Interactive User Interface</strong>: The website offers a captivating and interactive user interface that engages visitors and keeps them exploring.</p>\n</li>\n<li>\n<p><strong>Responsive Design</strong>: We ensured that the website is fully responsive, providing a seamless experience across various devices and screen sizes.</p>\n</li>\n<li>\n<p><strong>Smooth Animations</strong>: Carefully crafted animations enhance the user experience, adding a touch of elegance to the overall design.</p>\n</li>\n<li>\n<p><strong>Performance Optimization</strong>: Our team optimized the website for speed and performance, ensuring quick loading times and smooth navigation.</p>\n</li>\n</ol>\n<h2 id=\"technology-stack\">Technology Stack</h2>\n<p>The “Amazing Website” project utilized a modern and robust technology stack, including:</p>\n<ul>\n<li>\n<p><strong>Frontend</strong>: React.js for building the dynamic user interface and Redux for state management.</p>\n</li>\n<li>\n<p><strong>Styling</strong>: We adopted Sass for efficient and maintainable CSS styles.</p>\n</li>\n<li>\n<p><strong>Backend</strong>: Node.js with Express for handling server-side logic and API integration.</p>\n</li>\n<li>\n<p><strong>Database</strong>: MongoDB for data storage and retrieval.</p>\n</li>\n<li>\n<p><strong>Deployment</strong>: The website is hosted on AWS to ensure reliability and scalability.</p>\n</li>\n</ul>\n<h2 id=\"challenges-and-solutions\">Challenges and Solutions</h2>\n<p>Throughout the development process, we encountered various challenges, such as implementing complex animations and ensuring cross-browser compatibility. However, our team of talented developers collaborated effectively to devise innovative solutions and overcome these obstacles.</p>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>The “Amazing Website” project showcases our dedication to excellence in software development. It reflects the successful collaboration between our team and our client, resulting in a remarkable online presence for their business.</p>\n<p>Stay tuned for more exciting projects as we continue to deliver exceptional solutions for our clients. If you’re interested in discussing your next project, don’t hesitate to <a href=\"https://example.com/contact\">contact us</a>!</p>\n<p><img src=\"https://example.com/images/project-preview.jpg\" alt=\"Project Preview\"></p>");

const frontmatter = { "layout": "../../layouts/MarkdownProjectLayout.astro", "title": "Project Showcase: Amazing Website", "pubDate": "2023-07-15T00:00:00.000Z", "description": "Introducing our latest project - a stunning and interactive website.", "author": "Your Name", "image": { "src": "/images/profile.jpeg", "alt": "Preview of the Amazing Website project." }, "tags": ["web development", "interactive design", "software projects"] };
const file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/project-1.md";
const url = "/projects/project-1";
function rawContent() {
	return "\r\n# Project Showcase: Amazing Website\r\n\r\nWelcome to the project showcase for \"Amazing Website,\" our latest creation that combines innovative design and cutting-edge technology. In this post, we are excited to share the details of this project and the journey of building it.\r\n\r\n## Overview\r\n\r\nThe \"Amazing Website\" project is a showcase of our software development company's capabilities. It was developed for our esteemed client, who wanted a visually striking and user-friendly website to represent their brand online. Our team took on the challenge and created an exceptional online platform that captures the essence of the client's business.\r\n\r\n## Key Features\r\n\r\nThe website boasts several key features that set it apart:\r\n\r\n1. **Interactive User Interface**: The website offers a captivating and interactive user interface that engages visitors and keeps them exploring.\r\n\r\n2. **Responsive Design**: We ensured that the website is fully responsive, providing a seamless experience across various devices and screen sizes.\r\n\r\n3. **Smooth Animations**: Carefully crafted animations enhance the user experience, adding a touch of elegance to the overall design.\r\n\r\n4. **Performance Optimization**: Our team optimized the website for speed and performance, ensuring quick loading times and smooth navigation.\r\n\r\n## Technology Stack\r\n\r\nThe \"Amazing Website\" project utilized a modern and robust technology stack, including:\r\n\r\n- **Frontend**: React.js for building the dynamic user interface and Redux for state management.\r\n\r\n- **Styling**: We adopted Sass for efficient and maintainable CSS styles.\r\n\r\n- **Backend**: Node.js with Express for handling server-side logic and API integration.\r\n\r\n- **Database**: MongoDB for data storage and retrieval.\r\n\r\n- **Deployment**: The website is hosted on AWS to ensure reliability and scalability.\r\n\r\n## Challenges and Solutions\r\n\r\nThroughout the development process, we encountered various challenges, such as implementing complex animations and ensuring cross-browser compatibility. However, our team of talented developers collaborated effectively to devise innovative solutions and overcome these obstacles.\r\n\r\n## Conclusion\r\n\r\nThe \"Amazing Website\" project showcases our dedication to excellence in software development. It reflects the successful collaboration between our team and our client, resulting in a remarkable online presence for their business.\r\n\r\nStay tuned for more exciting projects as we continue to deliver exceptional solutions for our clients. If you're interested in discussing your next project, don't hesitate to [contact us](https://example.com/contact)!\r\n\r\n![Project Preview](https://example.com/images/project-preview.jpg)\r\n";
}
function compiledContent() {
	return html;
}
function getHeadings() {
	return [{ "depth": 1, "slug": "project-showcase-amazing-website", "text": "Project Showcase: Amazing Website" }, { "depth": 2, "slug": "overview", "text": "Overview" }, { "depth": 2, "slug": "key-features", "text": "Key Features" }, { "depth": 2, "slug": "technology-stack", "text": "Technology Stack" }, { "depth": 2, "slug": "challenges-and-solutions", "text": "Challenges and Solutions" }, { "depth": 2, "slug": "conclusion", "text": "Conclusion" }];
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
