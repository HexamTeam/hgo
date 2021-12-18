import './Home.css';
import search from '../img/search-icon.png';
import TextField from '@mui/material/TextField';
import beach from '../img/CoverImg.jpg';



const Home = () => {


    return(
    <div >

      
        {/* <img src={beach} alt="Avatar" className='bgimg'/> */}
        
        
        <center>
            <div className="rcorners" >
                <div className='row1'>
                    <div className='block1'>   
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
                            <div className='vl'>
                        </div>
                    </div>
                    <div className='checkin'>
                        <table>
                            <tbody>
                            <tr className='tcolor'>Check out</tr>
                            <tr>Dec 19</tr>
                        </tbody>
                    </table>
                    </div>
                    <div className='vline'>
                        <div className='vl'>
                    </div>
                    </div>
                    <div className='checkin'>
                        <table>
                            <tbody>
                                <tr className='tcolor'>Guest room</tr>
                                <tr>2 Audalt and 1 room </tr>
                            </tbody>
                        </table>
                        


                    </div>
                    <div className='sh2'>
                        <img src={search} alt="Avatar" className='sh'></img>
                        </div>
                </div>
                
            </div>

            
            
            </center>
                  
    </div>
    );
}



export default Home