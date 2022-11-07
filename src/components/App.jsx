import React from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Movies, Profile, Navbar, Actors } from './import.js';
import { DivContent, DivRoot, Toolbar } from './styles';

const App = () => (
  <DivRoot>
    <CssBaseline />
    <Navbar />
    <DivContent>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/actors" element={<Actors />} />
      </Routes>
    </DivContent>
  </DivRoot>
);

export default App;
