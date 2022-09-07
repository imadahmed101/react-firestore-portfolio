import { auth } from '../../firebase'
import { AboutForm, BiographyForm, ContactForm, ProjectsForm, SkillsForm, WorkForm } from '../../components/forms/'
import { AboutDashboard, BiographyDashboard, ContactDashboard, ProjectsDashboard, SkillsDashboard, WorkDashboard } from '../../components/dashboard/'
//import './dashboard.css'
import {Container, Typography, Button} from '@mui/material'


const Home = () => {

  return (
    <Container>
      <Typography variant="h1">
        Dashboard Homepage
      </Typography>
      
      <hr />
      <Typography variant="h3">About</Typography>
      <hr />
      <AboutForm />
      <br/>
      <AboutDashboard/>
      <br/>
      <br/>
      <br/>

      <hr />
      <Typography variant="h3">Biography</Typography>
      <hr />
      <BiographyForm />
      <br/>
      <BiographyDashboard/>
      <br/>
      <br/>
      <br/>

      <hr />
      <Typography variant="h3">Dkills</Typography>
      <hr />
      <SkillsForm />
      <br/>
      <SkillsDashboard/>
      <br/>
      <br/>
      <br/>
      
      <hr />
      <Typography variant="h3">Projects</Typography>
      <hr />
      <ProjectsForm />
      <br/>
      <ProjectsDashboard/>
      <br/>
      <br/>
      <br/>

      <hr />
      <Typography variant="h3">Experience</Typography>>
      <hr />
      <WorkForm />
      <br/>
      <WorkDashboard />
      <br/>
      <br/>
      <br/>

      <hr />
      <Typography variant="h3">Contact</Typography>
      <hr />
      <ContactForm />
      <br/>
      <ContactDashboard />
      <br/>
      <br/>
      <br/>

      <Button onClick={() => auth.signOut()}>Sign out</Button>
      <Button href="/">HomePage</Button>

    </Container>
  )
}

export default Home