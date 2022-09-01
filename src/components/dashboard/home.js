import { auth } from '../../firebase'
import WorkForm from '../portfolio/forms/workForm.js'
import AboutForm from '../portfolio/forms/aboutForm.js'
import ProjectsForm from '../portfolio/forms/projectsForm.js'
import AboutDashboard from '../portfolio/dashboard/aboutDashboard.js'
import WorkDashboard from '../portfolio/dashboard/workDashboard'
import ProjectsDashboard from '../portfolio/dashboard/projectsDashboard'
import './dashboard.css'
import SkillsForm from '../portfolio/forms/skillsForm'
import SkillsDashboard from '../portfolio/dashboard/skillsDashboard'
import BiographyForm from '../portfolio/forms/biographyForm'
import BiographyDashboard from '../portfolio/dashboard/biographyDashboard copy'

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

      <button onClick={() => auth.signOut()}>Sign out</button>

    </div>
  )
}

export default Home