import { showLog } from "../../UI/Methods/LogMessages.js"
import UI from "../../UI/UIObjectsList.js"
import GameListObjectsInGM from "../../assets/GameListObjects.js"
import { Game } from "../canvasSettings.js"
export const sendMessage = (connection) => {

    UI.Inputs.sendMessage.addEventListener('submit', (e) => {
        e.preventDefault()
        const message = e.target.elements.messages.value

        if (message) {
            connection.emit('chatMessage', { message, id: connection.id })
            e.target.elements.messages.value = ''
        }
    })

}

export const receiveMessage = (connection) => {
    connection.on('chatMessage', ({ message, id }) => {
        const name = GameListObjectsInGM[id].name
        showLog(`${name}: ${message}`)
    })
}