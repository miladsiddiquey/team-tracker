import React from 'react';
import banner from '../../images/index.jpg';

const Header = () => {
    const headerStyle={
        height:'250px',
        width:'auto',
        backgroundImage: `url(${banner })`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        fontSize:'60px',
        color:'#d35400'
        
        
    }
    return (
        <div>
            <h1 style={headerStyle} className="jumbotron text-center fw-bold">Team Tracker</h1>
        </div>
    );
};

export default Header;