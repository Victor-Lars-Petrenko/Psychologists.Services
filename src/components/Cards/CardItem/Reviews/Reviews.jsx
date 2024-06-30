import Button from "components/Button";

import sprite from "../../../../assets/images/icons.svg";

import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul className={css.reviewsList}>
        {reviews.map(({ reviewer, rating, comment }) => (
          <li key={reviewer}>
            <div className={css.reviewerWrap}>
              <div className={css.reviewerAvatar}>{reviewer[0]}</div>
              <div>
                <p className={css.name}>{reviewer}</p>
                <p className={css.rating}>
                  <svg className={css.iconStar}>
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                  {rating}
                </p>
              </div>
            </div>
            <p className={css.comment}>{comment}</p>
          </li>
        ))}
      </ul>
      <Button text="Make an appointment" width="227px" />
    </div>
  );
};

export default Reviews;
