import { createSlice } from "@reduxjs/toolkit";

const initialUi = {
  notification: null,
  activeModal: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUi,
  reducers: {
    toggleModal(state, action) {
      state.activeModal = action.payload.status;
    },
    triggerNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    deleteNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;
