import './App.css';
import { Projects } from './components/pages/Projects.js';
import { Journal } from './components/pages/Journal.js';
import { About } from './components/pages/About.js';
import { Nav } from './components/nav/Nav.js';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />

      {/* Main Container */}
      <div className='w-100% min-h-76vh bg-lightBlue
        ltp:w-61% ltp:ml-39% ltp:mt-0 ltp:min-h-100vh
        wide:w-100% wide:ml-0'>
        <Routes>
          <Route
            path='portfolioJonathanMaxim/'
            element={<Projects />}
          />
          <Route
            path='/projects'
            element={<Projects />}
          />
          <Route
            path='/journal'
            element={<Journal />}
          />
          <Route
            path='/about'
            element={<About />}
          />
        </Routes>
      </div>

      
    </>
  );
}

export default App;
