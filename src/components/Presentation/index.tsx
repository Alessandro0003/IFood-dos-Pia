import Button from '../Button';
import style from './Presentation.module.scss';

const Presentation = () => {
  return (
    <section className={style.presentation}>
        <div className={style['presentation-container']}>
            <h2 className={style.title}>Os melhores cookies gourmet da cidade</h2>
        </div>
        <div className={style['presentation-container']}>
          <Button fontSize={17}>Ver cardápio</Button>
        </div>
    </section>
  )
}

export default Presentation;