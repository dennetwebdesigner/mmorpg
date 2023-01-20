import { enabledShowLog, showLog } from "../../UI/Methods/LogMessages.js"
import { generate_all_player } from "../../assets/GameListObjects.js"
import { removeLoginElements } from "../../UI/Methods/LoginPlayer.js"

export const _receive_setup = (connection) => {
    connection.on('registered_in_server', (data) => {
        removeLoginElements()
        enabledShowLog()
        showLog(data.message)
        generate_all_player(data.setup)
    })
}