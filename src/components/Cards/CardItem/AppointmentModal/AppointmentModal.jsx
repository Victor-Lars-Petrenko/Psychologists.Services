import Modal from "components/Modal";
import Button from "components/Button";

import css from "./AppointmentModal.module.css";

const AppointmentModal = ({ close, name, avatar }) => {
  return (
    <Modal close={close}>
      <h2 className={css.modalTitle}>
        Make an appointment with a psychologists
      </h2>
      <p className={css.modalDescription}>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <div className={css.psychologistWrap}>
        <img src={avatar} alt={name} className={css.avatar} />
        <div className={css.textWrap}>
          <p className={css.explanation}>Your psychologists</p>
          <h3 className={css.name}>{name}</h3>
        </div>
      </div>
      <input
        type="text"
        required
        className={css.modalInput}
        placeholder="Name"
      />
      <div>
        <input
          type="tel"
          required
          className={css.modalInput}
          placeholder="+380"
        />
        <input
          type="time"
          required
          className={css.modalInput}
          placeholder="00:00"
        />
      </div>
      <input
        type="email"
        required
        className={css.modalInput}
        placeholder="Email"
      />
      <textarea className={css.modalTextarea} placeholder="Comment" />
      <Button text="Send" width="100%" height="52px" type="submit" />
    </Modal>
  );
};

export default AppointmentModal;
