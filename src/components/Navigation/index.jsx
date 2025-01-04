import style from './style.module.css'

export default function Navigation() {
  return (
    <nav>
      <ul className={style.nav}>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
  )
}
