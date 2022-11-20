import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";
// ...

let reducer = {
  counter: counter.reducer,
};

export const allActions = {
  counter: counter.actions,
};

export const store = configureStore({ reducer });

export { Provider } from "react-redux";
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
type AllActions = typeof allActions;
export interface ActionsI extends AllActions {
  [key: string]: any;
}

export interface ReducerI extends RootState {
  [key: string]: any;
}
