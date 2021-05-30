import React, { useMemo } from 'react'
import { getPlayersByTeam } from '../../selectors/getPlayersByTeam'
import { PlayerCard } from './PlayerCard';

export const PlayerList = ({team}) => {

    const players = useMemo(() => getPlayersByTeam(team), [team])

    return (
        <div className="card-columns animate__animated animate__fadeIn">
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
