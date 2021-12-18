import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    return(
        <div>
        <button>HotelGo</button>
            <button>Become a hotelier</button>
            
            
            <IconButton color="inherit">
            <LanguageIcon fontSize="large" />
            </IconButton>
           
            <IconButton color="inherit">
            <MenuIcon fontSize="large" />
            <Menu> 
            <MenuItem>rt</MenuItem>
            </Menu>
          
            {/* <MenuIcon>bh</MenuIcon> */}
            <PersonOutlineIcon fontSize="large" />

            
            </IconButton>

            </div>
    )
}

export default Header