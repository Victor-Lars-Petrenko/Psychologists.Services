import Button from "components/Button";

import css from "./Cards.module.css";

const Cards = () => {
  return (
    <section className={css.cards}>
      <ul className={css.cardList}></ul>
      <Button text="Load more" width="176px" height="48px" onClick={null} />
    </section>
  );
};

export default Cards;
