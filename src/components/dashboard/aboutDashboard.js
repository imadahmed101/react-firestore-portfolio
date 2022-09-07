import { useState, useEffect } from 'react';
import {db} from '../../firebase'
import {collection, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import {Button, Container, Box, Typography} from "@mui/material";

const AboutDashboard = () => {    
    const [about, setAbout] = useState([]);
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const aboutRef = collection(db, "about");

/*
    const handleEdit = (id) => {
        console.log(id);
        return(
            <div>
            <input placeholder="Update Name..." onChange={(event) => {setNewName(event.target.value)}}/>
            <button onClick={() => {updateName(id);}}>Update name</button>
            </div>
        )
    }
*/
    const updateName = async (id) => {
        const userDoc = doc(db, "about", id);
        const newFields = {name: newName};
        await updateDoc(userDoc, newFields);
        window.location.reload(false);
    }

    const updateDescription = async (id) => {
        const userDoc = doc(db, "about", id);
        const newFields = {description: newDescription};
        await updateDoc(userDoc, newFields);
        window.location.reload(false);
    }

    const deleteAbout = async (id) => {
        const userDoc = doc(db, "about", id);
        await deleteDoc(userDoc);
        window.location.reload(false);

    }

    useEffect(() => {
        const getAbout = async () => {
            const data = await getDocs(aboutRef);
            console.log(data, '1');
            console.log(data.docs, '22');
            setAbout(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getAbout();
    }, []);

  return (
    <Container sx={{border: "1px solid"}}>
        <Box sx={{m: "100px"}}>

        <Typography variant="h4">About Section</Typography>
        {about.map((abot) => {
            return (
                <div>
                    {" "}
                    <Typography variant="p">Name: {abot.name}</Typography>
                    <Typography variant="p">Description: {abot.description}</Typography>
                    <br/>
                    <input placeholder="Update Name..." onChange={(event) => {setNewName(event.target.value)}}/>
                    <Button onClick={() => {updateName(abot.id);}}>Update name</Button>
                    <br/>
                    <textarea placeholder="Update Description..." onChange={(event) => {setNewDescription(event.target.value)}}/>
                    <Button onClick={() => {updateDescription(abot.id);}}>Update Description</Button>
                    <br/>
                    <Button onClick={() => {deleteAbout(abot.id)}}>Delete About</Button>
                     
                </div>
            )
        })}
        </Box>
    </Container>
  )
}

export default AboutDashboard
//future addition to make edit a modal screen
//<button onClick={() => handleEdit(abot.id)}>Edit</button>