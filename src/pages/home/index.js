import { About, Biography, Contact, Projects, Skills, Work} from '../../components/views/'

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