import { configureStore } from "@reduxjs/toolkit";
import mksSlice from "./slices/mksSlice.js";

export const store = configureStore({
  reducer: {
    MKS: mksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware()];
  },
});
