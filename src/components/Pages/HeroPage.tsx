import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FormattedMessage } from "react-intl";
import EmojiSliderRow from "../HeroPage.tsx/EmojiSliderRow";
import ModePreview from "../HeroPage.tsx/ModePreview";
import { motion } from "framer-motion";

const DashboardPage = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("md"));

  return (
    <Stack
      gap={5}
      alignItems="center"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <EmojiSliderRow />
      <Stack
        gap={isMobile ? 1 : 0.25}
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
      <Stack
        direction={isMobile ? "column" : "row"}
        gap={2}
        sx={{ marginTop: 10 }}
      >
        <ModePreview mode="sandbox" />
        <ModePreview mode="challenge" />
      </Stack>
      <Typography
        variant="h6"
        fontWeight={300}
        sx={{ textAlign: "center", marginTop: 10 }}
      >
        <FormattedMessage id="HERO.INFO" />
      </Typography>
    </Stack>
  );
};

export default DashboardPage;
