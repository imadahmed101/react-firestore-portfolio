import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import {Button, Container, Box, Typography} from "@mui/material"


const SkillsDashboard = () => {
    const [skills, setSkills] = useState([]);
    const [newCompany, setNewCompany] = useState('');
    const [newRole, setNewRole] = useState('');
    const [newAge, setNewAge] = useState(0);
    const skillsRef = collection(db, "skills");

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

    const deleteSkill = async (id) => {
        const userDoc = doc(db, "skills", id);
        await deleteDoc(userDoc);
        window.location.reload(false);

    }

    useEffect(() => {
        const getSkills = async () => {
            const data = await getDocs(skillsRef);
            setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getSkills();
    }, []);

    return (
        <Container sx={{border: "1px solid"}}>
        <Box sx={{m: "100px"}}>
            <Typography variant="h4">Skills Section</Typography>
            {skills.map((skill) => {
                return (
                    <div>
                        <Typography variant="p"> - {skill.name}</Typography>
                        <Button onClick={() => { deleteSkill(skill.id) }}>Delete Skill</Button>
                    </div>
                )
            })}
        </Box></Container>
    )
}

export default SkillsDashboard
            /*
<input placeholder="Update Company..." onChange={(event) => {setNewCompany(event.target.value)}}/>
<button onClick={() => {updateName(wrk.id);}}>Update Company</button>
<br/>
<input placeholder="Update Role..." onChange={(event) => {setNewRole(event.target.value)}}/>
<button onClick={() => {updateRole(wrk.id);}}>Update Role</button>
<br/>
<input type="number" placeholder="Update Age..." onChange={(event) => {setNewAge(event.target.value)}}/>
<button onClick={() => {updateAge(wrk.id);}}>Update Age</button>
<br/>
*/