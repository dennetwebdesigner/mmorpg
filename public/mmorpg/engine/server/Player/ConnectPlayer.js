import UI from "../../UI/UIObjectsList.js"
import { _receive_setup } from "../../multiplayer/Player/AddPlayer.js"
import { _update_server } from "../../multiplayer/Player/UpdatePlayer.js"
import { _moviment_player } from "../../multiplayer/Player/ActionsPlayer.js"
export const _connection_player_request = (connection) => {
    _receive_setup(connection)
    _update_server(connection)
    _moviment_player(connection)

}