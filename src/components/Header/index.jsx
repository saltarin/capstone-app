import Navigation from '../Navigation'
import logo from '../../assets/Logo.svg'
import style from './style.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
      <Navigation/>
    </header>
  )
}
