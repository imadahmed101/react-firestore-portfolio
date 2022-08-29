import { useState, useEffect } from 'react';
import {db} from '../../firebase'
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'

const Work = () => {
    const [newWork, setNewWork] = useState('');
    const [newWorkDate, setNewWorkDate] = useState(0)
    
    const [work, setWork] = useState([]);
    const workRef = collection(db, "work");

    const createWork = async () => {
        await addDoc(workRef, {name: newWork, age: Number(newWorkDate)});
    }

    const updateWork = async (id, age) => {
        const userDoc = doc(db, "work", id);
        const newFields = {age: age + 1};
        await updateDoc(userDoc, newFields);

    }

    const deleteWork = async (id) => {
        const userDoc = doc(db, "work", id);
        await deleteDoc(userDoc);

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
        <input placeholder="Company Name..." onChange={(event) => {setNewWork(event.target.value)}}/>
        <input type="number" placeholder="Start Date..." onChange={(event) => {setNewWorkDate(event.target.value)}}/>
        <button onClick={createWork}>Add Job</button>
        {work.map((wrk) => {
            return (
                <div>
                    {" "}
                    <h1>Name: {wrk.name}</h1>
                    <h1>Age: {wrk.age}</h1>
                    <button onClick={() => {updateWork(wrk.id, wrk.age);}}>Increase Age</button>
                    <button onClick={() => {deleteWork(wrk.id)}}>Delete Work</button>
                </div>
            )
        })}
    </div>
  )
}

export default Work