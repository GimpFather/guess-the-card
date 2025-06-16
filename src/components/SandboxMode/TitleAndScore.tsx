import { Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

interface TitleAndScoreProps {
  score: number;
  mode: string | null;
}

const TitleAndScore = ({ score, mode }: TitleAndScoreProps) => {
  const { palette } = useTheme();

  const isChallenge = mode === "challenge";

  const emojiIcon = isChallenge ? "💢" : "🌻";
  const titleColor = isChallenge
    ? palette.secondary.main
    : palette.primary.main;

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      sx={{ width: "fit-content" }}
      component={motion.div}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h6" sx={{ color: titleColor }}>
        {emojiIcon}
      </Typography>
      <Typography variant="h6" fontWeight={600} sx={{ color: titleColor }}>
        <FormattedMessage
          id={isChallenge ? "CHALLENGE.TITLE" : "SANDBOX.TITLE"}
        />
      </Typography>
      <Typography variant="h6" fontWeight={300} sx={{ color: titleColor }}>
        <FormattedMessage id="SCORE.TITLE" values={{ score }} />
      </Typography>
    </Stack>
  );
};

export default TitleAndScore;
