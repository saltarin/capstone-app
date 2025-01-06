import { Link } from 'react-router'
import style from './style.module.css'

export default function Navlink({children, ...rest}) {
  return (
    <Link {...rest} className={style['nav-link']}>{children}</Link>
  )
}
