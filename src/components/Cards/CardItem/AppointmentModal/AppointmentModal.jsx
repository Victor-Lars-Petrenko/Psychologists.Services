import React, { useState } from "react";

import Modal from "components/Modal";
import Button from "components/Button";

import css from "./AppointmentModal.module.css";

const initialState = {
  name: "",
  telephone: "+380",
  time: "",
  email: "",
  comment: "",
};

const AppointmentModal = ({ close, name, avatar }) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState);
    close();
  };

  return (
    <Modal close={close}>
      <form onSubmit={handleSubmit} className={css.appointmentModal}>
        <h2 className={css.modalTitle}>
          Make an appointment with a psychologist
        </h2>
        <p className={css.modalDescription}>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </p>
        <div className={css.psychologistWrap}>
          <img src={avatar} alt={name} className={css.avatar} />
          <div className={css.textWrap}>
            <p className={css.explanation}>Your psychologist</p>
            <h3 className={css.name}>{name}</h3>
          </div>
        </div>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          className={css.modalInput}
          placeholder="Name"
        />
        <div className={css.inputWrap}>
          <input
            type="tel"
            name="telephone"
            value={formState.telephone}
            onChange={handleChange}
            required
            className={`${css.modalInput} ${css.wrappedInput}`}
          />
          <input
            type="time"
            name="time"
            value={formState.time}
            onChange={handleChange}
            required
            className={`${css.modalInput} ${css.wrappedInput}`}
            placeholder="00:00"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          className={css.modalInput}
          placeholder="Email"
        />
        <textarea
          name="comment"
          value={formState.comment}
          onChange={handleChange}
          className={`${css.modalInput} ${css.modalTextarea}`}
          placeholder="Comment"
        />
        <Button text="Send" width="100%" height="52px" type="submit" />
      </form>
    </Modal>
  );
};

export default AppointmentModal;
