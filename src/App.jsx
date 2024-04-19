import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { addContact, deleteContact } from "./redux/contactsSlice/contactsSlice";
import { changeFilter } from "./redux/filtersSlice/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const onAddContact = (values) => {
    const finalContact = { ...values, id: nanoid() };
    dispatch(addContact(finalContact));
  };

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
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
