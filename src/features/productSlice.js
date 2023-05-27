import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
};

export const fetchProd = createAsyncThunk(
    "product/fetch",
    async (_, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:3030/product");
            const data = await res.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addProd = createAsyncThunk(
    "product/add",
    async ({name, image, description, price, myId}, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:3030/addProd", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${thunkAPI.getState().application.token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    image,
                    description,
                    price,
                    fermer: myId,
                }),
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const productSlice = createSlice({
    name: "productSlice",
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
            .addCase(addProd.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
    },
});

export default productSlice.reducer;
