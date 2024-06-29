import Button from "components/Button";

import css from "./Cards.module.css";

import CardItem from "./CardItem";

const Cards = () => {
  const data = [];

  return (
    <section className={css.cards}>
      <ul className={css.cardList}>
        {data.map(item => (
          <CardItem key={item.name} item={item} />
        ))}
      </ul>
      <Button text="Load more" width="176px" height="48px" onClick={null} />
    </section>
  );
};

export default Cards;
