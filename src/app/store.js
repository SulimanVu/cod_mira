import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import productSlice from '../features/productSlice'

export const store = configureStore({
  reducer: {
    application,
    productSlice,
  },
});
