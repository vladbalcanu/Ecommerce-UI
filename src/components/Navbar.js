import { Link } from "react-router-dom";
import styles from './Components.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Badge } from "@mui/material";


export const Navbar = () => {
    return ( 
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
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
            <Link to="/" className={styles.textStyle}><Button color="inherit">Login</Button></Link>
            <Link to="/" className={styles.textStyle}><IconButton color ="inherit" size="large">
                <Badge badgeContent={5} color="error">
                <ShoppingBagIcon /> 
                </Badge>
            </IconButton> </Link>
            <Link to="/" className={styles.textStyle}><IconButton color ="inherit">
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