import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Home from './pages/home/'
import Navbar from './components/navbar';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
