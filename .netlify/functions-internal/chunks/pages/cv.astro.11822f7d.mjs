/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderHead } from '../astro.6fa2bed6.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const $$Astro = createAstro("https://maria-louisa.com/");
const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maria Louisa - Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  ${renderHead()}</head>
  <body class="bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-blue-500 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="text-white font-bold text-lg">Maria Louisa</a>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-white hover:text-gray-200">Home</a></li>
          <li>
            <a href="#about" class="text-white hover:text-gray-200">About</a>
          </li>
          <li>
            <a href="#projects" class="text-white hover:text-gray-200">Projects</a>
          </li>
          <li>
            <a href="#contact" class="text-white hover:text-gray-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="bg-blue-700 text-white py-16">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">Hi, I'm Maria Louisa</h1>
        <p class="text-lg mb-8">Passionate about creating and coding.</p>
        <a href="#contact" class="bg-yellow-500 text-blue-700 px-6 py-2 rounded-full uppercase font-bold hover:bg-yellow-400 hover:text-blue-600 transition duration-300">Get In Touch</a>
      </div>
    </header>

    <!-- About Me Section -->
    <section id="about" class="py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">About Me</h2>
        <p class="text-lg mb-8">
          I'm a software developer with a passion for learning new technologies
          and creating clean, efficient code. In my free time, I enjoy working
          on electronics projects, crocheting, and traveling.
        </p>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="bg-gray-200 py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">Projects</h2>
        <!-- Project Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Repeat this block for each project -->
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold mb-2">Project Title</h3>
            <p class="text-gray-600 mb-4">
              Short project description goes here.
            </p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
          <!-- End of project block -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">Contact Me</h2>
        <p class="text-lg mb-8">
          Feel free to reach out to me through the following channels:
        </p>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-blue-500 hover:underline">Email</a></li>
          <li>
            <a href="#" class="text-blue-500 hover:underline">LinkedIn</a>
          </li>
          <li><a href="#" class="text-blue-500 hover:underline">GitHub</a></li>
        </ul>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto text-center">
        &copy; 2023 Maria Louisa. All rights reserved.
      </div>
    </footer>
  </body></html>`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/cv.astro", void 0);

const $$file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };
