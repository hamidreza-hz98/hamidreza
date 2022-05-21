import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; //this library is for making random ids

//step1:create an adapter
//this adapter creates an object {ids:{ids goes here} , entities:{objects as data}}
const clientAdaptor = createEntityAdapter({});

//step2:destructure selectores from adpater we just made
const { selectAll, selectById } = clientAdaptor.getSelectors(
  (state) => state.clients
);

//step3:make custom selectors
export const allClients = selectAll;
export const selectClientById = (id) => (state) => selectById(state, id);

//step4:initialize state
const initialState = clientAdaptor.getInitialState();

//step5:create a slice...
//here we have some reducers with 2 main parts
//1=>state:the state we already have in our adapter
//2=>action:what we want to do? we destructure action.payload like {payload}
//payload:the changes are stored in payload to rewrite the state
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
    updateClient(state, { payload }) {
      clientAdaptor.updateOne(state, payload);
    },
  },
});

export const { createClient, updateClient } = clientsSlice.actions;
export default clientsSlice.reducer;
