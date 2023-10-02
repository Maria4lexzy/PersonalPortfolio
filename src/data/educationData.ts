interface EducationEntry {
  title: string;
  degree: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
  courses: string[];
}
export const educationData: EducationEntry[] = [
  {
    title: "University of Southern Denmark",
    degree: "MSc Software Engineering",
    date: "September 2021 - July 2023",
    description:
      "My master's program at SDU University was a transformative experience where I strengthed my engineering skills and deepened my knowledge in:",
    skills: [
      "Big Data: Proficiency in handling and analyzing large datasets using tools like Apache Spark, Hadoop, and Hive",
      "Coding Practices: Elevated coding practices with a focus on structured, maintainable, and efficient code. ",
      "Cloud Technologies: In-depth exploration of cloud platforms, encompassing concepts like IaaS, PaaS, and SaaS.",
      "Web3 and Cryptocurrencies: Hands-on experience with decentralized technologies, such as blockchain, P2P, DeFi",
      "Software Development Lifecycle Management: Managing software development lifecycle from inception to deployment, following principles and tools like Agile and Scrum.",
    ],
    image: "/images/companies/sdu.svg",
    courses: [
      "Big Data and Data Science Technologies",
      "Blockchain Theory and Usage",
      "Cloud Computing and Edge-Cloud Adaptive Architectures",
      "Data Security",
      "Innovative SW Solutions",
      "Linux for Embedded Objects",
      "Model-Driven SW Development",
      "Scientific Methods",
      "Security in Computer Systems",
      "SW Engineering of Mobile and Ubiquitous Systems",
      "SW System Analysis and Verification",
      "SW Technology for IoT",
      "SW Architecture",
      "Statistics and Machine Learning",
      "Systems Modeling and Simulation",
    ],
  },

  {
    title: "VIA University College",
    degree: "BEng Software Technology Engineering",

    date: "February 2018 - July 2021",
    description:
      "During my studies at VIA, I acquired technical and soft skills that allow me to: ",
    skills: [
      "Design and develop software systems, architectures, and diagrams",
      "Implement software systems using a variety of programming languages and technologies",
      "Assess and employ appropriate software technologies to address different challenges",
      "Collaborate with others to solve problems and achieve goals",
      "Demonstrate strong problem-solving skills",
    ],
    image: "/images/companies/via.svg",
    courses: [
      "Semester Project: Single User System",
      "Discrete Mathematics and Algorithms",
      "SW Development with UML and Java",
      "Web Development",
      "Database Systems",
      "SW Engineering",
      "Semester Project: Client/Server System",
      "Database Systems",
      "Network and Security",
      "Computer Architecture and Organization",
      "Semester project: Heterogeneous Systems",
      ".NET Programming",
      "Algorithms and Data Structures",
      "DevOps & Cloud",
      "Embedded SW",
      "Semester Project: Internet of Things",
      "Engineering Internship",
      "Applied Linear Algebra",
      "No-SQL versus relational databases",
      "IT Security and Cryptography in Practice",
      "Programming Concepts and Languages",
      "Digital Multi-Media",
    ],
  },
  {
    title: "ITS Tulli Buzzi",
    degree: "High School Diploma - Junior Electronics Engineer",
    date: "September 2014 - July 2017",
    description: "My education at ITS - Buzzi has equipped me with: ",
    skills: [
      "Practical experience in electrical circuitry and components",
      "Knowledge in digital systems and microcontrollers.",
      "Strong problem-solving abilities gained through practical projects and lab work.",
      "Interdisciplinary knowledge in mathematics, physics, computer science, and engineering.",
    ],
    image: "/images/companies/tullio.svg",
    courses: [
      "Mathematics",
      "Physics",
      "Electronics",
      "Electrotechnics",
      "Informatics",
      "Automated Systems",
      "Electrical Design",
    ],
  },
];
