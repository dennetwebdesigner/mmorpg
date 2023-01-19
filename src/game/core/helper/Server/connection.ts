import { findAllPlayer } from './../../../servers/Auth'
import { Server } from 'http'
import { connectServer } from '../../../connection/ConnectServer'
import { disconnectServer } from '../../../connection/DisconnectServer'
import socketio, { Socket } from 'socket.io'

export const firstClient: {
  socket: null | Socket
  id: string
} = {
  socket: null,
  id: '',
}

export const sendServer = (
  connection: socketio.Socket,
  sign: string,
  data: any
): void => {
  connection.emit(sign, data)
  connection.broadcast.emit(sign, data)
}

export const sendMe = (
  connection: socketio.Socket,
  sign: string,
  data: any
): void => {
  connection.emit(sign, data)
}

export const sendWorld = async (
  connection: socketio.Socket,
  sign: string,
  data: any
): Promise<void> => {
  connection.broadcast.emit(sign, data)
}

export const receiveClient = async (
  socket: socketio.Socket,
  sign: string,
  callback: any
) => {
  socket.on(sign, async (dataClient) => {
    await callback(dataClient)
  })
}

const _player__disconnected = (connection: socketio.Socket) => {
  connection.on('disconnect', () => {
    disconnectServer.forEach((itemConnected) => {
      itemConnected(connection)
    })
  })
}

export const serverSocket = (server: Server) => {
  const io = new socketio.Server(server, {
    cors: {
      origin: '*',
    },
  })

  io.on('connection', (socket) => {
    if (!firstClient.socket && !firstClient.id) {
      firstClient.id = socket.id
      firstClient.socket = socket
    }

    connectServer.forEach((itemConnected) => {
      itemConnected(socket)
    })

    _player__disconnected(socket)
  })
  return io
}
