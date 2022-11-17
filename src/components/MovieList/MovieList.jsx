import React from 'react';
import { StyledGrid } from './styles';

import { Movie } from '../import';

const MovieList = ({ movies, numberOfMovies }) => (
  <StyledGrid container>
    {movies.results.slice(0, numberOfMovies).map((movie, i) => (
      <Movie key={i} movie={movie} index={i} />
    ))}
  </StyledGrid>
);

export default MovieList;
