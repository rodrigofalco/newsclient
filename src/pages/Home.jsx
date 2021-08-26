import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getNews, getNewsQueryOptions } from '../services/api';

export default function HomePage(props) {
  const { searchText } = props;
  console.log('Rendering home');
  console.log(searchText);
  const { isLoading, isError, data, error } = useQuery(
    ['homeNews', searchText],
    () => getNews(searchText),
    getNewsQueryOptions
  );

  if (isLoading) {
    return <CircularProgress />;
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
