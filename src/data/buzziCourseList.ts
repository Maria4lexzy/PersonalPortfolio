// IViaCourse interface for type checking
interface IBuzziCourse {
  courseName: string;
}

const buzziCourseList: IBuzziCourse[] = [
  { courseName: 'Mathematics' },
  { courseName: 'Physics' },
  { courseName: 'Electronics' },
  { courseName: 'Electrotechnics' },
  { courseName: 'Informatics' },
  { courseName: 'Automated Systems' },
  { courseName: 'Electrical Design' },
];

export default buzziCourseList;
