import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faClock, faFlag, faFutbol, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import male from '../../images/male.png'
import female from '../../images/female.png'

const TeamDetails = () => {
    const { teamId } = useParams()
    const [teamDetail, setTeamDetail] = useState({})
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]))
    }, [teamId])
    const { strTeam, strStadiumThumb, strTeamBadge, intFormedYear, strCountry, strGender, strStadiumDescription, strSport,strYoutube,strFacebook,strTwitter } = teamDetail;
    const imgStyle = {
        height: '400px',
        width: 'auto',
        backgroundImage: `url(${strStadiumThumb})`,
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '.8'
        
    }
    const detailStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: '30px',
        backgroundColor: 'green',
        padding: '20px',
        borderRadius: '10px',
        color: 'white'
    }
    const socialStyle={
        
        fontSize:'50px',
        textAlign:'center',
       
    }
    return (

        <div style={{backgroundColor:'#0A071F'}}>
            <div style={imgStyle}>
                <img style={{ height: '100px', width: '100px', marginTop: '10%' }} src={strTeamBadge} alt="" />
            </div>
            <div className="container">
                <div style={detailStyle}>
                    <div>
                        <h1> {strTeam}</h1>
                        <h4> <FontAwesomeIcon icon={faClock} /> Founded: {intFormedYear}</h4>
                        <h4><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h4>
                        <h4><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender}</h4>

                    </div>
                    <div>
                        {
                            ( strGender  === "female") ? <img className="img-fluid" src={female} width="350" alt="" /> : <img className="img-fluid" src={male} width="350" alt="" />
                        }
                    </div>
                </div>
                <br />
                <p className="text-light">{strStadiumDescription}</p>
                <br />

                <div style={socialStyle}>
                    <a style={{color:'1576b1',padding:'10px'}} href={`http://${strTwitter}`}><FontAwesomeIcon icon={faTwitter} /></a>

                    <a style={{color:'#2b416f',padding:'10px'}} href={`http://${strFacebook}`}><FontAwesomeIcon icon={faFacebook} /></a>

                    <a style={{color:'red',padding:'10px'}} href={`http://${strYoutube}`}><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>

        </div>
    );
};

export default TeamDetails;