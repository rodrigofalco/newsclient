import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getNews, getNewsQueryOptions } from '../services/api';

export default function NewsPage(props) {
  const { searchText } = props;
  const { newsId } = useParams();
  const { isLoading, isError, data, error } = useQuery(
    ['homeNews', searchText],
    () => getNews(searchText),
    getNewsQueryOptions
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data.articles[newsId]);
  return `${newsId} news ${data.articles[newsId].title}`;
}
