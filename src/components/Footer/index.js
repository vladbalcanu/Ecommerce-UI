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
import './index.css'

export default function Footer() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const cartCount = useSelector(selectCartCount)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState('')
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

  return (
    <footer>
        <p class="copy-right"><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/icons/copy-right-img_1x.png" alt="copy right image" /> 2017 all right recived </p>
        <p>privacy policy</p>
        <p>license</p>
      </footer>
  )
}
