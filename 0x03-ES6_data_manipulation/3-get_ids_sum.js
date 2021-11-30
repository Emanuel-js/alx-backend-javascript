export default function getStudentIdsSum(students) {
  return students.reduce((acc, students) => acc + students.id, 0);
}
