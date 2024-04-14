import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactUserList from "./assets/UserList.json";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContact = localStorage.getItem("contacts");
    if (!stringifiedContact) return ContactUserList;
    const parsedContacts = JSON.parse(stringifiedContact);
    return parsedContacts;
  });
  const [filter, setFilter] = useState("");

  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (values) => {
    const finalContact = { ...values, id: nanoid() };
    setContacts((prevState) => [...prevState, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
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
