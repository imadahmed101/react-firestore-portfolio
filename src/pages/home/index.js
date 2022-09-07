import { Container, Box, Grid } from '@mui/material'
import { About, Biography, Contact, Projects, Skills, Work } from '../../components/views/'

const Home = () => {
  return (
    <Box>
      <About />
      <Biography />
      <Projects />
      <Contact />
    </Box>
  )
}

export default Home