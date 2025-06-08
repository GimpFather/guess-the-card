import { Stack } from "@mui/material";
import Hint from "./Hint";
import { FormattedMessage } from "react-intl";
import type { Card } from "../../coreFiles/types";

interface HintsProps {
  card: Card;
}

const Hints = ({ card }: HintsProps) => {
  return (
    <Stack alignItems="center" gap={1.5}>
      <Hint
        title={<FormattedMessage id="SANDBOX.MODE.HINTS.CLASS" />}
        description={card.class}
      />
      <Hint
        title={<FormattedMessage id="SANDBOX.MODE.HINTS.FLAVOR_TEXT" />}
        description={card.flavorText}
      />
      <Hint
        title={<FormattedMessage id="SANDBOX.MODE.HINTS.RARITY" />}
        description={card.rarity}
      />
      <Hint
        title={<FormattedMessage id="SANDBOX.MODE.HINTS.MANA_COST" />}
        description={card.cost.toString()}
      />
    </Stack>
  );
};

export default Hints;
