import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: [],
    loading: false,
}

export const fetchCategory = createAsyncThunk(
    'category/fetch',
    async (id = '', thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:3030/category/${id}`);
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
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
    }
});

export default categorySlice.reducer;