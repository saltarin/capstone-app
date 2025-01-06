import style from './style.module.css'
import foodImg from '../../assets/restauranfood.jpg'

export default function Footer() {
  return (
    <footer className="full-width">
      <div className={`${style.footer} container`}>
      <img src={foodImg} alt="footer_img" width={150}/>
      <ul>
        <li><b>Doormat Navigation</b></li>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <ul>
        <li><b>Contact</b></li>
        <li>address</li>
        <li>phone number</li>
        <li>email</li>
      </ul>
      <ul>
        <li><b>Social Media Links</b></li>
        <li>address</li>
        <li>phone number</li>
      </ul>
      </div>
    </footer>
  )
}
