import Projects from '../portfolio/views/projects.js'
import About from '../portfolio/views/about.js'
import Work from '../portfolio/views/work.js'
import Skills from '../portfolio/views/skills.js'
import Biography from '../portfolio/views/biography.js'
import Contact from '../portfolio/views/contact.js'

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