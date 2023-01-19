import { PlayerDTO } from '../../models/Player/PlayerDTO'
import { remove } from '../../../servers/Auth'

export const remove_player = async (id: string): Promise<PlayerDTO> => {
  const player = (await remove(id)) as PlayerDTO
  return player
}
