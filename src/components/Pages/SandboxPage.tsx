import { Stack } from "@mui/material";
import { CARDS } from "../../coreFiles/cards.ts";
import React from "react";
import { getUnguessedCards } from "../../localStorage/mechanics.ts";
import Game from "../SandboxMode/Game.tsx";
import Summary from "../SandboxMode/Summary.tsx";

const SandboxPage = () => {
  const [unguessedCards, setUnguessedCards] = React.useState(() =>
    getUnguessedCards(CARDS)
  );

  return (
    <Stack gap={5}>
      {unguessedCards.length > 0 ? (
        <Game
          unguessedCards={unguessedCards}
          setUnguessedCards={setUnguessedCards}
        />
      ) : (
        <Summary />
      )}
    </Stack>
  );
};

export default SandboxPage;
