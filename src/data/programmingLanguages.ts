export interface IProgrammingLanguage {
  name: string;
  progress: number;
  url: string;
  icon: string;
  backgroundColor: string;
}

const programmingLanguages: IProgrammingLanguage[] = [
  {
    name: 'JavaScript',
    progress: 75,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: '/images/javascript.svg',
    backgroundColor: 'bg-yellow-400',
  },
  {
    name: 'HTML5',
    progress: 80,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: '/images/html.svg',
    backgroundColor: 'bg-red-500',
  },
  {
    name: 'CSS3',
    progress: 75,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: '/images/css.svg',
    backgroundColor: 'bg-blue-500',
  },
  {
    name: 'Java',
    progress: 50,
    url: 'https://www.java.com/',
    icon: '/images/java.svg',
    backgroundColor: 'bg-blue-700',
  },
  {
    name: 'C#',
    progress: 40,
    url: 'https://learn.microsoft.com/en-us/docs/',
    icon: '/images/csharp.svg',
    backgroundColor: 'bg-green-600',
  },

  // {
  //   name: 'R',
  //   progress: 20,
  //   url: 'https://www.r-project.org/',
  //   icon: '/images/r.svg',
  //   backgroundColor: 'bg-blue-900',
  // },
  {
    name: 'Python',
    progress: 40,
    url: 'https://www.python.org/',
    icon: '/images/python.svg',
    backgroundColor: 'bg-blue-500',
  },
];

export default programmingLanguages;
