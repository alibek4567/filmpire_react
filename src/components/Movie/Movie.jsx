import React from 'react';
import { Grow, Tooltip, Rating } from '@mui/material';
import { StyledMovie, StyledLinks, StyledImages, StyledTitle } from './styles';

const Movie = ({ movie, i }) => {
  console.log(movie, i);
  return (
    <StyledMovie item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <StyledLinks to={`/movie/${movie.id}`}>
          <StyledImages
            alt={movie.title}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
          />
          <StyledTitle variant="h5">{movie.title}</StyledTitle>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </StyledLinks>
      </Grow>
    </StyledMovie>
  );
};

export default Movie;
