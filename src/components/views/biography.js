import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Container, Typography } from '@mui/material';
//import './biography.css'

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
        <Container sx={{textAlign: "center"}}>
            <Typography variant="h4">About Me</Typography>
            {biography.map((bio) => {
                return (
                    <Typography variant="h6" mb="30px">{bio.biography}</Typography>
                )
            })}
        </Container>
    )
}

export default Biography