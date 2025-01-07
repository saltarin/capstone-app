import TestimonialCard from '../TestimonialCard'
import style from './style.module.css'

const testimonials = [
  {
    "id": 1,
    "rating": 4.5,
    "name": "Sophia Johnson",
    "text": "The food was absolutely delicious, and the ambiance was cozy and welcoming. The staff were friendly, but the service was a bit slow during peak hours. Would definitely recommend!",
    "avatarUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Amaya"
  },
  {
    "id": 2,
    "rating": 3.8,
    "name": "Michael Carter",
    "text": "The menu had a lot of variety, and the dishes were well-prepared. However, the portions were smaller than expected for the price. Overall, a decent experience.",
    "avatarUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Robert"
  },
  {
    "id": 3,
    "rating": 5.0,
    "name": "Emily Davis",
    "text": "Everything about this place was amazing! The food was exquisite, the service was outstanding, and the presentation was on point. I will definitely be coming back soon!",
    "avatarUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Ryan"
  },
  {
    "id": 4,
    "rating": 4,
    "name": "Saltarin Alfredo Napoleon Dynamite",
    "text": "Me atendieron neko maids. Excelente Servicio. 5/5 #nodrama",
    "avatarUrl": "https://api.dicebear.com/9.x/notionists/svg?seed=Adrian"
  }
]


export default function CustomersSay() {
  return (
    <section className={`${style['customer-say']} full-width`}>
      <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div>
          <h2 className={`${style['customer-say__title']} sub-title`}>Testimonials</h2>
          <ul className={style['customer-say__list']}>
            {testimonials.map((testimonial) => (
              <li key={testimonial.id}><TestimonialCard {...testimonial} /></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
