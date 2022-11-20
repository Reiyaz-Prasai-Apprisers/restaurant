import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import {
  RootState,
  AppDispatch,
  allActions,
  ActionsI,
  ReducerI,
} from "@app/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useRedux = () => {
  const state: ReducerI = useAppSelector((state: RootState) => state);
  const dispatch: AppDispatch = useAppDispatch();
  const actions: ActionsI = allActions;

  return { state, dispatch, actions };
};
