import { useState, useEffect } from 'react';
import {db} from '../../firebase'
import {collection, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import {Button, Container, Box, Typography} from "@mui/material"

const ContactDashboard = () => {    
    const [contacts, setContacts] = useState([]);
    const [newCompany, setNewCompany] = useState('');
    const [newRole, setNewRole] = useState('');
    const [newAge, setNewAge] = useState(0);
    const contactRef = collection(db, "contact");

/*
    const updateName = async (id) => {
        const userDoc = doc(db, "work", id);
        const newFields = {name: newCompany};
        await updateDoc(userDoc, newFields);
        window.location.reload(false);

    }

    const updateRole = async (id) => {
        const userDoc = doc(db, "work", id);
        const newFields = {role: newRole};
        await updateDoc(userDoc, newFields);
        window.location.reload(false);

    }

    const updateAge = async (id) => {
        const userDoc = doc(db, "work", id);
        const newFields = {age: newAge};
        await updateDoc(userDoc, newFields);
        window.location.reload(false);

    }
    */

    const deleteContact = async (id) => {
        const userDoc = doc(db, "contact", id);
        await deleteDoc(userDoc);
        window.location.reload(false);

    }

    useEffect(() => {
        const getContacts = async () => {
            const data = await getDocs(contactRef);
            setContacts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getContacts();
    }, []);

  return (
    <Container sx={{border: "1px solid"}}>
        <Box sx={{m: "100px"}}>
        <Typography variant="h4">Contact Section</Typography>
        {contacts.map((contact) => {
            return (
                <div>
                    <Typography variant="h6">Button Name: {contact.name}</Typography>
                    <Typography variant="h6">Url: {contact.url}</Typography>
                    <Button onClick={() => {deleteContact(contact.id)}}>Delete Contact</Button>
                </div>
            )
        })}
        
        </Box>
        </Container>
  )
}

export default ContactDashboard
            /*
            <input placeholder="Update Company..." onChange={(event) => {setNewCompany(event.target.value)}}/>
            <button onClick={() => {updateName(wrk.id);}}>Update Company</button>
            <br/>
            <input placeholder="Update Role..." onChange={(event) => {setNewRole(event.target.value)}}/>
            <button onClick={() => {updateRole(wrk.id);}}>Update Role</button>
            <br/>
            <input type="number" placeholder="Update Age..." onChange={(event) => {setNewAge(event.target.value)}}/>
            <button onClick={() => {updateAge(wrk.id);}}>Update Age</button>
            */