import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

export const StyledBox = styled(Box)(() => ({
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  height: '490px',
  textDecoration: 'none',
}));

export const StyledCard = styled(Card)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgb(0,0,0,0.575)',
  backgroundBlendMode: 'darken',
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  color: '#fff',
  width: '40%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
