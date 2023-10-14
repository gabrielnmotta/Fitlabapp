export function getCurrentDate(): string {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}

export const cpfMask = (value?: string) => {
  if (!value) return "";
  let cpf = value.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})/, "$1-$2");
  cpf = cpf.replace(/(-\d{2})\d+?$/, "$1");
  return cpf;
};

export const removeMask = (value?: string) => {
  if (!value) return "";

  value = value.replace(/(\.|\/|\-)/g, "");
  value = value.replace(/[^0-9]/g, "");
  return value;
};
