import { useState } from "react";

import CardHeading from "./CardHeading";
import CardInfoItems from "./CardInfoItems";
import Reviews from "./Reviews";

import css from "./CardItem.module.css";

const CardItem = ({
  card: {
    avatar_url,
    name,
    rating,
    price_per_hour,
    experience,
    license,
    specialization,
    initial_consultation,
    about,
    reviews,
  },
}) => {
  const [isFull, setIsFull] = useState(false);

  const expand = () => setIsFull(true);

  return (
    <li className={css.card}>
      <div className={css.avatarWrap}>
        <img alt={name} src={avatar_url} className={css.avatar} />
        <div className={css.onlineWrap}>
          <div className={css.online}></div>
        </div>
      </div>
      <div className={css.infoWrap}>
        <CardHeading
          name={name}
          rating={rating}
          price_per_hour={price_per_hour}
        />
        <CardInfoItems
          experience={experience}
          license={license}
          specialization={specialization}
          initial_consultation={initial_consultation}
        />
        <p className={css.description}>{about}</p>
        {isFull ? (
          <Reviews reviews={reviews} />
        ) : (
          <div className={css.readMoreWrap}>
            <button type="button" className={css.readMore} onClick={expand}>
              Read more
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default CardItem;
