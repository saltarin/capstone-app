import { useGlobalColors } from "../../providers/RootColorProvider";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import styleCss from "./style.module.css";

const generateStars = (rating) => {
  const stars = [];
  const RATING_STAR_MAX = 5;
  let value = rating % (RATING_STAR_MAX + 1); //prevent rating be more than 5
  for (let i = 0; i < RATING_STAR_MAX; i++) {
    if (value >= 1) {
      stars.push("FULL_STAR");
    } else if (value < 1 && value > 0) {
      stars.push("SEMI_STAR");
    } else {
      stars.push("EMPTY_STAR");
    }
    value -= 1;
  }
  return stars;
};

export default function StarRating({ rating, style, ...rest }) {
  const colors = useGlobalColors();
  const stars = generateStars(rating);
  const starProps = {
    size: 20,
    color: colors.primaryYellow,
  };
  const starMap = {
    FULL_STAR: <MdStar {...starProps}/>,
    SEMI_STAR: <MdStarHalf {...starProps} />,
    EMPTY_STAR: <MdStarBorder {...starProps} />,
  };

  return (
    <lu className={styleCss["star-rating"]} {...rest} style={style} >
      {stars.map((starKey, index) => (
        <li key={index}>{starMap[starKey]}</li>
      ))}
    </lu>
  );
}
