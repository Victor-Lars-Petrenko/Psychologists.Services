import { useState } from "react";

import Dropdown from "./Dropdown";

import sprite from "../../assets/images/icons.svg";

import css from "./Filters.module.css";

const Filters = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("A to Z");

  const open = () => setIsDropdownOpen(true);
  const hide = () => setIsDropdownOpen(false);

  return (
    <div className={css.filters}>
      <button type="button" className={css.filterBtn} onClick={open}>
        {filter}
        <svg className={css.iconChevronDown}>
          <use href={`${sprite}#icon-chevron-down`} />
        </svg>
      </button>
      {isDropdownOpen && (
        <Dropdown hide={hide} setFilter={setFilter} filter={filter} />
      )}
    </div>
  );
};

export default Filters;
