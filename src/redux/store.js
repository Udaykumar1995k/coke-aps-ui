import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './actions/counterSlice'
import apiSlice from './actions/apiSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    apiData: apiSlice
  },
})