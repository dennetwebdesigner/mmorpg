import { GameListObjectsInGM } from '../../assets/GameListObjects.js'

export const _moviment_player = (connection) => {
    connection.on("_walk_stop", ({ id, direction }) => {
        GameListObjectsInGM[id].direction.walk = direction.walk
    })
    connection.on("_moviment_player", ({ id, position, direction }) => {
        GameListObjectsInGM[id].position = position
        GameListObjectsInGM[id].direction = direction
    })
}