/* empty css                             */import { g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.713e64d5.mjs';
import { $ as $$MarkdownProjectLayout } from './angularProject.md.53c16156.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'react/jsx-runtime';
/* empty css                                    *//* empty css                                    */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"description\">Description</h2>\n<p>The Artcaffe Sabinov website is a project that aimed to create an interactive and user-friendly website for Artcaffe, a cafe located in Sabinov. The website provides information about the cafe’s menu, opening hours, location, and more. It was developed using modern web technologies such as Astro, React, and Firebase to deliver a seamless and dynamic user experience.</p>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li>Astro: A static site generator that combines the best of static and dynamic rendering.</li>\n<li>React: A JavaScript library for building user interfaces.</li>\n<li>Firebase: A platform that provides various services for building web and mobile applications, including hosting, authentication, and database.</li>\n</ul>\n<h2 id=\"features\">Features</h2>\n<ul>\n<li><strong>Menu Display:</strong> The website showcases the cafe’s menu, allowing users to explore the variety of food and beverages offered.</li>\n<li><strong>Opening Hours:</strong> Users can easily find the cafe’s opening and closing hours, helping them plan their visits.</li>\n<li><strong>Location Information:</strong> The website provides the cafe’s address and location on an interactive map.</li>\n<li><strong>Contact Information:</strong> Users can get in touch with the cafe through provided contact details.</li>\n<li><strong>Interactive Reservation System:</strong> Users can reserve a table through an interactive view where they are able to see the layout of the caffe and click on available seats depending on the number of guests and prefered location in the caffe.</li>\n<li><strong>Email and Phone Cofirmation:</strong> Users can automatically recieve a confirmation when a reservation is made.</li>\n<li><strong>Admin Management System:</strong> The owner of the caffe is able to manage reservations through a reserved page for admin purposes.</li>\n</ul>\n<h2 id=\"my-role\">My Role</h2>\n<p>I played a key role in the development of the Artcaffe Sabinov website. As a frontend developer, I utilized Astro and React to design and implement the user interface components, ensuring a responsive and visually appealing design. I integrated Firebase to handle data storage and retrieval, enabling dynamic content updates on the website. Additionally, I worked on optimizing the website’s performance and ensuring a smooth user experience.</p>\n<h2 id=\"website\">Website</h2>\n<p>For a visual overview of the Artcaffe Sabinov website, <a href=\"https://artcaffe.sk/\">acess the website here</a>.</p>\n<p>This project was an exciting opportunity to combine the power of Astro, React, and Firebase to create a modern and engaging website for Artcaffe Sabinov.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Artcaffe Sabinov - Web Application","role":"frontend developer","teamNum":"2","organization":"Mulrem","description":"The Artcaffe Sabinov website is a project that aimed to create a friendly website for Artcaffe, a cafe located in Sabinov, Slovakia.","images":[{"url":"/images/projects/artcaffe/home.webp","thumbNailUrl":"/images/projects/artcaffe/homeThumb.webp","alt":"Art caffe home","width":1295,"height":2000},{"url":"/images/projects/artcaffe/menu.webp","thumbNailUrl":"/images/projects/artcaffe/menuThumb.webp","alt":"Art caffe project - menu","width":2392,"height":2990},{"url":"/images/projects/artcaffe/about.webp","thumbNailUrl":"/images/projects/artcaffe/aboutThumb.webp","alt":"Art caffe project - about","width":2392,"height":1446},{"url":"/images/projects/artcaffe/reservation.webp","thumbNailUrl":"/images/projects/artcaffe/reservationThumb.webp","alt":"Art caffe project - reservation","width":2392,"height":2017}],"featured":true,"technologies":["javascript","firebase","astro","react"],"externals":[{"name":"web","url":"https://artcaffe.sk/"}]};
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
