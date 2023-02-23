import React, { useState } from 'react';
import ContactActions from './ContactActions'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Stack from 'react-bootstrap/Stack'

function App() {
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState(null)

  function handleNewContact(contact) {
    let newContactList = contacts.concat(contact)
    setContacts(newContactList)
    localStorage.setItem("contacts", JSON.stringify(newContactList));
  }

  function handleContactSelected(email) {
    setSelectedContact(email)
    localStorage.setItem("selectedContact", email)
  }

  function handleDeleteContact(email) {
    setContacts(contacts.filter((contact) => contact.email !== email))
    setSelectedContact(null)
  }

  return (
    <Stack gap={3} className="col-md-10 mx-auto">
      <ContactActions selectedContact={selectedContact} onDeleteContact={handleDeleteContact} />
      <ContactForm onNewContact={handleNewContact} />
      <ContactList contacts={contacts} onContactSelected={handleContactSelected} />
    </Stack>
  )
}

export default App
