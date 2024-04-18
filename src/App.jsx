import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const onChangeFilter = (e) => {
    const action = { type: "filtersSlice/setFilter", payload: e.target.value };
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (values) => {
    const finalContact = { ...values, id: nanoid() };
    const action = { type: "contactsSlice/addContact", payload: finalContact };
    dispatch(action);
  };

  const onDeleteContact = (contactId) => {
    const action = { type: "contactsSlice/deleteContact", payload: contactId };
    dispatch(action);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
