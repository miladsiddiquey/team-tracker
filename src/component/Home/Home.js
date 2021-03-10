import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';

const Home = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams.slice(0, 15)))
    }, [])
    
    return (
        <div style={{backgroundColor:'#0A071F'}}>
            <Header></Header>
            <div className="container ">
                
                    <div className="row">
                        {
                            team.map(team => <Team key={team.idTeam} team={team}></Team>)
                        }
                    </div>
                
            </div>

        </div>
    );
};

export default Home;