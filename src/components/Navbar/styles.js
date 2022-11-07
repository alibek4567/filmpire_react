import { IconButton, Toolbar, Drawer, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 240;

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

export const StyledDrawerPaper = styled(Paper)({
  width: drawerWidth,
});

export const StyledLinkButton = styled(Button)({
  '&:hover': {
    color: 'white !important',
    textDecoration: 'none',
  },
});
