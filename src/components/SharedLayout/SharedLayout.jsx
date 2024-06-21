import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "../Loader";
import PageNav from "./PageNav/PageNav";
import AuthBar from "./AuthBar";
import Logo from "./Logo";

import css from "./SharedLayout.module.css";

const SharedLayout = ({ auth = true }) => {
  return (
    <>
      {auth ? (
        <header className={css.header}>
          <Logo />
          <PageNav auth={auth} />
          <AuthBar auth={auth} />
        </header>
      ) : (
        <header className={css.header}>
          <Logo />
          <PageNav auth={auth} />
          <AuthBar auth={auth} />
        </header>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
