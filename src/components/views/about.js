import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { Container, Grid, Typography, Button, Box } from '@mui/material';
//import './about.css'
import {Contact} from '../views/index'

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
            <Container>
              <Typography variant="h1">{port.name}</Typography>
              <Typography variant="h6" mb="50px">{port.description}</Typography>
              <Button variant="outlined" href="/#projects" sx={{ backgroundColor: "black", borderColor: "white", color: "white" }}>View Projects</Button>
            </Container>
          )
        })}
        
      </Container>
    )
  }

  return (
    <Box sx={{ backgroundImage: `url(/images/3.jpg)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh", minHeight: "450px", backgroundSize: "cover", display: "flex", alignItems: "center", textAlign: "center", color: "white" }}>
      {renderAbout(about)}
    </Box>
  )
}

export default About