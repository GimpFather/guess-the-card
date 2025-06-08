import { Container, Stack, Typography } from "@mui/material";
import Cards from "../General/Cards";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          gap={1.5}
          direction="row"
          alignItems="center"
          onClick={handleRedirectToHome}
          sx={{ cursor: "pointer" }}
        >
          <Cards fontSize="large" />
          <Stack>
            <Typography variant="h5" color="common.black">
              <FormattedMessage id="NAVBAR.TITLE" />
            </Typography>
            <Typography variant="caption" color="common.black">
              <FormattedMessage id="NAVBAR.BY" />
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="h6" color="common.black" fontWeight={300}>
          <FormattedMessage id="NAVBAR.CONTACT" />
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;
