import CARD_BACKS from "./coreFiles/cardBacks";
import FAIL_MESSAGES from "./coreFiles/FAIL_MESSAGES";
import SUCCESS_MESSAGES from "./coreFiles/SUCCESS_MESSAGES";
import type { Card, CardSet } from "./coreFiles/types";

export const getRandomCard = (cards: Card[]) => {
  return cards[Math.floor(Math.random() * cards.length)];
};

export const getBackCard = (cardSet: CardSet) => {
  return (
    CARD_BACKS.find((backCard) => backCard.cardSet === cardSet) ?? CARD_BACKS[0]
  );
};

export const getRandomSuccessMessage = () => {
  return (
    SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)] ??
    SUCCESS_MESSAGES[0]
  );
};

export const getRandomFailMessage = () => {
  return (
    FAIL_MESSAGES[Math.floor(Math.random() * FAIL_MESSAGES.length)] ??
    FAIL_MESSAGES[0]
  );
};
