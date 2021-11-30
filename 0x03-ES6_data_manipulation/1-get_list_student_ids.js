export default function getListStudentIds(list) {
  if (Array.isArray(list)) return list?.map((i) => i.id);
  return [];
}
