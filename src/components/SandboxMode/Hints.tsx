import { Stack } from "@mui/material";
import Hint from "./Hint";
import { FormattedMessage } from "react-intl";
import type { Card } from "../../coreFiles/types";
import { motion } from "framer-motion";

interface HintsProps {
  card: Card;
}

const Hints = ({ card }: HintsProps) => {
  return (
    <Stack
      alignItems="center"
      gap={1.5}
      component={motion.div}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Hint
        title={<FormattedMessage id="SANDBOX.MODE.HINTS.CLASS" />}
        description={card.class}
        cardId={card.id}
      />
      <Hint
        title={<FormattedMessage id="SANDBOX.MODE.HINTS.FLAVOR_TEXT" />}
        description={card.flavorText}
        cardId={card.id}
      />
      <Hint
        title={<FormattedMessage id="SANDBOX.MODE.HINTS.RARITY" />}
        description={card.rarity}
        cardId={card.id}
      />
      <Hint
        title={<FormattedMessage id="SANDBOX.MODE.HINTS.MANA_COST" />}
        description={card.cost.toString()}
        cardId={card.id}
      />
    </Stack>
  );
};

export default Hints;
