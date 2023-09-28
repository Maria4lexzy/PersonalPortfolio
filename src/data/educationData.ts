interface Course {
  courseName: string;
}

interface EducationEntry {
  title: string;
  degree: string;
  date: string;
  description: string;
  image: string;
  courses: Course[];
}
export const educationData: EducationEntry[] = [
  {
    title: 'University of Southern Denmark',
    degree: 'MSc Software Engineering',
    date: 'February 2018 - July 2021',
    description:
      'My education at SDU has provided me with a comprehensive understanding ' +
      'of software engineering, allowing me to independently take ' +
      'responsibility for the entire software development lifecycle, from ' +
      'identifying needs and analyzing requirements to software design, ' +
      'programming, testing, and project management.',
    image: '/images/companies/sdu.svg',
    courses: [
      { courseName: 'Big Data and Data Science Technologies' },
      { courseName: 'Blockchain Theory and Usage' },
      { courseName: 'Cloud Computing and Edge-Cloud Adaptive Architectures' },
      { courseName: 'Data Security' },
      { courseName: 'Innovative SW Solutions' },
      { courseName: 'Linux for Embedded Objects' },
      { courseName: 'Model-Driven SW Development' },
      { courseName: 'Scientific Methods' },
      { courseName: 'Security in Computer Systems' },
      { courseName: 'SW Engineering of Mobile and Ubiquitous Systems' },
      { courseName: 'SW System Analysis and Verification' },
      { courseName: 'SW Technology for IoT' },
      { courseName: 'SW Architecture' },
      { courseName: 'Statistics and Machine Learning' },
      { courseName: 'Systems Modeling and Simulation' },
    ],
  },

  {
    title: 'VIA University College',
    degree: 'BEng Software Technology Engineering',
    date: 'September 2021 - July 2023',
    description:
      'My education at VIA has equipped me with a strong foundation in software ' +
      'engineering and a broad understanding of industry dynamics. ' +
      'Additionally, it has nurtured my passion for technology and prepared me ' +
      'to thrive in the fast-paced and ever-evolving software industry, and ' +
      'allowed me to gain a solid foundation in software engineering principles ' +
      'and practices.',
    image: '/images/companies/via.svg',
    courses: [
      { courseName: 'Semester Project: Single User System' },
      { courseName: 'Discrete Mathematics and Algorithms' },
      { courseName: 'SW Development with UML and Java' },
      { courseName: 'Web Development' },
      { courseName: 'Database Systems' },
      { courseName: 'SW Engineering' },
      { courseName: 'Semester Project: Client/Server System' },
      { courseName: 'Database Systems' },
      { courseName: 'Network and Security' },
      { courseName: 'Computer Architecture and Organization' },
      { courseName: 'Semester project: Heterogeneous Systems' },
      { courseName: '.NET Programming' },
      { courseName: 'Algorithms and Data Structures' },
      { courseName: 'DevOps & Cloud' },
      { courseName: 'Embedded SW' },
      { courseName: 'Semester Project: Internet of Things' },
      { courseName: 'Engineering Internship' },
      { courseName: 'Applied Linear Algebra' },
      { courseName: 'No-SQL versus relational databases' },
      { courseName: 'IT Security and Cryptography in Practice' },
      { courseName: 'Programming Concepts and Languages' },
      { courseName: 'Digital Multi Media' },
      { courseName: 'Digital Signal Processing' },
    ],
  },
  {
    title: 'ITS Tulli Buzzi',
    degree: 'High School Diploma - Junior Electronics Engineer',
    date: 'September 2014 - July 2017',
    description:
      'My education at ITS - Buzzi has equipped me with a strong foundation in ' +
      'electronics and engineering principles. This program has allowed me to ' +
      'develop technical skills in areas such as electrical circuits, digital ' +
      "systems, and microcontrollers. I've honed my problem-solving abilities " +
      'and gained hands-on experience through practical projects and lab work. ' +
      'The interdisciplinary nature of the curriculum has broadened my ' +
      'knowledge in mathematics, physics, computer science, and engineering.',
    image: '/images/companies/tullio.svg',
    courses: [
      { courseName: 'Mathematics' },
      { courseName: 'Physics' },
      { courseName: 'Electronics' },
      { courseName: 'Electrotechnics' },
      { courseName: 'Informatics' },
      { courseName: 'Automated Systems' },
      { courseName: 'Electrical Design' },
    ],
  },
];
