import { useState } from "react";

import LogInModal from "./LogInModal";
import RegisterModal from "./RegisterModal";

import sprite from "../../../assets/images/icons.svg";

import css from "./AuthBar.module.css";
import Button from "components/Button";

const NavBar = ({ auth }) => {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const open = e => {
    const { textContent } = e.currentTarget;
    textContent === "Log In" ? setIsLogInOpen(true) : setIsRegisterOpen(true);
  };
  const logInClose = () => setIsLogInOpen(false);
  const registerClose = () => setIsRegisterOpen(false);
  const onLogOut = () => console.log("want to log out");

  return (
    <>
      {auth ? (
        <div className={css.userInfoList}>
          <div className={css.userProfile}>
            <div className={css.userPhoto}>
              <svg className={css.iconUser}>
                <use href={`${sprite}#icon-user`} />
              </svg>
            </div>
            <p className={css.userName}>Vitek</p>
          </div>
          <Button
            text="Log Out"
            width="135px"
            height="48px"
            onClick={onLogOut}
            styleVariant="transparentBtn"
          />
        </div>
      ) : (
        <ul className={css.authBarList}>
          <li>
            <Button
              text="Log In"
              width="124px"
              height="48px"
              onClick={open}
              styleVariant="transparentBtn"
            />
          </li>
          <li>
            <Button
              text="Registration"
              width="171px"
              height="48px"
              onClick={open}
            />
          </li>
        </ul>
      )}
      {isLogInOpen && <LogInModal close={logInClose} />}
      {isRegisterOpen && <RegisterModal close={registerClose} />}
    </>
  );
};

export default NavBar;
