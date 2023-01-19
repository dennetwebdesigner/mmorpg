import { generate_player, GameListObjectsInGM } from "../../assets/GameListObjects.js"
import { showLog } from "../../UI/Methods/LogMessages.js"
import { setAudio } from "../../Core/Audio/createAudio.js"
export const _update_server = (connection) => {
    connection.on('_logged_new_player', (data) => {
        showLog(data.message)
        generate_player(data.change)
        setAudio({ remove: true })
    })
}