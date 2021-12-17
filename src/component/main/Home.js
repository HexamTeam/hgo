import './Home.css';
import search from '../img/search-icon.png';
import { Input, TextField } from '@mui/material';

const Home = () => {

    return(
    <div>
        <div className="rcorners1">
            <img src={search} alt="Avatar" className='sh'></img>
            <TextField 
            label="Location"
            />
            {/* <label className='textsh'>Location</label> */}
            {/* <input type="text" placeholder="Search.." name="search"></input> */}
            
            
        </div>
    </div>);
}

export default Home