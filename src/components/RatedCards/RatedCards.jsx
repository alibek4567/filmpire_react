import React from 'react';
import { Typography, Box } from '@mui/material';
import { Movie } from '../import';
import { StyledBox } from './styles';

const RatedCards = ({ title, data }) => {
  console.log('Rated');
  return (
    <Box>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <StyledBox display="flex" flexWrap="wrap">
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} index={i} />
        ))}
      </StyledBox>
    </Box>
  );
};

export default RatedCards;
