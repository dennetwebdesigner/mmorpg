import { sendMe, sendWorld } from './../../core/helper/Server/connection'
import { Socket } from 'socket.io'

export const receiveMessage = (connection: Socket) => {
  connection.on('chatMessage', ({ message, id }) => {
    console.log(message, ' - ', id)
    sendMe(connection, 'chatMessage', { message, id })
    sendWorld(connection, 'chatMessage', { message, id })
  })
}
