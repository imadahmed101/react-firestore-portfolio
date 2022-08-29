import React, { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'

const About = () => {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        getAbout();
    }, [])

    const getAbout = async () => {
        const querySnapshot = await getDocs(collection(db, 'about'));
        setAbout(querySnapshot.docs.map((doc)=> doc.data()));
    }

    const renderAbout = (about) => {
      return (
        <div>
          {about.map((port, idx) => {
            return(
              <div>
                <h2>{port.name}</h2>
                <button onClick={deleteAbout}>Delete</button>
              </div>
            )
          })}
        </div>
      )
    }

    const deleteAbout = async () => {

      console.log('delete doc');
      await deleteDoc(doc(db, "about"));
    }

  return (
    <div>
      <div>
        {renderAbout(about)}
      </div>
    </div>
  )
}

export default About