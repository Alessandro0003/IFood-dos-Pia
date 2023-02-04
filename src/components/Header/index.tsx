import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const Header = () => {

  type HeaderDesktop = {
    title: string | JSX.Element
    to: string
  }

  type HeaderMobile = {
    title: JSX.Element,
    to: string
  }

  const headerDestinationsDesktop: HeaderDesktop[] = [{
    title: 'Cardápio',
    to: '/'
  },
  {
    title: 'Sobre',
    to: '/'
  },
  {
    title: <AiOutlineShoppingCart size={25} />,
    to: '/'
  }
  ]

  const headerDestinationsMobile: HeaderMobile[] = [
    {
      title: <AiOutlineShoppingCart size={23} />,
      to: '/'
    },
    {
      title: <AiOutlineMenu size={23} />,
      to: '/'
    }
  ]

return (
  <header className={style.header}>
    <div className={style['header-container']}>
      Cookies
    </div>

    <nav>
      <ul className={style['header-mobile']}>
        {headerDestinationsMobile.map((i, index) => (
          <li key={index}>
            <Link to={i.to} className={style.menu}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </nav>

    <div className={style['header-desktop']}>
      <nav>
        <ul className={style['menu-list']}>
          {headerDestinationsDesktop.map((i, index) => (
            <li key={index}>
              <Link to={i.to} className={style['menu-item']}>{i.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)
}

export default memo(Header);