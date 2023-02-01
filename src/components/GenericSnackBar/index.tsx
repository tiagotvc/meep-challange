import { Snackbar, Alert } from "@mui/material";
import React from "react";

export type SnackbarType = "success" | "error" | "info" | "warning";
interface GenericSnackBarProps {
  autoHideDuration?: number | null;
  message: string;
  onClose?: Function;
  open: boolean;
  type?: SnackbarType;
}

export default function GenericSnackBar({
  autoHideDuration = 6000,
  open,
  message,
  onClose,
  type,
}: GenericSnackBarProps) {
  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <Alert severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
