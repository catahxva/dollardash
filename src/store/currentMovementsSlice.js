import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const expensesLocalStorage = JSON.parse(localStorage.getItem(`expenses`));
const incomesLocalStorage = JSON.parse(localStorage.getItem(`incomes`));

const initialCurrentMovements = {
  expenses: expensesLocalStorage || [],
  incomes: incomesLocalStorage || [],
};

export const currentMovementsSlice = createSlice({
  name: "currentMovements",
  initialState: initialCurrentMovements,
  reducers: {
    addMovement(state, action) {
      let movementsArray;

      if (action.payload.type === "expenses") movementsArray = state.expenses;
      if (action.payload.type === "incomes") movementsArray = state.incomes;

      const currentDate = new Date();

      const formattedDate = currentDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const newMovement = {
        category: action.payload.category,
        title: action.payload.title,
        value: action.payload.value,
        date: formattedDate,
        serializedDate: currentDate.toISOString(),
        id: v4(),
        type: action.payload.type === "expenses" ? "expense" : "income",
      };

      movementsArray.unshift(newMovement);
    },
    deleteMovement(state, action) {
      let searchArr;

      if (action.payload.type === "expense") searchArr = state.expenses;

      if (action.payload.type === "income") searchArr = state.incomes;

      const movementIndex = searchArr.findIndex(
        (movement) => movement.id === action.payload.id
      );

      searchArr.splice(movementIndex, 1);
    },
    editMovement(state, action) {
      let searchArr;

      if (action.payload.type === "expense") searchArr = state.expenses;

      if (action.payload.type === "income") searchArr = state.incomes;

      const movementIndex = searchArr.findIndex(
        (movement) => movement.id === action.payload.id
      );

      const searchedMovement = searchArr[movementIndex];

      searchedMovement.title = action.payload.title;
      searchedMovement.value = action.payload.value;
    },
    clearMovements(state) {
      state.expenses = [];
      state.incomes = [];
    },
  },
});

export const currentMovementsActions = currentMovementsSlice.actions;

export const currentMovementsMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    currentMovementsActions.addMovement.match(action) ||
    currentMovementsActions.deleteMovement.match(action) ||
    currentMovementsActions.editMovement.match(action)
  ) {
    localStorage.setItem(
      `expenses`,
      JSON.stringify(store.getState().currentMovements.expenses)
    );
    localStorage.setItem(
      `incomes`,
      JSON.stringify(store.getState().currentMovements.incomes)
    );
  }

  if (currentMovementsActions.clearMovements.match(action)) {
    localStorage.removeItem(`expenses`);
    localStorage.removeItem(`incomes`);
  }

  return result;
};
