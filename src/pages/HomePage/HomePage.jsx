import RegisterModal from "components/SharedLayout/AuthBar/RegisterModal";

import sprite from "../../assets/images/icons.svg";

import css from "./HomePage.module.css";
import { useState } from "react";

const HomePage = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const registerOpen = () => setIsRegisterOpen(true);
  const registerClose = () => setIsRegisterOpen(false);

  return (
    <>
      <main className={css.homePage}>
        <div className={css.invitation}>
          <h1 className={css.invitationTitle}>
            The road to the <span className={css.highlighted}>depths</span> of
            the human soul
          </h1>
          <p className={css.invitationText}>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </p>
          <button type="button" className={css.mainBtn} onClick={registerOpen}>
            Get started
            <svg className={css.iconArrow}>
              <use href={`${sprite}#icon-arrow`} />
            </svg>
          </button>
        </div>
        <div className={css.hero}>
          <div className={css.users}>
            <svg className={css.iconUsers}>
              <use href={`${sprite}#icon-users-rotated`} />
            </svg>
          </div>
          <div className={css.question}>
            <svg className={css.iconQuestion}>
              <use href={`${sprite}#icon-question`} />
            </svg>
          </div>
          <div className={css.psychologists}>
            <div className={css.iconCkeckWrap}>
              <svg className={css.iconCkeck}>
                <use href={`${sprite}#icon-check`} />
              </svg>
            </div>
            <div className={css.textWrap}>
              <p className={css.psychologistsText}>Experienced psychologists</p>
              <p className={css.psychologistsNumber}>15,000</p>
            </div>
          </div>
        </div>
      </main>
      {isRegisterOpen && <RegisterModal close={registerClose} />}
    </>
  );
};

export default HomePage;
