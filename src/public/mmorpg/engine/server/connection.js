import { Game_start } from '../Core/GAME.js'
import ConnectionsList from './index.js'

export const userSettings = { id: null }

export const game_connection = (socket) => {
    socket.on('getUserIDServer', (data) => {
        userSettings.id = data.id
    })

    const game = new Game_start(socket)
    game.init()

    socket.on('test', (data) => {
        console.log(data.world)
    })

    ConnectionsList.forEach(itemsConnection => {
        itemsConnection(socket)
    })
}

export const requestServer = (connection, sign, data) => {
    connection.emit(sign, data)
}