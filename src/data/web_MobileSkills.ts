export interface IWebMobileSkills {
  name: string;
  progress: number;
  icon: string;
  url: string;
  backgroundColor: string;
}
const web_MobileSkills: IWebMobileSkills[] = [
  {
    name: 'Reactjs',
    progress: 80,
    icon: '/images/react.svg',
    url: 'https://reactjs.org/',
    backgroundColor: 'bg-blue-500',
  },
  {
    name: 'React Native',
    progress: 75,
    icon: '/images/react-native.svg',
    url: 'https://reactnative.dev/',
    backgroundColor: 'bg-blue-600',
  },
  {
    name: 'Astro',
    progress: 90,
    icon: '/images/astro.svg',
    url: 'https://astro.build/',
    backgroundColor: 'bg-orange-700',
  },
  {
    name: 'TypeScript',
    progress: 65,
    icon: '/images/typescript.svg',
    url: 'https://www.typescriptlang.org/',
    backgroundColor: 'bg-blue-700',
  },
  {
    name: 'Tailwind',
    progress: 70,
    url: 'https://tailwindcss.com/',
    icon: '/images/tailwind.svg',
    backgroundColor: 'bg-sky-400',
  },
  // {
  //   name: 'Sass',
  //   progress: 65,
  //   icon: '/images/sass.svg',
  //   url: 'https://sass-lang.com/',
  //   backgroundColor: 'bg-pink-500',
  // },

  {
    name: 'ASP.NET ',
    progress: 65,
    icon: '/images/asp.svg',
    url: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
    backgroundColor: 'bg-purple-500',
  },
  {
    name: 'Node.js',
    progress: 65,
    icon: '/images/nodejs.svg',
    url: 'https://nodejs.org/',
    backgroundColor: 'bg-green-500',
  },

  // ... (other backend skills)
];
export default web_MobileSkills;
