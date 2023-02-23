import ContactActions from './ContactActions'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Stack from 'react-bootstrap/Stack'
import usePersistence from './usePersistence'

function App() {
  const [contacts, setContacts] = usePersistence('contacts', [])
  const [selectedContact, setSelectedContact] = usePersistence('selectedContact', null)

  function handleNewContact(contact) {
    setContacts(contacts.concat(contact))
  }

  function handleContactSelected(email) {
    setSelectedContact(email)
  }

  function handleDeleteContact() {
    setContacts(contacts.filter((contact) => contact.email !== selectedContact))
    setSelectedContact(null)
  }

  return (
    <Stack gap={3} className="col-md-10 mx-auto">
    <br/>
      <ContactActions selectedContact={selectedContact} onDeleteContact={handleDeleteContact} />
      <ContactForm onNewContact={handleNewContact} />
      <ContactList contacts={contacts} onContactSelected={handleContactSelected} />
    </Stack>
  )
}

export default App