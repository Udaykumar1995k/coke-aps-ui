import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com'; 
// const myAuthToken = "sdssdshd6shjsdbsds"

const myApi = axios.create({
    baseUrl,
    headers: {
      'Content-Type': 'application/json',
    //   Authorization: `Bearer ${myAuthToken}`, 
    },
  });

export const createApi = (endpoint, method) => {
  return createAsyncThunk(
    `api/${endpoint}`,
    async (data = {}, { rejectWithValue }) => {
      try {
        const response = await myApi({
          method,
          url: `${baseUrl}/${endpoint}`,
          data,  // for post requests
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data || error.message);
      }
    }
  );
};