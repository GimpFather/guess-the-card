import { Stack, Typography, Tooltip, useTheme } from "@mui/material";
import { FormattedMessage } from "react-intl";

interface TitleAndScoreProps {
  score: number;
}

const TitleAndScore = ({ score }: TitleAndScoreProps) => {
  const { palette } = useTheme();

  return (
    <Tooltip
      placement="right"
      arrow
      title={<FormattedMessage id="SANDBOX.SCORE.TOOLTIP" />}
    >
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        sx={{ width: "fit-content" }}
      >
        <Typography variant="h6" sx={{ color: palette.primary.main }}>
          🌻
        </Typography>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ color: palette.primary.main }}
        >
          <FormattedMessage id="SANDBOX.TITLE" />
        </Typography>
        <Typography
          variant="h6"
          fontWeight={300}
          sx={{ color: palette.primary.main }}
        >
          <FormattedMessage
            id="SANDBOX.SCORE"
            values={{ score, order: "🐭" }}
          />
        </Typography>
      </Stack>
    </Tooltip>
  );
};

export default TitleAndScore;
