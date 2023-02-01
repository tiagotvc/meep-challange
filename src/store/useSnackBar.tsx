import { SnackbarType } from "@/components/GenericSnackBar";
import { useState } from "react";

type SnackbarCloseEventHandler = Function;

export interface SnackbarConfig {
  autoHideDuration?: number | null;
  message?: string;
  onClose?: SnackbarCloseEventHandler;
  type?: SnackbarType;
}

export type ShowSnackbarFunction = (config: SnackbarConfig) => void;

export type ShowErrorSnackbarFunction = (error: any) => void;

export type HideSnackbarFunction = () => void;

export const useSnackbar = () => {
  const [currentAutoHideDuration, setAutoHideDuration] = useState<
    number | null | undefined
  >(6000);
  const [currentMessage, setMessage] = useState<string>("");
  const [currentOnClose, setOnClose] = useState<SnackbarCloseEventHandler>(
    () => {}
  );
  const [currentType, setType] = useState<SnackbarType>("success");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (onClose?: Function) => () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const showSnackbar: ShowSnackbarFunction = ({
    autoHideDuration,
    message,
    onClose,
    type,
  }) => {
    setAutoHideDuration(autoHideDuration);
    setMessage(message);
    if (type) setType(type);
    setOnClose(() => handleClose(onClose));
    setIsOpen(true);
  };

  const hideSnackbar: HideSnackbarFunction = () => {
    setIsOpen(false);
  };

  return {
    autoHideDuration: currentAutoHideDuration,
    hideSnackbar,
    isOpen,
    message: currentMessage,
    onClose: currentOnClose,
    showSnackbar,
    type: currentType,
  };
};
