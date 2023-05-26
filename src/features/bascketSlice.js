import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  bascket: [],
  loading: false,
};

export const fetchBascket = createAsyncThunk(
  "bascket/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/bascket");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProductInBascket = createAsyncThunk(
  "bascket/add",
  async ({ user, products, price }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/bascket", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ user, products, price }),
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const bascketlice = createSlice({
  name: "bascketlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBascket.fulfilled, (state, action) => {
        state.bascket = action.payload.filter((item) => {
          if (item.user._id === localStorage.getItem("id")) {
            return item;
          }
        });
      })
      .addCase(addProductInBascket.fulfilled, (state, action) => {
        state.bascket.push(action.payload);
      });
  },
});

export default bascketlice.reducer;
