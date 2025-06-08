import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import {
  getRandomFailMessage,
  getRandomSuccessMessage,
  launchEmojiConfetti,
} from "../../utils";
import { type Card } from "../../coreFiles/types";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import { markCardAsGuessed } from "../../localStorage/mechanics";

interface FormData extends FieldValues {
  "Card Name": string;
}

interface GuessingFormProps {
  setGuessed: (guessed: boolean) => void;
  currentCard: Card;
  guessed: boolean;
  setCard: () => void;
}

const GuessingForm = ({
  setGuessed,
  currentCard,
  guessed,
  setCard,
}: GuessingFormProps) => {
  const { register, handleSubmit, watch, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const playerGuess = data["Card Name"].trim().toLowerCase();
    const correctName = currentCard.name.toLowerCase();

    if (playerGuess === correctName) {
      setGuessed(true);
      markCardAsGuessed(currentCard.id);
      launchEmojiConfetti(currentCard.emoji);
      toast.success(getRandomSuccessMessage());
    } else {
      setGuessed(false);
      toast.error(getRandomFailMessage());
      reset();
    }
  };

  return (
    <Stack spacing={3} alignItems="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <Stack direction="row" gap={2}>
            <TextField
              label={<FormattedMessage id="GUESSING_FORM.LABEL.CARD_NAME" />}
              {...register("Card Name")}
              disabled={guessed}
              fullWidth
            />
            <Button
              variant="contained"
              sx={{ borderRadius: 4, minWidth: "100px" }}
              type="submit"
              disabled={guessed || !watch("Card Name")}
            >
              <FormattedMessage id="GUESSING_FORM.BUTTON.CHECK" />
            </Button>
          </Stack>
          <Button
            disabled={!guessed}
            variant="contained"
            sx={{ borderRadius: 4 }}
            onClick={() => {
              setGuessed(false);
              reset();
              setCard();
            }}
          >
            <FormattedMessage id="GUESSING_FORM.BUTTON.NEXT_CARD" />
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default GuessingForm;
