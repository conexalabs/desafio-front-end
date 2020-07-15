function create(word: string) {
  return word.split("").map(char => {
    return char.charCodeAt(0).toString(16).padStart(3, "0");
  }).join("");
}

function revert(word: string) {
  return word.match(/.{3}/g)?.map(e => {
    return String.fromCharCode(parseInt(e, 16));
  }).join("");
}

export default { create, revert };