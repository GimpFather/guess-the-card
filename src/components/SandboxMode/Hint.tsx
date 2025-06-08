import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface HintProps {
  title: React.ReactNode;
  description: string;
  cardId: string;
}

const Hint = ({ title, description, cardId }: HintProps) => {
  const { palette } = useTheme();

  return (
    <Accordion
      key={cardId}
      elevation={0}
      sx={{
        width: 350,
        border: `3px solid ${palette.common.black}`,
        backgroundColor: "transparent",
        padding: 0,
        "&:before": {
          display: "none",
        },
        "&:first-of-type": {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
        "&:last-of-type": {
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        },
        "&:not(:first-of-type)": {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
        "&:not(:last-of-type)": {
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        },
      }}
    >
      <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
        <Typography component="span">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Hint;
