import Navlink from '../Navlink'
import style from './style.module.css'

export default function Navigation() {
  return (
    <nav>
      <ul className={style.nav}>
        {[
          {text: "About", to: "/"},
          {text: "Menu"},
          {text: "Reservations", to: "/booking"},
          {text: "Order Online"},
          {text: "Login"},
        ].map(({text, ...rest}) => (
          <li key={text}><Navlink {...rest} >{text}</Navlink></li>
        ))}
      </ul>
    </nav>
  )
}
