import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getNews, getNewsQueryOptions } from '../services/api';

export default function CategoryPage(props) {
  const { categorySlug } = useParams();
  const { searchText } = props;
  const { isLoading, isError, data, error } = useQuery(
    ['homeNews', searchText, categorySlug],
    () => getNews(searchText, categorySlug),
    getNewsQueryOptions
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data);

  // We can assume by this point that `isSuccess === true`

  return (
    <ul>
      {data.articles.map((todo, index) => (
        <li key={index}>
          <Link to={`/news/${index}`}>{todo.title}</Link>{' '}
        </li>
      ))}
    </ul>
  );
}
