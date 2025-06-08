import { Outlet } from "react-router";
import Navbar from "./Navbar.tsx";

const HeroLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HeroLayout;
