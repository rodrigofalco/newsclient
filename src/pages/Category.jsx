import {
  useParams,
} from 'react-router-dom';

export default function CategoryPage(props) {
  const { categorySlug } = useParams();
  return `${categorySlug} page`;
}