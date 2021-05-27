import React from 'react'
import { getPlayersByTeam } from '../../selectors/getPlayersByTeam'

export const PlayerList = ({team}) => {

    const players = getPlayersByTeam(team);

    return (
        <ul>
           {
               players.map((e) => (
                   <li key={e.id}>
                       {e.name}
                   </li>
               ))
           } 
        </ul>
    )
}
