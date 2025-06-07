import { Container, Stack, Typography } from "@mui/material";
import Cards from "../General/Cards";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  return (
    <Container>
      <Stack
        spacing={3}
        direction="row"
        sx={{ backgroundColor: "red", padding: 2 }}
      >
        <Cards fontSize="large" />
        <Typography variant="h5" color="common.black">
          <FormattedMessage id="TEST.KEY" />
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;
