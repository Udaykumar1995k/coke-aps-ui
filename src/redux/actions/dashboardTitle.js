import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "Dashboard",
}

export const dashboardTitle = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
  },
})

export const { setTitle } = dashboardTitle.actions;

export default dashboardTitle.reducer;