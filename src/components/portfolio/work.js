import { useState, useEffect } from 'react';
import {db} from '../../firebase'
import {collection, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore'

const Work = () => {    
    const [work, setWork] = useState([]);
    const workRef = collection(db, "work");


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
        {work.map((wrk) => {
            return (
                <div>
                    {" "}
                    <p>Name: {wrk.name}</p>
                    <p>Age: {wrk.age}</p>
                    <button onClick={() => {updateWork(wrk.id, wrk.age);}}>Increase Age</button>
                    <button onClick={() => {deleteWork(wrk.id)}}>Delete Work</button>
                </div>
            )
        })}
    </div>
  )
}

export default Work