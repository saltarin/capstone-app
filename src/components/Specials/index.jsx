import Button from '../Button'
import style from './style.module.css'
import greekSaladImg from '../../assets/greek salad.jpg'
import bruchettaImg from '../../assets/bruchetta.svg'
import lemonDessertImg from '../../assets/lemon dessert.jpg'
import SpecialCard from '../SpecialCard'

const specials = [
  {
    id: 1,
    title: "Greek salad",
    price: "$12,99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    img: greekSaladImg,
  },
  {
    id: 2,
    title: "Bruchetta",
    price: "$5,99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    img: bruchettaImg,
  },
  {
    id: 3,
    title: "Greek salad",
    price: "$5,00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img: lemonDessertImg,
  }
]

export default function Specials() {
  return (
    <section className={`${style.specials} container`}>
      <h2 className={style['specials-heading']}>
        <span className={`sub-title`}>Specials</span>
        <Button width="200px" style={{alignSelf: 'center'}}>Online Menu</Button>
      </h2>
      <ul className={style['specials-list']}>
        {specials.map((special) => (
          <SpecialCard key={special.id} {...special}/>
        ))}
      </ul>
    </section>
  )
}
