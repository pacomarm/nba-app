import { players } from "../data/players";

export const getPlayersByTeam = (team) => {
    const validTeams = [ 'Los Angeles Lakers', 'Chicago Bulls'];
    if(!validTeams.includes(team)){
        throw new Error(`Team "${team}" was not found!`);
    }
    return players.filter(e=> e.team === team);
}