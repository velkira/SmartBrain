import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain logo.png';

const Logo = () => {

    return (

        <div className='ma5 mt2'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> <img style={{ paddingTop: '25px' }} alt='logo' src={brain}></img> </div>
            </Tilt>
        </div>
    );
}

export default Logo;