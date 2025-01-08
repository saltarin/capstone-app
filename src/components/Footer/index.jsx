import style from "./style.module.css";
import foodImg from "../../assets/restauranfood.jpg";
import { Link } from "react-router";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const navigationLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
  },
  {
    text: "Menu",
  },
  {
    text: "Reservations",
    url: "/booking",
  },
  {
    text: "Order Online",
  },
  {
    text: "Login",
  },
];

const contactLinks = [
  {
    text: "Contact",
  },
  {
    text: "Address",
  },
  {
    text: "Phone Number",
  },
  {
    text: "Email",
  },
];

const socialMediaLinks = [
  {
    icon: <IoLogoFacebook size={20} color="#000" />,
    text: "Facebook",
  },
  {
    icon: <IoLogoTwitter size={20} color="#000" />,
    text: "Twitter",
  },
  {
    icon: <IoLogoInstagram size={20} color="#000" />,
    text: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className={`${style.footer} full-width`}>
      <div className={`${style["footer-container"]} container`}>
        <img src={foodImg} alt="footer_img" width={150} />
        <div className={style["footer__link-section"]}>
          <ul className={style["footer__link-group"]}>
            <li>
              <h4>Doormat Navigation</h4>
            </li>
            {navigationLinks.map((linkProps, index) => (
              <li key={index}>
                <Link to={linkProps.url}>{linkProps.text}</Link>
              </li>
            ))}
          </ul>
          <ul className={style["footer__link-group"]}>
            <li>
              <h4>Contact</h4>
            </li>
            {contactLinks.map((linkProps, index) => (
              <li key={index}>{linkProps.text}</li>
            ))}
          </ul>
          <ul className={style["footer__link-group"]}>
            <li>
              <h4>Social links</h4>
            </li>
            {socialMediaLinks.map((linkProps, index) => (
              <li key={index}>
                <Link className={style["footer__link"]}>
                  {linkProps.icon} {linkProps.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
