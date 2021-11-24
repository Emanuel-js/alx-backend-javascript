export default function guardrail(mathFunction) {
  const arr = [];

  try {
    arr.push(mathFunction());
  } catch (err) {
    arr.push(err.toString());
  } finally {
    arr.push('Guardrail was processed');
  }
  return arr;
}
