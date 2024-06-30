import infoItems from "assets/items/infoItems";

import css from "./CardInfoItems.module.css";

const CardInfoItems = props => {
  return (
    <ul className={css.infoList}>
      {infoItems.map(item => (
        <li key={item} className={css.infoItem}>
          <p className={css.infotext}>
            {item}: <span className={css.info}>{props[item]}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CardInfoItems;
