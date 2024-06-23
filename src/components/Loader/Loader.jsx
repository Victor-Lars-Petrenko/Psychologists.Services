import { Puff } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <Puff visible={true} color="#3470ff" />
    </div>
  );
};

export default Loader;
