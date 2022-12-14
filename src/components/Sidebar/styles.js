import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

export const ImageLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0',
});

export const Image = styled('img')({
  width: '70%',
});

export const StyledLinks = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'light' ? 'black' : 'white',
  textDecoration: 'none',
}));

export const GenreImages = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'dark',
}));
