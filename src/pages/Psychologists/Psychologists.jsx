import Filters from "components/Filters";

import Cards from "components/Cards";

import css from "./Psychologists.module.css";

const Psychologists = () => {
  return (
    <main className={css.psychologists}>
      <Filters />
      <Cards />
    </main>
  );
};

export default Psychologists;
