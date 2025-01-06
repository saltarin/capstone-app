import Button from "../Button";
import style from './style.module.css'
import restauranFoodtImg from '../../assets/restauranfood.jpg'

export default function Hero() {
  return (
    <section className={style.hero}>
        <div className={`${style['hero-content']} container`}>
            <div className={style['hero-description']}>
                <h1 className="display-title" style={{color: 'var(--primary-yellow)'}}>Little Lemon</h1>
                <h4 className="sub-title">Chicago</h4>
                <p className="lead-text" style={{margin: "0 0 70px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button width="200px">Reserve a Table</Button>
            </div>
            <img src={restauranFoodtImg} alt="hero_image" width={375} height={325} style={{objectFit: "cover"}}/>
        </div>
    </section>
  )
}
