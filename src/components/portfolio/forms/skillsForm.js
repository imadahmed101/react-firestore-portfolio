import { useState } from 'react';
import {db} from '../../../firebase'
import {collection, addDoc} from 'firebase/firestore'

const SkillsForm = () => {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const skillsRef = collection(db, "skills");

    const createSkills = async () => {
        await addDoc(skillsRef, {name: newSkill});
        window.location.reload(false);
    }

  return (
    <div>
      <h3>Skills Form</h3>
        <input placeholder="Skill Name" onChange={(event) => {setNewSkill(event.target.value)}}/>
        <br/>
        <button onClick={createSkills}>Add Skill</button>

    </div>
  )
}

export default SkillsForm