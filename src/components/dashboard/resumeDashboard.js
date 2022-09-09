import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { Button, Container, Box, Typography } from "@mui/material"


const ResumeDashboard = () => {
    const [resume, setResume] = useState([]);
    const resumeRef = collection(db, "resume");

    const deleteResume = async (id) => {
        const userDoc = doc(db, "resume", id);
        await deleteDoc(userDoc);
        alert('Deleted Resume ')
        window.location.reload(false);

    }

    useEffect(() => {
        const getResume = async () => {
            const data = await getDocs(resumeRef);
            setResume(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getResume();
    }, []);

    return (
        <Container sx={{ border: "1px solid" }}>
            <Box sx={{ m: "100px" }}>
                <Typography variant="h4">Resume Section</Typography>
                {resume.map((cv) => {
                    return (
                        <div>
                            <Typography variant="p">ID: {cv.id}</Typography>
                            <br />
                            <Button onClick={() => { deleteResume(resume.id) }}>Delete Resume</Button>
                            <br />
                        </div>
                    )
                })}
            </Box>
        </Container>
    )
}

export default ResumeDashboard