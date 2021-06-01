import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { playersImgs } from '../../helpers/playersImgs';
import { getPlayerById } from '../../selectors/getPlayerById';

export const PlayerScreen = ({history}) => {

    const {playerId} = useParams();
    const player = useMemo(() => getPlayerById(playerId), [playerId]);

    if(!player){
        return <Redirect to="/"/>
    }

    const { name, team, nickname, debut, character} = player;

    const handleReturn = () => {
        history.length < 3 ? history.push('/') : history.goBack();
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ playersImgs(`./${ playerId }.${team === 'Chicago Bulls' ? 'png':'jpg'}`).default } 
                    alt={name}
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                />
            </div>
            <div className="col-8">
                <h3>{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Nickname:</b> {nickname}</li>
                    <li className="list-group-item"><b>Team:</b> {team}</li>
                    <li className="list-group-item"><b>Debut:</b> {debut}</li>
                </ul>
                <hr />
                <h5 className="mt-2 mb-3">NBA Player ID: </h5>
                <p>{character}</p>
                <button 
                    className="btn btn-outline-info" 
                    style={{width: "20%"}}
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
