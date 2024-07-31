import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tabDetails: "",
}

export const dashboardTitle = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.tabDetails = action.payload
    },
  },
})

export const { setTitle } = dashboardTitle.actions;

export default dashboardTitle.reducer;