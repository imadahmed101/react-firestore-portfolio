import { useState } from 'react';
import {db} from '../../firebase'
import {collection, addDoc} from 'firebase/firestore'

const ContactForm = () => {
    const [contact, setContact] = useState([]);
    const [newContact, setNewContact] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const contactRef = collection(db, "contact");

    const createContact = async () => {
        await addDoc(contactRef, {name: newContact, url: newUrl});
        alert('Added Contact Section')
        window.location.reload(false);
    }

  return (
    <div>
      <h3>Contact Form</h3>
        <input placeholder="Button Name" onChange={(event) => {setNewContact(event.target.value)}}/>
        <br/>
        <input placeholder="Button Url" onChange={(event) => {setNewUrl(event.target.value)}}/>
        <br/>
        <button onClick={createContact}>Add Contact</button>

    </div>
  )
}

export default ContactForm