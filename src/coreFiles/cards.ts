import { CardClass, CardRarity, CardSet, CardType, type Card } from "./types";

export const CARDS: Card[] = [
  {
    name: "Tyrion Fordring",
    img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c260dee5c2342d75f5af5dcc0a9816b99d3f9602c640fd22236612f0b3bb1232.png",
    emojiRiddle: "🛡️👼💀⚔️🔥",
    cardSet: CardSet.CORE,
    class: CardClass.PALADIN,
    flavorText:
      "If you haven't heard the <CARD NAME> theme song, it's because it doesn't exist",
    type: CardType.MINION,
    rarity: CardRarity.LEGENDARY,
    cost: 8,
  },
  {
    name: "Leeroy Jenkins",
    img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7740c50c88d17b12c3eccbf1c57af9163929add6c63bba7fbad663f574bc6307.png",
    emojiRiddle: "🐉⚔️🏃‍♂️🍗💥",
    cardSet: CardSet.CORE,
    class: CardClass.NEUTRAL,
    flavorText: "At least he has Angry Chicken.",
    type: CardType.MINION,
    rarity: CardRarity.LEGENDARY,
    cost: 5,
  },
  {
    name: "Varian Wrynn",
    img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/10768502ea2438abe55a7a623bb977ac01b1503a66cc19e013069c3ea811caaf.png",
    emojiRiddle: "👑🗡️🗡️🎲🧍🧍🧍",
    cardSet: CardSet.TGT,
    class: CardClass.WARRIOR,
    flavorText:
      "Leader of the Alliance! Father of Anduin! Also he likes to play Arena, and he averages 12 wins.",
    type: CardType.MINION,
    rarity: CardRarity.LEGENDARY,
    cost: 10,
  },
];
