import './Header.scss';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { VscAccount } from 'react-icons/vsc';
import Search from './Search/Search';
import { Context } from '../../utils/context';
import Cart from '../Cart/Cart';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const { cartCount, showCart, setShowCart } = useContext(Context);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offSet = window.scrollY;
    // console.log(offSet);
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Category</li>
          </ul>
          <div className="center" onClick={() => navigate('/')}>
            ShopCart
          </div>
          <div className="right">
            <TbSearch onClick={() => setSearchModal(true)} />
            <VscAccount />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
};

export default Header;
