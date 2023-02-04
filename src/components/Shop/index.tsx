import style from './Shop.module.scss';
import menuDb from '../../data/db.json'
import { useEffect, useState } from 'react';
import { IMenu } from '../../interfaces/IMenu';
import Cookie from './Cookie/Item';

const Shop = () => {

  const [menu, setMenu] = useState<IMenu[]>([])

  //Valor inicial da nossa lista será igual ao nosso db
  useEffect(() => {
    setMenu(menuDb)
  }, [])

  return(
    <section className={style.shop}>
      <h2 className={style['shop-title']}>Nossas delícias</h2>
      <ul className={style['shop-cookie--list']}>
        {menu.map((cookie) => (
          <Cookie title={cookie.title} description={cookie.description} photo={cookie.photo} size={cookie.size} price={cookie.price} id={cookie.id}/>
        ))}
      </ul>
    </section>
  ) 
}

export default Shop;