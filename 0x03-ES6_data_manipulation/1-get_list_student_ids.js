export default function getListStudentIds(list) {
  if (Array.isArray(list)) return list.map((l) => l.id);
  return [];
}
