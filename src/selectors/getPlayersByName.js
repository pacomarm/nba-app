import { players } from "../data/players"

export const getPlayersByName = (name = '') => {
    if(!name){
        return []
    }
    name = name.toLocaleLowerCase();
    return players.filter(e => e.name.toLocaleLowerCase().includes(name));
}