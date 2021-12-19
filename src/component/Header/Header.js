import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import React from "react";
import './Header.css';
import beach from '../img/CoverImg.jpg'
import Responsive from '../AdvancedComponent/Responsive'
import Home from '../main/Home';


const Header = () => {

  const { width } = Responsive();

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
        <div>
          {width > 10 && (
        <div  className='body'>
          
          <nav class="navbar navbar-expand-sm" >
          <div class="container-fluid">
          <div class="d-flex">
            {/* <Button  class="btn btn-outline-success me-2" > */}
              <div className='para1'>
              <h3>Hotel</h3> <h3 className='para'>Go</h3>
              </div>
              
              {/* </Button> */}
                        
            <div style={{paddingLeft:"52em",
                         position:"fixed"}}>
            <Button class="btn btn-outline-success me-4">Become a hotelier</Button>
            <IconButton color="inherit">
            <LanguageIcon fontSize="large" />
            </IconButton>
              
            <Button
               
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                class="btn1 btn-secondary pull-right btn-sm"
                className='btn1'
            //     style={{position:"fixed"}}
             >
                
                <IconButton color="inherit"  >
                    <MenuIcon fontSize="small"/>
                    <PersonOutlineIcon fontSize="small" /> 
                    </IconButton>
            </Button>
             
            
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>Log In</MenuItem><br/>
                <MenuItem onClick={handleClose}>Register</MenuItem>
                
            </Menu>
            </div>  
            </div>
            </div> 
          </nav> 
          <div style={{paddingTop:"80px"}}>    
          <Home />
          </div>
            </div>
            )}
            
            </div>

            
    )
}

export default Header