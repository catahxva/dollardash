import { configureStore } from "@reduxjs/toolkit";

import {
  currentMovementsSlice,
  currentMovementsMiddleware,
} from "./currentMovementsSlice";
import { generalSlice, generalMiddleware } from "./generalSlice";
import { uiSlice } from "./uiSlice";

const store = configureStore({
  reducer: {
    currentMovements: currentMovementsSlice.reducer,
    general: generalSlice.reducer,
    ui: uiSlice.ui,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(currentMovementsMiddleware)
      .concat(generalMiddleware);
  },
});

export default store;
