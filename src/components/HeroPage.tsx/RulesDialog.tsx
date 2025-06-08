import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FormattedMessage } from "react-intl";

const RulesDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Rules</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormattedMessage id="HERO.RULES" />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default RulesDialog;
