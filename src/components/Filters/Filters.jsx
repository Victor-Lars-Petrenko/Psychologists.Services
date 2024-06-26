import sprite from "../../assets/images/icons.svg";

import css from "./Filters.module.css";

const Filters = () => {
  return (
    <button type="button" className={css.filterBtn}>
      A to Z
      <svg className={css.iconChevronDown}>
        <use href={`${sprite}#icon-chevron-down`} />
      </svg>
    </button>
  );
};

export default Filters;
