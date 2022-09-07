import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Home from './pages/home/'
import Navbar from './components/navbar';
import { Box } from '@mui/material'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
