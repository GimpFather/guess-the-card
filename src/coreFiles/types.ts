export enum CardClass {
  DEATH_KNIGHT = "DEATH_KNIGHT",
  DEMON_HUNTER = "DEMON_HUNTER",
  DRUID = "DRUID",
  HUNTER = "HUNTER",
  MAGE = "MAGE",
  PALADIN = "PALADIN",
  PRIEST = "PRIEST",
  ROGUE = "ROGUE",
  SHAMAN = "SHAMAN",
  WARLOCK = "WARLOCK",
  WARRIOR = "WARRIOR",
  NEUTRAL = "NEUTRAL",
}

export enum CardSet {
  CORE = "Core",
  TGT = "The Grand Tournament",
}

export enum CardType {
  MINION = "MINION",
  SPELL = "SPELL",
  HERO = "HERO",
  WEAPON = "WEAPON",
}

export enum CardRarity {
  COMMON = "COMMON",
  RARE = "RARE",
  EPIC = "EPIC",
  LEGENDARY = "LEGENDARY",
}

export interface Card {
  id: string;
  name: string;
  img: string;
  emojiRiddle: string[];
  cardSet: CardSet;
  class: CardClass;
  flavorText: string;
  type: CardType;
  rarity: CardRarity;
  cost: number;
}
