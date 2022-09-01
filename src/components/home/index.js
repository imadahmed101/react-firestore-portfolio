import Projects from '../portfolio/views/projects.js'
import About from '../portfolio/views/about.js'
import Work from '../portfolio/views/work.js'

const Home = () => {
  return (
    <div className='home'>
      <About/>
      <Projects/>
      <Work/>
    </div>
  )
}

export default Home