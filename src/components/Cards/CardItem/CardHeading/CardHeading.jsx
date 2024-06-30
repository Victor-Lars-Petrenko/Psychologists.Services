import sprite from "../../../../assets/images/icons.svg";

import css from "./CardHeading.module.css";

const CardHeading = ({ name, rating, price_per_hour }) => {
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
        <button type="button">
          <svg className={css.iconHeart}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardHeading;
