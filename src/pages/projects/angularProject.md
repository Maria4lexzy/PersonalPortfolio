---
layout: ../../layouts/MarkdownProjectLayout.astro
title: 'Angular & Astro - Web Application'
role: 'developer'
teamNum: '1'
organization: 'None'
description: 'A project demonstrating the use of Angular within Astro project.'
images: []
featured: true
technologies: ['angular', 'astro']
externals: [{ name: 'web', url: 'https://maria-louisa.com/' }]
---

## Description

This guide aims to walk you through the process of seamlessly integrating Angular, a popular JavaScript framework, with Astro, a modern static site generator. By combining the capabilities of Angular's dynamic components with Astro's performance benefits, you can create dynamic and performant web applications that provide the best of both worlds

## Step 1: Create an Astro Project

Begin by initiating a new Astro project using the following command:

```sh
# create a new project with npm
npm create astro@latest
```

This command will set up the foundation for your Astro project.

## Step 2: Implementing Angular and Astro

Integrating Angular with Astro is straightforward. Execute the following command:

```sh
npx astro add @analogjs/astro-angular
```

By running this command, you ensure a seamless collaboration between Angular and Astro.

## Step 3: Setting Up the TS Config

To ensure smooth integration between Angular and Astro, create a tsconfig.app.json file in your project's root. Follow these steps:

1. Create a file named `tsconfig.app.json` in the root directory of your project.

2. Add the following configuration code to the `tsconfig.app.json` file:

```json
{
  "extends": "./tsconfig.json",
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "noEmit": false,
    "target": "es2020",
    "module": "es2020",
    "lib": ["es2020", "dom"],
    "skipLibCheck": true
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true,
    "allowJs": false
  },
  "files": [],
  "include": ["src/**/*.ts", "src/**/*.tsx"]
}
```

## Step 4: Adding Angular Integration to Astro

Now we need to add the integration to the `astro.config.mjs`. Follow these steps:

1. Find the `astro.config.mjs` file in the root of your project.

2. Update with the the following imports and configuration:

```js
import { defineConfig } from 'astro/config';
import angular from '@analogjs/astro-angular';
import analogjsangular from '@analogjs/astro-angular';

export default defineConfig({
  site: 'https://yoursite.com/',
  integrations: [
    angular({
      vite: {
        inlineStylesExtension: 'scss|sass|less',
        ssr: {
          // transform these packages during SSR. Globs supported
          noExternal: ['@rx-angular/**'],
        },
      },
    }),
    analogjsangular(),
  ],
  output: 'server',
});
```

## Step 5: Creating an Angular Component

1. Let's create a component in the `src/components` folder. Name it `hello.component.ts`.

2. Define your component. Bear in mind that Astro Angular integration exclusively supports rendering standalone components:

```ts
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf],
  template: `
    <p>Hello from Angular!!</p>

    <p *ngIf="show">{{ helpText }}</p>

    <button (click)="toggle()">Toggle</button>
  `,
})
export class HelloComponent {
  @Input() helpText = 'help';

  show = false;

  toggle() {
    this.show = !this.show;
  }
}
```

## Step 6: Adding the Component to Astro Template

1. Import the component:

```markdown
---
import { HelloComponent } from '../components/hello.component';
const helpText = "Helping binding";
---
```

2. Hydrate the component for JavaScript loading:

```html
<HelloComponent client:visible />
```

## Step 7: Running the Application

```
npm run dev
```

This will initiate your integrated Angular and Astro application for local development.
Congratulations, you've successfully unlocked the door to a dynamic and performant web development journey by integrating Angular with Astro.

As you embark on this exciting journey, don't hesitate to customize and expand upon what you've learned here. Feel free to explore deeper integrations, experiment with different Angular components, and unleash your creativity to create truly exceptional web experiences.
Happy coding!

_This tutorial draws inspiration from the comprehensive documentation provided by Analog.js. For further insights and detailed information about Astro Angular integration, you can explore the [official Analog.js documentation](https://analogjs.org/docs/packages/astro-angular/overview) as well as the [Astro website documentation](https://astro.build/). Building upon these resources, we'll guide you through the process of seamlessly integrating Angular with Astro to craft dynamic and performant web applications._
