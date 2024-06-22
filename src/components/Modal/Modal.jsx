import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import sprite from "../../assets/images/icons.svg";

import css from "./Modal.module.css";

const Modal = ({ close, children }) => {
  const closeModal = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeModal);

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.removeEventListener("keydown", closeModal);

      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, [closeModal]);

  const modalRoot = document.querySelector("#modal-root");

  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <button type="button" className={css.closeBtn} onClick={close}>
          <svg className={css.iconCross}>
            <use href={`${sprite}#icon-cross`} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
