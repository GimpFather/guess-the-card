import TitleAndScore from "../SandboxMode/TitleAndScore.tsx";
import Riddle from "../SandboxMode/Riddle.tsx";
import { Stack } from "@mui/material";
import CardToGuess from "../SandboxMode/CardToGuess.tsx";
import { CARDS } from "../../coreFiles/cards.ts";
import React from "react";
import { getBackCard, getRandomCard } from "../../utils.ts";
import { CardSet, type Card } from "../../coreFiles/types.ts";
import GuessingForm from "../SandboxMode/GuessingForm.tsx";
import { getUnguessedCards } from "../../localStorage/mechanics.ts";
import { AnimatePresence } from "framer-motion";

const SandboxPage = () => {
  const [unguessedCards, setUnguessedCards] = React.useState(() =>
    getUnguessedCards(CARDS)
  );
  const [card, setCard] = React.useState<Card>(getRandomCard(unguessedCards)!);
  const backCard = getBackCard(card?.cardSet ?? CardSet.CORE);
  const [guessed, setGuessed] = React.useState(false);

  React.useEffect(() => {
    setUnguessedCards(getUnguessedCards(CARDS));
  }, [guessed]);

  const handleNextCard = () => {
    setCard(getRandomCard(unguessedCards)!);
    setGuessed(false);
  };

  if (!card || !backCard) return null;

  return (
    <Stack gap={5}>
      <TitleAndScore score={CARDS.length - unguessedCards.length} />
      <AnimatePresence mode="wait">
        <Riddle key={card.id} riddle={card.emojiRiddle} />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <CardToGuess
          key={card.id}
          backCardImg={backCard.img}
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
    </Stack>
  );
};

export default SandboxPage;
