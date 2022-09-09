import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { Button, Container, Box, Typography } from "@mui/material"

const ContactDashboard = () => {
    const [contacts, setContacts] = useState([]);
    const contactRef = collection(db, "contact");

    const deleteContact = async (id) => {
        const userDoc = doc(db, "contact", id);
        await deleteDoc(userDoc);
        alert('Deleted Contact')
        window.location.reload(false);

    }

    useEffect(() => {
        const getContacts = async () => {
            const data = await getDocs(contactRef);
            setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getContacts();
    }, []);

    return (
        <Container sx={{ border: "1px solid" }}>
            <Box sx={{ m: "100px" }}>
                <Typography variant="h4">Contact Section</Typography>
                {contacts.map((contact) => {
                    return (
                        <div>
                            <Typography variant="p">Button Name: {contact.name}</Typography>
                            <br />
                            <Typography variant="p" sx={{wordWrap: "break-word"}}>Url: {contact.url}</Typography>
                            <br />
                            <Button onClick={() => { deleteContact(contact.id) }}>Delete Contact</Button>
                        </div>
                    )
                })}

            </Box>
        </Container>
    )
}

export default ContactDashboard