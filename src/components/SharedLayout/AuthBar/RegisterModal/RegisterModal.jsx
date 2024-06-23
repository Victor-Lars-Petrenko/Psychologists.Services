import Modal from "components/Modal";

import css from "./RegisterModal.module.css";

const RegisterModal = ({ close }) => {
  return (
    <Modal close={close}>
      <h2 className={css.modalHeading}>Log In</h2>
      <p className={css.modalText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <input type="text" className={css.name} placeholder="name" name="name" />
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

export default RegisterModal;
