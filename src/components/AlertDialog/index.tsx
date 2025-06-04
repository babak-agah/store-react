import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { SELECT_ALERT_DIALOG, updateAlert } from "@src/store/slices/common";
import { memo } from "react";
import { useDispatch } from "react-redux";
export interface IAlertDialog {
  message: any;
  open: boolean;
  type: "ERROR" | "WARNING" | "INFO" | "ACCEPT";
}

export const ALERT_DIALOG_DEFAULT_VALUES: IAlertDialog = {
  open: false,
  message: 0,
  type: "INFO",
};

const AlertDialog = () => {
  const dispatch = useDispatch();
  const { message, open, type } = SELECT_ALERT_DIALOG();
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={() => dispatch(updateAlert(ALERT_DIALOG_DEFAULT_VALUES))}
    >
      <DialogTitle>
        <Typography textAlign={"center"} variant={"h5"} color={"red"}>
          error
        </Typography>
      </DialogTitle>
      <DialogContent>
        {typeof message === "string"
          ? message
          : Array.isArray(message)
          ? message.map((e, index) => <Box key={index} py={1}>{`${e}`}</Box>)
          : "error from server"}
      </DialogContent>
    </Dialog>
  );
};

export default memo(AlertDialog);
