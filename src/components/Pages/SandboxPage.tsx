import TitleAndScore from "../SandboxMode/TitleAndScore.tsx";
import Riddle from "../SandboxMode/Riddle.tsx";
import { Button, Stack, TextField } from "@mui/material";

const SandboxPage = () => {
  return (
    <Stack gap={5}>
      <TitleAndScore score={0} />
      <Riddle riddle={["👑", "🗡️", "🗡️", "🎲", "🧍", "🧍", "🧍"]} />
      <Stack direction="row" justifyContent="center" gap={2}>
        <TextField label="Card name" />
        <Button variant="contained" sx={{ borderRadius: 4 }}>
          Check
        </Button>
      </Stack>
    </Stack>
  );
};

export default SandboxPage;
