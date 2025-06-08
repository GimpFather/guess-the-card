import type { Card } from "../coreFiles/types";

export const markCardAsGuessed = (cardId: string) => {
  const guessed = JSON.parse(localStorage.getItem("guessedCards") || "[]");
  if (!guessed.includes(cardId)) {
    guessed.push(cardId);
    localStorage.setItem("guessedCards", JSON.stringify(guessed));
  }
};

export const getGuessedCards = (): string[] => {
  return JSON.parse(localStorage.getItem("guessedCards") || "[]");
};

export const isCardGuessed = (cardId: string): boolean => {
  const guessed = getGuessedCards();
  return guessed.includes(cardId);
};

export const getUnguessedCards = (allCards: Card[]): Card[] => {
  const guessedIds: string[] = getGuessedCards();
  return allCards.filter((card) => !guessedIds.includes(card.id));
};
