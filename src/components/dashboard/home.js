import { auth } from '../../firebase'
import AboutNameOnly from '../portfolio/aboutNameOnly.js'
import ProjectsNameOnly from '../portfolio/projectsNameOnly.js'
import Work from '../portfolio/work.js'
import WorkForm from '../portfolio/forms/workForm.js'
import AboutForm from '../portfolio/forms/aboutForm.js'
import ProjectsForm from '../portfolio/forms/projectsForm.js'
import AboutDashboard from '../portfolio/dashboard/aboutDashboard.js'
import WorkDashboard from '../portfolio/dashboard/workDashboard'
import ProjectsDashboard from '../portfolio/dashboard/projectsDashboard'

const Home = () => {

  return (
    <div>
      <h1>
        Dashboard Homepage
      </h1>
      
      <hr />
      <h2>About</h2>
      <hr />
      <AboutForm />
      <hr />
      <AboutDashboard/>
      
      <hr />
      <h2>Work</h2>
      <hr />
      <WorkForm />
      <hr />
      <WorkDashboard />
      
      <hr />
      <h2>Projects</h2>
      <hr />
      <ProjectsForm />
      <hr />
      <ProjectsDashboard/>
      <hr />
      <hr />
      <button onClick={() => auth.signOut()}>Sign out</button>

    </div>
  )
}

export default Home