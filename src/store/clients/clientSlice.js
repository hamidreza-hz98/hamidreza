import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const clientAdaptor = createEntityAdapter({
  selectId: (client) => client.id,
});

const { selectAll, selectById } = clientAdaptor.getSelectors(
  (state) => state.clients
);

export const allclients = selectAll;

export const selectclientById = (id) => (state) => selectById(state, id);

const initialState = clientAdaptor.getInitialState();

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    createClient(state, { payload }) {
      clientAdaptor.addOne(state, { payload });
    },
  },
});

export const { createClient } = clientsSlice.actions;
export default clientsSlice.reducer;
