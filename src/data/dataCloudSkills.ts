export interface IDdataCloudSkill {
  name: string;
  progress: number;
  icon: string;
  url: string;
  backgroundColor: string;
}

const dataCloudSkills: IDdataCloudSkill[] = [
  {
    name: 'MySQL',
    progress: 76,
    icon: '/images/mysql.svg',
    url: 'https://www.mysql.com/',
    backgroundColor: 'bg-blue-500',
  },
  {
    name: 'MongoDB',
    progress: 65,
    icon: '/images/mongodb.svg',
    url: 'https://www.mongodb.com/',
    backgroundColor: 'bg-green-500',
  },
  // {
  //   name: 'PostgreSQL',
  //   progress: 75,
  //   icon: '/images/postgresql.svg',
  //   url: 'https://www.postgresql.org/',
  //   backgroundColor: 'bg-purple-500',
  // },
  {
    name: 'Firebase',
    progress: 80,
    icon: '/images/firebase.svg',
    url: 'https://firebase.google.com/',
    backgroundColor: 'bg-yellow-500',
  },
  {
    name: 'Google Cloud',
    progress: 60,
    icon: '/images/gcp-light.svg',
    url: 'https://cloud.google.com/',
    backgroundColor: 'bg-yellow-300',
  },
  {
    name: 'Microsoft Azure',
    progress: 40,
    icon: '/images/azure.svg',
    url: 'https://azure.microsoft.com/',
    backgroundColor: 'bg-sky-600',
  },
  // {
  //   name: 'Terraform',
  //   progress: 60,
  //   icon: '/images/terraform.svg',
  //   url: 'https://www.terraform.io/',
  //   backgroundColor: 'bg-purple-600',
  // },
  {
    name: 'Docker',
    progress: 30,
    icon: '/images/docker.svg',
    url: 'https://www.docker.com/',
    backgroundColor: 'bg-sky-500',
  },
  {
    name: 'Kubernetes',
    progress: 40,
    icon: '/images/kubernetes.svg',
    url: 'https://kubernetes.io/',
    backgroundColor: 'bg-blue-600',
  },

  // Add more database management systems here
];

export default dataCloudSkills;
