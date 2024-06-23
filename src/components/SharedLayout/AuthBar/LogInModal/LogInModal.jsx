import Modal from "components/Modal";

import css from "./LogInModal.module.css";

const LogInModal = ({ close }) => {
  return (
    <Modal close={close}>
      <h2 className={css.modalHeading}>Log In</h2>
      <p className={css.modalText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <input
        type="text"
        className={css.email}
        placeholder="email"
        name="email"
      />
      <input
        type="text"
        className={css.password}
        placeholder="password"
        name="password"
      />
    </Modal>
  );
};

export default LogInModal;
