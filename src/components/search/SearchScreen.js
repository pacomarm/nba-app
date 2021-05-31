import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { PlayerCard } from '../players/PlayerCard';
import { getPlayersByName } from '../../selectors/getPlayersByName';


export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    
    const [values, handleInputChange] = useForm({text: q});
    const {text} = values;

    const playersFiltered = useMemo(() => getPlayersByName(q), [q])
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${text}`);
    }

    return (
        <div>
            <h1>Search Screen</h1> 
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Find a player"
                            className="form-control"
                            autoComplete="off"
                            name="text"
                            value={text}
                            onChange={handleInputChange}
                        />
                        <button 
                            className="mt-3 btn btn-block btn-outline-primary"
                            style={{width: "30%"}}
                            // onClick={handleReturn}
                        >
                            Search
                        </button>
                    </form>
               </div>
               <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        !q && 
                        
                        <div className="alert alert-info">
                            Look for a player
                        </div>
                    }
                    {
                        (q && !playersFiltered.length) && 
                        
                        <div className="alert alert-warning">
                            No player was found
                        </div>
                    }
                    {
                        playersFiltered.map((player) => (
                            <PlayerCard
                                key={player.id}
                                {...player}
                            />
                        ))
                    }
               </div>
           </div>

        </div>
    )
}
