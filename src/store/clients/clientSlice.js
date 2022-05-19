import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const clientAdaptor = createEntityAdapter({});

const { selectAll, selectById } = clientAdaptor.getSelectors(
  (state) => state.clients
);

export const allClients = selectAll;

export const selectClientById = (id) => (state) => selectById(state, id);

const initialState = clientAdaptor.getInitialState();
export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    createClient(state, { payload }) {
      clientAdaptor.addOne(state, {
        ...payload,
        status: "New",
        email: "bill.sanders@example.com",
        id: uuidv4(),
      });
    },
  },
  updateClient(state, { payload }) {
    clientAdaptor.updateOne(state, payload);
  },
});

export const { createClient } = clientsSlice.actions;
export default clientsSlice.reducer;
