import Projects from '../portfolio/views/projects.js'
import About from '../portfolio/views/about.js'
import Work from '../portfolio/views/work.js'
import Skills from '../portfolio/views/skills.js'
import Biography from '../portfolio/views/biography.js'

const Home = () => {
  return (
    <div className='home'>
      <About/>
      <Biography/>
      <Skills/>
      <Projects/>
      <Work/>
    </div>
  )
}

export default Home