import Modal from "components/Modal";

import AuthModal from "../AuthModal";

const LogInModal = ({ close }) => {
  const handleSubmit = state => {
    console.log(state);
  };

  return (
    <Modal close={close}>
      <AuthModal
        title="Log In"
        text="Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist."
        btnText="Log In"
        handleSubmit={handleSubmit}
      />
    </Modal>
  );
};

export default LogInModal;
