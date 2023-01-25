import Player from "./player.js";

export const GameListObjectsInGM = {}

export const set_nodes_in_game = (player) => {
    GameListObjectsInGM[player.id] = player
}

export const clear_nodes_game = () => {
    for (let i = 0; i < GameListObjectsInGM.length; i++) {
        delete GameListObjectsInGM[i];
    }
}

export const generate_player = (data) => {
    const player = new Player(data)
    set_nodes_in_game(player)
}

export const generate_all_player = (data) => {
    clear_nodes_game()
    Object.keys(data).forEach(key => {
        generate_player(data[key])
    });
}

export default GameListObjectsInGM
