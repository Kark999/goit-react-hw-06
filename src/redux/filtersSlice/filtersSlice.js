import { INITIAL_STATE } from "../contactsSlice/contactsSlice";
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState: INITIAL_STATE.filters,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
