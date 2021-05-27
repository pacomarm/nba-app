import { players } from "../data/players";

export const getPlayerById = (id) => {
    return players.find(e=> e.id === id);
}