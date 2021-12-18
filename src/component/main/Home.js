import './Home.css';
import search from '../img/search-icon.png';
import TextField from '@mui/material/TextField';
import beach from '../img/beach.jpg';

const Home = () => {

    return(
    <div >
        <img src={beach} alt="Avatar" className='bgimg'></img>
        <center>
        <div className="rcorners1" >  
            <div className='row'>   
                <div className='block'>   
                    <TextField
                    label="Location"
                    />
                </div>  
                
                <div className='vline'>
                    <div className='vl'></div>
                </div>
                <div className='checkin'>
                    <table>
                        <tbody>
                        <tr className='tcolor'>Check in</tr>
                        <tr>Dec 18</tr>
                        </tbody>
                    </table>
                </div>
                <div className='vline'>
                    <div className='vl'></div>
                </div>
                <div className='checkin'>
                    <table>
                        <tbody>
                        <tr className='tcolor'>Check out</tr>
                        <tr>Dec 18</tr>
                        </tbody>
                    </table>
                </div>
                <div className='vline'>
                    <div className='vl'></div>
                </div>
                <div className='checkin'>
                    <table>
                        <tbody>
                        <tr className='tcolor'>Guest room</tr>
                        <tr>Dec 18</tr>
                        </tbody>
                    </table>

                </div>
                <div className='sh2'>
                    <img src={search} alt="Avatar" className='sh'></img>
                </div>
            </div> 
            
       
        </div>
        </center>
        
        
    </div>);
}

export default Home