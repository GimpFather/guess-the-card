import { Route, Routes } from "react-router";
import DefaultLayout from "./components/Layout/DefaultLayout";
import DashboardPage from "./components/Pages/DashboardPage";

const AppRouting = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<DashboardPage />} />
        {/* <Route path="guess-the-card" element={<ExamplePage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouting;
