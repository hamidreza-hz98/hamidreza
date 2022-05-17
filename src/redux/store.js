import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./features/clientSlice";

export const store = configureStore({
  reducer: {
    client: clientReducer,
  },
});
