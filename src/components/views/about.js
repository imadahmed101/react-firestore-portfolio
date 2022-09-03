import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { Container, Grid, Typography, Button } from '@mui/material';
//import './about.css'

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    getAbout();
  }, [])

  const getAbout = async () => {
    const querySnapshot = await getDocs(collection(db, 'about'));
    setAbout(querySnapshot.docs.map((doc) => doc.data()));
  }

  const renderAbout = (about) => {
    return (
      <Container>
        {about.map((port, idx) => {
          return (
            <Grid container spacing={2} sx={{textAlign: "center", minHeight: "600px", height: "80vh", alignItems: "center"}}>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h1" mb="25px">{port.name}</Typography>
                <Typography variant="h4" component="h2" mb='50px'>{port.description}</Typography>
                <Button sx={{color: "white", backgroundColor: "black"}} variant="contained" href="/#projects">View Projects</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                <img src={port.image} style={{ height: "200px"}}/>
                </Container>
              </Grid>
            </Grid>
          )
        })}
      </Container>
    )
  }

  return (
    <div>
      {renderAbout(about)}
    </div>
  )
}

export default About