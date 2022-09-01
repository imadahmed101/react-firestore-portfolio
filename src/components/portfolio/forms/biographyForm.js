import { useState } from 'react';
import {db} from '../../../firebase'
import {collection, addDoc} from 'firebase/firestore'

const BiographyForm = () => {
    const [newBiography, setNewBiography] = useState('');
    const biographyRef = collection(db, "biography");

    const createBiography = async () => {
        await addDoc(biographyRef, {biography: newBiography});
    }

  return (
    <div>
      <h3>Biography Form</h3>
        <textarea placeholder="Biography..." onChange={(event) => {setNewBiography(event.target.value)}}/>
        <br/>
        <button onClick={createBiography}>Add Biography</button>

    </div>
  )
}

export default BiographyForm