export default function getStudentsByLocation(students, city) {
  return students.filter((list) => list.location === city);
}
