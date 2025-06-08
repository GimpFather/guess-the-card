import CARD_BACKS from "./coreFiles/cardBacks";
import type { Card, CardSet } from "./coreFiles/types";

export const getRandomCard = (cards: Card[]) => {
  return cards[Math.floor(Math.random() * cards.length)];
};

export const getBackCard = (cardSet: CardSet) => {
  return (
    CARD_BACKS.find((backCard) => backCard.cardSet === cardSet) ?? CARD_BACKS[0]
  );
};
