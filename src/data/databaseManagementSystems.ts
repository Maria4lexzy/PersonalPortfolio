export interface DatabaseManagementSystem {
  name: string;
  progress: number;
  icon: string;
  url: string;
  backgroundColor: string;
}

const databaseManagementSystems: DatabaseManagementSystem[] = [
  {
    name: 'MySQL',
    progress: 80,
    icon: '/images/mysql.svg',
    url: 'https://www.mysql.com/',
    backgroundColor: 'bg-blue-500',
  },
  {
    name: 'MongoDB',
    progress: 75,
    icon: '/images/mongodb.svg',
    url: 'https://www.mongodb.com/',
    backgroundColor: 'bg-green-500',
  },
  {
    name: 'PostgreSQL',
    progress: 75,
    icon: '/images/postgresql.svg',
    url: 'https://www.postgresql.org/',
    backgroundColor: 'bg-purple-500',
  },
  // Add more database management systems here
];

export default databaseManagementSystems;
