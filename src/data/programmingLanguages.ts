export interface IProgrammingLanguage {
  name: string;
  progress: number;
  url: string;
  icon: string;
  backgroundColor: string;
}

const programmingLanguages: IProgrammingLanguage[] = [
  {
    name: "JavaScript",
    progress: 85,
    url: "https://en.wikipedia.org/wiki/JavaScript",
    icon: "/images/javascript.svg",
    backgroundColor: "bg-yellow-400",
  },
  {
    name: "HTML5",
    progress: 90,
    url: "https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard.",
    icon: "/images/html.svg",
    backgroundColor: "bg-red-500",
  },
  {
    name: "CSS3",
    progress: 90,
    url: "https://en.wikipedia.org/wiki/CSS",
    icon: "/images/css.svg",
    backgroundColor: "bg-blue-500",
  },
  {
    name: "Java",
    progress: 70,
    url: "https://en.wikipedia.org/wiki/Java_(programming_language)",
    icon: "/images/java.svg",
    backgroundColor: "bg-blue-700",
  },
  {
    name: "C#",
    progress: 75,
    url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)#:~:text=C%23%20(pronounced%20See%20sharp)%20is,C%23",
    icon: "/images/csharp.svg",
    backgroundColor: "bg-green-600",
  },

  // {
  //   name: 'R',
  //   progress: 20,
  //   url: 'https://www.r-project.org/',
  //   icon: '/images/r.svg',
  //   backgroundColor: 'bg-blue-900',
  // },
  {
    name: "Python",
    progress: 40,
    url: "https://en.wikipedia.org/wiki/Python_(programming_language)",
    icon: "/images/python.svg",
    backgroundColor: "bg-blue-500",
  },
];

export default programmingLanguages;
