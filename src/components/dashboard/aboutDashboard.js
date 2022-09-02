import { useState, useEffect } from 'react';
import {db} from '../../firebase'
import {collection, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'

const AboutDashboard = () => {    
    const [about, setAbout] = useState([]);
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const aboutRef = collection(db, "about");

/*
    const handleEdit = (id) => {
        console.log(id);
        return(
            <div>
            <input placeholder="Update Name..." onChange={(event) => {setNewName(event.target.value)}}/>
            <button onClick={() => {updateName(id);}}>Update name</button>
            </div>
        )
    }
*/
    const updateName = async (id) => {
        const userDoc = doc(db, "about", id);
        const newFields = {name: newName};
        await updateDoc(userDoc, newFields);
        window.location.reload(false);
    }

    const updateDescription = async (id) => {
        const userDoc = doc(db, "about", id);
        const newFields = {description: newDescription};
        await updateDoc(userDoc, newFields);
        window.location.reload(false);
    }

    const deleteAbout = async (id) => {
        const userDoc = doc(db, "about", id);
        await deleteDoc(userDoc);
        window.location.reload(false);

    }

    useEffect(() => {
        const getAbout = async () => {
            const data = await getDocs(aboutRef);
            console.log(data, '1');
            console.log(data.docs, '22');
            setAbout(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getAbout();
    }, []);

  return (
    <div>
        <h3>About Section</h3>
        {about.map((abot) => {
            return (
                <div>
                    {" "}
                    <p>Name: {abot.name}</p>
                    <p>Description: {abot.description}</p>
                    <br/>
                    <input placeholder="Update Name..." onChange={(event) => {setNewName(event.target.value)}}/>
                    <button onClick={() => {updateName(abot.id);}}>Update name</button>
                    <br/>
                    <textarea placeholder="Update Description..." onChange={(event) => {setNewDescription(event.target.value)}}/>
                    <button onClick={() => {updateDescription(abot.id);}}>Update Description</button>
                    <br/>
                    <button onClick={() => {deleteAbout(abot.id)}}>Delete About</button>
                </div>
            )
        })}
    </div>
  )
}

export default AboutDashboard
//future addition to make edit a modal screen
//<button onClick={() => handleEdit(abot.id)}>Edit</button>