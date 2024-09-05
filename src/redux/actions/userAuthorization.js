import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menuItems: "",
}

export const userAuthorization = createSlice({
  name: 'userAuthorization',
  initialState,
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = action.payload
    },
  },
})

export const { setMenuItems } = userAuthorization.actions;

export default userAuthorization.reducer;