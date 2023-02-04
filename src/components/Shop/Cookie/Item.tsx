import { IMenu } from "../../../interfaces/IMenu";
import style from './Cookie.module.scss';

const Cookie = ({ title, description, photo, size, price, id }: IMenu) => {
  return (
    <li key={id} className={style.cookie}>
      <h6 className={style['cookie-title']}>{title}</h6>
      <div className={style['cookie-container']}>
        <img src={photo} className={style['cookie-img']}></img>
        <p className={style['cookie-desc']}>{description}</p>
      </div>
      <div className={style['cookie-container--characteristics']}>
      <span className={style['cookie-price']}>Preço: R${price}</span>
        <span className={style['cookie-size']}>Peso: {size}g</span>
      </div>
    </li>
  )
}

export default Cookie;