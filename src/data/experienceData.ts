interface ExperienceEntry {
  company: string;
  role: string;
  date: string;
  image: string;
  responsibilities: string[];
}
export const experienceData: ExperienceEntry[] = [
  {
    company: 'Startup Central - Dit iværksætternetværk Denmark',
    role: 'Software Developer Intern',
    date: 'February 2020 - July 2020',
    image: '/images/companies/startupCentral.svg',
    responsibilities: [
      'Acquired proficiency in Umbraco and actively contributed to web development projects.',
      'Worked in an agile team environment, participating in sprint stand-ups and collaborating with cross-functional teams.',
      'Engaged in technical discussions and contributed innovative ideas to enhance technical solutions.',
    ],
  },
  {
    company: 'Biamp Denmark',
    role: 'Juinor Hardware Tester',
    date: 'February 2017 - August 2018',
    image: '/images/companies/biamp.svg',
    responsibilities: [
      "Tested new releases of the company's software and ensured seamless integration with hardware.",
      'Assisted in the assembly of electronic devices, contributing to the production of high-quality products.',
      'Collaborated with cross-functional teams to identify areas of improvement and enhance overall product performance.',
    ],
  },
  {
    company: 'Klakring El Denmark',
    role: 'Assistant Electronics Technician',
    date: 'July 2017 - January 2018',
    image: '/images/companies/klakring.svg',
    responsibilities: [
      'Conducted soldering of electronic components and effectively mounted control panels used in mechanic shops.',
      'Ensured the quality and reliability of electronic assemblies by adhering to industry standards and specifications.',
    ],
  },
  {
    company: 'Geltec LTD Paignton, UK',
    role: 'Electronics Technician Intern',
    date: 'May 2016 - July 2016',
    image: '/images/companies/geltec.svg',
    responsibilities: [
      'Assisted in the development and documentation of a vibration detection sensor circuit for the company.',
      'Conducted maintenance tasks for 3D printers, amplifiers, and other electronic appliances.',
      'Contributed to the development of water detection sensors and optimized battery life for improved efficiency.',
    ],
  },
  {
    company: 'European Laboratory for Non-Linear Spectroscopy - ITALY',
    role: 'Electronics Technician Intern',
    date: 'September 2016 - September 2016',
    image: '/images/companies/lens.svg',
    responsibilities: [
      'One month internship during my high school education in Italy.',
      'Assisted in the development of hardware components for power lasers within the physics department.',
      'Integrated Arduino IDE with Processing IDE and hardware components to create seamless connections.',
    ],
  },
];
