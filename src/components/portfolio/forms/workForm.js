import { useState } from 'react';
import {db} from '../../../firebase'
import {collection, addDoc} from 'firebase/firestore'

const WorkForm = () => {
    const [newWork, setNewWork] = useState('');
    const [newRole, setNewRole] = useState('')
    const [newWorkDate, setNewWorkDate] = useState(0)
    const workRef = collection(db, "work");

    const createWork = async () => {
        await addDoc(workRef, {name: newWork, role: newRole, age: Number(newWorkDate)});
    }

  return (
    <div>
      <h3>Work Form</h3>
        <input placeholder="Company Name..." onChange={(event) => {setNewWork(event.target.value)}}/>
        <br/>
        <input placeholder="Role Name..." onChange={(event) => {setNewRole(event.target.value)}}/>
        <br/>
        <input type="number" placeholder="Start Date..." onChange={(event) => {setNewWorkDate(event.target.value)}}/>
        <br/>
        <button onClick={createWork}>Add Job</button>

    </div>
  )
}

export default WorkForm