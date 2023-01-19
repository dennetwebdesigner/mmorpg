import { Socket } from 'socket.io'
import { remove_player } from '../../core/Players/RemovePlayer/RemovePlayer'
import { sendMe, sendWorld } from '../../core/helper/Server/connection'

export const disconnect_player = async (connection: Socket) => {
  const player = await remove_player(connection.id)
  sendMe(connection, '_player_disconnect', { message: 'você foi desconectado' })
  sendWorld(connection, '_player_disconnect', {
    message: `${player.name} foi desconectado`,
    player,
  })
}
