import restaurantImg from "../../assets/restaurant.jpg";
import chefsImg from "../../assets/Mario and Adrian b.jpg";
import style from './style.module.css'

export default function Chicago() {
  return (
    <section className="full-width">
      <div className={`${style['chicago-container']} container`}>
        <div className={style['chicago-content']}>
          <h2 className="display-title">Little Lemon</h2>
          <h3 className="sub-title">Chicago</h3>
          <p className="lead-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
            <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className={style['chicago-imageset']}>
          <img className={style['chicago-imageset__left']} src={restaurantImg} alt="" width={270} height={300} />
          <img className={style['chicago-imageset__right']}  src={chefsImg} alt="" width={270} height={300}/>
        </div>
      </div>
    </section>
  );
}
