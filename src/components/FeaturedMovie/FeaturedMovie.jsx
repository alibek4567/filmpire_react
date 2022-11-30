import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBox, StyledCard, StyledCardMedia, StyledCardContent } from './styles';

const FeaturedMovie = ({ movie }) => {
  if (!movie) return null;

  return (
    <StyledBox component={Link} to={`/movie/${movie.id}`}>
      <StyledCard sx={{ '&': { position: 'relative', borderRadius: '20px' } }}>
        <StyledCardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
        />
        <Box padding="20px">
          <StyledCardContent sx={{ '&': { position: 'relative', backgroundColor: 'transparent' } }}>
            <Typography variant="h5" gutterBottom>{movie.title}</Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </StyledCardContent>
        </Box>
      </StyledCard>
    </StyledBox>
  );
};

export default FeaturedMovie;
