import React from 'react'
import { PlayerList } from '../players/PlayerList'

export const LAScreen = () => {
    return (
        <div>
            <h1>Los Angeles Lakers</h1>
            <hr />
            <PlayerList team="Los Angeles Lakers"/>
        </div>
    )
}
