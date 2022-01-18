import React from 'react';
import './App.css';
import Fololdal from './components/Fololdal';
import Aloldal from './components/Aloldal';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Nav from './components/Nav';
import MakosTeszta from './components/MakosTeszta';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/fooldal' element={<Fololdal />} />
        <Route path='/aloldal' element={<Aloldal />} />
        <Route path='/makosteszta' element={<MakosTeszta />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;