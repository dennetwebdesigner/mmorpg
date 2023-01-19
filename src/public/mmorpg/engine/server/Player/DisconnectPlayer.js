import { showLog } from "../../UI/Methods/LogMessages.js"
import { GameListObjectsInGM } from '../../assets/GameListObjects.js'
export const _disconnection_server = (connection) => {
    connection.on('_player_disconnect', data => {
        showLog(data.message)
        delete GameListObjectsInGM[data.player.id]
    })
}