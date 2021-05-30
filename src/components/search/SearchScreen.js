import React from 'react'
import { players } from '../../data/players'
import { useForm } from '../../hooks/useForm';
import { PlayerCard } from '../players/PlayerCard';

export const SearchScreen = () => {
    const playersFiltered = players;
    
    const [values, handleInputChange, reset] = useForm({text: ''});

    const {text} = values;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(text);
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
