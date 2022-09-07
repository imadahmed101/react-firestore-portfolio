import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { Button, Container, Box, Typography } from "@mui/material"


const ProjectsDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const projectsRef = collection(db, "portfolio");


    const updateName = async (id) => {
        const userDoc = doc(db, "portfolio", id);
        const newFields = { name: newProject };
        await updateDoc(userDoc, newFields);
        alert('Updated Name')
        window.location.reload(false);

    }

    const updateDescription = async (id) => {
        const userDoc = doc(db, "portfolio", id);
        const newFields = { description: newDescription };
        await updateDoc(userDoc, newFields);
        alert('Updated Description')
        window.location.reload(false);
    }

    const deleteProject = async (id) => {
        const userDoc = doc(db, "portfolio", id);
        await deleteDoc(userDoc);
        alert('Deleted Project ')
        window.location.reload(false);

    }

    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectsRef);
            setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getProjects();
    }, []);

    return (
        <Container sx={{ border: "1px solid" }}>
            <Box sx={{ m: "100px" }}>
                <Typography variant="h4">Projects Section</Typography>
                {projects.map((project) => {
                    return (
                        <div>
                            {" "}
                            <Typography variant="p">Name: {project.name}</Typography>
                            <br/>
                            <Typography variant="p">Description: {project.description}</Typography>
                            <br/>
                            <input placeholder="Update Project..." onChange={(event) => { setNewProject(event.target.value) }} />
                            <Button onClick={() => { updateName(project.id); }}>Update Project</Button>
                            <br/>
                            <textarea placeholder="Update Description..." onChange={(event) => { setNewDescription(event.target.value) }} />
                            <Button onClick={() => { updateDescription(project.id); }}>Update Description</Button>
                            <br/>
                            <Button onClick={() => { deleteProject(project.id) }}>Delete Project</Button>
                            <br/>
                        </div>
                    )
                })}
            </Box>
        </Container>
    )
}

export default ProjectsDashboard