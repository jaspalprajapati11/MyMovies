import moviesReducer from "./Reducers";
import { configureStore } from '@reduxjs/toolkit'
import {getMovieData} from '../utilities/App.utilities'


export const store = configureStore({
    reducer: {
        moviesReducer
    },
    middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === "development"
    ? getDefaultMiddleware({
      thunk: {
        extraArgument: getMovieData,
      },
      serializableCheck: false,
    }):null
})

