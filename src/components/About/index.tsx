import { memo } from 'react'
import style from './About.module.scss'

const About = () => {
  return (
    <section className={style.about}>
      <div className={style['about-container']}>
        <h2 className={style['about-title']}>Sobre nós</h2>
        <p className={style['about-paragraph']}>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore possimus unde recusandae, voluptatem voluptas facilis impedit sapiente, eligendi aut aperiam sint. Neque accusamus recusandae, cum nemo quisquam molestias provident excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis adipisci et atque aspernatur ut accusamus at. Distinctio doloremque nihil magni, quas similique, culpa illum veritatis, iste saepe ipsam officiis iure?</p>
      </div>
    </section>
  )
}

export default memo(About)