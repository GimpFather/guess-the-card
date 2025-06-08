import { CardClass, CardRarity, CardSet, type Card } from "./types";

export const CARDS: Card[] = [
  {
    id: "1",
    name: "Tirion Fordring",
    img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/c260dee5c2342d75f5af5dcc0a9816b99d3f9602c640fd22236612f0b3bb1232.png",
    imgBack:
      "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/556d677acbb31fececd42912cf003aabeb3bb6efb571bb43de83e6b763763f2c.png",
    emojiRiddle: ["🛡️", "👼", "💀", "⚔️", "🔥"],
    cardSet: CardSet.CORE,
    class: CardClass.PALADIN,
    flavorText:
      "If you haven't heard the <CARD NAME> theme song, it's because it doesn't exist",
    rarity: CardRarity.LEGENDARY,
    cost: 8,
    emoji: "🛡️",
  },
  {
    id: "2",
    name: "Explosive Sheep",
    img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5aa30416aaf9f9e81df53c436fe92c47e98d8fae7c34fc15f46f8b249f1143d1.png",
    imgBack:
      "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/69ffc53bc47a3c6c397c6d34566db38779fb425e416246f9cd1b5827f91f8423.png",
    emojiRiddle: ["🧨", "🐑", "💀", "🔥"],
    cardSet: CardSet.MCN,
    class: CardClass.NEUTRAL,
    flavorText:
      "How is this supposed to work? Your enemies think, 'Hey! Cute sheep!' and run over to cuddle it?",
    rarity: CardRarity.COMMON,
    cost: 2,
    emoji: "🐑",
  },
  {
    id: "3",
    name: "Leeroy Jenkins",
    img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/7740c50c88d17b12c3eccbf1c57af9163929add6c63bba7fbad663f574bc6307.png",
    imgBack:
      "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/556d677acbb31fececd42912cf003aabeb3bb6efb571bb43de83e6b763763f2c.png",
    emojiRiddle: ["🐉", "⚔️", "🏃‍♂️", "🍗", "💥"],
    cardSet: CardSet.CORE,
    class: CardClass.NEUTRAL,
    flavorText: "At least he has Angry Chicken.",
    rarity: CardRarity.LEGENDARY,
    cost: 5,
    emoji: "🍗",
  },
];
