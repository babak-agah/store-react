import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "..";
import { useAppSelector } from "../hooks";

export interface CommonStateTypes {
  scroll: number;
  size: { width: number; height: number };
}

const initialState: CommonStateTypes = {
  scroll: 0,
  size: { width: 0, height: 0 },
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
  },
});

//
export const { updateScroll, updateSize } = common.actions;
//
// call in component
export const SELECT_SCROLL = () =>
  useAppSelector((state: AppState) => state.common.scroll);

export const SELECT_WINDOW_SIZE = () =>
  useAppSelector((state: AppState) => state.common.size);

export default common.reducer;
