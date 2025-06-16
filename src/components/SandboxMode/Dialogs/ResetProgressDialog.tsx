import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
  useTheme,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { clearGuessedCards } from "../../../localStorage/mechanics";
import { toast } from "react-toastify";

interface ResetProgressDialogProps {
  open: boolean;
  onClose: () => void;
}

const ResetProgressDialog = ({ open, onClose }: ResetProgressDialogProps) => {
  const { palette } = useTheme();

  const handleResetProgress = () => {
    clearGuessedCards();
    onClose();
    toast.success("Progress reset successfully");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 4,
          backgroundColor: palette.common.white,
        },
      }}
    >
      <DialogTitle>
        <FormattedMessage id="RESET_PROGRESS_DIALOG.TITLE" />
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: palette.common.black }}>
          <FormattedMessage id="RESET_PROGRESS_DIALOG.CONTENT" />
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ paddingX: 3, paddingBottom: 2, paddingTop: 0 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={onClose}
          sx={{ borderRadius: 4 }}
        >
          <FormattedMessage id="RESET_PROGRESS_DIALOG.BUTTON.CANCEL" />
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleResetProgress}
          sx={{ borderRadius: 4 }}
        >
          <FormattedMessage id="RESET_PROGRESS_DIALOG.BUTTON.RESET" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResetProgressDialog;
