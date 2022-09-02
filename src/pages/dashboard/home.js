import { auth } from '../../firebase'
import { AboutForm, BiographyForm, ContactForm, ProjectsForm, SkillsForm, WorkForm } from '../../components/forms/'
import { AboutDashboard, BiographyDashboard, ContactDashboard, ProjectsDashboard, SkillsDashboard, WorkDashboard } from '../../components/dashboard/'
//import './dashboard.css'


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