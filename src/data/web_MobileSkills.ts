export interface IWebMobileSkills {
  name: string;
  progress: number;
  icon: string;
  url: string;
  backgroundColor: string;
}
const web_MobileSkills: IWebMobileSkills[] = [
  {
    name: "ReactJs",
    progress: 75,
    icon: "/images/react.svg",
    url: "https://reactjs.org/",
    backgroundColor: "bg-blue-500",
  },
  {
    name: "React Native",
    progress: 55,
    icon: "/images/react-native.svg",
    url: "https://en.wikipedia.org/wiki/React_Native",
    backgroundColor: "bg-blue-600",
  },
  {
    name: "Astro",
    progress: 80,
    icon: "/images/astro.svg",
    url: "https://astro.build/",
    backgroundColor: "bg-orange-500",
  },
  {
    name: "Angular",
    progress: 40,
    icon: "/images/angular.svg",
    url: "https://en.wikipedia.org/wiki/Angular_(web_framework)",
    backgroundColor: "bg-red-600",
  },
  {
    name: "Umbraco",
    progress: 55,
    icon: "/images/umbraco.svg",
    url: "https://umbraco.com/",
    backgroundColor: "bg-indigo-600",
  },
  {
    name: "TypeScript",
    progress: 75,
    icon: "/images/typescript.svg",
    url: "https://www.typescriptlang.org/",
    backgroundColor: "bg-blue-400",
  },
  {
    name: "Tailwind",
    progress: 95,
    url: "https://tailwindcss.com/",
    icon: "/images/tailwind.svg",
    backgroundColor: "bg-sky-400",
  },
  // {
  //   name: 'Sass',
  //   progress: 65,
  //   icon: '/images/sass.svg',
  //   url: 'https://sass-lang.com/',
  //   backgroundColor: 'bg-pink-500',
  // },

  {
    name: ".NET ",
    progress: 65,
    icon: "/images/asp.svg",
    url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    backgroundColor: "bg-purple-500",
  },
  {
    name: "Node.js",
    progress: 60,
    icon: "/images/nodejs.svg",
    url: "https://en.wikipedia.org/wiki/Node.js/",
    backgroundColor: "bg-green-500",
  },

  // ... (other backend skills)
];
export default web_MobileSkills;
