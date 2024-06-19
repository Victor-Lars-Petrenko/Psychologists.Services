import css from "./AuthBar.module.css";

const NavBar = ({ auth }) => {
  return auth ? (
    <ul className={css.authBarList}>
      <li>
        <button>Log In</button>
      </li>
      <li>
        <button>Registration</button>
      </li>
    </ul>
  ) : (
    <ul className={css.userInfoList}>
      <li>UserInfo</li>
      <li>
        <button>Log Out</button>
      </li>
    </ul>
  );
};

export default NavBar;
