import { NavLink } from "react-router-dom";

import css from "./Logo.module.css";

const Logo = () => {
  return (
    <NavLink to="/" className={css.logo}>
      psychologists<span className={css.point}>.</span>
      <span className={css.servicesSpan}>services</span>
    </NavLink>
  );
};

export default Logo;
