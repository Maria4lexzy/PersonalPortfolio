export interface ProgrammingLanguage {
  name: string;
  progress: number;
  url: string;
  icon: string;
  backgroundColor: string;
}

const programmingLanguages: ProgrammingLanguage[] = [
  {
    name: 'Python',
    progress: 90,
    url: 'https://www.python.org/',
    icon: '/images/python.svg',
    backgroundColor: 'bg-blue-500',
  },
  {
    name: 'JavaScript',
    progress: 75,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: '/images/javascript.svg',
    backgroundColor: 'bg-yellow-400',
  },
  {
    name: 'Java',
    progress: 70,
    url: 'https://www.java.com/',
    icon: '/images/java.svg',
    backgroundColor: 'bg-blue-700',
  },
  {
    name: 'C#',
    progress: 65,
    url: 'https://learn.microsoft.com/en-us/docs/',
    icon: '/images/csharp.svg',
    backgroundColor: 'bg-green-600',
  },
  {
    name: 'R',
    progress: 30,
    url: 'https://www.r-project.org/',
    icon: '/images/r.svg',
    backgroundColor: 'bg-blue-900',
  },
  {
    name: 'TypeScript',
    progress: 70,
    url: 'https://www.typescriptlang.org/',
    icon: '/images/typescript.svg',
    backgroundColor: 'bg-blue-600',
  },
  {
    name: 'Tailwind CSS',
    progress: 60,
    url: 'https://tailwindcss.com/',
    icon: '/images/tailwind.svg',
    backgroundColor: 'bg-sky-400',
  },
  {
    name: 'Sass',
    progress: 55,
    url: 'https://sass-lang.com/',
    icon: '/images/sass.svg',
    backgroundColor: 'bg-pink-600',
  },
  {
    name: 'HTML',
    progress: 80,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: '/images/html.svg',
    backgroundColor: 'bg-red-500',
  },
  {
    name: 'CSS',
    progress: 75,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: '/images/css.svg',
    backgroundColor: 'bg-blue-500',
  },
];

export default programmingLanguages;
