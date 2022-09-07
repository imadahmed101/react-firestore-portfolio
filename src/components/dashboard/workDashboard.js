import { useState, useEffect } from 'react';
import {db} from '../../firebase'
import {collection, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import {Button, Container, Box, Typography} from "@mui/material"


const WorkDashboard = () => {    
    const [work, setWork] = useState([]);
    const [newCompany, setNewCompany] = useState('');
    const [newRole, setNewRole] = useState('');
    const [newAge, setNewAge] = useState(0);
    const workRef = collection(db, "work");


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

    const deleteWork = async (id) => {
        const userDoc = doc(db, "work", id);
        await deleteDoc(userDoc);
        window.location.reload(false);

    }

    useEffect(() => {
        const getWork = async () => {
            const data = await getDocs(workRef);
            console.log(data, '1');
            console.log(data.docs, '22');
            setWork(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getWork();
    }, []);

  return (
    <Container sx={{border: "1px solid"}}>
        <Box sx={{m: "100px"}}>
        <Typography variant="p">Work Section</Typography>
        {work.map((wrk) => {
            return (
                <div>
                    {" "}
                    <Typography variant="p">Name: {wrk.name}</Typography>
                    <Typography variant="p">Role: {wrk.role}</Typography>
                    <Typography variant="p">Years Worked: {wrk.age}</Typography>
                    <br/>
                    <input placeholder="Update Company..." onChange={(event) => {setNewCompany(event.target.value)}}/>
                    <Button onClick={() => {updateName(wrk.id);}}>Update Company</Button>
                    <br/>
                    <input placeholder="Update Role..." onChange={(event) => {setNewRole(event.target.value)}}/>
                    <Button onClick={() => {updateRole(wrk.id);}}>Update Role</Button>
                    <br/>
                    <input type="number" placeholder="Update Years Worked..." onChange={(event) => {setNewAge(event.target.value)}}/>
                    <Button onClick={() => {updateAge(wrk.id);}}>Update Age</Button>
                    <br/>
                    <Button onClick={() => {deleteWork(wrk.id)}}>Delete Work</Button>
                </div>
            )
        })}
        </Box>
    </Container>
  )
}

export default WorkDashboard