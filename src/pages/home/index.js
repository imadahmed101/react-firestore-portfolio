import Projects from '../../components/portfolio/views/projects.js'
import About from '../../components/portfolio/views/about.js'
import Work from '../../components/portfolio/views/work.js'
import Skills from '../../components/portfolio/views/skills.js'
import Biography from '../../components/portfolio/views/biography.js'
import Contact from '../../components/portfolio/views/contact.js'

const Home = () => {
  return (
    <div className='home'>
      <About/>
      <Biography/>
      <Skills/>
      <Projects/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default Home