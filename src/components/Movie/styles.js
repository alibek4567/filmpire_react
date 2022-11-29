import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

export const StyledMovie = styled(Grid)(() => ({
  padding: '10px',
}));

export const StyledLinks = styled(Link)(({ theme }) => ({
  alignItems: 'center',
  fontWeight: 'bolder',
  textDecoration: 'none',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const StyledImages = styled('img')(() => ({
  borderRadius: '20px',
  height: '250px',
  marginBottom: '10px',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'light' ? 'black' : 'white',
  textOverflow: 'ellipsis',
  width: '200px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: 0,
  textAlign: 'center',
}));
