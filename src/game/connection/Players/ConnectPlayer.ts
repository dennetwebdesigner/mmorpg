import { add_player } from '../../core/Players/AddPlayer/AddPlayer'
import {
  receiveClient,
  sendMe,
  sendWorld,
} from '../../core/helper/Server/connection'
import { findAllPlayer } from '../../servers/Auth'

export const register_new_player = async (connection: any): Promise<any> => {
  receiveClient(connection, 'register_new_player', async (dataClient: any) => {
    const player = await add_player(connection, dataClient)
    sendMe(connection, 'registered_in_server', {
      setup: findAllPlayer(),
      message: ` <span style='color:red;font-weight=bolder'>${player.name}</span>  você se conectou ao jogo`,
    })
    sendWorld(connection, '_logged_new_player', {
      message: `${player.name} conectou-se ao jogo`,
      change: player,
    })
  })
}
