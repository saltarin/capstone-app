import Navlink from '../Navlink'
import style from './style.module.css'

export default function Navigation() {
  return (
    <nav>
      <ul className={style.nav}>
        {[
          {text: "About"},
          {text: "Menu"},
          {text: "Reservations"},
          {text: "Order Online"},
          {text: "Login"},
        ].map(({text}) => (
          <li key={text}><Navlink href="">{text}</Navlink></li>
        ))}
      </ul>
    </nav>
  )
}
