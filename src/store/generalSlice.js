import { createSlice } from "@reduxjs/toolkit";

const originalBalanceLocalStorage = JSON.parse(
  localStorage.getItem(`originalBalance`)
);

const initialGeneral = {
  originalBalance: originalBalanceLocalStorage || null,
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
    changeCurrency(state, action) {
      state.currency = action.currency;
      state.symbol = action.symbol;
    },
  },
});

export const generalActions = generalSlice.actions;

export const generalMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (generalActions.setOriginalBalance.match(action)) {
    localStorage.setItem(
      `originalBalance`,
      JSON.stringify(store.getState().general.originalBalance)
    );
  }

  if (generalActions.clearBalance.match(action)) {
    localStorage.removeItem(
      `originalBalance`,
      JSON.stringify(store.getState().general.originalBalance)
    );
  }

  return result;
};
