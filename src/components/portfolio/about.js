import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
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
                <img src={port.image} height="100px" width="100px"/>
                <p>{port.description}</p>
              </div>
            )
          })}
        </div>
      )
    }

  return (
    <div>
      <h1>About</h1>
      <div>
        {renderAbout(about)}
      </div>
    </div>
  )
}

export default About