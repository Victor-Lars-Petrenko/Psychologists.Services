import { useState } from "react";

import Button from "components/Button";

import sprite from "../../../../assets/images/icons.svg";

import css from "./AuthModal.module.css";

const AuthModal = ({
  handleSubmit = null,
  title,
  text,
  btnText,
  isRegister,
  initialState,
}) => {
  const [formState, setFormState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(formState);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h2 className={css.modalHeading}>{title}</h2>
      <p className={css.modalText}>{text}</p>
      <form onSubmit={onSubmit}>
        {isRegister && (
          <input
            type="text"
            className={css.logInInput}
            placeholder="Name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="text"
          className={css.logInInput}
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <div className={css.passwordWrap}>
          <input
            type={showPassword ? "text" : "password"}
            className={css.logInInput + " " + css.password}
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className={css.toggleBtn}
          >
            <svg className={css.iconToggleBtn}>
              <use
                href={`${sprite}#icon-${showPassword ? "eye-off" : "eye"}`}
              />
            </svg>
          </button>
        </div>
        <Button text={btnText} width="100%" height="52px" type="submit" />
      </form>
    </>
  );
};

export default AuthModal;
