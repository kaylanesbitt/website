import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' elemtn={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
