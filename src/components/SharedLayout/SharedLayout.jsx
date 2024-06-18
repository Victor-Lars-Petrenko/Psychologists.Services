import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar";
import Loader from "../Loader";
import ScrollToTopButton from "components/ScrollToTopButton";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <ScrollToTopButton />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
