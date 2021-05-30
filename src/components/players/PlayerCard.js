import React from 'react'
import { Link } from 'react-router-dom'

export const PlayerCard = ({id, name, team, nickname, debut, character}) => {
    return (
        <div className="card ms-3" style={{maxWidth:540}}>
            <div className="row no-gutters">
                <div className="col-md-6">
                    <img src={`./assets/${id}.${team === 'Chicago Bulls' ? 'png':'jpg'}`} className="card-img p-1" alt={name} />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{nickname}</p>
                        {
                            nickname !== character && <p className="card-text">{character}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{debut}</small>
                        </p>
                        <Link to={`./player/${id}`}> more...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
