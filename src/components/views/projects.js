import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { Container, Grid, Typography, Button, Box } from '@mui/material';
//import './projects.css'

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    getPortfolio();
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'));
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
  }

  const renderPortfolio = (portfolio) => {
    return (
      <Box  id="projects">
          {portfolio.map((port, idx) => {
            return (
                <Box sx={{ background: "radial-gradient(at top left, rgb(81, 89, 102) 0%, rgb(49, 50, 59) 100%)", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", textAlign: "center", color: "white" }}>
              <Container>
                <Typography variant="h3">{port.name}</Typography>
                <Container>
                  <img src={port.image} height="350px" width="350px" />
                </Container>
                <Typography variant="h6">{port.description}</Typography>
                <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>View More</Button>

              </Container>
          </Box >
            )
          })
          }
        </Box >
    )
  }

  return (
    <Box>
      {renderPortfolio(portfolio)}
    </Box>
  )
}

export default Portfolio
