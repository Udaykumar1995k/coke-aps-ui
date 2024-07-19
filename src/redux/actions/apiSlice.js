import { createSlice } from '@reduxjs/toolkit';
import { createApi } from '../../utils/api';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createApi('posts', 'get');
export const postData = createApi('posts', 'post');
export const deleteData = createApi('posts', 'delete');
export const putData = createApi('posts', 'put');

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // Add similar cases for other thunks created with createApiThunk
  },
});

export default apiSlice.reducer;