import React, { useState, useEffect } from 'react';

import { AppBar, IconButton, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import { setUser, userSelector } from '../../features/auth';
import { StyledToolBar, StyledIconButton, StyledDrawer, StyledDrawerPaper, StyledLinkButton } from './styles';
import { Sidebar, Search } from '../import';
import { fetchToken, createSessionId, moviesApi } from '../../utils';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setmobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const dispatch = useDispatch();

  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        }
      }
    };

    loginUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <StyledToolBar>
          {isMobile && (
            <StyledIconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setmobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
              <Menu />
            </StyledIconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 /> }
          </IconButton>
          {!isMobile && <Search /> }
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <StyledLinkButton color="inherit" href={`/profile/${user.id}`} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </StyledLinkButton>
            )}
          </div>
          {isMobile && <Search /> }
        </StyledToolBar>
      </AppBar>
      <div>
        <nav>
          {isMobile ? (
            <StyledDrawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setmobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: StyledDrawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setmobileOpen} />
            </StyledDrawer>
          ) : (
            <StyledDrawer
              variant="permanent"
              classes={{ paper: StyledDrawerPaper }}
              open
            >
              <Sidebar setMobileOpen={setmobileOpen} />
            </StyledDrawer>
          )}
        </nav>
      </div>
    </>
  );
};
export default Navbar;
