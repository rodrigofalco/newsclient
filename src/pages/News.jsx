import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getNews, getNewsQueryOptions } from '../services/api';

export default function NewsPage(props) {
  const { newsId } = useParams();
  const { isLoading, isError, data, error } = useQuery(
    'homeNews',
    getNews,
    getNewsQueryOptions
  );
  console.log(data.articles[newsId]);
  return `${newsId} news`;
}
