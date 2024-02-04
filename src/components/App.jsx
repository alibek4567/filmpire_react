import React, { useRef } from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Movies, Profile, Navbar, Actors, MovieInformation } from './import.js';
import { DivContent, DivRoot, Toolbar } from './styles';
import useAlan from './Alan.jsx';
import TabsProfile from './TabsProfile/TabsProfile.jsx';

const App = () => {
  const alanBtnContainer = useRef();
  useAlan();

  return (
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
          <Route path="/tabs" element={<TabsProfile/>} />
        </Routes>
      </DivContent>
      <div ref={alanBtnContainer} />
    </DivRoot>
  );
};

export default App;
