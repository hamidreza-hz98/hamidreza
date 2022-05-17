import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ClientsData } from "../DATA";

export const clientAdapter = createEntityAdapter();
export const todoSelectors = clientAdapter.getSelectors(
  (state) => state.clients
);

export const clientSlice = createSlice({
  name: "client",
  initialState: clientAdapter.getInitialState(),
  reducers: {
    //Operations for create, read and update comes here
    createClient: () => {
      console.log("create client called");
    },
    readClient: () => {
      console.log("read client called");
    },
    updateClient: () => {},
  },
});

export const { createClient, readClient, updateClient } = clientSlice.actions;

export default clientSlice.reducer;
