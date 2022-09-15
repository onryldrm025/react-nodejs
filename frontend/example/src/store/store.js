import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/features/counterSlice'
import {dataApi} from '../store/services/data'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    [dataApi.reducerPath]:dataApi.reducer 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})