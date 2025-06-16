import { Container, Stack, Typography, useTheme } from "@mui/material";
import Cards from "../General/Cards";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const { palette } = useTheme();

  const handleNavigateToGithub = () => {
    window.open("https://github.com/GimpFather/guess-the-card", "_blank");
  };

  const handleRedirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ padding: 2 }}
        component={motion.div}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
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
          <Typography
            component={motion.div}
            whileHover={{ color: palette.primary.main, scale: 1.05 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            variant="h6"
            color="common.black"
            fontWeight={300}
            sx={{ cursor: "pointer" }}
            onClick={handleNavigateToGithub}
          >
            <FormattedMessage id="NAVBAR.ABOUT" />
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Navbar;
