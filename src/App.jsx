import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import ContactListCard from "./ContactListCard.json";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState(ContactListCard);
  const [search, setSearch] = useState("");

  const visibleContactList = contact.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = (contact) => {
    setContact((prevState) => {
      return [...prevState, contact];
    });
  };

  const deleteContact = (contactId) => {
    console.dir(contactId);
    setContact((prevState) => {
      return prevState.filter(({ id }) => contactId !== id);
    });
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox search={search} onSearch={setSearch} />
      <ContactList
        contactListCard={visibleContactList}
        onDelete={deleteContact}
      />
    </>
  );
}

export default App;
