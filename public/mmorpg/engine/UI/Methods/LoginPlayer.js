import UI from '../UIObjectsList.js'
import { requestServer } from '../../server/connection.js'
import { Game } from '../../Core/canvasSettings.js'
export const loginPlayer = (connection, request) => {
    const name = UI.Inputs.NamePlayer
    if (!name.value) {
        return null
    }
    requestServer(connection, request, { name: name.value })
}

export const removeLoginElements = () => {
    Game.scene.current = 'phase001'
    UI.Inputs.NamePlayer.remove()
    UI.Inputs.passwordPlayer.remove()
}