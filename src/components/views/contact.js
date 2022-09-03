import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Button, Container, Typography } from '@mui/material';
//import './contact.css'

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const contactRef = collection(db, "contact");

    useEffect(() => {
        const getContacts = async () => {
            const data = await getDocs(contactRef);
            setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getContacts();
    }, []);

    return (
        <Container >
            <Typography variant="h4">Contact Me</Typography>
            <Container sx={{justifyContent:"center", display: {xs: "flex", md: "inline-grid"}}}>
            {contacts.map((contact) => {
                return (
                        <Button sx={{m: "5px", color: "white", backgroundColor: "black"}} variant="contained" onClick={() => window.open(contact.url)}>{contact.name}</Button>
                        )
                    })}
                    </Container>
        </Container>
    )
}

export default Contact