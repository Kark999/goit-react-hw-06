// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
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

// export const contactsSlice = {
//     name: "contacts",
//     initialState: INITIAL_STATE.contacts,
//     reducers: {
//         addContact(state, action) {
//             state.items.push(action.payload);
//         },
//         deleteContact(state, action) {
//             const index = state.items.findIndex(
//                 (contact) => contact.id === action.payload
//             );
//             state.items.splice(index, 1);
//         },
//     },
// }
