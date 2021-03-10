import React from 'react';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const { strTeam, strTeamBadge, idTeam, strSport } = props.team;
    return (
        
            <div className="col-lg-4 col-md-6 col-sm-12 pt-5 d-flex justify-content-around ">
                <div className="card text-center pt-4" style={{width:'18rem',height:'18rem'}}>
                <img className="text-center" style={{ height: '100px', width: '100px',marginLeft:'30%' }} src={strTeamBadge} alt="" />
                <h2>{strTeam}</h2>
                <p>Sports type: {strSport}</p>
                <Link to={`/team/${idTeam}`}><button className="btn btn-success">Explore</button></Link>
                </div>

                

            </div>
        
    );
};

export default Team;