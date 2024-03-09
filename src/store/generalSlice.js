import { createSlice } from "@reduxjs/toolkit";

const originalBalanceLocalStorage = JSON.parse(
  localStorage.getItem(`originalBalance`)
);
const currencyLocalStorage = JSON.parse(localStorage.getItem(`currency`));
const symbolLocalStorage = JSON.parse(localStorage.getItem(`symbol`));

const initialGeneral = {
  originalBalance: originalBalanceLocalStorage || null,
  currency: currencyLocalStorage || "USD",
  symbol: symbolLocalStorage || "$",
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
      state.currency = action.payload.currency;
      state.symbol = action.payload.symbol;
    },
    convertOriginalBalance(state, action) {
      state.originalBalance = Math.round(
        state.originalBalance * action.payload.conversionRate
      );
    },
  },
});

export const generalActions = generalSlice.actions;

export const generalMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    generalActions.setOriginalBalance.match(action) ||
    generalActions.convertOriginalBalance.match(action)
  ) {
    localStorage.setItem(
      `originalBalance`,
      JSON.stringify(store.getState().general.originalBalance)
    );
  }

  if (generalActions.changeCurrency.match(action)) {
    localStorage.setItem(
      `currency`,
      JSON.stringify(store.getState().general.currency)
    );
    localStorage.setItem(
      `symbol`,
      JSON.stringify(store.getState().general.symbol)
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
