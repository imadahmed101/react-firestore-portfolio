import { useState } from 'react';
import {db} from '../../firebase'
import {collection, addDoc} from 'firebase/firestore'

const AboutForm = () => {
    const [newAbout, setNewAbout] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const aboutRef = collection(db, "about");

    const createAbout = async () => {
        await addDoc(aboutRef, {name: newAbout, description: newDescription});
        alert('Added About Section')
        window.location.reload(false);
    }

  return (
    <div>
      <h3>About Form</h3>
        <input placeholder="Name..." onChange={(event) => {setNewAbout(event.target.value)}}/>
        <br/>
        <textarea placeholder="Description..." onChange={(event) => {setNewDescription(event.target.value)}}/>
        <br/>
        <button onClick={createAbout}>Add About</button>

    </div>
  )
}

export default AboutForm