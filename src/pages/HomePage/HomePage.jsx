import sprite from "../../assets/images/icons.svg";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={css.homePage}>
      <div className={css.invitation}>
        <h1 className={css.invitationTitle}>
          The road to the <span className={css.highlighted}>depths</span> of the
          human soul
        </h1>
        <p className={css.invitationText}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button type="button" className={css.mainBtn}>
          Get started
          <svg className={css.iconArrow}>
            <use href={`${sprite}#icon-arrow`} />
          </svg>
        </button>
      </div>
      <div className={css.hero}></div>
    </main>
  );
};

export default HomePage;
