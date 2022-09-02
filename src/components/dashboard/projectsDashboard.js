import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'

const ProjectsDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newAge, setNewAge] = useState(0);
    const projectsRef = collection(db, "portfolio");


    const updateName = async (id) => {
        const userDoc = doc(db, "portfolio", id);
        const newFields = { name: newProject };
        await updateDoc(userDoc, newFields);
        window.location.reload(false);

    }

    const updateDescription = async (id) => {
        const userDoc = doc(db, "portfolio", id);
        const newFields = { description: newDescription };
        await updateDoc(userDoc, newFields);
        window.location.reload(false);
    }
    /*
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
    const deleteProject = async (id) => {
        const userDoc = doc(db, "portfolio", id);
        await deleteDoc(userDoc);
        window.location.reload(false);

    }

    useEffect(() => {
        const getProjects = async () => {
            const data = await getDocs(projectsRef);
            console.log(data, '1');
            console.log(data.docs, '22');
            setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getProjects();
    }, []);

    return (
        <div>
            <h3>Projects Section</h3>
            {projects.map((project) => {
                return (
                    <div>
                        {" "}
                        <p>Name: {project.name}</p>
                        <p>Description: {project.description}</p>
                        <br />
                        <input placeholder="Update Project..." onChange={(event) => { setNewProject(event.target.value) }} />
                        <button onClick={() => { updateName(project.id); }}>Update Project</button>
                        <br />
                        <textarea placeholder="Update Description..." onChange={(event) => { setNewDescription(event.target.value) }} />
                        <button onClick={() => { updateDescription(project.id); }}>Update Description</button>
                        <br />
                        <button onClick={() => { deleteProject(project.id) }}>Delete Project</button>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsDashboard
/*
<br/>
<input type="number" placeholder="Update Age..." onChange={(event) => {setNewAge(event.target.value)}}/>
<button onClick={() => {updateAge(project.id);}}>Update Age</button>
<br/>
*/