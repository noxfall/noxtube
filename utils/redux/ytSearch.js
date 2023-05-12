import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
const apiKey = process.env.NEXT_PUBLIC_YT_API;

const initialState = {
  videos: []
};

export const search = createAsyncThunk(
  "yt/search",
  async (query, callback) => {
    try {
      const res = await fetch(`${baseUrl}?q=${query}&part=snippet&key=${apiKey}`);
      const data = await res.json();
      return data.items;
    } catch (err) {
      callback.rejectWithValue({ error: err.message });
    }
  }
);


const ytsearch = createSlice({
  name: "ytsearch",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(search.fulfilled, (state, action) => {
      state.videos = action.payload
    })
  }
});

export default ytsearch.reducer
