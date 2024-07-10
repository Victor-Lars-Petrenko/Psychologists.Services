import Button from "components/Button";

import css from "./Cards.module.css";

import CardItem from "./CardItem";

const Cards = ({ cardsArr }) => {
  return (
    cardsArr[0] && (
      <section className={css.cards}>
        <ul className={css.cardList}>
          {cardsArr.map(item => (
            <CardItem key={item.name} card={item} />
          ))}
        </ul>
        <Button text="Load more" width="176px" onClick={null} />
      </section>
    )
  );
};

export default Cards;
