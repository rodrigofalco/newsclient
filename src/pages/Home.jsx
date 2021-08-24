import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getNews, getNewsQueryOptions } from '../services/api';
import { NewsContext } from '../context/NewsContextProvider';

export default function HomePage() {
  const { isLoading, isError, data, error } = useQuery(
    'homeNews',
    getNews,
    getNewsQueryOptions
  );

  const newsContext = useContext(NewsContext);
  console.log(newsContext);

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
