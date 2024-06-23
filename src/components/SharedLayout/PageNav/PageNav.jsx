import { NavLink } from "react-router-dom";

import getNavItems from "assets/items/getNavItems";

import css from "./PageNav.module.css";

const PageNav = ({ auth }) => {
  const items = getNavItems(auth);

  const elements = items.map(({ linkTo, text }) => (
    <li key={text} className={css.text}>
      <NavLink to={linkTo} className={css.link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <nav className={css.pageNav}>
      <ul className={css.list}>{elements}</ul>
    </nav>
  );
};

export default PageNav;
