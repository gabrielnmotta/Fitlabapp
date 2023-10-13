export function getCurrentDate(): string {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // O mês é base 0, então é necessário adicionar 1
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}
