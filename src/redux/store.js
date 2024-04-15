import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
});

export const store = createStore(rootReducer);
