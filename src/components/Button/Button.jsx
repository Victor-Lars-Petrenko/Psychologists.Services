import css from "./Button.module.css";

const Button = ({
  text,
  width,
  height = "48px",
  onClick = null,
  styleVariant = "mainColor",
  type = "button",
}) => {
  const btnStyle =
    css.btn +
    " " +
    (styleVariant === "mainColor" ? css.mainColorBtn : css.transparentBtn);

  return (
    <button
      type={type}
      style={{ width, height }}
      className={btnStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
