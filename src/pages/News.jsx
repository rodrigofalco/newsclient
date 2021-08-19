import {
  useParams,
} from 'react-router-dom';

export default function NewsPage(props) {
  const { newsId } = useParams();
  return `${newsId} news`;
}