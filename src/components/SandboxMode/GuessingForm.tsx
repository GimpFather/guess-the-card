import {Autocomplete, Button, Stack, TextField, type FilterOptionsState} from "@mui/material";
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
import { motion } from "framer-motion";
import {CARDNAMES} from "../../coreFiles/cardnames.ts";

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
  
  const normalizeValue = (value: string): string => {
    return value.toLowerCase().replace(/[^a-z ]/g, '')
  }
  
  const filterOptions = (options: string[], state: FilterOptionsState<string>) => {
    console.log(options, state);
    const input = normalizeValue(state.inputValue);
    
    return options
        .filter(option => normalizeValue(option).includes(input))
        .slice(0, 100);
  }

  return (
    <Stack
      spacing={3}
      alignItems="center"
      component={motion.div}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <Stack direction="row" gap={2}>
            <Autocomplete
              disablePortal
              disableClearable
              options={CARDNAMES}
              filterOptions={filterOptions}
              fullWidth
              sx={{width: 220}}
              renderInput={(params) => <TextField
                  {...params}
                  label={<FormattedMessage id="GUESSING_FORM.LABEL.CARD_NAME"/>}
                  {...register("Card Name")}
                  fullWidth
                  disabled={guessed}
              />}
              renderOption={(props, option) => {
                return (
                    <span {...props} style={{ color: '#F9F9F9' }}>
                      {option}
                    </span>
                );
              }}
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
