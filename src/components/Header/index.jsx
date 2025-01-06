import Navigation from '../Navigation'
import logo from '../../assets/Logo.svg'
import style from './style.module.css'

export default function Header() {
  return (
    <header className="full-width">
      <div className={`${style.header} container`}>
        <a href="#"><img src={logo} alt="Little Lemon Restaurant logo" width={200} /></a>
        <Navigation/>
      </div>
    </header>
  )
}
