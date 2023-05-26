import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    loading: false,
}

export const fetchCats = createAsyncThunk(
    'categories/fetch',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:3030/category');
            const data = await res.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    });

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProd.fullfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProd.pending, (state, action) => {
                state.loading = true;
            })
    }
});

export default categorySlice.reducer;