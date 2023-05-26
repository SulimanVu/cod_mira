import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   token: localStorage.getItem("token"),
  //   userId: localStorage.getItem("id"),
};

export const authSignIn = createAsyncThunk(
  "auth/signn",
  async ({ login, password }, thunkAPI) => {
    try {
    } catch (error) {}
  }
);

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ name, phone, mail, login, password }, thunkAPI) => {
    try {
    } catch (e) {}
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authSignIn.fulfilled, (state, action) => {});
  },
});

export default applicationSlice.reducer;
