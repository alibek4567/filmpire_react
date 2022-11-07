import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Image, ImageLink, StyledLinks, GenreImages } from './styles';

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Horror', value: 'horror' },
  { label: 'Action', value: 'action' },
  { label: 'Animation', value: 'animation' },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();

  return (
    <>
      <ImageLink to="/">
        <Image src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt="Filmpire logo" />
      </ImageLink>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <StyledLinks key={value} href="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <GenreImages src={redLogo} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </StyledLinks>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <StyledLinks key={value} href="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <GenreImages src={redLogo} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </StyledLinks>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
