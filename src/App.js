import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import { Activities } from './routes/Activities';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/activities' element={<Activities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
