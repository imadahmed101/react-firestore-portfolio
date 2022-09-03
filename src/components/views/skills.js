import { useState, useEffect } from 'react';
import {db} from '../../firebase'
import {collection, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import { Container, Typography } from '@mui/material';
//import './skills.css'

const Skills = () => {    
    const [skills, setSkills] = useState([]);
    const skillsRef = collection(db, "skills");

    useEffect(() => {
        const getSkills = async () => {
            const data = await getDocs(skillsRef);
            setSkills(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getSkills();
    }, []);

  return (
    <Container sx={{mb: "30px"}}>
        <Typography variant="h4">Skills</Typography>
        {skills.map((skill) => {
            return (
                <div>
                    <Typography variant="h6">{skill.name}</Typography>
                </div>
            )
        })}
    </Container>
  )
}

export default Skills