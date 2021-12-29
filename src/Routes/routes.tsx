import { Route, Routes } from "react-router-dom";
import { Favorites } from "../components/Favorites";
import { Psypowers } from "../components/Psypower";
import { Home } from "../Pages/Home";

export const RoutesLink = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/psipowers" element={<Psypowers />} />
    </Routes>
    </>
  );
};
