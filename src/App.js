import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/'
import Home from './components/home/'
import Navbar from './components/navbar';
import Work from './components/portfolio/work.js'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
