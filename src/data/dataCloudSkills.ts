export interface IDdataCloudSkill {
  name: string;
  progress: number;
  icon: string;
  url: string;
  backgroundColor: string;
}

const dataCloudSkills: IDdataCloudSkill[] = [
  {
    name: 'PostgreSQL',
    progress: 85,
    icon: '/images/postgresql.svg',
    url: 'https://www.postgresql.org/',
    backgroundColor: 'bg-purple-500',
  },
  {
    name: "Firebase",
    progress: 75,
    icon: "/images/firebase.svg",
    url: "https://firebase.google.com/",
    backgroundColor: "bg-yellow-500",
  },
  {
    name: "Google Cloud",
    progress: 80,
    icon: "/images/gcp.svg",
    url: "https://cloud.google.com/",
    backgroundColor: "bg-yellow-300",
  },
  {
    name: "Microsoft Azure",
    progress: 70,
    icon: "/images/azure.svg",
    url: "https://en.wikipedia.org/wiki/Microsoft_Azure",
    backgroundColor: "bg-sky-600",
  },
  {
    name: "Docker",
    progress: 65,
    icon: "/images/docker.svg",
    url: "https://en.wikipedia.org/wiki/Docker_(software)",
    backgroundColor: "bg-sky-500",
  },
  {
    name: "Kubernetes",
    progress: 60,
    icon: "/images/kubernetes.svg",
    url: "https://kubernetes.io/",
    backgroundColor: "bg-blue-600",
  },

  // Add more database management systems here
];

export default dataCloudSkills;
