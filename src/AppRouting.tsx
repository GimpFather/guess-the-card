import { Route, Routes } from "react-router";
import DefaultLayout from "./components/Layout/DefaultLayout";
import HeroPage from "./components/Pages/HeroPage";
import HeroLayout from "./components/Layout/HeroLayout";
import SandboxPage from "./components/Pages/SandboxPage";

const AppRouting = () => {
  return (
    <Routes>
      <Route element={<HeroLayout />}>
        <Route path="/" element={<HeroPage />} />
      </Route>
      <Route element={<DefaultLayout />}>
        <Route path="/sandbox" element={<SandboxPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouting;
