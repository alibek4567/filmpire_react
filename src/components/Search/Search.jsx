import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StyledInput, StyledSearchContainer } from './styles';
import { searchMovie } from '../../features/genreOrCategory';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== '/' && location.pathname !== '/approved') return null;

  return (
    <StyledSearchContainer>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          classes: StyledInput,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </StyledSearchContainer>
  );
};

export default Search;
