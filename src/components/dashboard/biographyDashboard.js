import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { Button, Container, Box, Typography } from "@mui/material"


const BiographyDashboard = () => {
    const [biography, setBiography] = useState([]);
    const biographyRef = collection(db, "biography");

    const deleteBiography = async (id) => {
        const userDoc = doc(db, "biography", id);
        await deleteDoc(userDoc);
        alert('Deleted Biography')
        window.location.reload(false);

    }

    useEffect(() => {
        const getBiography = async () => {
            const data = await getDocs(biographyRef);
            setBiography(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getBiography();
    }, []);

    return (
        <Container sx={{ border: "1px solid" }}>
            <Box sx={{ m: "100px" }}>
                <Typography variant="h4">Biography Section</Typography>
                {biography.map((bio) => {
                    return (
                        <div>
                            <p>Bio: {bio.biography}</p>
                            <Button onClick={() => { deleteBiography(bio.id) }}>Delete Biography</Button>
                        </div>
                    )
                })}
            </Box>
        </Container>
    )
}

export default BiographyDashboard