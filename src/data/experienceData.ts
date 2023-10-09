interface ExperienceEntry {
  company: string;
  role: string;
  date: string;
  image: string;
  responsibilities: string[];
}
export const experienceData: ExperienceEntry[] = [
  {
    company: "Master Thesis - IBM CIC & Smukfest",
    role: "React Native Performance Research & Implementation",
    date: "February 2023 - June 2023",
    image: "/images/companies/ibm.png",
    responsibilities: [
      "Conducted extensive research on React Native performance, focusing on technical factors affecting performance and best practices for optimization",
      "Performed in-depth performance analysis of React Native applications, identifying areas for improvement such as unnecessary re-renders, slow app startup time, thread bottlenecks, and slow list rendering",
      "Developed a set of best practices for optimizing React Native performance, including the use of performance profiling tools, lazy loading, code splitting, memoization, and list optimization strategies",
      "Applied research findings to the development of the Smukfest application in collaboration with IBM CIC and Smukfest festival, resulting in a 93% improvement in performance compared to the original application",
    ],
  },
  {
    company: "Art Caffe Sabinov",
    role: "Software Developer ",
    date: "January 2022 - July 2022",
    image: "/images/companies/artcaffe.svg",
    responsibilities: [
      "Design and implement user interface components using Astro and React, ensuring a responsive and visually appealing design",
      "Integrate Firebase to handle data storage and retrieval, enabling dynamic content updates on the website",
      "Set up and maintained CI/CD pipelines using GitHub Actions",
    ],
  },
  {
    company: "Startup Central",
    role: "Software Developer Intern",
    date: "February 2020 - July 2020",
    image: "/images/companies/startupCentral.svg",
    responsibilities: [
      "Acquired proficiency in Umbraco and actively contributed to web development projects.",
      "Worked in an agile team environment, participating in sprint stand-ups and collaborating with cross-functional teams.",
      "Engaged in technical discussions and contributed innovative ideas to enhance technical solutions.",
    ],
  },

  {
    company: "Biamp Denmark",
    role: "Juinor Software/Hardware Tester",
    date: "February 2017 - August 2018",
    image: "/images/companies/biamp.svg",
    responsibilities: [
      "Tested new releases of the company's software and ensured seamless integration with hardware.",
      "Assisted in the assembly of electronic devices, contributing to the production of high-quality products.",
      "Collaborated with cross-functional teams to identify areas of improvement and enhance overall product performance.",
    ],
  },
  {
    company: "Klakring El, Denmark",
    role: "Assistant Electronics Technician",
    date: "July 2017 - January 2018",
    image: "/images/companies/klakring.svg",
    responsibilities: [
      "Conducted soldering of electronic components and effectively mounted control panels used in mechanic shops.",
      "Ensured the quality and reliability of electronic assemblies by adhering to industry standards and specifications.",
    ],
  },

  {
    company: "European Laboratory for Non-Linear Spectroscopy, ITALY",
    role: "Electronics Technician Intern",
    date: "September 2016 - September 2016",
    image: "/images/companies/lens.svg",
    responsibilities: [
      "One month internship during my high school education in Italy.",
      "Assisted in the development of hardware components for power lasers within the physics department.",
      "Integrated Arduino IDE with Processing IDE and hardware components to create seamless connections.",
    ],
  },
];

// {
//   company: "Geltec LTD Paignton, UK",
//   role: "Electronics Technician Intern",
//   date: "May 2016 - July 2016",
//   image: "/images/companies/geltec.svg",
//   responsibilities: [
//     "Assisted in the development and documentation of a vibration detection sensor circuit for the company.",
//     "Conducted maintenance tasks for 3D printers, amplifiers, and other electronic appliances.",
//     "Contributed to the development of water detection sensors and optimized battery life for improved efficiency.",
//   ],
// },
