import './Home.css';
import search from '../img/search-icon.png'
import TextField from '@mui/material/TextField';
const Home = () => {

    return(
    <div>
        <div className="rcorners1">
            
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