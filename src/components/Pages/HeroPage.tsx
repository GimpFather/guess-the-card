import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import StackedCards from "../HeroPage.tsx/StackedCards";
import EmojiSliderRow from "../HeroPage.tsx/EmojiSliderRow";

const DashboardPage = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("md"));

  return (
    <Stack gap={5}>
      <EmojiSliderRow />
      <Stack
        gap={isMobile ? 1 : 0.25}
        alignItems="center"
        justifyContent="center"
        sx={{
          marginTop: 10,
        }}
      >
        <Typography
          variant={isMobile ? "h3" : "h1"}
          sx={{ textAlign: "center" }}
        >
          <FormattedMessage id="HERO.TITLE" />
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{ textAlign: "center" }}
        >
          <FormattedMessage id="HERO.SUBTITLE" />
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: 2,
            fontSize: "1.25rem",
            borderRadius: "16px",
          }}
        >
          <FormattedMessage id="HERO.BUTTON.START_CHALLANGE" />
        </Button>
      </Stack>
      <Box sx={{ paddingY: 5 }}>
        <StackedCards />
      </Box>
    </Stack>
  );
};

export default DashboardPage;
