import { useCallback, useEffect } from "react";

import dropdownItems from "../../../assets/items/dropdownItems";

import css from "./Dropdown.module.css";

const Dropdown = ({ hide, setFilter, filter }) => {
  const hideDropdown = useCallback(
    e => {
      if (!e.target.closest(`.${css.dropdown}`)) {
        hide();
      }
    },
    [hide]
  );

  useEffect(() => {
    document.addEventListener("mouseup", hideDropdown);
    return () => {
      document.removeEventListener("mouseup", hideDropdown);
    };
  }, [hideDropdown]);

  const handleClick = e => setFilter(e.target.textContent);

  const handleSubmit = e => {
    e.preventDefault();
    hide();
  };

  return (
    <form className={css.dropdown} onSubmit={handleSubmit}>
      <ul>
        {dropdownItems.map(item => {
          let btnStyle = css.dropdownBtn;
          if (item === filter) btnStyle += ` ${css.selectedBtn}`;
          return (
            <li key={item}>
              <button type="submit" className={btnStyle} onClick={handleClick}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default Dropdown;
