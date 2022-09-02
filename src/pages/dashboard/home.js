import { auth } from '../../firebase'
import WorkForm from '../../components/forms/workForm.js'
import AboutForm from '../../components/forms/aboutForm.js'
import ProjectsForm from '../../components/forms/projectsForm.js'
import AboutDashboard from '../../components/dashboard/aboutDashboard.js'
import WorkDashboard from '../../components/dashboard/workDashboard'
import ProjectsDashboard from '../../components/dashboard/projectsDashboard'
//import './dashboard.css'
import SkillsForm from '../../components/forms/skillsForm'
import SkillsDashboard from '../../components/dashboard/skillsDashboard'
import BiographyForm from '../../components/forms/biographyForm'
import BiographyDashboard from '../../components/dashboard/biographyDashboard copy'
import ContactForm from '../../components/forms/contactForm'
import ContactDashboard from '../../components/dashboard/contactDashboard'

const Home = () => {

  return (
    <div className='dashboard'>
      <h1>
        Dashboard Homepage
      </h1>
      
      <hr />
      <h2>About</h2>
      <hr />
      <AboutForm />
      <br/>
      <AboutDashboard/>
      <br/>
      <br/>
      <br/>

      <hr />
      <h2>Biography</h2>
      <hr />
      <BiographyForm />
      <br/>
      <BiographyDashboard/>
      <br/>
      <br/>
      <br/>

      <hr />
      <h2>Skills</h2>
      <hr />
      <SkillsForm />
      <br/>
      <SkillsDashboard/>
      <br/>
      <br/>
      <br/>
      
      <hr />
      <h2>Projects</h2>
      <hr />
      <ProjectsForm />
      <br/>
      <ProjectsDashboard/>
      <br/>
      <br/>
      <br/>

      <hr />
      <h2>Work Experience</h2>
      <hr />
      <WorkForm />
      <br/>
      <WorkDashboard />
      <br/>
      <br/>
      <br/>

      <hr />
      <h2>Contact</h2>
      <hr />
      <ContactForm />
      <br/>
      <ContactDashboard />
      <br/>
      <br/>
      <br/>

      <button onClick={() => auth.signOut()}>Sign out</button>

    </div>
  )
}

export default Home