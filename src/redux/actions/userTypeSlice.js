import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardTitle: ""
}

export const userTypeSlice = createSlice({
  name: 'userType',
  initialState,
  reducers: {
    setActiveCardTitle: (state, action) => {
      state.cardTitle = action.payload
    },
  },
})

export const { setActiveCardTitle } = userTypeSlice.actions;

export default userTypeSlice.reducer;