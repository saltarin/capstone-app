import style from './style.module.css';
import { MdDeliveryDining } from "react-icons/md";

export default function SpecialCard({ title, price, img, description }) {
  return (
    <li className={style['special-card']}>
      <img
        className={style['special-card__img']}
        src={img}
        alt={`Special: ${title}`}
        width="100%"
        height="185px"
      />
      <section className={style['special-card__content']}>
        <h4 className={`${style['special-card__heading']} card-title`}>
          <p className={style['special-card__title']}>{title}</p>
          <span className={`${style['special-card__price']} section-categories`}>{price}</span>
        </h4>
        <p className={`${style['special-card__description']} paragraph-text`}>{description}</p>
        <button className={style['special-card__button']}>
          Order a delivery <MdDeliveryDining />
        </button>
      </section>
    </li>
  );
}
