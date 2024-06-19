import { NavLink } from "react-router-dom";
import css from "./PageNav.module.css";
import getNavItems from "assets/items/getNavItems";

const PageNav = ({ auth = true }) => {
  const items = getNavItems(auth);

  const elements = items.map(({ linkTo, text }) => (
    <li key={text} className={css.text}>
      <NavLink to={linkTo} className={css.link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className={css.list}>{elements}</ul>
    </nav>
  );
};

export default PageNav;
