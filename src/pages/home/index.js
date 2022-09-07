import { Container, Box, Grid } from '@mui/material'
import { About, Biography, Contact, Projects, Skills, Work } from '../../components/views/'

const Home = () => {
  return (
    <Box /*sx={{ margin: "0px 30px" }}*/>
      <About/>
      <Biography />
      <Projects/>
      <Contact/>
    </Box>
  )
}

export default Home

/*    <Skills/>
      <Grid container spacing={2}  sx={{textAlign: "center"}}>
      <Grid item xs={12} md={6}>
      <Work />
      </Grid>
      <Grid item xs={12} md={6}>
      <Contact />
      </Grid>
      </Grid>

      */