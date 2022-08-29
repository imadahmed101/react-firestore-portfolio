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
              </div>
            )
          })}
        </div>
      )
    }

  return (
    <div>
      <div>
        {renderPortfolio(portfolio)}
      </div>
    </div>
  )
}

export default Portfolio