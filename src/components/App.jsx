import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import useStyles from './app-styles';
import useAlan from './Alan';

import { Movies, Actors, MovieInfo, Bars, Profile } from './general-paths-index';

function App() {
  const classes = useStyles();
  // const alanBtnContainer = useRef();

  useAlan(); // calling Alan button

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Bars />
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <Routes>  {/* V6 => smart => choose best fitted route */}
          <Route path="/" element={<Movies />} />   {/* V5 => exact path=["/","/approved"] ||  path="/" */}
          <Route path="/approved" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      {/* <div ref={alanBtnContainer} /> */}
    </div>
  );
}

export default App;
