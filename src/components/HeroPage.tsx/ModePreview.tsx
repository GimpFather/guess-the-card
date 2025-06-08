import { Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router";

interface ModePreviewProps {
  mode: "sandbox" | "challenge";
}

const ModePreview = ({ mode }: ModePreviewProps) => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  const isSandbox = mode === "sandbox";
  const isChallenge = mode === "challenge";

  const modeTitle = isSandbox
    ? "HERO.MODE.SANDBOX.TITLE"
    : "HERO.MODE.CHALLENGE.TITLE";
  const modeDescription = isSandbox
    ? "HERO.MODE.SANDBOX.DESCRIPTION"
    : "HERO.MODE.CHALLENGE.DESCRIPTION";

  const modeIcon = isSandbox ? "🌻" : "💢";

  const modeColor = isSandbox ? palette.primary.main : palette.secondary.main;

  const handleClick = () => {
    navigate(`/${mode}`);
  };

  return (
    <Stack
      gap={1}
      sx={{
        padding: 2,
        borderRadius: 4,
        border: `3px solid ${modeColor}`,
        maxWidth: 350,
        cursor: "pointer",
      }}
      component={motion.div}
      initial={{ opacity: 0, y: isSandbox ? 50 : -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      whileHover={{ scale: 1.03, backgroundColor: modeColor, color: "white" }}
      whileTap={{ scale: 0.99 }}
      onClick={handleClick}
    >
      <Stack gap={1} direction="row" alignItems="center">
        <Typography variant="h5" fontWeight={600}>
          {modeIcon}
        </Typography>
        <Typography variant="h5" fontWeight={600}>
          <FormattedMessage id={modeTitle} />
        </Typography>
      </Stack>
      <Typography variant="body1">
        <FormattedMessage id={modeDescription} />
      </Typography>
      <Stack gap={0.5} sx={{ marginTop: 3 }}>
        {isChallenge && (
          <>
            <Typography variant="body2">
              <FormattedMessage id="HERO.MODE.CHALLENGE.RULES.1" />
            </Typography>
            <Typography variant="body2">
              <FormattedMessage id="HERO.MODE.CHALLENGE.RULES.2" />
            </Typography>
            <Typography variant="body2">
              <FormattedMessage id="HERO.MODE.CHALLENGE.RULES.3" />
            </Typography>
            <Typography variant="body2">
              <FormattedMessage id="HERO.MODE.CHALLENGE.RULES.4" />
            </Typography>
          </>
        )}
        {isSandbox && (
          <>
            <Typography variant="body2">
              <FormattedMessage id="HERO.MODE.SANDBOX.RULES.1" />
            </Typography>
            <Typography variant="body2">
              <FormattedMessage id="HERO.MODE.SANDBOX.RULES.2" />
            </Typography>
            <Typography variant="body2">
              <FormattedMessage id="HERO.MODE.SANDBOX.RULES.3" />
            </Typography>
            <Typography variant="body2">
              <FormattedMessage id="HERO.MODE.SANDBOX.RULES.4" />
            </Typography>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default ModePreview;
