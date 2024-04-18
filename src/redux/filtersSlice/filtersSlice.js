import { INITIAL_STATE } from "../store";

export const filtersReducer = (state = INITIAL_STATE.filters, action) => {
  switch (action.type) {
    case "filtersSlice/setFilter": {
      return { ...state, name: action.payload };
    }
    default:
      return state;
  }
};
