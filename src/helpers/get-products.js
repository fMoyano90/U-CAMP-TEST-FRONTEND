export const getProducts = async (query) => {
  const url = `http://localhost:5000/api/search?query=${encodeURI(query)}`;
  const resp = await fetch(url);
  return await resp.json();
};
