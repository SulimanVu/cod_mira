import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {serverUrl} from "../serverUrl"

const initialState = {
  error: null,
  load: false,
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
  fermers:[],
};
export const authThunk = createAsyncThunk(
  "fetch/auth",
  async ({ login, password,name,surname,phone,mail,selectValue }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password,name,surname,phone,mail,role:selectValue }),
      });
      const token = await res.json();
      
      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ name, phone, mail, login, password }, thunkAPI) => {
    try {
    } catch (e) {}
  }
);

export const fetchFermersThunk = createAsyncThunk(
  "fetch/fermers",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/oneUser`);
      const data = await res.json();
      
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "fetch/login",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch(`${serverUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      console.log(token)
      if(token.error){
        return thunkAPI.rejectWithValue(token.error)
    }
      localStorage.setItem("token", token.token);
      localStorage.setItem("id", token.id);

      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.load = false;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload
        state.load = false
      })
      
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.load = false;
        state.error = null
        state.token = action.payload.token;
        state.id = action.payload.id;
      })

      .addCase(fetchFermersThunk.pending, (state, action) => {
        state.load = true;
      })
      .addCase(fetchFermersThunk.rejected, (state, action) => {
        state.error = action.payload
        state.load = false
      })
      
      .addCase(fetchFermersThunk.fulfilled, (state, action) => {
        state.load = false;
        state.error = null
       state.fermers = action.payload
      })
  },
});

export default applicationSlice.reducer;
