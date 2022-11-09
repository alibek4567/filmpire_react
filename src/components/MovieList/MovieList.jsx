import React from 'react';
import { StyledGrid } from './styles';

import { Movie } from '../import';

const MovieList = ({ movies }) => (
  <StyledGrid container>
    {movies.results.map((movie, i) => (
      <Movie key={i} movie={movie} index={i} />
    ))}
  </StyledGrid>
);

export default MovieList;
