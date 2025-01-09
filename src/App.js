import './App.css';
import { Projects } from './components/pages/Projects.js';
import { Journal } from './components/pages/Journal.js';
import { About } from './components/pages/About.js';
import { Nav } from './components/nav/Nav.js';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  let mediumScreen = window.matchMedia("(max-width: 1023px)");
  // mm in the function arg is the matchMedia object, passed back into the function
  mediumScreen.addEventListener('change', function(mm) {
      if (mm.matches) {
          // it matches the media query: that is, max-width is >= 1023px
          document.getElementById('mainContainer').style.width = '100%'
          document.getElementById('mainContainer').style.marginLeft = '0'
      }
  });
  let largeScreen = window.matchMedia("(min-width: 1024px)");
  largeScreen.addEventListener('change', function(mm) {
      if (mm.matches) {
          document.getElementById('mainContainer').style.width = '86%'
          document.getElementById('mainContainer').style.marginLeft = '13%'
      }
  });

  return (
    <div id='html'>
      <Nav />

      {/* Main Container */}
      <div id='mainContainer' className='w-100% min-h-76vh bg-lightBlue
        lg:w-61% lg:ml-39% lg:min-h-100vh overflow-hidden 
        transition-all ease-in delay-300 duration-500'>
        <Routes>
          <Route
            path='portfolioJonathanMaxim/'
            element={<About />}
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

      
    </div>
  );
}

export default App;
