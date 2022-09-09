import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { Container, Grid, Typography, Button, Box } from '@mui/material';

const Resume = () => {
  const [Resume, setResume] = useState([]);

  useEffect(() => {
    getResume();
  }, [])

  const getResume = async () => {
    const querySnapshot = await getDocs(collection(db, 'resume'));
    setResume(querySnapshot.docs.map((doc) => doc.data()));
  }

  const renderResume = (resume) => {
    return (
      <Box>
        {resume.map((cv, idx) => {
          return (
            <Button variant="outlined" sx={{ color: "white", background: "black", borderColor: "white", mb: "50px" }} onClick={() => window.open(cv.cv)}>View Resume</Button>
            )
        })
        }
      </Box >
    )
  }

  return (
    <Box>
      {renderResume(Resume)}
    </Box>
  )
}

export default Resume
