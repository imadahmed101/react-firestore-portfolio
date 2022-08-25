import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/'
import Home from './components/home/'

function App() {
  return (
    <div>
      <BrowserRouter>
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
