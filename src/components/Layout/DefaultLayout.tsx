import { Outlet } from "react-router";
import Navbar from "./Navbar.tsx";
import { Container } from "@mui/material";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ paddingY: 2 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default DefaultLayout;
