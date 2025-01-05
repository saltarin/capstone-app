import style from './style.module.css'

export default function Navlink({children, ...rest}) {
  return (
    <a {...rest} className={style['nav-link']}>{children}</a>
  )
}
