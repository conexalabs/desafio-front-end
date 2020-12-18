export function titleCase(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function createAddress({ logradouro, bairro, municipio, numero, uf }) {
  const newAddress = [logradouro, bairro, numero, municipio, uf]
    .filter(Boolean)
    .join(", ");

  if (!newAddress) return "Sem endereço";

  return newAddress;
}
