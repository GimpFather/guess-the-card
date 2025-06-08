import { Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router";
import { launchFireworks } from "../../utils";

const Summary = () => {
  const navigate = useNavigate();
  const { palette } = useTheme();

  React.useEffect(() => {
    launchFireworks();
  }, []);

  return (
    <Stack marginTop={10} gap={5} alignItems="center">
      <Typography variant="h1">
        <FormattedMessage id="SANDBOX.MODE.SUMMARY.TITLE" />
      </Typography>
      <Typography variant="h2">
        <FormattedMessage id="SANDBOX.MODE.SUMMARY.SUBTITLE" />
      </Typography>
      <Stack direction="row" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={launchFireworks}
          sx={{
            borderRadius: 4,
          }}
        >
          <FormattedMessage id="SANDBOX.MODE.SUMMARY.BUTTON.SHOOT_CONFETTI" />
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            borderRadius: 4,
            border: `2px solid ${palette.primary.main}`,
          }}
          onClick={() => navigate("/")}
        >
          <FormattedMessage id="SANDBOX.MODE.SUMMARY.BUTTON.GO_BACK" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Summary;
