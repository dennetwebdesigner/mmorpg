import { Socket } from 'socket.io'
import { create_player } from '../CreatePlayer/CreatePlayer'
import { store } from '../../../servers/Auth'
import { PlayerDTO } from '../../models/Player/PlayerDTO'

export const add_player = async (
  connection: Socket,
  dataClient: any
): Promise<PlayerDTO> => {
  const newPlayer = create_player({
    name: dataClient.name,
    id: connection.id,
    connection,
  })
  await store(newPlayer)
  return newPlayer
}
