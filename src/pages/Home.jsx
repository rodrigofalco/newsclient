import { useQuery } from 'react-query';
import { getNews } from '../services/api';

export default function HomePage() {
  const { isLoading, isError, data, error } = useQuery('homeNews', getNews);

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
      {data.articles.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
