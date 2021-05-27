import React from 'react'
import { PlayerList } from '../players/PlayerList'

export const BullsScreen = () => {
    return (
        <div>
            <h1>Bulls</h1>
            <hr />
            <PlayerList team="Chicago Bulls"/>
        </div>
    )
}
