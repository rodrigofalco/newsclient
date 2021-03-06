const API_KEY = 'f7ddb6a3dc874c77ae95187906adeb6c';
const API_BASE_URL = 'https://newsapi.org/v2';
const country = 'AR';

export async function getNews(searchText, category = 'business') {
  let url = `${API_BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
  if (searchText) {
    url = `${API_BASE_URL}/top-headlines?q=${searchText}&country=${country}&category=${category}&apiKey=${API_KEY}`;
  }
  return fetch(url).then((res) => res.json());
}

export function getNewsQueryOptions() {
  return {
    enbled: false,
    staleTime: 300000,
    refetchOnMount: false,
  };
}
