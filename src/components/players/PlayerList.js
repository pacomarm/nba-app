import React from 'react'
import { getPlayersByTeam } from '../../selectors/getPlayersByTeam'
import { PlayerCard } from './PlayerCard';

export const PlayerList = ({team}) => {

    const players = getPlayersByTeam(team);

    return (
        <div className="card-columns">
           {
               players.map((e) => (
                   <PlayerCard 
                        key={e.id}
                        {...e}
                    >
                   </PlayerCard>
               ))
           } 
        </div>
    )
}
