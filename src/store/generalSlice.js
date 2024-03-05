import { createSlice } from "@reduxjs/toolkit";

const initialGeneral = {
  originalBalance: null,
  currency: "USD",
  symbol: "$",
};

export const generalSlice = createSlice({
  name: "general",
  initialState: initialGeneral,
  reducers: {
    setOriginalBalance(state, action) {
      state.originalBalance = action.payload.balance;
    },
    clearBalance(state) {
      state.originalBalance = null;
    },
  },
});

export const generalActions = generalSlice.actions;
