import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { h as deserializeManifest } from './chunks/astro.6fa2bed6.mjs';
import '@astrojs/internal-helpers/path';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';

const _page0  = () => import('./chunks/index@_@astro.2f3d1a69.mjs');
const _page1  = () => import('./chunks/index@_@astro.fa523071.mjs');
const _page2  = () => import('./chunks/_technology_@_@astro.449b9b5e.mjs');
const _page3  = () => import('./chunks/project-1@_@md.718317fe.mjs');
const _page4  = () => import('./chunks/travel@_@astro.b13db3c7.mjs');
const _page5  = () => import('./chunks/_tag_@_@astro.fd166efd.mjs');
const _page6  = () => import('./chunks/cv@_@astro.c7db1f02.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/technologies/index.astro", _page1],["src/pages/technologies/[technology].astro", _page2],["src/pages/projects/project-1.md", _page3],["src/pages/travel.astro", _page4],["src/pages/tags/[tag].astro", _page5],["src/pages/cv.astro", _page6]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-7WTEYMG4ZZ\");\n"}],"styles":[{"type":"external","src":"/_astro/cv.d53c99cb.css"},{"type":"external","src":"/_astro/project-1.6da9a1b6.css"},{"type":"external","src":"/_astro/Gallery.ff405c3d.css"},{"type":"external","src":"/_astro/SkillBar.80c18a43.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-7WTEYMG4ZZ\");\n"}],"styles":[{"type":"external","src":"/_astro/index.5a42cb37.css"},{"type":"external","src":"/_astro/cv.d53c99cb.css"},{"type":"external","src":"/_astro/project-1.6da9a1b6.css"},{"type":"external","src":"/_astro/Gallery.ff405c3d.css"}],"routeData":{"route":"/technologies","type":"page","pattern":"^\\/technologies\\/?$","segments":[[{"content":"technologies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/technologies/index.astro","pathname":"/technologies","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-7WTEYMG4ZZ\");\n"}],"styles":[{"type":"external","src":"/_astro/cv.d53c99cb.css"},{"type":"external","src":"/_astro/project-1.6da9a1b6.css"},{"type":"external","src":"/_astro/Gallery.ff405c3d.css"}],"routeData":{"route":"/technologies/[technology]","type":"page","pattern":"^\\/technologies\\/([^/]+?)\\/?$","segments":[[{"content":"technologies","dynamic":false,"spread":false}],[{"content":"technology","dynamic":true,"spread":false}]],"params":["technology"],"component":"src/pages/technologies/[technology].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-7WTEYMG4ZZ\");\n"}],"styles":[{"type":"external","src":"/_astro/cv.d53c99cb.css"},{"type":"external","src":"/_astro/project-1.6da9a1b6.css"},{"type":"external","src":"/_astro/Gallery.ff405c3d.css"}],"routeData":{"route":"/projects/project-1","type":"page","pattern":"^\\/projects\\/project-1\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"project-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/project-1.md","pathname":"/projects/project-1","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-7WTEYMG4ZZ\");\n"}],"styles":[{"type":"external","src":"/_astro/cv.d53c99cb.css"},{"type":"external","src":"/_astro/travel.96cd528c.css"},{"type":"external","src":"/_astro/project-1.6da9a1b6.css"}],"routeData":{"route":"/travel","type":"page","pattern":"^\\/travel\\/?$","segments":[[{"content":"travel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/travel.astro","pathname":"/travel","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-7WTEYMG4ZZ\");\n"}],"styles":[{"type":"external","src":"/_astro/cv.d53c99cb.css"},{"type":"external","src":"/_astro/project-1.6da9a1b6.css"},{"type":"external","src":"/_astro/Gallery.ff405c3d.css"}],"routeData":{"route":"/tags/[tag]","type":"page","pattern":"^\\/tags\\/([^/]+?)\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/tags/[tag].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/cv.d53c99cb.css"}],"routeData":{"route":"/cv","type":"page","pattern":"^\\/cv\\/?$","segments":[[{"content":"cv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cv.astro","pathname":"/cv","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://maria-louisa.com/","base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/projects/project-1.md",{"propagation":"none","containsHead":true}],["C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/technologies/[technology].astro",{"propagation":"none","containsHead":true}],["C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/technologies/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/travel.astro",{"propagation":"none","containsHead":true}],["C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/cv.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/technologies/[technology].astro":"chunks/pages/_technology_.astro.85326758.mjs","/src/pages/cv.astro":"chunks/pages/cv.astro.11822f7d.mjs","/src/pages/projects/project-1.md":"chunks/pages/project-1.md.206ed828.mjs","/src/pages/travel.astro":"chunks/pages/travel.astro.9a1288a4.mjs","C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children.5a6df93a.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.2f3d1a69.mjs","\u0000@astro-page:src/pages/technologies/index@_@astro":"chunks/index@_@astro.fa523071.mjs","\u0000@astro-page:src/pages/technologies/[technology]@_@astro":"chunks/_technology_@_@astro.449b9b5e.mjs","\u0000@astro-page:src/pages/projects/project-1@_@md":"chunks/project-1@_@md.718317fe.mjs","\u0000@astro-page:src/pages/travel@_@astro":"chunks/travel@_@astro.b13db3c7.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag_@_@astro.fd166efd.mjs","\u0000@astro-page:src/pages/cv@_@astro":"chunks/cv@_@astro.c7db1f02.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.f3897ada.js","C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/components/Skills/SkillBar":"_astro/SkillBar.510eb08b.js","@components/DomElements/Pill":"_astro/Pill.810bea8b.js","@sections/Gallery":"_astro/Gallery.5e32de27.js","C:/Users/maria/Documents/GitHub/MyPortfolio/maria/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.a76a00e0.js","@astrojs/react/client.js":"_astro/client.83b22eca.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/cv.d53c99cb.css","/_astro/index.5a42cb37.css","/_astro/project-1.6da9a1b6.css","/_astro/travel.96cd528c.css","/favicon.svg","/robots.txt","/images/agile.svg","/images/asp.svg","/images/astro.svg","/images/azure.svg","/images/checkmark.svg","/images/chevronDown.svg","/images/cicd.svg","/images/csharp.svg","/images/css.svg","/images/czech.svg","/images/danish.svg","/images/Desktop.zip","/images/docker.svg","/images/firebase.svg","/images/gallery.svg","/images/gb-ukm.svg","/images/gcp-light.svg","/images/github.svg","/images/html.svg","/images/internet.svg","/images/italianflag.svg","/images/java.svg","/images/javascript.svg","/images/kubernetes.svg","/images/logo.svg","/images/maria-logo-01.svg","/images/maria-louisa-com-.pdf","/images/maria.jpg","/images/microservices.svg","/images/mongodb.svg","/images/mysql.svg","/images/node.svg","/images/nodejs.svg","/images/npm.svg","/images/oop.svg","/images/postgresql.svg","/images/profile.jpeg","/images/profile.jpg","/images/python.svg","/images/r.svg","/images/react-native.svg","/images/react.svg","/images/sass.svg","/images/tailwind.svg","/images/terraform.svg","/images/typescript.svg","/images/web.svg","/images/youtube.svg","/lib/slides.js","/lib/theme-util.js","/_astro/client.83b22eca.js","/_astro/Gallery.5e32de27.js","/_astro/Gallery.ff405c3d.css","/_astro/index.ed373d49.js","/_astro/jsx-runtime.391947bd.js","/_astro/photoswipe.esm.a76a00e0.js","/_astro/Pill.810bea8b.js","/_astro/SkillBar.510eb08b.js","/_astro/SkillBar.80c18a43.css","/images/companies/Biamp-Logo.jpg","/images/companies/geltec.png","/images/companies/kakring-el-logo.png","/images/companies/lens-logo.png","/images/companies/sdu-01.svg","/images/companies/SDU.png","/images/companies/SDU_B.jpg","/images/companies/startupCentral.png","/images/companies/VIA.png","/images/logo/logoM.svg","/images/logo/logoMaria.svg","/images/logo/marialogo-01.svg","/images/logo/sdu-01.svg","/images/projects/artcaffe.sk_.png","/images/projects/artcaffe_small.png","/images/projects/artcaffe/about.png","/images/projects/artcaffe/aboutThumb.png","/images/projects/artcaffe/artcaffe.sk_.png","/images/projects/artcaffe/full1.png","/images/projects/artcaffe/home.png","/images/projects/artcaffe/homeThumb.png","/images/projects/artcaffe/menu.png","/images/projects/artcaffe/menuThumb.png","/images/projects/artcaffe/reservation.png","/images/projects/artcaffe/reservationThumb.png","/images/projects/cloud/architecture_done.jpg","/images/projects/cloud/autscaler gc.jpeg","/images/projects/cloud/cpuutilizationgc.jpeg","/images/projects/cloud/localhost_architecture.jpg"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
