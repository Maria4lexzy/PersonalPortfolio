/* empty css                           */import { g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.6fa2bed6.mjs';
import { $ as $$MarkdownProjectLayout } from './AzureProject.md.ab5fe198.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'react/jsx-runtime';
/* empty css                                  *//* empty css                                  */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"description\">Description</h2>\n<p>Assignment 3 for SWA course\n<strong>weather-server:</strong>\nThe weather-server is a critical component of this assignment, serving as a Weather Report Web Service. It is designed to provide simulated (random) weather data for three specific cities: Horsens, Aarhus, and Copenhagen. This service offers three primary categories of data:</p>\n<p>Historic Data: The historical weather data is generated upon server initialization and remains constant unless new data is explicitly posted. It represents past weather conditions for the specified cities.</p>\n<p>Forecasts: Periodically, forecasts are regenerated to provide future weather predictions for the same cities. These forecasts are generated based on simulated conditions.</p>\n<p>Warnings: The system generates weather warnings at regular intervals. These warnings are independent of other server activities and serve as notifications for potential adverse weather conditions.</p>\n<p><code>npm start</code></p>\n<p><strong>Implementation with React:</strong>\nis the react implementation of our weather application for the assignment. you can do the following with it:</p>\n<ol>\n<li>Retrieve weather history and weather forecast of a selected city (Horsens, Århus, Copenhagen)</li>\n<li>filter the data you wish to see by date and time</li>\n<li>Post weather history report to (fake) weather server\nYou can run the prject by typing the following in the root of the project:</li>\n</ol>\n<p><code>npm start</code></p>\n<p>The Ui of this part is done using <strong>bootstrap 4</strong></p>\n<p><strong>Angular Implementation</strong>\nis the angular implementation of our weather application for the assignment. you can do the following with it:</p>\n<ol>\n<li>Retrieve weather history and weather forecast of a selected city (Horsens, Århus, Copenhagen)</li>\n<li>filter the data you wish to see by date and time</li>\n<li>Post weather history report to (fake) weather server\nYou can run the prject by typing the following in the root of the project:</li>\n</ol>\n<p><code>H1 ng serve --o</code></p>\n<p>The Ui of this part is done using <strong>angular material components</strong></p>");

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Angular & React Weather-Server","role":"developer","teamNum":"2","organization":"VIA University","description":"Weather Report Web Service serving fake (random) weather data for Horsens, Aarhus and Copenhagen. ","images":[],"featured":false,"technologies":["react","angular","api","postman","html","javascript","css"],"externals":[{"name":"github","url":"https://github.com/314ga/SWA-Assignment3"}]};
				const file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/weatherServer.md";
				const url = "/projects/weatherServer";
				function rawContent() {
					return "\n## Description\n\nAssignment 3 for SWA course\n**weather-server:**\nThe weather-server is a critical component of this assignment, serving as a Weather Report Web Service. It is designed to provide simulated (random) weather data for three specific cities: Horsens, Aarhus, and Copenhagen. This service offers three primary categories of data:\n\nHistoric Data: The historical weather data is generated upon server initialization and remains constant unless new data is explicitly posted. It represents past weather conditions for the specified cities.\n\nForecasts: Periodically, forecasts are regenerated to provide future weather predictions for the same cities. These forecasts are generated based on simulated conditions.\n\nWarnings: The system generates weather warnings at regular intervals. These warnings are independent of other server activities and serve as notifications for potential adverse weather conditions.\n\n`npm start`\n\n**Implementation with React:**\nis the react implementation of our weather application for the assignment. you can do the following with it:\n\n1. Retrieve weather history and weather forecast of a selected city (Horsens, Århus, Copenhagen)\n2. filter the data you wish to see by date and time\n3. Post weather history report to (fake) weather server\n   You can run the prject by typing the following in the root of the project:\n\n`npm start`\n\nThe Ui of this part is done using **bootstrap 4**\n\n**Angular Implementation**\nis the angular implementation of our weather application for the assignment. you can do the following with it:\n\n1. Retrieve weather history and weather forecast of a selected city (Horsens, Århus, Copenhagen)\n2. filter the data you wish to see by date and time\n3. Post weather history report to (fake) weather server\n   You can run the prject by typing the following in the root of the project:\n\n`H1 ng serve --o`\n\nThe Ui of this part is done using **angular material components**\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"description","text":"Description"}];
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
