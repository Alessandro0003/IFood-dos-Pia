import { memo } from 'react'
import cookie from '../../assets/img/imagem-cookie1.jpg'
import cookie2 from '../../assets/img/imagem-cookie2.jpg'
import cookie3 from '../../assets/img/imagem-cookie3.jpg'
import cookie4 from '../../assets/img/imagem-cookie4.jpg'
import style from './Cookies.module.scss'

const Cookies = () => {

  const cookiesImages = [{
    image: cookie
  },
  {
    image: cookie2
  },
  {
    image: cookie3
  },
  {
    image: cookie4
  }
  ]

  return (
    <section className={style.cookies}>
      <h2 className={style['cookies-title']}>Qualidade em primeiro lugar!</h2>
      <div className={style['cookies-container']}>
        {cookiesImages.map((item) => (
          <figure>
            <img src={item.image} className={style['cookie-image']} alt='Imagens ilustrativas de cookies' />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default memo(Cookies);