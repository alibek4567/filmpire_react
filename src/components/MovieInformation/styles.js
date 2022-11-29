import { Grid, Modal } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledGridSpaceAround = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '10px 0 !important',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
  width: '85%',
  height: '600px',
  [theme.breakpoints.down('md')]: {
    margin: '0 auto',
    width: '50%',
    height: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 auto',
    width: '100%',
    height: '350px',
    marginBottom: '30px',
  },
}));

export const StyledGridGenres = styled(Grid)(() => ({
  margin: '10px 0 !important',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}));

export const StyledLinks = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'content',
  alignItems: 'center',
  textDecoration: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem 1rem',
  },
}));

export const StyledGenreImage = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' && 'invert(1)',
  marginRight: '10px',
}));

export const CastImage = styled('img')(() => ({
  width: '100%',
  maxWidth: '7em',
  height: '8em',
  objectFit: 'cover',
  borderRadius: '10px',
}));

export const DivButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const StyledModal = styled(Modal)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledVideo = styled('iframe')(({ theme }) => ({
  width: '50%',
  height: '50%',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '90%',
  },
}));
