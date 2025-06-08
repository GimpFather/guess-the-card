export enum CardClass {
  DEATH_KNIGHT = "Death Knight 🦴",
  DEMON_HUNTER = "Demon Hunter 🧼",
  DRUID = "Druid 🌳",
  HUNTER = "Hunter 🐊",
  MAGE = "Mage 🔮",
  PALADIN = "Paladin 🔆",
  PRIEST = "Priest 💊",
  ROGUE = "Rogue 💸",
  SHAMAN = "Shaman 🌌",
  WARLOCK = "Warlock 🎃",
  WARRIOR = "Warrior 💪",
  NEUTRAL = "Neutral 🎴",
}

export enum CardSet {
  CORE = "Core",
  TGT = "The Grand Tournament",
  MCN = "Murder at Castle Nathria",
}

export enum CardType {
  MINION = "MINION",
  SPELL = "SPELL",
  HERO = "HERO",
  WEAPON = "WEAPON",
}

export enum CardRarity {
  COMMON = "Common",
  RARE = "Rare",
  EPIC = "Epic",
  LEGENDARY = "Legendary",
}

export interface Card {
  id: string;
  name: string;
  img: string;
  imgBack: string;
  emojiRiddle: string[];
  cardSet: CardSet;
  class: CardClass;
  flavorText: string;
  rarity: CardRarity;
  cost: number;
  emoji: string;
}

export interface CardBack {
  name: string;
  cardSet: CardSet;
  img: string;
}
