import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { Button, Container, Box, Typography } from "@mui/material"


const SkillsDashboard = () => {
    const [skills, setSkills] = useState([]);
    const skillsRef = collection(db, "skills");

    const deleteSkill = async (id) => {
        const userDoc = doc(db, "skills", id);
        await deleteDoc(userDoc);
        alert('Deleted Skill')
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
        <Container sx={{ border: "1px solid" }}>
            <Box sx={{ m: "100px" }}>
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