import TitleAndScore from "../SandboxMode/TitleAndScore.tsx";
import Riddle from "../SandboxMode/Riddle.tsx";
import { Stack } from "@mui/material";
import CardToGuess from "../SandboxMode/CardToGuess.tsx";
import { CARDS } from "../../coreFiles/cards.ts";
import React from "react";
import { getBackCard, getRandomCard } from "../../utils.ts";
import { CardSet, type Card } from "../../coreFiles/types.ts";
import GuessingForm from "../SandboxMode/GuessingForm.tsx";

const SandboxPage = () => {
  const [card, setCard] = React.useState<Card>(getRandomCard(CARDS)!);
  const backCard = getBackCard(card?.cardSet ?? CardSet.CORE);
  const [guessed, setGuessed] = React.useState(false);
  const [score, setScore] = React.useState(0);

  if (!card || !backCard) return null;

  return (
    <Stack gap={5}>
      <TitleAndScore score={score} />
      <Riddle riddle={card.emojiRiddle} />
      <CardToGuess
        backCardImg={backCard.img}
        frontCardImg={card.img}
        name={card.name}
        numberOfEmojies={card.emojiRiddle.length}
        guessed={guessed}
      />
      <GuessingForm
        setGuessed={setGuessed}
        guessed={guessed}
        currentCard={card.name}
        setCard={setCard}
        setScore={setScore}
      />
    </Stack>
  );
};

export default SandboxPage;
