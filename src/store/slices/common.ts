import { ALERT_DIALOG_DEFAULT_VALUES } from "./../../components/AlertDialog/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "..";
import { useAppSelector } from "../hooks";
import { IAlertDialog } from "@src/components/AlertDialog";

export interface CommonStateTypes {
  scroll: number;
  size: { width: number; height: number };
  alertDialog: IAlertDialog;
}

const initialState: CommonStateTypes = {
  scroll: 0,
  size: { width: 0, height: 0 },
  alertDialog: ALERT_DIALOG_DEFAULT_VALUES,
};

export const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    updateScroll: (state: CommonStateTypes, action: PayloadAction<number>) => {
      state.scroll = action.payload;
    },
    updateSize: (
      state: CommonStateTypes,
      action: PayloadAction<{ width: number; height: number }>
    ) => {
      state.size = action.payload;
    },
    updateAlert: (
      state: CommonStateTypes,
      action: PayloadAction<IAlertDialog>
    ) => {
      state.alertDialog = action.payload;
    },
  },
});

//
export const { updateScroll, updateSize, updateAlert } = common.actions;
//
// call in component
export const SELECT_SCROLL = () =>
  useAppSelector((state: AppState) => state.common.scroll);

export const SELECT_WINDOW_SIZE = () =>
  useAppSelector((state: AppState) => state.common.size);

export const SELECT_ALERT_DIALOG = () =>
  useAppSelector((state: AppState) => state.common.alertDialog);

export default common.reducer;
