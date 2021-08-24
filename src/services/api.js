const API_KEY = 'f7ddb6a3dc874c77ae95187906adeb6c';
const API_BASE_URL = 'https://newsapi.org/v2';
const country = 'AR';
const category = 'business';

export async function getNews() {
  //https://newsapi.org/v2/top-headlines?country=us&category=business&
  return fetch(
    `${API_BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
  ).then((res) => res.json());
}

export function getNewsQueryOptions() {
  return {
    enbled: false,
    staleTime: 300000,
    refetchOnMount: false,
  };
}
