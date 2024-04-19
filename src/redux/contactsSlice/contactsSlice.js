import { INITIAL_STATE } from "../store";
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState: INITIAL_STATE.contacts,

  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = (state = INITIAL_STATE.contacts, action) => {
//   switch (action.type) {
//     case "contactsSlice/addContact": {
//       return { ...state, items: [...state.items, action.payload] };
//     }
//     case "contactsSlice/deleteContact": {
//       return {
//         ...state,
//         items: state.items.filter((contact) => contact.id !== action.payload),
//       };
//     }
//     default:
//       return state;
//   }
// };
