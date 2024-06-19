import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "../Loader";
import PageNav from "./PageNav/PageNav";
import AuthBar from "./AuthBar";

import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <PageNav />
        <AuthBar />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
