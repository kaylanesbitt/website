import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import { Activities } from './routes/Activities';
import { Experience } from './routes/Experience';
import { Projects } from './routes/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
