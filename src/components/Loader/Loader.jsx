import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <Bars visible={true} color="#e44848" />
    </div>
  );
};

export default Loader;
