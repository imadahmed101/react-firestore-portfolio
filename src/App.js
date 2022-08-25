import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/'
import Home from './components/home/'
import Navbar from './components/navbar';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
