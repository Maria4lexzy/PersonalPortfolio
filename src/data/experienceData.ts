interface ExperienceEntry {
  company: string;
  role: string;
  date: string;
  image: string;
  responsibilities: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    company: "Salling Group",
    role: "Backend Software Engineer",
    date: "December 2023 - Present",
    image: "/images/companies/Salling.png",
    responsibilities: [
      "Backend engineer working on distributed retail systems across multiple European markets using Java and Spring Boot.",
      "Contributed to a large-scale master data initiative by helping define data contracts and integration patterns to improve consistency and reliability across systems.",
      "Participated in technical and architectural discussions around system design, service boundaries, and deployment structures in an enterprise environment.",
      "Supported backend integrations for Magnolia CMS and collaborated with frontend, DevOps, and ML/AI teams on cross-system solutions.",
      "Contributed to CI/CD pipelines and multi-environment deployment workflows supporting internal systems.",
      "Built internal tools and Zendesk-based applications to improve operational efficiency.",
      "Promoted within 10 months based on technical contribution and initiative in improving internal systems."
    ],
  },

  {
    company: "Master Thesis - IBM CIC & Smukfest",
    role: "React Native Performance Research & Implementation",
    date: "February 2023 - June 2023",
    image: "/images/companies/ibm.png",
    responsibilities: [
      "Worked on performance analysis and optimization of React Native applications in collaboration with IBM CIC and Smukfest.",
      "Identified system-level bottlenecks affecting rendering, startup performance, and thread usage.",
      "Developed structured optimization practices including profiling, lazy loading, memoization, and rendering strategies.",
      "Improved Smukfest application performance by 93% compared to the original version."
    ],
  },

  {
    company: "Art Caffe Sabinov",
    role: "Software Developer",
    date: "January 2022 - July 2022",
    image: "/images/companies/artcaffe.svg",
    responsibilities: [
      "Developed a web application using Astro and React with Firebase backend integration.",
      "Implemented CI/CD pipelines using GitHub Actions.",
      "Maintained deployment workflows and ensured smooth production releases."
    ],
  },

  {
    company: "Startup Central",
    role: "Software Developer Intern",
    date: "February 2020 - July 2020",
    image: "/images/companies/startupCentral.svg",
    responsibilities: [
      "Contributed to Umbraco-based web development projects in an Agile team.",
      "Participated in sprint planning and feature development.",
      "Engaged in technical discussions around implementation approaches."
    ],
  },

  {
    company: "Biamp",
    role: "Junior Software/Hardware Tester",
    date: "February 2017 - August 2018",
    image: "/images/companies/biamp.svg",
    responsibilities: [
      "Tested software releases and validated hardware integration in embedded systems.",
      "Supported assembly and verification of electronic devices.",
      "Contributed to improving system reliability through structured testing."
    ],
  },

  {
    company: "Electronics Technician Roles",
    role: "Hardware & Systems Intern",
    date: "2016 - 2018",
    image: "/images/companies/lens.svg",
    responsibilities: [
      "Worked on hardware assembly, soldering, and system integration in electronics environments.",
      "Supported development of laser-related systems in research settings.",
      "Integrated Arduino-based systems with software tools for experimental setups."
    ],
  },
];
