import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Container, Typography, Box, Button } from '@mui/material';
//import './biography.css'
import {Skills} from './index'

const Biography = () => {
    const [biography, setBiography] = useState([]);
    const biographyRef = collection(db, "biography");

    useEffect(() => {
        const getBiography = async () => {
            const data = await getDocs(biographyRef);
            setBiography(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getBiography();
    }, []);

    return (
        <Box sx={{backgroundColor: "black", height: "auto", minHeight: "650px", display: "flex", alignItems: "center", textAlign:"center", color: "white"}}>
            <Container>
            <Typography variant="h3">About Me</Typography>
            {biography.map((bio) => {
                return (
                    <Typography variant="h6" mb="50px">{bio.biography}</Typography>
                    )
                })}
            <Button variant="outlined" sx={{color: "white", background: "black", borderColor: "white", mb: "50px" }}>View Resume</Button>
            <Skills/>
            </Container>

        </Box>
    )
}

export default Biography
