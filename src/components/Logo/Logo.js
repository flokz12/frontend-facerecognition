import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className='br2 shadow-2' style={{ height: '120px', width: '120px' , backgroundColor: 'rgb(238,174,202)' }}>
                <div>
                    <img style={{paddingTop: '10px'}} alt='logo' src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;