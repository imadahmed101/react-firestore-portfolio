import { useState, useEffect } from 'react';
import {db} from '../../../firebase'
import {collection, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'

const WorkDashboard = () => {    
    const [work, setWork] = useState([]);
    const [newCompany, setNewCompany] = useState('');
    const [newRole, setNewRole] = useState('');
    const [newAge, setNewAge] = useState(0);
    const workRef = collection(db, "work");


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

    useEffect(() => {
        const getWork = async () => {
            const data = await getDocs(workRef);
            console.log(data, '1');
            console.log(data.docs, '22');
            setWork(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getWork();
    }, []);

  return (
    <div>
        <h3>Work Section</h3>
        {work.map((wrk) => {
            return (
                <div>
                    {" "}
                    <p>Name: {wrk.name}</p>
                    <p>Role: {wrk.role}</p>
                    <p>Years Worked: {wrk.age}</p>
                    <br/>
                    <input placeholder="Update Company..." onChange={(event) => {setNewCompany(event.target.value)}}/>
                    <button onClick={() => {updateName(wrk.id);}}>Update Company</button>
                    <br/>
                    <input placeholder="Update Role..." onChange={(event) => {setNewRole(event.target.value)}}/>
                    <button onClick={() => {updateRole(wrk.id);}}>Update Role</button>
                    <br/>
                    <input type="number" placeholder="Update Years Worked..." onChange={(event) => {setNewAge(event.target.value)}}/>
                    <button onClick={() => {updateAge(wrk.id);}}>Update Age</button>
                    <br/>
                    <button onClick={() => {deleteWork(wrk.id)}}>Delete Work</button>
                </div>
            )
        })}
    </div>
  )
}

export default WorkDashboard