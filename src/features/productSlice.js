import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
}

export const fetchProd = createAsyncThunk(
    'product/fetch',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:3030/product');
            const data = await res.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    });

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProd.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProd.pending, (state, action) => {
                state.loading = true;
            })
    }
});

export default productSlice.reducer;