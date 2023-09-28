/* empty css                        */import { g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.713e64d5.mjs';
import { $ as $$MarkdownProjectLayout } from './angularProject.md.09aec0f0.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'react/jsx-runtime';
import './_tag_.astro.8188c499.mjs';
/* empty css                                    */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"technical-architecture\">Technical Architecture</h2>\n<p>The foundation is built on React, providing a dynamic and responsive user interface. The incorporation of Astro adds the benefits of static site generation while maintaining interactivity through client-side rendering, resulting in exceptional performance and user engagement.</p>\n<h2 id=\"design-with-tailwind-and-typescript\">Design with Tailwind and TypeScript</h2>\n<p>Driving the design is Tailwind, ensuring a consistent and polished aesthetic. TypeScript enhances robustness with strict typing, contributing to elevated code quality and maintainability.</p>\n<h2 id=\"componentization-strategy\">Componentization Strategy</h2>\n<p>A standout feature is the meticulous componentization strategy. I’ve engineered an array of modular components, fostering reusability and streamlined development. These components dynamically adapt to varying contexts, enhancing user engagement and interface consistency.</p>\n<h2 id=\"accessibility-and-performance\">Accessibility and Performance</h2>\n<p>The portfolio adheres to WCAG guidelines, ensuring a seamless experience for all users, regardless of their abilities. Through lazy loading, and resource optimization, I’ve achieved remarkable loading speeds and a fluid browsing experience.</p>\n<h2 id=\"search-engine-optimization-seo\">Search Engine Optimization (SEO)</h2>\n<p>To ensure discoverability, I’ve structured metadata and used HTML5 tags to boost the site’s Search Engine Optimization (SEO) performance.</p>\n<h2 id=\"cicd-pipeline\">CI/CD Pipeline</h2>\n<p>The integration of Netlify and GitHub forms the bedrock of the CI/CD pipeline. Each repository push triggers automated builds and deployments.</p>\n<hr>");

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Personal Portfolio - Web Application","role":"frontend developer","teamNum":"1","organization":"None","description":"Welcome to my portfolio, hosted at maria-louisa.com, a testament to my technical prowess and dedication to delivering top-tier web development. Leveraging the power of React, Astro, Tailwind, and TypeScript,","images":[{"url":"/images/projects/portfolio/pageInsight.webp","thumbNailUrl":"/images/projects/portfolio/pageInsightThumb.webp","alt":"my portfolio portfolio","width":1000,"height":556},{"url":"/images/projects/portfolio/robots.webp","thumbNailUrl":"/images/projects/portfolio/robotsThumb.webp","alt":"my portfolio portfolio","width":1000,"height":493},{"url":"/images/projects/portfolio/theme-dark.webp","thumbNailUrl":"/images/projects/portfolio/theme-darkThumb.webp","alt":"my portfolio portfolio","width":1000,"height":754},{"url":"/images/projects/portfolio/theme-light.webp","thumbNailUrl":"/images/projects/portfolio/theme-lightThumb.webp","alt":"my portfolio portfolio","width":1000,"height":754}],"featured":false,"technologies":["recaptcha","analytics","netlify","javascript","typescript","astro","react","angular"],"externals":[{"name":"web","url":"https://artcaffe.sk/"}]};
				const file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/portfolioProject.md";
				const url = "/projects/portfolioProject";
				function rawContent() {
					return "\r\n## Technical Architecture\r\n\r\nThe foundation is built on React, providing a dynamic and responsive user interface. The incorporation of Astro adds the benefits of static site generation while maintaining interactivity through client-side rendering, resulting in exceptional performance and user engagement.\r\n\r\n## Design with Tailwind and TypeScript\r\n\r\nDriving the design is Tailwind, ensuring a consistent and polished aesthetic. TypeScript enhances robustness with strict typing, contributing to elevated code quality and maintainability.\r\n\r\n## Componentization Strategy\r\n\r\nA standout feature is the meticulous componentization strategy. I've engineered an array of modular components, fostering reusability and streamlined development. These components dynamically adapt to varying contexts, enhancing user engagement and interface consistency.\r\n\r\n## Accessibility and Performance\r\n\r\nThe portfolio adheres to WCAG guidelines, ensuring a seamless experience for all users, regardless of their abilities. Through lazy loading, and resource optimization, I've achieved remarkable loading speeds and a fluid browsing experience.\r\n\r\n## Search Engine Optimization (SEO)\r\n\r\nTo ensure discoverability, I've structured metadata and used HTML5 tags to boost the site's Search Engine Optimization (SEO) performance.\r\n\r\n## CI/CD Pipeline\r\n\r\nThe integration of Netlify and GitHub forms the bedrock of the CI/CD pipeline. Each repository push triggers automated builds and deployments.\r\n\r\n---\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"technical-architecture","text":"Technical Architecture"},{"depth":2,"slug":"design-with-tailwind-and-typescript","text":"Design with Tailwind and TypeScript"},{"depth":2,"slug":"componentization-strategy","text":"Componentization Strategy"},{"depth":2,"slug":"accessibility-and-performance","text":"Accessibility and Performance"},{"depth":2,"slug":"search-engine-optimization-seo","text":"Search Engine Optimization (SEO)"},{"depth":2,"slug":"cicd-pipeline","text":"CI/CD Pipeline"}];
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
