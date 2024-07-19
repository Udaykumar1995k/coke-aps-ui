import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './actions/counterSlice'
import apiSlice from './actions/apiSlice'
import dashboardTitle from './actions/dashboardTitle'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    apiData: apiSlice,
    dashboardDetails: dashboardTitle
  },
})