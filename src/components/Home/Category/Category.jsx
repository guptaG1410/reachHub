import './Category.scss';
import cat2 from '../../../assets/category/cat-2.jpg';

const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
            <img src={cat2} alt=''/>
        </div>
        <div className="category">
            <img src={cat2} alt=''/>
        </div>
        <div className="category">
            <img src={cat2} alt=''/>
        </div>
        <div className="category">
            <img src={cat2} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Category;
