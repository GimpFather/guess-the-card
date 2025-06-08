import TitleAndScore from "../SandboxMode/TitleAndScore.tsx";
import Riddle from "../SandboxMode/Riddle.tsx";
import { Button, Stack, TextField } from "@mui/material";
import CardToGuess from "../SandboxMode/CardToGuess.tsx";
import { CARDS } from "../../coreFiles/cards.ts";
import React from "react";
import { getBackCard, getRandomCard } from "../../utils.ts";
import { CardSet } from "../../coreFiles/types.ts";

const SandboxPage = () => {
  const card = getRandomCard(CARDS);
  const backCard = getBackCard(card?.cardSet ?? CardSet.CORE);
  const [watched, setWatched] = React.useState(false);

  if (!card || !backCard) return null;

  return (
    <Stack gap={5}>
      <TitleAndScore score={0} />
      <Riddle riddle={card.emojiRiddle} />
      <CardToGuess
        backCardImg={backCard.img}
        frontCardImg={card.img}
        name={card.name}
        numberOfEmojies={card.emojiRiddle.length}
        watched={watched}
      />
      <Stack direction="row" justifyContent="center" gap={2}>
        <TextField label="Card name" />
        <Button
          variant="contained"
          sx={{ borderRadius: 4 }}
          onClick={() => setWatched(!watched)}
        >
          Check
        </Button>
      </Stack>
    </Stack>
  );
};

export default SandboxPage;
