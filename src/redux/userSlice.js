import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: userData });
        }, 1000);
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  name: "Ярослав",
  email: "student@example.com",
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.name = action.payload.name;
        state.email = action.payload.email;
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
