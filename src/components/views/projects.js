import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { Container, Grid, Typography, Button} from '@mui/material';
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
          <Grid container spacing={2} sx={{textAlign: "center", alignItems: "center"}}>
          {portfolio.map((port, idx) => {
            return(
              <Grid item xs={12} md={6} mb="50px">
                <Typography variant="h5">{port.name}</Typography>
                <img src={port.image} height="300px" width="300px"/>
                <Typography variant="h6">{port.description}</Typography>
                <Button sx={{mt: "5px", color: "white", backgroundColor: "black"}} variant="contained" onClick={() => window.open(port.url)}>View</Button>
              </Grid>
            )
          })}
          </Grid>
      )
    }

  return (
      <Container sx={{textAlign: "center"}}>
        <Typography id="projects" variant="h4">Projects</Typography>
        {renderPortfolio(portfolio)}
      </Container>
  )
}

export default Portfolio