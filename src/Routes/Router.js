import ErrorPage from "../pages/ErrorPage.js";
import HomePage from "../pages/HomePage.js";
import ProfilePage from "../pages/ProfilePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path={"/ProfilePage/:name"} element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
