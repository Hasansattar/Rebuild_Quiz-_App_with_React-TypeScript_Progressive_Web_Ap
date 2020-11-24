import { configureStore, combineReducers } from "@reduxjs/toolkit"

import {quizSlice} from "./quizSlice"
import { useDispatch } from "react-redux";
import { gameSlice } from "./gameSlice";

const rootReducer = combineReducers({
    quiz: quizSlice.reducer,
     game:gameSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();



export default store;


