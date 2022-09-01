import { useState, useEffect } from 'react';
import {db} from '../../../firebase'
import {collection, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'

const BiographyDashboard = () => {    
    const [biography, setBiography] = useState([]);
    const [newCompany, setNewCompany] = useState('');
    const [newRole, setNewRole] = useState('');
    const [newAge, setNewAge] = useState(0);
    const biographyRef = collection(db, "biography");

/*
    const updateName = async (id) => {
        const userDoc = doc(db, "work", id);
        const newFields = {name: newCompany};
        await updateDoc(userDoc, newFields);
        window.location.reload(false);

    }

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

    const deleteWork = async (id) => {
        const userDoc = doc(db, "work", id);
        await deleteDoc(userDoc);
        window.location.reload(false);

    }
*/

    useEffect(() => {
        const getBiography = async () => {
            const data = await getDocs(biographyRef);
            setBiography(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getBiography();
    }, []);

  return (
    <div>
        <h3>Biography Section</h3>
        {biography.map((bio) => {
            return (
                <div>
                    <p>{bio.biography}</p>
                </div>
            )
        })}
    </div>
  )
}

export default BiographyDashboard
            /*
            <input placeholder="Update Company..." onChange={(event) => {setNewCompany(event.target.value)}}/>
            <button onClick={() => {updateName(wrk.id);}}>Update Company</button>
            <br/>
            <input placeholder="Update Role..." onChange={(event) => {setNewRole(event.target.value)}}/>
            <button onClick={() => {updateRole(wrk.id);}}>Update Role</button>
            <br/>
            <input type="number" placeholder="Update Age..." onChange={(event) => {setNewAge(event.target.value)}}/>
            <button onClick={() => {updateAge(wrk.id);}}>Update Age</button>
            <br/>
            <button onClick={() => {deleteWork(wrk.id)}}>Delete Work</button>
            */