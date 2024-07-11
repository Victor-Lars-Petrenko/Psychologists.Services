import { useDispatch, useSelector } from "react-redux";

import { makeSelectorCardFavorite } from "../../../../redux/favorites/favorites-selectors";
import { toggleFavorite } from "../../../../redux/favorites/favorites-actions";

import sprite from "../../../../assets/images/icons.svg";

import css from "./CardHeading.module.css";

const CardHeading = ({ id, name, rating, price_per_hour }) => {
  const dispatch = useDispatch();

  const selectCardFavorite = makeSelectorCardFavorite();
  const isFavorite = useSelector(state => selectCardFavorite(state, id));

  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };

  const heartStyle = isFavorite
    ? `${css.iconHeart} ${css.iconHeartFavorite}`
    : css.iconHeart;

  return (
    <div className={css.cardHeadingWrap}>
      <div>
        <p className={css.psychologist}>Psychologist</p>
        <p className={css.name}>{name}</p>
      </div>
      <div className={css.cardOperationWrap}>
        <div className={css.ratingPriceWrap}>
          <p className={css.rating}>
            <svg className={css.iconStar}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            Rating: {rating}
          </p>
          <p className={css.price}>
            Price / 1 hour:{" "}
            <span className={css.pricePerHour}>{price_per_hour}$</span>
          </p>
        </div>
        <button type="button" onClick={handleClick}>
          <svg className={heartStyle}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardHeading;
