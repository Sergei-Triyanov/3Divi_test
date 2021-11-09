import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer/rootReducer";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector