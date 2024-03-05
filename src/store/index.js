import { configureStore } from "@reduxjs/toolkit";

import {
  currentMovementsSlice,
  currentMovementsMiddleware,
} from "./currentMovementsSlice";
import { generalSlice, generalMiddleware } from "./generalSlice";

const store = configureStore({
  reducer: {
    currentMovements: currentMovementsSlice.reducer,
    general: generalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(currentMovementsMiddleware)
      .concat(generalMiddleware);
  },
});

export default store;
