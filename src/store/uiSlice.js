import { createSlice } from "@reduxjs/toolkit";

const initialUi = {
  notification: null,
  modal: null,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUi,
  reducers: {},
});

export const uiActions = uiSlice.actions;
