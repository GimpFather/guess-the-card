import { Route, Routes } from "react-router";
import DefaultLayout from "./components/Layout/DefaultLayout";
import HeroPage from "./components/Pages/HeroPage";
import HeroLayout from "./components/Layout/HeroLayout";

const AppRouting = () => {
  return (
    <Routes>
      <Route element={<HeroLayout />}>
        <Route path="/" element={<HeroPage />} />
      </Route>
      <Route element={<DefaultLayout />}>
        <Route path="/game" element={<HeroPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouting;
