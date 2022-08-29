import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

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
        <div>
          {portfolio.map((port, idx) => {
            return(
              <div>
                <h2>{port.name}</h2>
                <img src={port.image} height="100px" width="100px"/>
                <p>{port.description}</p>
                <button onClick={() => window.open(port.url)}>View</button>
              </div>
            )
          })}
        </div>
      )
    }

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {renderPortfolio(portfolio)}
      </div>
    </div>
  )
}

export default Portfolio