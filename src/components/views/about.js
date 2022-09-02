import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../firebase'
//import './about.css'

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
              <div className='about'>
                <div className='about-left'>
                <h2 className="about-name">Hello, My Name is {port.name}</h2>
                <p className="about-description">{port.description}</p>
                </div>
                <div className='about-right'>
                <img className="about-image" src={port.image}/>
                </div>
              </div>
            )
          })}
        </div>
      )
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