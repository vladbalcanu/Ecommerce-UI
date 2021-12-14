import * as React from 'react';
import { Link } from "react-router-dom";
import styles from './Components.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Badge } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store/auth/selectors';
import { getCurrentUser } from '../store/auth/thunks';
import { useEffect } from 'react';
export const Navbar = () => {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch =useDispatch();
  const isAuth =useSelector(selectIsAuth);
  useEffect(()=>{
    dispatch(getCurrentUser());
},[])


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logged in' : 'Logged out'}
        />
      </FormGroup> */}

      <AppBar position="static">

        <Toolbar>
          {!isAuth && (<div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{mr:10}}
            >
              <MenuIcon>
              </MenuIcon>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>Sign in</MenuItem>
              <MenuItem onClick={handleClose}>Sing up</MenuItem>
            </Menu>
          </div>)
          }
          {isAuth && ((<div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{mr:10}}
            >
              
              <AccountCircle>

              </AccountCircle>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Sing Out</MenuItem>
            </Menu>
          </div>))}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className={styles.textStyle}>Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/catalogue/searchProducts" className={styles.textStyle}>Catalogue</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className={styles.textStyle}>FAQ</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className={styles.textStyle}>User Account</Link>
          </Typography>
          <Link to="/cart" className={styles.buttonStyle}><IconButton color="inherit" size="large">
            <Badge badgeContent={5} color="error">
              <ShoppingBagIcon />
            </Badge>
          </IconButton> </Link>
          <Link to="/" className={styles.buttonStyle}><IconButton color="inherit">
            <Badge badgeContent={5} color="error">
              <CircleNotificationsIcon></CircleNotificationsIcon>
            </Badge>
          </IconButton></Link>
        </Toolbar>
      </AppBar>
    </Box>

  );
}
export default Navbar;