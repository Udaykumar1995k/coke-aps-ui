import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './actions/counterSlice'
import apiSlice from './actions/apiSlice'
import dashboardTitle from './actions/dashboardTitle'
import userAuthorization from './actions/userAuthorization'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    apiData: apiSlice,
    dashboardDetails: dashboardTitle,
    userAuthorization: userAuthorization,
  },
})