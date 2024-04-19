import { INITIAL_STATE } from "../store";
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState: INITIAL_STATE.filters,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

// export const filtersReducer = (state = INITIAL_STATE.filters, action) => {
//   switch (action.type) {
//     case "filtersSlice/setFilter": {
//       return { ...state, name: action.payload };
//     }
//     default:
//       return state;
//   }
// };
