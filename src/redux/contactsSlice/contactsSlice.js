// import { INITIAL_STATE } from "../store";
import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState: INITIAL_STATE,

  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
      //   state.items = [...state.items, action.payload];
    },
    deleteContact(state, action) {
      state.contacts.items = state.items.filter(
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
