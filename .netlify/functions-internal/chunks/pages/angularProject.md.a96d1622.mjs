/* empty css                           */import { g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.713e64d5.mjs';
import { $ as $$MarkdownProjectLayout } from './AzureProject.md.eb777aea.mjs';
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

				const html = updateImageReferences("<h2 id=\"description\">Description</h2>\n<p>This guide aims to walk you through the process of seamlessly integrating Angular, a popular JavaScript framework, with Astro, a modern static site generator. By combining the capabilities of Angular’s dynamic components with Astro’s performance benefits, you can create dynamic and performant web applications that provide the best of both worlds</p>\n<h2 id=\"step-1-create-an-astro-project\">Step 1: Create an Astro Project</h2>\n<p>Begin by initiating a new Astro project using the following command:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #6A737D\"># create a new project with npm</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">npm</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">create</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">astro@latest</span></span></code></pre>\n<p>This command will set up the foundation for your Astro project.</p>\n<h2 id=\"step-2-implementing-angular-and-astro\">Step 2: Implementing Angular and Astro</h2>\n<p>Integrating Angular with Astro is straightforward. Execute the following command:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #B392F0\">npx</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">astro</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">add</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">@analogjs/astro-angular</span></span></code></pre>\n<p>By running this command, you ensure a seamless collaboration between Angular and Astro.</p>\n<h2 id=\"step-3-setting-up-the-ts-config\">Step 3: Setting Up the TS Config</h2>\n<p>To ensure smooth integration between Angular and Astro, create a tsconfig.app.json file in your project’s root. Follow these steps:</p>\n<ol>\n<li>\n<p>Create a file named <code>tsconfig.app.json</code> in the root directory of your project.</p>\n</li>\n<li>\n<p>Add the following configuration code to the <code>tsconfig.app.json</code> file:</p>\n</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #E1E4E8\">{</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"extends\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"./tsconfig.json\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"compileOnSave\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"compilerOptions\"</span><span style=\"color: #E1E4E8\">: {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"baseUrl\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"./\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"outDir\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"./dist/out-tsc\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"forceConsistentCasingInFileNames\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"strict\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noImplicitOverride\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noPropertyAccessFromIndexSignature\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noImplicitReturns\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noFallthroughCasesInSwitch\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"sourceMap\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"declaration\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"downlevelIteration\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"experimentalDecorators\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"moduleResolution\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"node\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"importHelpers\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"noEmit\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"target\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"es2020\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"module\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #9ECBFF\">\"es2020\"</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"lib\"</span><span style=\"color: #E1E4E8\">: [</span><span style=\"color: #9ECBFF\">\"es2020\"</span><span style=\"color: #E1E4E8\">, </span><span style=\"color: #9ECBFF\">\"dom\"</span><span style=\"color: #E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"skipLibCheck\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  },</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"angularCompilerOptions\"</span><span style=\"color: #E1E4E8\">: {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"enableI18nLegacyMessageIdFormat\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"strictInjectionParameters\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"strictInputAccessModifiers\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"strictTemplates\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">\"allowJs\"</span><span style=\"color: #E1E4E8\">: </span><span style=\"color: #79B8FF\">false</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  },</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"files\"</span><span style=\"color: #E1E4E8\">: [],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #79B8FF\">\"include\"</span><span style=\"color: #E1E4E8\">: [</span><span style=\"color: #9ECBFF\">\"src/**/*.ts\"</span><span style=\"color: #E1E4E8\">, </span><span style=\"color: #9ECBFF\">\"src/**/*.tsx\"</span><span style=\"color: #E1E4E8\">]</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">}</span></span></code></pre>\n<h2 id=\"step-4-adding-angular-integration-to-astro\">Step 4: Adding Angular Integration to Astro</h2>\n<p>Now we need to add the integration to the <code>astro.config.mjs</code>. Follow these steps:</p>\n<ol>\n<li>\n<p>Find the <code>astro.config.mjs</code> file in the root of your project.</p>\n</li>\n<li>\n<p>Update with the the following imports and configuration:</p>\n</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> { defineConfig } </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'astro/config'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> angular </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'@analogjs/astro-angular'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> analogjsangular </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'@analogjs/astro-angular'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">export</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">default</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">defineConfig</span><span style=\"color: #E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  site: </span><span style=\"color: #9ECBFF\">'https://yoursite.com/'</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  integrations: [</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #B392F0\">angular</span><span style=\"color: #E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">      vite: {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">        inlineStylesExtension: </span><span style=\"color: #9ECBFF\">'scss|sass|less'</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">        ssr: {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">          </span><span style=\"color: #6A737D\">// transform these packages during SSR. Globs supported</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">          noExternal: [</span><span style=\"color: #9ECBFF\">'@rx-angular/**'</span><span style=\"color: #E1E4E8\">],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">        },</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">      },</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    }),</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #B392F0\">analogjsangular</span><span style=\"color: #E1E4E8\">(),</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  ],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  output: </span><span style=\"color: #9ECBFF\">'server'</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">});</span></span></code></pre>\n<h2 id=\"step-5-creating-an-angular-component\">Step 5: Creating an Angular Component</h2>\n<ol>\n<li>\n<p>Let’s create a component in the <code>src/components</code> folder. Name it <code>hello.component.ts</code>.</p>\n</li>\n<li>\n<p>Define your component. Bear in mind that Astro Angular integration exclusively supports rendering standalone components:</p>\n</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> { NgIf } </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'@angular/common'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> { Component, Input } </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'@angular/core'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">@</span><span style=\"color: #B392F0\">Component</span><span style=\"color: #E1E4E8\">({</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  selector: </span><span style=\"color: #9ECBFF\">'app-hello'</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  standalone: </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  imports: [NgIf],</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  template: </span><span style=\"color: #9ECBFF\">`</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    &#x3C;p>Hello from Angular!!&#x3C;/p></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    &#x3C;p *ngIf=\"show\">{{ helpText }}&#x3C;/p></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">    &#x3C;button (click)=\"toggle()\">Toggle&#x3C;/button></span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">  `</span><span style=\"color: #E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">})</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">export</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">class</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">HelloComponent</span><span style=\"color: #E1E4E8\"> {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  @</span><span style=\"color: #B392F0\">Input</span><span style=\"color: #E1E4E8\">() </span><span style=\"color: #FFAB70\">helpText</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'help'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #FFAB70\">show</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #B392F0\">toggle</span><span style=\"color: #E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">    </span><span style=\"color: #79B8FF\">this</span><span style=\"color: #E1E4E8\">.show </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">!</span><span style=\"color: #79B8FF\">this</span><span style=\"color: #E1E4E8\">.show;</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  }</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">}</span></span></code></pre>\n<h2 id=\"step-6-adding-the-component-to-astro-template\">Step 6: Adding the Component to Astro Template</h2>\n<ol>\n<li>Import the component:</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #E1E4E8\">---</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">import { HelloComponent } from '../components/hello.component';</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">const helpText = \"Helping binding\";</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">---</span></span></code></pre>\n<ol start=\"2\">\n<li>Hydrate the component for JavaScript loading:</li>\n</ol>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #E1E4E8\">&#x3C;</span><span style=\"color: #FDAEB7; font-style: italic\">HelloComponent</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">client:visible</span><span style=\"color: #E1E4E8\"> /></span></span></code></pre>\n<h2 id=\"step-7-running-the-application\">Step 7: Running the Application</h2>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #e1e4e8\">npm run dev</span></span></code></pre>\n<p>This will initiate your integrated Angular and Astro application for local development.\nCongratulations, you’ve successfully unlocked the door to a dynamic and performant web development journey by integrating Angular with Astro.</p>\n<p>As you embark on this exciting journey, don’t hesitate to customize and expand upon what you’ve learned here. Feel free to explore deeper integrations, experiment with different Angular components, and unleash your creativity to create truly exceptional web experiences.\nHappy coding!</p>\n<p><em>This tutorial draws inspiration from the comprehensive documentation provided by Analog.js. For further insights and detailed information about Astro Angular integration, you can explore the <a href=\"https://analogjs.org/docs/packages/astro-angular/overview\">official Analog.js documentation</a> as well as the <a href=\"https://astro.build/\">Astro website documentation</a>. Building upon these resources, we’ll guide you through the process of seamlessly integrating Angular with Astro to craft dynamic and performant web applications.</em></p>");

				const frontmatter = {"layout":"../../layouts/MarkdownProjectLayout.astro","title":"Angular & Astro - Web Application","role":"developer","teamNum":"1","organization":"None","description":"A project demonstrating the use of Angular within Astro project.","images":[],"featured":true,"technologies":["angular","astro"],"externals":[{"name":"web","url":"https://maria-louisa.com/"}]};
				const file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/angularProject.md";
				const url = "/projects/angularProject";
				function rawContent() {
					return "\n## Description\n\nThis guide aims to walk you through the process of seamlessly integrating Angular, a popular JavaScript framework, with Astro, a modern static site generator. By combining the capabilities of Angular's dynamic components with Astro's performance benefits, you can create dynamic and performant web applications that provide the best of both worlds\n\n## Step 1: Create an Astro Project\n\nBegin by initiating a new Astro project using the following command:\n\n```sh\n# create a new project with npm\nnpm create astro@latest\n```\n\nThis command will set up the foundation for your Astro project.\n\n## Step 2: Implementing Angular and Astro\n\nIntegrating Angular with Astro is straightforward. Execute the following command:\n\n```sh\nnpx astro add @analogjs/astro-angular\n```\n\nBy running this command, you ensure a seamless collaboration between Angular and Astro.\n\n## Step 3: Setting Up the TS Config\n\nTo ensure smooth integration between Angular and Astro, create a tsconfig.app.json file in your project's root. Follow these steps:\n\n1. Create a file named `tsconfig.app.json` in the root directory of your project.\n\n2. Add the following configuration code to the `tsconfig.app.json` file:\n\n```json\n{\n  \"extends\": \"./tsconfig.json\",\n  \"compileOnSave\": false,\n  \"compilerOptions\": {\n    \"baseUrl\": \"./\",\n    \"outDir\": \"./dist/out-tsc\",\n    \"forceConsistentCasingInFileNames\": true,\n    \"strict\": true,\n    \"noImplicitOverride\": true,\n    \"noPropertyAccessFromIndexSignature\": true,\n    \"noImplicitReturns\": true,\n    \"noFallthroughCasesInSwitch\": true,\n    \"sourceMap\": true,\n    \"declaration\": false,\n    \"downlevelIteration\": true,\n    \"experimentalDecorators\": true,\n    \"moduleResolution\": \"node\",\n    \"importHelpers\": true,\n    \"noEmit\": false,\n    \"target\": \"es2020\",\n    \"module\": \"es2020\",\n    \"lib\": [\"es2020\", \"dom\"],\n    \"skipLibCheck\": true\n  },\n  \"angularCompilerOptions\": {\n    \"enableI18nLegacyMessageIdFormat\": false,\n    \"strictInjectionParameters\": true,\n    \"strictInputAccessModifiers\": true,\n    \"strictTemplates\": true,\n    \"allowJs\": false\n  },\n  \"files\": [],\n  \"include\": [\"src/**/*.ts\", \"src/**/*.tsx\"]\n}\n```\n\n## Step 4: Adding Angular Integration to Astro\n\nNow we need to add the integration to the `astro.config.mjs`. Follow these steps:\n\n1. Find the `astro.config.mjs` file in the root of your project.\n\n2. Update with the the following imports and configuration:\n\n```js\nimport { defineConfig } from 'astro/config';\nimport angular from '@analogjs/astro-angular';\nimport analogjsangular from '@analogjs/astro-angular';\n\nexport default defineConfig({\n  site: 'https://yoursite.com/',\n  integrations: [\n    angular({\n      vite: {\n        inlineStylesExtension: 'scss|sass|less',\n        ssr: {\n          // transform these packages during SSR. Globs supported\n          noExternal: ['@rx-angular/**'],\n        },\n      },\n    }),\n    analogjsangular(),\n  ],\n  output: 'server',\n});\n```\n\n## Step 5: Creating an Angular Component\n\n1. Let's create a component in the `src/components` folder. Name it `hello.component.ts`.\n\n2. Define your component. Bear in mind that Astro Angular integration exclusively supports rendering standalone components:\n\n```ts\nimport { NgIf } from '@angular/common';\nimport { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'app-hello',\n  standalone: true,\n  imports: [NgIf],\n  template: `\n    <p>Hello from Angular!!</p>\n\n    <p *ngIf=\"show\">{{ helpText }}</p>\n\n    <button (click)=\"toggle()\">Toggle</button>\n  `,\n})\nexport class HelloComponent {\n  @Input() helpText = 'help';\n\n  show = false;\n\n  toggle() {\n    this.show = !this.show;\n  }\n}\n```\n\n## Step 6: Adding the Component to Astro Template\n\n1. Import the component:\n\n```markdown\n---\nimport { HelloComponent } from '../components/hello.component';\nconst helpText = \"Helping binding\";\n---\n```\n\n2. Hydrate the component for JavaScript loading:\n\n```html\n<HelloComponent client:visible />\n```\n\n## Step 7: Running the Application\n\n```\nnpm run dev\n```\n\nThis will initiate your integrated Angular and Astro application for local development.\nCongratulations, you've successfully unlocked the door to a dynamic and performant web development journey by integrating Angular with Astro.\n\nAs you embark on this exciting journey, don't hesitate to customize and expand upon what you've learned here. Feel free to explore deeper integrations, experiment with different Angular components, and unleash your creativity to create truly exceptional web experiences.\nHappy coding!\n\n_This tutorial draws inspiration from the comprehensive documentation provided by Analog.js. For further insights and detailed information about Astro Angular integration, you can explore the [official Analog.js documentation](https://analogjs.org/docs/packages/astro-angular/overview) as well as the [Astro website documentation](https://astro.build/). Building upon these resources, we'll guide you through the process of seamlessly integrating Angular with Astro to craft dynamic and performant web applications._\n";
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
