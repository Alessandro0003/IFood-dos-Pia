import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style['header-container']}>
        Cookies
      </div>
      <div className={style['header-mobile']}>
        <AiOutlineShoppingCart size={29} className={style.cart}/>
        <AiOutlineMenu size={29} className={style.menu} />
      </div>
      <div className={style['header-desktop']}>
        <nav>
          <ul className={style['menu']}>
            <li><Link to='/' className={style['li']}>Cardápio</Link></li>
            <AiOutlineShoppingCart size={25} />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;