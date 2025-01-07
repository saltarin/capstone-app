import StarRating from '../StarRating'
import style from './style.module.css'


export default function TestimonialCard({rating, name, text, avatarUrl}) {
  return (
    <li className={style['testimonial-card']}>
        <div className={style['testimonial-card__heading']}>
            <img className={style['testimonial-card__avatar']} src={avatarUrl} alt="" width={50} height={50}/>
            <h4 className={`${style['testimonial-card__name']} card-title`}>{name}</h4>
        </div>
        <StarRating rating={rating} style={{display: "flex", justifyContent: "center", margin: ".5rem 0"}}/>
        <p className={`${style['testimonial-card__review']} .paragraph-text`}>{text}</p>
    </li>
  )
}
