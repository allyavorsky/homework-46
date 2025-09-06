import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (userData) => {
    const response = await new Promise((resolve) =>
      setTimeout(() => {
        resolve({ data: userData });
      }, 1000)
    );
    return response.data;
  }
);

const initialState = {
  name: "Ярослав",
  email: "student@example.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
