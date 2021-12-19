import styled from 'styled-components';
import './homemiddle.css';
import React from 'react';
import Im1 from '../img/Im1.jpg'

const Homemiddle = () => {

    return(<div className='he'>
        <center>
        
        <div className="middle-card">
            <center>
                <div className='rowV'>
                    <p className='hovp' >Web Checking</p>
                    <p className='hovp'>Grab and Go</p>
                    <p className='hovp'>Cleaning</p>
                    
                </div>
                <hr/>
                <div className='rowV'>
                    
                    <div><img src={Im1} alt="travel" className='Im1-s'/></div>
                    <div className='para-1'><h3>Grab and Go</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p></div>
                    
                </div>

            </center>

            
            
            

        </div>
        </center>
    </div>)
    
}

export default Homemiddle