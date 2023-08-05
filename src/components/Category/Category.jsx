import { useParams } from 'react-router-dom';
import Products from '../Products/Products';
import './Category.scss';
import useFetch from '../../hooks/fetchData';

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/prdoucts?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          }
        </div>
        <Products notReq={true} products={data}/>
      </div>
    </div>
  );
};

export default Category;
