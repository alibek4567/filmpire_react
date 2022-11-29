import React, { useState } from 'react';
import { Box, CircularProgress, Grid, Typography, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetActorQuery, useGetMoviesByActorQuery } from '../../services/TMDB';

import { StyledImage } from './styles';
import { MovieList, Pagination } from '../import';

const Actors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetActorQuery(id);
  const [page, setPage] = useState(1);
  const { data: movies } = useGetMoviesByActorQuery({ id, page });

  console.log(movies);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
          Go back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <StyledImage
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" align="justify" paragraph>
            {data.biography || 'Sorry, no biography yet...'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data.imdb_id}`}>IMDB</Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">Back</Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">Movies</Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
      </Box>
    </>
  );
};
export default Actors;
