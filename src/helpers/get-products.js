export const getProducts = async (query) => {
  const url = `https://u-camp-test-backend.herokuapp.com/api/search?query=${encodeURI(query)}`;
  const resp = await fetch(url);
  return await resp.json();
};
