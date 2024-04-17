import { INITIAL_STATE } from "../store";

export const contactsReducer = (state = INITIAL_STATE.contacts, action) => {
  switch (action.type) {
    case "addContact": {
      return { ...state, items: [...state.items, action.payload] };
    }
    case "deleteContact": {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
