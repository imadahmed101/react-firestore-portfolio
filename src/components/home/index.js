import Projects from '../portfolio/projects.js'
import About from '../portfolio/about.js'
import Work from '../portfolio/work.js'

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <About/>
      <Projects/>
      <Work/>
    </div>
  )
}

export default Home