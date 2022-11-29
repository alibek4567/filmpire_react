import React from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Movies, Profile, Navbar, Actors, MovieInformation } from './import.js';
import { DivContent, DivRoot, Toolbar } from './styles';

const App = () => (
  <DivRoot>
    <CssBaseline />
    <Navbar />
    <DivContent>
      <Toolbar />
      <Routes>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/" element={<Movies />} />
        <Route path="/approved" element={<Movies />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
      </Routes>
    </DivContent>
  </DivRoot>
);

export default App;
