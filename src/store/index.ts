import { configureStore, ThunkAction, combineReducers } from "@reduxjs/toolkit";

import { Action } from "redux";
import { createWrapper } from "next-redux-wrapper";
import common from "./slices/common";
import profile from "./slices/profile";

const combineReducer = combineReducers({
  common,
  profile,
});

export const makeStore = (ctx: any) => {
  const store = configureStore({
    reducer: combineReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

  return store;
};
// typeof makeStore.dispatch
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
