import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../firebase'
//import './projects.css'

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        getPortfolio();
    }, [])

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc)=> doc.data()));
    }

    const renderPortfolio = (portfolio) => {
      return (
        <div className='projects-list'>
          {portfolio.map((port, idx) => {
            return(
              <div>
                <h2>{port.name}</h2>
                <img className="projects-image" src={port.image}/>
                <p className="project-description">{port.description}</p>
                <button onClick={() => window.open(port.url)}>View</button>
              </div>
            )
          })}
        </div>
      )
    }

  return (
    <div className='projects'>
      <h1 className='projects-header'>Projects</h1>
      <div>
        {renderPortfolio(portfolio)}
      </div>
    </div>
  )
}

export default Portfolio