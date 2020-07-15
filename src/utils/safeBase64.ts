const encode = (value: string) => {
  return btoa(unescape(encodeURIComponent(value)));
};

const decode = (value: string) => {
  return decodeURIComponent(escape(atob(value)));
};

export default { encode, decode };