import { configureStore } from "@reduxjs/toolkit";

import { currentMovementsSlice } from "./currentMovementsSlice";
import { generalSlice } from "./generalSlice";

const store = configureStore({
  reducer: {
    currentMovements: currentMovementsSlice.reducer,
    general: generalSlice.reducer,
  },
});

export default store;
