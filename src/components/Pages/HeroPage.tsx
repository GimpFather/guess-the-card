import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FormattedMessage } from "react-intl";
import EmojiSliderRow from "../HeroPage.tsx/EmojiSliderRow";
import ModePreview from "../HeroPage.tsx/ModePreview";
import { motion } from "framer-motion";
import ResetProgressDialog from "../SandboxMode/Dialogs/ResetProgressDialog.tsx";
import React from "react";

const DashboardPage = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("md"));
  const [openResetProgressDialog, setOpenResetProgressDialog] =
    React.useState(false);

  return (
    <>
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
        </Stack>
        <Stack gap={0.25}>
          <Typography
            variant="h6"
            fontWeight={300}
            sx={{ textAlign: "center", marginTop: 10 }}
          >
            <FormattedMessage id="HERO.INFO.1" />
          </Typography>
          <Typography
            variant="h6"
            fontWeight={300}
            sx={{ textAlign: "center" }}
          >
            <FormattedMessage id="HERO.INFO.2" />
            <Typography
              component="span"
              variant="h6"
              fontWeight={300}
              sx={{
                textAlign: "center",
                color: "primary.main",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                setOpenResetProgressDialog(true);
              }}
            >
              <FormattedMessage id="HERO.INFO.2.SPAN" />
            </Typography>
          </Typography>
        </Stack>
      </Stack>
      <ResetProgressDialog
        open={openResetProgressDialog}
        onClose={() => setOpenResetProgressDialog(false)}
      />
    </>
  );
};

export default DashboardPage;
