import { NavLink } from "react-router-dom";

import css from "./Logo.module.css";

const Logo = () => {
  return (
    <NavLink to="/" className={css.logo}>
      <span className={css.marked}>psychologists.</span>services
    </NavLink>
  );
};

export default Logo;
