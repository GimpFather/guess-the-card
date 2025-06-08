import TitleAndScore from "../SandboxMode/TitleAndScore.tsx";
import Riddle from "../SandboxMode/Riddle.tsx";
import { Stack } from "@mui/material";
import CardToGuess from "../SandboxMode/CardToGuess.tsx";
import { CARDS } from "../../coreFiles/cards.ts";
import React from "react";
import { type Card } from "../../coreFiles/types.ts";
import GuessingForm from "../SandboxMode/GuessingForm.tsx";
import { getUnguessedCards } from "../../localStorage/mechanics.ts";
import { AnimatePresence } from "framer-motion";
import Hints from "../SandboxMode/Hints.tsx";

interface GameProps {
  unguessedCards: Card[];
  setUnguessedCards: (cards: Card[]) => void;
}

const Game = ({ unguessedCards, setUnguessedCards }: GameProps) => {
  const [card, setCard] = React.useState<Card>(unguessedCards[0] as Card);
  const [guessed, setGuessed] = React.useState(false);

  React.useEffect(() => {
    setUnguessedCards(getUnguessedCards(CARDS));
  }, [guessed]);

  const handleNextCard = () => {
    setCard(unguessedCards[0] as Card);
    setGuessed(false);
  };

  return (
    <Stack gap={5}>
      <TitleAndScore score={CARDS.length - unguessedCards.length} />
      <AnimatePresence mode="wait">
        <Riddle key={card.id} riddle={card.emojiRiddle} />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <CardToGuess
          key={card.id}
          backCardImg={card.imgBack}
          frontCardImg={card.img}
          name={card.name}
          numberOfEmojies={card.emojiRiddle.length}
          guessed={guessed}
        />
      </AnimatePresence>
      <GuessingForm
        setGuessed={setGuessed}
        guessed={guessed}
        currentCard={card}
        setCard={handleNextCard}
      />
      <Hints card={card} />
    </Stack>
  );
};

export default Game;
