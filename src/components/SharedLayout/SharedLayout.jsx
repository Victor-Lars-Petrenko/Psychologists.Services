import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Loader from "../Loader";
import PageNav from "./PageNav/PageNav";
import AuthBar from "./AuthBar";
import Logo from "./Logo";

import css from "./SharedLayout.module.css";

const SharedLayout = ({ auth = false }) => {
  const location = useLocation();

  let headerStyle = css.header;
  if (location.pathname === "/") {
    headerStyle += ` ${css.homeHeader}`;
  }

  return (
    <>
      {auth ? (
        <header className={headerStyle}>
          <Logo />
          <PageNav auth={auth} />
          <AuthBar auth={auth} />
        </header>
      ) : (
        <header className={headerStyle}>
          <div className={css.navWrap}>
            <Logo />
            <PageNav auth={auth} />
          </div>
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
