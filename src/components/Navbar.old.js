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
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store/auth/selectors';
import { getCurrentUser, logout } from '../store/auth/thunks';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [])
  console.log(isAuth);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function logOut() {
    dispatch(logout());
    handleClose();
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>

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
              sx={{ mr: 10 }}
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

              <Link to="/signin" className={styles.linkStyle}><MenuItem onClick={handleClose}>Sign in</MenuItem></Link>
              <Link to="/register" className={styles.linkStyle}><MenuItem onClick={handleClose}>Sing up</MenuItem></Link>
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
              sx={{ mr: 10 }}
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
              <MenuItem onClick={logOut}>Sing Out</MenuItem>
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
          {!isAuth && (<div><IconButton color="inherit"
            size="large"
            onClick={handleClickOpen}
            type="button">
            <Badge badgeContent={5} color="error">
              <ShoppingBagIcon />
            </Badge>
          </IconButton>
            <Dialog
              open={open}
              onClose={handleCloseDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"You need to be logged in !"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  To see the cart or introduce items in it you need to be logged in
                </DialogContentText>
              </DialogContent>
              <DialogActions onClick={handleCloseDialog}>
                <Link to="/signin" className={styles.buttonStyle}><Button variant="outlined" sx={{
                  marginTop: 3,
                  marginLeft: 1,
                  boxShadow: 4,
                  fontSize: 16,
                  width: 150,
                  backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}>Sign in</Button></Link>
                <Link to="/register" className={styles.buttonStyle}><Button variant="outlined" sx={{
                  marginTop: 3,
                  marginLeft: 1,
                  marginRight: 10,
                  boxShadow: 4,
                  fontSize: 16,
                  width: 150,
                  backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}>Register</Button></Link>
              </DialogActions>
            </Dialog></div>)
          }
          {isAuth && (<Link to="/cart" className={styles.buttonStyle}><IconButton color="inherit" size="large" >
            <Badge badgeContent={5} color="error">
              <ShoppingBagIcon />
            </Badge>
          </IconButton> </Link>)}
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
