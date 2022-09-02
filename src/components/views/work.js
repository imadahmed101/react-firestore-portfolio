import { useState, useEffect } from 'react';
import {db} from '../../../firebase'
import {collection, getDocs} from 'firebase/firestore'
//import './work.css'

const Work = () => {    
    const [work, setWork] = useState([]);
    const workRef = collection(db, "work");

    useEffect(() => {
        const getWork = async () => {
            const data = await getDocs(workRef);
            setWork(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getWork();
    }, []);

  return (
    <div className='work'>
        <h1>Work Experience</h1>
        {work.map((wrk) => {
            return (
                <div>
                    <h2>{wrk.name}</h2>
                    <h4>{wrk.role}</h4>
                    <h4>Years of Employment: {wrk.age}</h4>
                    <br/>
                </div>
            )
        })}
    </div>
  )
}

export default Work