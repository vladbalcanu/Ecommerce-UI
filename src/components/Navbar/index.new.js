import * as React from 'react'
import {alpha, styled} from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginIcon from '@mui/icons-material/Login'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import {NavLink, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {selectIsAuth} from '../../store/auth/selectors'
import {logout} from '../../store/auth/thunks'
import {selectCartCount} from '../../store/cart/selectors'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import styles from './buttonStyles.module.css';
import { Link } from "react-router-dom";

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

export default function Navbar() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const cartCount = useSelector(selectCartCount)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState('')
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate()
  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const onSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchValue && searchValue.length >= 2) {
      navigate(`catalogue/search?search=${searchValue}`)
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };
  

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{marginTop: '40px'}}
    >
      {isAuth &&
      <div>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </div>
      }

    </Menu>
  )

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="sticky" color={'primary'}>
        <Toolbar>
          <NavLink to={'/'} style={{textDecoration: 'none', color: 'white'}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{display: {xs: 'none', sm: 'block'}}}
            >
              ECOMMERCE
            </Typography>
          </NavLink>

          <form onSubmit={handleSearch}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
                value={searchValue}
                onChange={onSearchChange}
              />
            </Search>
          </form>

          <Box sx={{flexGrow: 1}}/>
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>

            {isAuth && (<NavLink to="/cart" style={{textDecoration: 'none', color: 'white'}}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon/>
                </Badge>
              </IconButton>
            </NavLink>)}
            {!isAuth && (<div><IconButton color="inherit"
            size="large"
            onClick={handleClickOpen}
            type="button">
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
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
            </Dialog></div>)}

            {isAuth ?
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
              :
              <NavLink to="/signin" style={{textDecoration: 'none', color: 'white'}}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <LoginIcon/>
                </IconButton>
              </NavLink>
            }
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  )
}
