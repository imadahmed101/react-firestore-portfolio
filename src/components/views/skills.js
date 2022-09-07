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
    <Container sx={{mb: "30px", textAlign: "center"}}>
        <Typography variant="h3">Skills</Typography>
        <Container sx={{display: {md: "flex"}, justifyContent:"center"}}>
        {skills.map((skill) => {
            return (
                    <Typography sx={{m: {md: "5px"}}} variant="h4">{skill.name}</Typography>
            )
        })}
        </Container>
    </Container>
  )
}

export default Skills