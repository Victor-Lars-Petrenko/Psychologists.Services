import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const Psychologists = lazy(() => import("../pages/Psychologists"));
const Favourites = lazy(() => import("../pages/Favorites"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="psychologists" element={<Psychologists />} />
        <Route path="favorites" element={<Favourites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
