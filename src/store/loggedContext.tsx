import { createContext } from "react";
import {
  HideSnackbarFunction,
  ShowErrorSnackbarFunction,
  ShowSnackbarFunction,
} from "./useSnackBar";

export interface ILoggedContext {
  showSnackbar: ShowSnackbarFunction;
  hideSnackbar: HideSnackbarFunction;
}

export const LoggedContext = createContext<ILoggedContext>({
  showSnackbar: () => {},
  hideSnackbar: () => {},
});
