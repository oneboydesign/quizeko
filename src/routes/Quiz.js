import { useParams } from 'react-router-dom';
export default function Quiz() {
  const { category } = useParams();
  return <div>Quiz pour la catégorie : {category}</div>;
}