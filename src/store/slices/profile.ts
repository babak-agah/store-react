import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "..";
import { useAppSelector } from "../hooks";
import { User } from "@src/types/user";

export interface ProfileStateTypes {
  user: Partial<User>;
}

const initialState: ProfileStateTypes = {
  user: {},
};

export const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateUser: (state: ProfileStateTypes, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

//
export const { updateUser } = profile.actions;
//

export const SELECT_USER = () =>
  useAppSelector((state: AppState) => state.profile.user);

export default profile.reducer;
