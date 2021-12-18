import './Home.css';
import search from '../img/search-icon.png'
import TextField from '@mui/material/TextField';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Home = () => {


    return(
    <div >


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
        <div className="rcorners1" >
            
            <TextField
            label="Location"
            />
            <img src={search} alt="Avatar" className='sh'></img>
            
            {/* <label className='textsh'>Location</label> */}
            {/* <input type="text" placeholder="Search.." name="search"></input> */}
            
            
        </div>
    </div>);
}

export default Home