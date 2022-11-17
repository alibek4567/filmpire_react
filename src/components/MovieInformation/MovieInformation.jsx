import React, { useState } from 'react';
import { Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { MovieList } from '../import';

import { useGetMovieQuery, useGetRecommendationsQuery } from '../../services/TMDB';
import { StyledGridSpaceAround, StyledImage, StyledGridGenres, StyledLinks, StyledGenreImage, CastImage, DivButtonContainer, StyledModal, StyledVideo } from './styles';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/genreOrCategory';

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);

  const { data: recommendations, isFetching: isRecommendationsFetching } = useGetRecommendationsQuery({ list: '/recommendations', movie_id: id });

  const isMovieFavorited = false;
  const isMovieWatchlisted = false;

  console.log(data);

  const addToFavorites = () => {

  };

  const addToWatchlist = () => {

  };

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
        <Link to="/">Something has gone wrong</Link>
      </Box>
    );
  }

  return (
    <StyledGridSpaceAround container>
      <Grid item sm={12} lg={4}>
        <StyledImage
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} {(data.release_date.split('-')[0])}
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <StyledGridSpaceAround item>
          <Box display="flex" justifyContent="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography variant="subtitle1" gutterBottom style={{ marginLeft: '10px' }}>
              {data?.vote_average.toFixed(1)} / 10
            </Typography>
          </Box>
          <Typography variant="h6" gutterBottom align="center">
            {data?.runtime}min {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : ''}
          </Typography>
        </StyledGridSpaceAround>
        <StyledGridGenres item>
          {data?.genres?.map((genre) => (
            <StyledLinks key={genre.name} to="/" onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
              <StyledGenreImage src={genreIcons[genre.name.toLowerCase()]} height={30} />
              <Typography variant="subtitle1" color="textPrimary">
                {genre?.name}
              </Typography>
            </StyledLinks>
          ))}
        </StyledGridGenres>
        <Typography variant="h5" gutterBottom style={{ marginTop: '10px' }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: '2rem' }}>
          {data?.overview}
        </Typography>
        <Typography variant="h5" gutterBottom>Top Cast</Typography>
        <Grid item container spacing={2}>
          {data && data.credits?.cast?.map((character, i) => (
            character.profile_path && (
            <Grid key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style={{ textDecoration: 'none' }}>
              <CastImage src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.name} />
              <Typography color="textPrimary">{character?.name}</Typography>
              <Typography color="textSecondary">{character.character.split('/')[0]}</Typography>
            </Grid>
            )
          )).slice(0, 6)}
        </Grid>
        <Grid item container style={{ marginTop: '2rem' }}>
          <DivButtonContainer>
            <Grid item xs={12} sm={6}>
              <ButtonGroup variant="outlined">
                <Button target="_blank" rel="noopener noreferrer" href={data?.homepage} endIcon={<Language />}>Website</Button>
                <Button target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon />}>IMDB</Button>
                <Button onClick={() => setopen(true)} href="#" endIcon={<Theaters />}>Trailer</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonGroup variant="outlined">
                <Button onClick={addToFavorites} endIcon={isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />}>
                  {isMovieFavorited ? 'Unfavorite' : 'Favorite'}
                </Button>
                <Button onClick={addToWatchlist} endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}>
                  Watchlist
                </Button>
                <Button endIcon={<ArrowBack />} sx={{ borderColor: 'primary.main' }}>
                  <Typography style={{ textDecoration: 'none' }} component={Link} to="/" variant="subtitle2" color="inherit">
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </DivButtonContainer>
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" align="center" gutterBottom>
          You might also like
        </Typography>
        {recommendations
          ? <MovieList movies={recommendations} numberOfMovies={12} />
          : <Box>Sorry nothing was found.</Box>}
      </Box>
      <StyledModal
        closeAfterTransition
        open={open}
        onClose={() => setopen(false)}
      >
        {data?.videos?.results?.length > 0 && (
          <StyledVideo
            autoPlay
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
          />
        )}
      </StyledModal>
    </StyledGridSpaceAround>
  );
};

export default MovieInformation;
