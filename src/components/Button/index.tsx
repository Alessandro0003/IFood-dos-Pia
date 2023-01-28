import { Link } from "react-router-dom";
import style from './button.module.scss';

type Props = {
  children: string
  fontSize: number
}

const Button = ({ children, fontSize }: Props) => {
  return (
    <Link
      to='/'
      className={style.btn}
      style={{fontSize: fontSize}}
      >
      {children}
    </Link>
  )
}

export default Button;